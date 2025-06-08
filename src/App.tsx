import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MantineProvider, Stack, Title } from '@mantine/core'
import ContentBlock from './components/App/ContentBlock'
import '@mantine/core/styles.css';
import Header from './components/Template/Header'
import PageHeader from './components/App/PageHeader'
import PageTitle from './components/App/PageTitle'
import NewsPage from './components/News/NewsPage'
import NavBar from './components/Template/NavBar'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import ForecastPage from './components/Forecast/ForecastPage'
import '@mantine/dates/styles.css';

function App() {
    return (
        <MantineProvider>
                <Stack w='100vw' p={'0 16px'} gap={0} bg='#F6F7F8'>
                    <Header />
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<NewsPage />} />
                            <Route path='/news' element={<NewsPage />} />
                            <Route path='/forecast' element={<ForecastPage />} />
                        </Routes>

                        <NavBar />
                    </BrowserRouter>

                    <div style={{height: '120px'}}></div>
                </Stack>
        </MantineProvider>
    )
}

export default App
