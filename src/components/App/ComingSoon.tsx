import { Dialog, Text } from '@mantine/core';



function ComingSoon(props: {opened: boolean, toggle: () => void, close: () => void}) {
  return (
    <>
      <Dialog opened={props.opened} withCloseButton onClose={props.close} size="lg" radius="md">
        <Text fz={13} lh='16px' c='#0000008A'>
            Coming soon
        </Text>
      </Dialog>
    </>
  );
}

export default ComingSoon;