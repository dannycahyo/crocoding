import { createCookieSessionStorage, redirect } from 'react-router';

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secrets: ['dev-only-demo-secret']
  }
});

export async function getUserId(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );
  return session.get('userId') as string | undefined;
}

export async function requireUserId(request: Request) {
  const userId = await getUserId(request);
  if (!userId) throw redirect('/dev/login');
  return userId;
}
