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
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6 py-12">
      <p className="mb-8 text-center text-sm font-medium tracking-wide text-neutral-400">
        Billing Demo
      </p>
      <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-8 dark:border-neutral-700 dark:bg-neutral-900">
        <p className="mb-4 text-sm text-neutral-500">
          Dev-only: logs in as the seeded demo user.
        </p>
        <Form method="post">
          <button
            className="w-full rounded-lg bg-neutral-900 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900"
            type="submit"
          >
            Log in as demo user
          </button>
        </Form>
      </div>
    </main>
  );
}
