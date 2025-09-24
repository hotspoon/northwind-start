import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authLayout/sign-up")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Sign Up",
      },
    ],
  }),
});

function RouteComponent() {
  return <SignUpForm />;
}
