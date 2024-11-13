import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Edit from "./Edit";
import Top from "./Top";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Top />
      {/* <Edit /> */}
    </MantineProvider>
  );
}
