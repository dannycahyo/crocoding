import { redirect, useFetcher } from "react-router";
import type { Route } from "./+types/checkout";
import { plansTable } from "~/lib/plans";
import { createOrder } from "~/lib/orders";
import { formatIDR } from "~/lib/format";

export async function loader() {
  const plans = await plansTable();
  return { plan: plans[0] };
}

export async function action({ request }: Route.ActionArgs) {
  const { amount, userId, planName } = await request.json();
  const order = await createOrder({
    userId,
    planId: planName,
    amount,
  });
  return redirect(`/payment/${order.id}`);
}

const features = [
  "Unlimited projects",
  "Priority support",
  "Cancel anytime",
];

export default function Checkout({ loaderData }: Route.ComponentProps) {
  const { plan } = loaderData;
  const fetcher = useFetcher();
  const submitting = fetcher.state !== "idle";

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6 py-12">
      <p className="mb-8 text-center text-sm font-medium tracking-wide text-neutral-400">
        Billing Demo
      </p>
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{plan.name}</h2>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            Monthly
          </span>
        </div>
        <p className="mt-4">
          <span className="text-3xl font-bold tracking-tight">
            {formatIDR(plan.price)}
          </span>
          <span className="text-sm text-neutral-500">/month</span>
        </p>
        <ul className="mt-6 space-y-2 border-t border-neutral-100 pt-6 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="text-neutral-400">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>
        <button
          disabled={submitting}
          className="mt-8 w-full rounded-lg bg-neutral-900 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 disabled:opacity-60 dark:bg-white dark:text-neutral-900"
          onClick={() =>
            fetcher.submit(
              { amount: plan.price, userId: "u_1", planName: plan.id },
              { method: "post", encType: "application/json" },
            )
          }
        >
          {submitting ? "Starting checkout..." : "Subscribe"}
        </button>
        <p className="mt-4 text-center text-xs text-neutral-400">
          Demo checkout — no real payment is processed.
        </p>
      </div>
    </main>
  );
}
