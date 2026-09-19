import { readDb, type Plan } from './db';

export async function plansTable(): Promise<Plan[]> {
  const db = await readDb();
  return db.plans;
}

export async function getPlan(planId: string): Promise<Plan> {
  const plans = await plansTable();
  const plan = plans.find((p) => p.id === planId);
  if (!plan) throw new Response('Plan not found', { status: 404 });
  return plan;
}
