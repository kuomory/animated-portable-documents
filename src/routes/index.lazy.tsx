import { createLazyFileRoute } from "@tanstack/react-router";
import Top from "../Top";

export const Route = createLazyFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <>
      <Top />
    </>
  );
}
