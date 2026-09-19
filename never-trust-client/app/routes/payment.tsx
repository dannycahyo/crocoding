import { useFetcher } from "react-router";
import type { Route } from "./+types/payment";
import { getOrder, markOrderPaid } from "~/lib/orders";
import { formatIDR } from "~/lib/format";

export async function loader({ params }: Route.LoaderArgs) {
  const order = await getOrder(params.orderId);
  return { order };
}

export async function action({ params }: Route.ActionArgs) {
  await markOrderPaid(params.orderId);
  return { ok: true };
}

export default function Payment({ loaderData }: Route.ComponentProps) {
  const { order } = loaderData;
  const fetcher = useFetcher();
  const paid = order.paid || fetcher.data?.ok;

  return (
    <main className="mx-auto max-w-sm p-8">
      <h1 className="mb-6 text-xl font-semibold">Billing Demo</h1>
      <div className="rounded-lg border border-neutral-300 p-6">
        <p className="text-sm text-neutral-500">Amount due</p>
        <p className="mt-1 text-2xl font-bold">
          {formatIDR(order.amount)}
        </p>
        {paid ? (
          <p className="mt-6 text-center text-green-700">Paid</p>
        ) : (
          <button
            className="mt-6 w-full rounded bg-neutral-900 py-2 text-white"
            onClick={() =>
              fetcher.submit(
                {},
                { method: "post", encType: "application/json" },
              )
            }
          >
            Pay
          </button>
        )}
      </div>
    </main>
  );
}
