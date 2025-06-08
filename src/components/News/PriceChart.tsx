import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';
import T_API, { type Candle } from '../../t_api/T_API';
import * as echarts from 'echarts';
import { Center, Skeleton, Text } from '@mantine/core';
const PriceChart = ({ instrumentId, articleTime }: { instrumentId: string, articleTime: string }) => {
    const [option, setOption] = useState({})
    const [minUnit, setMinUnit] = useState(0)
    const [maxUnit, setMaxUnit] = useState(0)
    const [candles, setCandles] = useState<Candle[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        (async () => {
            const candles = await T_API.getCandles(
                instrumentId,
                "CANDLE_INTERVAL_5_MIN",
                new Date(new Date(articleTime).getTime() - 3600 * 1000).toISOString(),
                new Date(new Date(articleTime).getTime() + 3600 * 1000).toISOString()
            );
            if (!candles) {
                return;
            }
            setCandles(candles);
            const units = candles.map((candle: Candle) => +candle.close.units);
            setMinUnit(Math.min(...units))
            setMaxUnit(Math.max(...units))
        })()
    }, [instrumentId, articleTime])

    useEffect(() => {
        if (!candles.length) return;
        setOption({
            color: +candles[0].close.units > +candles[candles.length - 1].close.units ? ['#ff8080'] : ['#80FFA5'],
            responsive: true,
            maintainAspectRatio: false,
            height: 150,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                valueFormatter: function (n: any) {
                    if ((maxUnit - minUnit) == 0) return +n
                    return ((+n - 1) * (maxUnit - minUnit) + minUnit).toFixed(3)
                }

            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: candles.map((candle: Candle) => candle.time)
                }
            ],
            grid: {
                left: '0',
                right: '0',
                bottom: '0',
                height: 150
            },
            yAxis: [
                {
                    show: false,
                    type: 'value',
                    axisPointer: {
                        label: {
                            formatter: function (n: any) {
                                if ((maxUnit - minUnit) == 0) return +n
                                return ((+n.value - 1) * (maxUnit - minUnit) + minUnit).toFixed(3)
                            }
                        }
                    }
                }
            ],
            series: [
                {
                    responsive: true,
                    maintainAspectRatio: false,
                    height: '150px',
                    name: 'Line 1',
                    type: 'line',
                    stack: 'Total',

                    markLine: {
                        data: [
                            {
                                xAxis: articleTime,
                                lineStyle: {
                                    color: 'red',
                                    width: 2,
                                },
                            },
                        ],
                    },
                    //smooth: true,
                    lineStyle: {
                        width: 2
                    },
                    label: {
                        show: false
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, +candles[0].close.units > +candles[candles.length - 1].close.units ? [
                            {
                                offset: 0,
                                color: 'rgb(255, 128, 128)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(236, 1, 1)'
                            }
                        ] : [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 236, 87)'
                            }
                        ])
                    },
                    data: candles.map((candle: Candle) => {
                        if ((maxUnit - minUnit) == 0) return +candle.close.units;
                        return (+candle.close.units - minUnit) / (maxUnit - minUnit) + 1
                    }),

                }
            ]
        })
        setLoading(false)
    }, [minUnit, maxUnit, candles])

    return (
        <Skeleton visible={loading} style={{ width: '100%', height: '100%' }}>
            {
                candles.length ?
                    <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
                :
                    <Center h={'100%'}>
                        <Text fz={15} c='#0000008A' lh='18px'>
                            Нет данных
                        </Text>
                    </Center>
            }
            
        </Skeleton>

    )
}

export default PriceChart;