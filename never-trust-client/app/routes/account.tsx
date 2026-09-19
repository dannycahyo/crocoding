import type { Route } from "./+types/account";
import { readDb } from "~/lib/db";
import { requireUserId } from "~/lib/session";

export async function loader({ request }: Route.LoaderArgs) {
  await requireUserId(request);
  const db = await readDb();
  return { user: db.user };
}

export default function Account({ loaderData }: Route.ComponentProps) {
  const { user } = loaderData;
  const initial = user.email.charAt(0).toUpperCase();

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6 py-12">
      <p className="mb-8 text-center text-sm font-medium tracking-wide text-neutral-400">
        Billing Demo
      </p>
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-lg font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            {initial}
          </span>
          <div>
            <p className="text-sm font-medium">{user.email}</p>
            <p className="text-xs text-neutral-400">Demo account</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-6 dark:border-neutral-800">
          <span className="text-sm text-neutral-500">Plan</span>
          {user.isPremium ? (
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              Premium
            </span>
          ) : (
            <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              Free
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
