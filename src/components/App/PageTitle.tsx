import { Title, type TitleProps } from "@mantine/core";

type PageTitleProps = TitleProps & {

}

const PageTitle = (props: PageTitleProps) => {
    return (
        <Title 
            order={1} 
            fz={30}
            c='#000000CC'
            fw={700}
            mb={12}
            {...props} 
        />
    )
}

export default PageTitle