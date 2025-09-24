import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/dashboard")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Dashboard",
      },
    ],
  }),
});

function RouteComponent() {
  return <div>Hello "/_mainLayout/dashboard"!</div>;
}
