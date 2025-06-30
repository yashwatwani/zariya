// run-shiprocket-test.ts
import 'dotenv/config';
import { testCreateShiprocketOrder } from './src/utils/shiprocketOrderExample';

console.log('Loaded Shiprocket email:', process.env.NEXT_PUBLIC_SHIPROCKET_EMAIL);

(async () => {
  await testCreateShiprocketOrder();
})();