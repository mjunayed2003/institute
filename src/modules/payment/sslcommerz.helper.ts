import SSLCommerzPayment from "sslcommerz-lts";

const store_id = process.env.SSLCOMMERZ_STORE_ID;
const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD;
const is_live = false; // 🔥 DEV MODE

export const sslcommerz = new SSLCommerzPayment(
  store_id || '',
  store_passwd || '',
  is_live
);
