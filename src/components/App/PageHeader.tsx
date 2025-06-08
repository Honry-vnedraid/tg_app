import { Flex, type FlexProps } from "@mantine/core";


const PageHeader = (props: FlexProps) => {
    return (
        <Flex
            direction={'row'}
            justify={'space-between'}
            w='100%'
            p='12px 0'
            {...props}
        />
    )
}

export default PageHeader;