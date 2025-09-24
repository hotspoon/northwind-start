import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/features/auth/components/login-form";

export const Route = createFileRoute("/_authLayout/login")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Login",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <>
      <LoginForm />
    </>
  );
}
