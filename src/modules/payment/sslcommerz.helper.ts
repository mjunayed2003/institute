import SSLCommerzPayment from "sslcommerz-lts";

const store_id = process.env.SSLCOMMERZ_STORE_ID!;
const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD!;
const is_live = false; // sandbox mode

export const sslcommerz = {
  init: async (paymentData: any) => {
    const sslcommerzClient = new SSLCommerzPayment(store_id, store_passwd, is_live);

    // Request SSLCommerz
    const response = await sslcommerzClient.init(paymentData);

    console.log("🔥 SSLCommerz Response:", response);

    if (!response.GatewayPageURL) {
      throw new Error("GatewayPageURL not found in response");
    }

    return response;
  },
};
