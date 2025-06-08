import { Pill, Group, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6"
import T_API from "../../t_api/T_API"

type TickersPillsProps = {
    tickers: string[],
    predictions: number[],
    opened: boolean,
    setOpened: (v: boolean) => void, 
    focusedUID: string,
    setFocusedUID: (v: string) => void
}

const TickersPills = (props: TickersPillsProps) => {
    const [opened, setOpened] = useState(props.opened);
    const [focusedUID, setFocusedUID] = useState(props.focusedUID);
    const [focusedTicker, setFocusedTicker] = useState('')

    useEffect(() => {
        props.setFocusedUID(focusedUID)
    }, [focusedUID])

    useEffect(() => {
        props.setOpened(opened)
    }, [opened])

    async function changeFocusedUID(ticker: string) {
        setFocusedUID("");
        const instrument = await T_API.getShare(ticker);
        if (instrument) {
            setFocusedUID(instrument.uid);
        }
    }

    function tickerClick(ticker: string) {
        if (ticker == focusedTicker) setOpened(!opened);  
        else if (!opened) setOpened(true);

        setFocusedTicker(ticker);
        changeFocusedUID(ticker);
    }

    return (
        <Group w='100%' justify="start" gap={8}>
            {
                props.tickers.map((ticker, index) => {
                    return (
                        <Pill onClick={() => { tickerClick(ticker) }} bg={props.predictions[index] > 0 ? 'green' : 'red'} style={focusedTicker == ticker && opened ? {transition: '.3s', boxShadow: '0 0 0 2px #FFDD2D', boxSizing: 'border-box', border: '1px solid white'} : {transition: '.3s'}}>
                            <Group gap={4} wrap='nowrap' h='100%'>
                                <Text lh={'12px'} fw={700} c='white' fz="10px">
                                    {ticker}
                                </Text>
                                {
                                    props.predictions[index] > 50 ?
                                        <FaArrowTrendUp size={12} color="white" />
                                        : props.predictions[index] > 0 ?
                                            <FaArrowTrendUp size={12} color="white" />
                                            : props.predictions[index] > -50 ?
                                                <FaArrowTrendDown size={12} color="white" />
                                                :
                                                <FaArrowTrendDown size={12} color="white" />
                                }
                            </Group>
                        </Pill>
                    )
                })
            }
        </Group >
    )
}

export default TickersPills;