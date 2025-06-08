import { Avatar, Button, Group, Image, Stack, Text } from "@mantine/core";
import PageTitle from "../App/PageTitle";
import ContentBlock from "../App/ContentBlock";
import NewsForecastBlock from "./NewsForecastBlock";

const forecastData = [
    {
        name: 'Роснефть',
        image: 'https://opis-cdn.tinkoffjournal.ru/mercury/out-pochemu-stavka-20.jpg',
        change: 'Слабый рост'
    },
    {
        name: 'Роснефть',
        image: 'https://opis-cdn.tinkoffjournal.ru/mercury/out-pochemu-stavka-20.jpg',
        change: 'Слабое падение'
    },
    {
        name: 'Роснефть',
        image: 'https://opis-cdn.tinkoffjournal.ru/mercury/out-pochemu-stavka-20.jpg',
        change: 'Сильный рост'
    },
    {
        name: 'Роснефть',
        image: 'https://opis-cdn.tinkoffjournal.ru/mercury/out-pochemu-stavka-20.jpg',
        change: 'Сильное падение'
    }
]

const ForecastPage = () => {
    return (
        <>
            <PageTitle>Прогноз</PageTitle>
            <Stack w='100%' gap={20}>
                <NewsForecastBlock />
                <ContentBlock variant="shadow" gap={0} p={20}>
                    <Text fz={20} lh={'24px'} fw={700} mb={16}>
                        Брокерский счет
                    </Text>
                    {
                        forecastData.map((item, index) => (
                            <ContentBlock w='100%' key={index} direction={'row'} justify={'space-between'} variant="transparent" p={'12px 0'}>
                                <Group gap={16}>
                                    <Avatar
                                        src={item.image}
                                        size={48}
                                    />
                                    <Stack gap={0} h={32} justify="space-between">
                                        <Text fz={15} lh={1}>
                                            {item.name}
                                        </Text>
                                        <Text
                                            fz={13}
                                            c={item.change === 'Сильное падение' || item.change === 'Слабое падение' ? '#EB5757' : '#27AE60'}
                                            lh={1}
                                            fw={item.change === 'Сильное падение' || item.change === 'Сильный рост' ? 700 : 400}
                                        >
                                            {item.change}
                                        </Text>
                                    </Stack>
                                </Group>

                                {
                                        item.change === 'Сильное падение' || item.change === 'Слабое падение' ?
                                            
                                            <Button
                                                size='xs'
                                                h={32}
                                                bg='#244a7f0f'
                                                radius={16}
                                                p={'4px 8px'}
                                            >
                                                <Text
                                                    fz={13}
                                                    lh={'16px'}
                                                    c={'#126df7'}
                                                    p={'4px 2px'}
                                                >
                                                Продать
                                                </Text>
                                            </Button>
                                            :
                                            <Button
                                                size='xs'
                                                h={32}
                                                bg='#244a7f0f'
                                                radius={16}
                                                p={'4px 8px'}
                                            >
                                                <Text
                                                    fz={13}
                                                    lh={'16px'}
                                                    c={'#126df7'}
                                                    p={'4px 2px'}
                                                >
                                                Купить
                                                </Text>
                                            </Button>
                                    }
                            </ContentBlock>
                        ))
                    }
                </ContentBlock>
            </Stack>
        </>
    )

}

export default ForecastPage;