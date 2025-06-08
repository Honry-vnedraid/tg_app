import { Stack } from "@mantine/core";
import PageTitle from "../App/PageTitle";
import Filters from "./Filters";
import ArticleBlock, { type Article } from "./ArticleBlock";
import { useEffect, useState } from "react";
import apiInstance from "../../axiosConfig";

/* 
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
*/ 
const NewsPage = () => {

    const [newsData, setNewsData] = useState<Article[]>([])

    useEffect(() => {
        apiInstance.get('/news?offset=0&limit=200').then((response) => {
            console.log(response.data)
            console.log(response.data.map((data: any) => {
                return {
                    ...data,
                    tickers: data.tickers ? data.tickers.filter((ticker: string) => ticker.length > 2 && ticker.length < 6 && ticker.toUpperCase() === ticker ) : []
                }
            }))
            setNewsData(response.data.map((data: any) => {
                return {
                    ...data,
                    tickers: data.tickers ? data.tickers.filter((ticker: string) => ticker.length > 2 && ticker.length < 6 && ticker.toUpperCase() === ticker ) : []
                }
            }))
        }).catch((error) => {
            console.error(error)
        })
    }, [])

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