import { createLazyFileRoute } from "@tanstack/react-router";
import Edit from "../Edit";

export const Route = createLazyFileRoute("/edit")({
  component: Page,
});

function Page() {
  return (
    <>
      <Edit />
    </>
  );
}
