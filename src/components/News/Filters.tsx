import { Button, Collapse, Group, Stack, TextInput } from "@mantine/core"
import { useEffect, useState } from "react"
import { HiOutlineCalendar } from "react-icons/hi"
import { DatePicker } from '@mantine/dates';
import ComingSoon from "../App/ComingSoon";
import { useDisclosure } from "@mantine/hooks";

const Filters = () => {
    const [opened, setOpened] = useState(false);
    const [dateValue, setDateValue] = useState<[string | null, string | null]>([null, null])

    const [opened1, {toggle, close}] = useDisclosure();

    useEffect(() => {
        if (dateValue[0] || dateValue[1]) toggle();
    }, [dateValue[0], dateValue[1]])

    return (
        <Stack w='100%' align="center" mb={20}>
            <Group w='100%' gap={8} align="start" wrap="nowrap">
                <TextInput
                    fz={13}
                    lh={'16px'}
                    placeholder="Поиск"
                    w='calc(100% - 16px - 8px - 4px)'
                    radius={8}

                    styles={{
                        input: {
                        }
                    }}
                />
                <Button
                    radius={8}
                    h={36}
                    w={36}
                    variant="default"
                    p={0}
                    bg={dateValue[0] || dateValue[1] ? '#FFDD2D' : 'white'}
                    onClick={() => {setOpened(!opened)}}
                >
                    <HiOutlineCalendar size={16} />
                </Button>
            </Group>

            <Collapse in={opened}>
                <Stack w='100%'>
                    <DatePicker w='100%' type="range" value={dateValue} onChange={setDateValue} />
                </Stack>
            </Collapse>


            <ComingSoon opened={opened1} close={close} toggle={toggle} />
        </Stack>
    )
}

export default Filters