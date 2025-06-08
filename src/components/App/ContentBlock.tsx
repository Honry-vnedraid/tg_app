import { Flex, type FlexProps } from "@mantine/core"

type ContentBlockProps = FlexProps & {
    variant: 'outlined' | 'shadow' | 'transparent'
}

const ContentBlock = ({ variant, ...props }: ContentBlockProps) => {
    if (variant === 'outlined') return (
        <Flex
            align={'start'}
            justify={'center'}
            direction={'column'}
            p={16}
            gap={16}
            bg='white'
            {...props}

            style={{
                borderRadius: 24,
                border: '1px solid #0010241F',
                overflow: 'hidden',
                ...props.style
            }}
        />
    )

    if (variant === 'shadow') return (
        <Flex
            align={'start'}
            justify={'center'}
            direction={'column'}
            p={16}
            gap={16}
            bg='white'
            style={{
                borderRadius: 24,
                boxShadow: '0px 4px 24px 0 rgba(36,74,127,.09)',
                overflow: 'hidden',
                ...props.style
            }}
            {...props}
        />
    )

    if (variant === 'transparent') return (
        <Flex
            align={'start'}
            justify={'center'}
            direction={'column'}
            p={16}
            gap={16}
            bg='transparent'
            style={{
                overflow: 'hidden',
                ...props.style
            }}
            {...props}
        />
    )

    return null;
}

export default ContentBlock