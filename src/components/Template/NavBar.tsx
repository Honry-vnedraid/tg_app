import { Group, Stack, Text, UnstyledButton } from "@mantine/core"
import ContentBlock from "../App/ContentBlock"
import { useNavigate } from "react-router"
import { HiOutlinePresentationChartLine } from "react-icons/hi2"
import { HiOutlineNewspaper } from "react-icons/hi2"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('news');
    useEffect(() => {
        const currentPath = window.location.pathname.split('/')[1];
        setActiveTab(currentPath);
    })

    const navigate = useNavigate();

    return (

        <>
            <Group w='100%' justify="center" left={0} pos={'fixed'} bottom={32} >
                <ContentBlock gap={0} direction={'row'} variant="shadow">
                    <UnstyledButton onClick={() => navigate('/forecast', { viewTransition: true })}>
                    <Stack gap={0} p={'0 16px'} align="center" justify="space-between" h={40}>
                        <HiOutlinePresentationChartLine size={24} color={activeTab === 'forecast' ? '#000000' : '#9299a2'}  />
                        <Text
                            fz={13}
                            lh={'16px'}
                            c={activeTab === 'forecast' ? '#000000' : '#9299a2'}
                        >
                            Сводка
                        </Text>
                    </Stack>
                    </UnstyledButton>


                    <UnstyledButton onClick={() => navigate('/news', { viewTransition: true })}>
                    <Stack gap={0} p={'0 16px'} align="center" justify="space-between" h={40}>
                        <HiOutlineNewspaper size={24}  color={activeTab === 'news' || activeTab === '' ? '#000000' : '#9299a2'}/>
                        <Text
                            fz={13}
                            lh={'16px'}
                            c={activeTab === 'news' || activeTab === '' ? '#000000' : '#9299a2'}
                        >
                            Новости
                        </Text>
                    </Stack>
                    </UnstyledButton>
                </ContentBlock>
            </Group>
        </>




    )
}

export default NavBar