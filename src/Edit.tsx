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
import { useCallback, useState } from "react";

// type ShowSaveFilePickerType = (options?: {
//   suggestedName?: string;
//   types?: Array<{
//     description?: string;
//     accept?: Record<string, string[]>;
//   }>;
//   excludeAcceptAllOption?: boolean;
// }) => Promise<FileSystemFileHandle>;
// type ShowOpenFilePickerType = (options?: {
//   multiple?: boolean;
//   excludeAcceptAllOption?: boolean;
//   types?: Array<{
//     description?: string;
//     accept?: Record<string, string[]>;
//   }>;
// }) => Promise<FileSystemFileHandle[]>;

// type WindowWithShowSaveFilePicker = Window &
//   typeof globalThis & {
//     showSaveFilePicker?: ShowSaveFilePickerType;
//     showOpenFilePicker?: ShowOpenFilePickerType;
//   };

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
    <AppShell header={{ height: "4rem" }}>
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Text
            variant="gradient"
            gradient={{ from: "indigo", to: "grape", deg: 45 }}
            size="1rem"
            lh="0.9rem"
            fw="normal"
          >
            <span
              style={{
                fontWeight: "bold",
                fontStyle: "normal",
                fontSize: "1.1rem",
              }}
            >
              P
            </span>
            ortable
            <br />
            <span
              style={{
                fontWeight: "bold",
                fontStyle: "normal",
                fontSize: "1.1rem",
              }}
            >
              B
            </span>
            rowser
            <br />
            <span
              style={{
                fontWeight: "bold",
                fontStyle: "normal",
                fontSize: "1.1rem",
              }}
            >
              P
            </span>
            resenter
          </Text>
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
    </AppShell>
  );
}
