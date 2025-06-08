import { Avatar, Divider, Group, Image, Pill, Stack, Text } from "@mantine/core";
import PageTitle from "../App/PageTitle";
import ContentBlock from "../App/ContentBlock";
import Filters from "./Filters";
import { useContext } from "react";
import ArticleBlock from "./ArticleBlock";


const newsData = [
    {
        Title: "Яндекс и Т-банк объявили о планах слияния.",
        Text: "Яндекс и Т-банк заявили о намерии слияния в одну компанию.",
        Time: "2025-06-07T07:05:00Z",
        Source: "РИА Новости",
        URL: "https://ria.ru/20250607/spacex-starship-test-1850000000.html",
        Tickers: ["YDEX"],
        Predictions: [0.5]
    }
]

const NewsPage = () => {

    return (
        <>
            <PageTitle>Новости</PageTitle>
            <Stack w='100%' gap={20}>
                <Filters />
                {
                    newsData.map((data) => {
                        return (
                            <ArticleBlock {...data} />
                        )
                    })
                }
            </Stack>
        </>
    )
}

export default NewsPage;