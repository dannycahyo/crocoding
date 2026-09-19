import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

export interface User {
  id: string;
  email: string;
  isPremium: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  planId: string;
  amount: number;
  paid: boolean;
}

export interface Db {
  user: User;
  plans: Plan[];
  orders: Order[];
}

export async function readDb(): Promise<Db> {
  const raw = await readFile(DB_PATH, 'utf-8');
  return JSON.parse(raw);
}

export async function writeDb(db: Db): Promise<void> {
  await writeFile(DB_PATH, JSON.stringify(db, null, 2));
}
