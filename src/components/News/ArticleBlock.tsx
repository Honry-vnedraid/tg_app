import { Group, Avatar, Stack, Divider, Pill, Text, Collapse } from "@mantine/core"
import type { data } from "react-router-dom"
import ContentBlock from "../App/ContentBlock"
import { useContext, useEffect, useState } from "react"
import { CandleInterval } from "tinkoff-sdk-grpc-js/dist/generated/marketdata"
import T_API from "../../t_api/T_API"
import { HiArrowDownLeft, HiArrowUpRight } from "react-icons/hi2"
import { FaArrowTrendDown, FaArrowTrendUp, FaArrowUpRightDots } from "react-icons/fa6"
import PriceChart from "./PriceChart"
import TickersPills from "./TickersPills"

type Article = {
    Title: string,
    Text: string,
    Time: string,
    Source: string,
    URL: string,
    Tickers: string[],
    Predictions: number[]
}

const ArticleBlock = (data: Article) => {

    const [opened, setOpened] = useState(false)
    const [focusedUID, setFocusedUID] = useState('')

    return (
        <ContentBlock gap={0} style={{overflow: 'hidden'}} p={0} variant="outlined">
            <Stack gap={16} p={20} w='100%'>
                <Group w='100%' gap={16}>
                    <Avatar size={32}></Avatar>
                    <Stack gap={0} h={32} justify="space-between">
                        <Text fz={15} fw={600} lh={1}>
                            {data.Source}
                        </Text>
                        <Text fz={13} lh={1} opacity={.54}>
                            {data.Time}
                        </Text>
                    </Stack>
                </Group>

                <Stack gap={8}>
                    <Text fz={20} lh={'24px'} fw={700} c={'#000000CC'}>
                        {data.Title}
                    </Text>

                    <Text
                        fz={15}
                        c={'#000000CC'}
                        lh={'18px'}
                        lineClamp={4}

                    >
                        {data.Text}
                    </Text>
                </Stack>

                <Divider w='100%' />

                <TickersPills tickers={data.Tickers} predictions={data.Predictions} opened={opened} setOpened={setOpened} focusedUID={focusedUID} setFocusedUID={setFocusedUID} />
                
            </Stack>
            <Collapse in={opened} w='100%'>
                <div style={{width: '100%', height: '150px'}}>
                    <PriceChart instrumentId={focusedUID} articleTime={data.Time} />
                </div>
            </Collapse>

        </ContentBlock>

    )
}

export default ArticleBlock