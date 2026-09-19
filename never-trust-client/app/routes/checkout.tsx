import { redirect, useFetcher } from "react-router";
import type { Route } from "./+types/checkout";
import { plansTable, getPlan } from "~/lib/plans";
import { createOrder } from "~/lib/orders";
import { requireUserId } from "~/lib/session";
import { formatIDR } from "~/lib/format";

export async function loader() {
  const plans = await plansTable();
  return { plan: plans[0] };
}

export async function action({ request }: Route.ActionArgs) {
  const { planId } = await request.json();
  const userId = await requireUserId(request);
  const plan = await getPlan(planId);
  const order = await createOrder({
    userId,
    planId: plan.id,
    amount: plan.price,
  });
  return redirect(`/payment/${order.id}`);
}

export default function Checkout({ loaderData }: Route.ComponentProps) {
  const { plan } = loaderData;
  const fetcher = useFetcher();

  return (
    <main className="mx-auto max-w-sm p-8">
      <h1 className="mb-6 text-xl font-semibold">Billing Demo</h1>
      <div className="rounded-lg border border-neutral-300 p-6">
        <h2 className="text-lg font-medium">{plan.name}</h2>
        <p className="mt-1 text-2xl font-bold">
          {formatIDR(plan.price)}
          <span className="text-sm font-normal">/month</span>
        </p>
        <button
          className="mt-6 w-full rounded bg-neutral-900 py-2 text-white"
          onClick={() =>
            fetcher.submit(
              { planId: plan.id },
              { method: "post", encType: "application/json" },
            )
          }
        >
          Subscribe
        </button>
      </div>
    </main>
  );
}
