import { Button, Center, Container, Group } from "@mantine/core";
import { IconEdit, IconPlayerPlay } from "@tabler/icons-react";

export default function Top() {
  return (
    <>
      <Container>
        <Center h="100svh">
          <Group w="100%">
            <Button variant="rich" leftSection={<IconPlayerPlay />}>
              プレゼンテーションを開始
            </Button>
            <Button variant="secondary" leftSection={<IconEdit />}>
              プレゼン資料を編集
            </Button>
          </Group>
        </Center>
      </Container>
    </>
  );
}
