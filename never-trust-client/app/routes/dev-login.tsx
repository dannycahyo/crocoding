import { Form, redirect } from "react-router";
import type { Route } from "./+types/dev-login";
import { readDb } from "~/lib/db";
import { sessionStorage } from "~/lib/session";

export async function action({ request }: Route.ActionArgs) {
  const db = await readDb();
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );
  session.set("userId", db.user.id);
  return redirect("/account", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export default function DevLogin() {
  return (
    <main className="mx-auto max-w-sm p-8">
      <h1 className="mb-6 text-xl font-semibold">Billing Demo</h1>
      <p className="mb-4 text-sm text-neutral-500">
        Dev-only: logs in as the seeded demo user.
      </p>
      <Form method="post">
        <button
          className="w-full rounded bg-neutral-900 py-2 text-white"
          type="submit"
        >
          Log in as demo user
        </button>
      </Form>
    </main>
  );
}
