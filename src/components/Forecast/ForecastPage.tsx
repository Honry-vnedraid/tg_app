import { Avatar, Button, Group, Stack, Text } from "@mantine/core";
import PageTitle from "../App/PageTitle";
import ContentBlock from "../App/ContentBlock";
import NewsForecastBlock from "./NewsForecastBlock";
import ComingSoon from "../App/ComingSoon";
import { useDisclosure } from "@mantine/hooks";

const forecastData = [
    {
        name: 'Роснефть',
        image: 'https://yt3.googleusercontent.com/W5rITFbIV9I3DWeEl_6mIcETnxCdMq9d7rlHCm7uRuC3r2rdi6hZK1r2F8X1Id0rvMNRKckifRU=s900-c-k-c0x00ffffff-no-rj',
        change: 'Сильное падение'
    },
    {
        name: '$NABI',
        image: 'https://opis-cdn.tinkoffjournal.ru/mercury/out-pochemu-stavka-20.jpg',
        change: 'Слабое падение'
    },
    {
        name: '$LOBANOV',
        image: 'https://news.store.rambler.ru/img/7ee58b2440d59a9d462a876089a7fc06?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen',
        change: 'Сильный рост'
    },
    {
        name: 'ВНЕДРЕЙД',
        image: 'https://cdn.prod.website-files.com/680787b8a9b66dba59dce022/681390228f40cf537ee96dd9_ezgif-56f9e577fdbdf9.gif',
        change: 'Слабый рост'
    }
]

const ForecastPage = () => {
    const [opened, {toggle, close}] = useDisclosure();
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
                                                onClick={toggle}
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
                                                onClick={toggle}
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
            <ComingSoon opened={opened} close={close} toggle={toggle} />
        </>
    )

}

export default ForecastPage;