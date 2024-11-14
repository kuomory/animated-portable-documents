import {
  AppShell,
  Group,
  TextInput,
  Text,
  Button,
  Container,
  Stack,
} from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useCallback, useState } from "react";

export default function Edit() {
  const [fileName, setFileName] = useState(
    (window as any).myStore?.fileName ?? ""
  );
  const handleSave = useCallback(async () => {
    const myStore = { fileName: fileName };
    const htmlContent = document.documentElement.outerHTML;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    doc.body.innerHTML = `<div id="root"></div><script>window.myStore = ${JSON.stringify(
      myStore
    )}</script>`;
    const updatedHtmlContent = `<!DOCTYPE html>\n${doc.documentElement.outerHTML}`;

    const blob = new Blob([updatedHtmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName || "新しいプレゼンテーション"}.pbp.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }, [fileName]);

  return (
    <AppShell
      header={{ height: "4rem" }}
      navbar={{ width: "20%", breakpoint: "sm" }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text
              variant="gradient"
              gradient={{ from: "indigo", to: "grape", deg: 45 }}
              size="1.75rem"
              fw="normal"
            >
              Lu:Fu
            </Text>
          </Link>
          <Group>
            <TextInput
              value={fileName}
              onChange={(e) => {
                setFileName(e.target.value);
              }}
              placeholder="新しいプレゼンテーション"
              w="14rem"
            />
            <Button
              onClick={handleSave}
              leftSection={<IconDownload />}
              variant="rich"
            >
              ダウンロード
            </Button>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Container>
          <Stack>Main</Stack>
        </Container>
      </AppShell.Main>
      <AppShell.Navbar>スライド</AppShell.Navbar>
    </AppShell>
  );
}
