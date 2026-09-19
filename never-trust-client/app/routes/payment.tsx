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

function Field({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-medium text-neutral-500">{label}</span>
      <input
        type="text"
        defaultValue={value}
        disabled
        className="mt-1 w-full cursor-not-allowed rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
      />
    </label>
  );
}

export default function Payment({ loaderData }: Route.ComponentProps) {
  const { order } = loaderData;
  const fetcher = useFetcher();
  const paid = order.paid || fetcher.data?.ok;
  const submitting = fetcher.state !== "idle";

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6 py-12">
      <p className="mb-8 text-center text-sm font-medium tracking-wide text-neutral-400">
        Billing Demo
      </p>
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-6 dark:border-neutral-800">
          <span className="text-sm text-neutral-500">Amount due</span>
          <span className="text-2xl font-bold tracking-tight">
            {formatIDR(order.amount)}
          </span>
        </div>

        {paid ? (
          <div className="flex flex-col items-center gap-2 py-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
              &#10003;
            </span>
            <p className="text-sm font-medium text-green-700 dark:text-green-400">
              Payment successful
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <Field label="Card number" value="4242 4242 4242 4242" />
            <div className="flex gap-4">
              <Field label="Expiry" value="12 / 34" className="flex-1" />
              <Field label="CVC" value="123" className="flex-1" />
            </div>
            <button
              disabled={submitting}
              className="mt-2 w-full rounded-lg bg-neutral-900 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 disabled:opacity-60 dark:bg-white dark:text-neutral-900"
              onClick={() =>
                fetcher.submit(
                  {},
                  { method: "post", encType: "application/json" },
                )
              }
            >
              {submitting ? "Processing..." : `Pay ${formatIDR(order.amount)}`}
            </button>
            <p className="text-center text-xs text-neutral-400">
              Demo payment — card fields are not processed.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
