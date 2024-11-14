import { Button, Center, Container, Group } from "@mantine/core";
import { IconEdit, IconPlayerPlay } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function Top() {
  return (
    <>
      <Container>
        <Center h="100svh">
          <Group w="100%" justify="center">
            <Button variant="rich" size="lg" leftSection={<IconPlayerPlay />}>
              プレゼンテーションを開始
            </Button>
            <Link to="/edit">
              <Button
                component="span"
                variant="secondary"
                size="lg"
                leftSection={<IconEdit />}
              >
                スライドを編集
              </Button>
            </Link>
          </Group>
        </Center>
      </Container>
    </>
  );
}
