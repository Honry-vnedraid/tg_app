import { MantineProvider, Stack } from '@mantine/core'
import '@mantine/core/styles.css';
import Header from './components/Template/Header'
import NewsPage from './components/News/NewsPage'
import NavBar from './components/Template/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router'
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

                    <div style={{height: '120px', width: '100%', backgroundColor: '#F6F7F8'}}></div>
                </Stack>
        </MantineProvider>
    )
}

export default App
