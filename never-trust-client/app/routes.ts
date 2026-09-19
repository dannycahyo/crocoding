import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  route('checkout', 'routes/checkout.tsx'),
  route('payment/:orderId', 'routes/payment.tsx'),
  route('account', 'routes/account.tsx'),
  route('dev/login', 'routes/dev-login.tsx')
] satisfies RouteConfig;
