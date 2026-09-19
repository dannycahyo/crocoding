import { randomUUID } from 'node:crypto';
import { readDb, writeDb, type Order } from './db';

export async function createOrder(input: {
  userId: string;
  planId: string;
  amount: number;
}): Promise<Order> {
  const db = await readDb();
  const order: Order = {
    id: randomUUID(),
    userId: input.userId,
    planId: input.planId,
    amount: input.amount,
    paid: false
  };
  db.orders.push(order);
  await writeDb(db);
  console.log(`[order] created ${order.id} amount=${order.amount}`);
  return order;
}

export async function getOrder(orderId: string): Promise<Order> {
  const db = await readDb();
  const order = db.orders.find((o) => o.id === orderId);
  if (!order) throw new Response('Order not found', { status: 404 });
  return order;
}

export async function markOrderPaid(orderId: string): Promise<Order> {
  const db = await readDb();
  const order = db.orders.find((o) => o.id === orderId);
  if (!order) throw new Response('Order not found', { status: 404 });
  order.paid = true;
  if (order.userId === db.user.id) db.user.isPremium = true;
  await writeDb(db);
  console.log(`[order] paid ${order.id}`);
  return order;
}
