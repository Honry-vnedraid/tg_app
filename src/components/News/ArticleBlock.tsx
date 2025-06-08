import { Group, Avatar, Stack, Divider, Text, Collapse, ActionIcon } from "@mantine/core"
import ContentBlock from "../App/ContentBlock"
import { useState } from "react"
import PriceChart from "./PriceChart"
import TickersPills from "./TickersPills"
import { IoOpenOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { PiTelegramLogo } from "react-icons/pi"

export type Article = {
    title: string,
    text: string,
    time: string,
    source: string,
    url: string,
    tickers: string[],
    predictions: number[],
    explanations: string[]
}

const ArticleBlock = (data: Article) => {

    const [opened, setOpened] = useState(false)
    const [focusedUID, setFocusedUID] = useState('')

    return (
        <ContentBlock gap={0} style={{ overflow: 'hidden' }} p={0} variant="outlined">
            <Stack gap={16} p={20} w='100%'>
                <Group w='100%' wrap="nowrap" justify="space-between">
                    <Group w='100%' gap={16}>
                        <Avatar size={32}>
                            {data.url.includes('t.me/') ? 
                                <PiTelegramLogo size={20} />
                            :null
                        }
                        </Avatar>
                        <Stack gap={0} h={32} justify="space-between">
                            <Text fz={15} fw={600} lh={1}>
                                {data.source}
                            </Text>
                            <Text fz={13} lh={1} opacity={.54}>
                                {new Date(data.time).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}
                            </Text>
                        </Stack>
                    </Group>
                    <Link target="_blank" to={data.url}>
                        <ActionIcon c={'#0000008A'} variant="transparent">
                            <IoOpenOutline size={16} />
                        </ActionIcon>
                    </Link>
                </Group>


                <Stack gap={8}>
                    <Text fz={20} lh={'24px'} fw={700} c={'#000000CC'}>
                        {data.title}
                    </Text>

                    <Text
                        fz={15}
                        c={'#000000CC'}
                        lh={'18px'}
                        lineClamp={4}

                    >
                        {data.text}
                    </Text>
                </Stack>

                <Divider w='100%' />

                <TickersPills tickers={data.tickers} predictions={data.predictions} opened={opened} setOpened={setOpened} focusedUID={focusedUID} setFocusedUID={setFocusedUID} />

            </Stack>
            <Collapse in={opened} w='100%'>
                <div style={{ width: '100%', height: '150px' }}>
                    <PriceChart instrumentId={focusedUID} articleTime={data.time} />
                </div>
            </Collapse>

        </ContentBlock>

    )
}

export default ArticleBlock