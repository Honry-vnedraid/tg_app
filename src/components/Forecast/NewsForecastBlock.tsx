import { Collapse, Divider, Skeleton, Stack, Text } from "@mantine/core";
import ContentBlock from "../App/ContentBlock";
import { useEffect, useState } from "react";
import TickersPills from "../News/TickersPills";
import PriceChart from "../News/PriceChart";
import apiInstance from "../../axiosConfig";

type newsForecastDataType = {
    text: string,
    tickers: string[],
    predictions: number[]
}

const newsForecastDataEXAMPLE = {
    text: 'Акции Т-Банка и других айти гигантов России выросли в 2 раза после того как они выдали команде Honry офферы на стажировку, а акции западных компаний резко упали!',
    tickers: [],
    predictions: []
}

const NewsForecastBlock = () => {
    const [loading, setLoading] = useState(true);
    const [newsForecastData, setNewsForecastData] = useState<newsForecastDataType>(newsForecastDataEXAMPLE);

    const [opened, setOpened] = useState(false);
    const [focusedUID, setFocusedUID] = useState('');



    useEffect(() => {
        setLoading(true);
        apiInstance.get(`/summary?startDate=${new Date((Date.now() - 1 * 24 * 60 * 60 * 1000)).toISOString()}&endDate=${new Date(Date.now()).toISOString()}`).then((response) => {
            console.log(response.data)
            setNewsForecastData(response.data);
            setLoading(false);
        })
    }, [])


    return (
        <ContentBlock variant="shadow" p={0}>
            <Stack gap={0} p={20} w='100%'>
            <Text fz={20} lh={'24px'} fw={700} mb={16}>
                Сводка новостей
            </Text>


            <Stack gap={5} w='100%'>

                <Skeleton display={loading ? 'block' : 'none'} w='40%' h='15px' />
                <Skeleton display={loading ? 'block' : 'none'} w='100%' h='15px' />
                <Skeleton display={loading ? 'block' : 'none'} w='100%' h='15px' />
                <Skeleton display={loading ? 'block' : 'none'} w='100%' h='15px' />
                <Skeleton display={loading ? 'block' : 'none'} w='70%' h='15px' />
                <Text display={!loading ? 'block' : 'none'} fz={13} lh={'16px'} c='#0000008A'>
                    GPT-Generated
                </Text>
                <Text display={!loading ? 'block' : 'none'} fz={15} lh={'18px'}>
                    {newsForecastData.text}
                </Text>
            </Stack>

            <Divider w='100%' my={16} />

            <TickersPills tickers={newsForecastData.tickers} predictions={newsForecastData.predictions} opened={opened} setOpened={setOpened} focusedUID={focusedUID} setFocusedUID={setFocusedUID} />
            </Stack>
            <Collapse in={opened} w='100%'>
                <div style={{width: '100%', height: '150px'}}>
                    <PriceChart instrumentId={focusedUID} articleTime={new Date().toISOString()} />
                </div>
            </Collapse>


        </ContentBlock>
    )
}

export default NewsForecastBlock;