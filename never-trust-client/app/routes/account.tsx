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

  return (
    <main className="mx-auto max-w-sm p-8">
      <h1 className="mb-6 text-xl font-semibold">Billing Demo</h1>
      <div className="rounded-lg border border-neutral-300 p-6">
        <p className="text-sm text-neutral-500">{user.email}</p>
        {user.isPremium ? (
          <span className="mt-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
            Premium
          </span>
        ) : (
          <span className="mt-3 inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-600">
            Free
          </span>
        )}
      </div>
    </main>
  );
}
