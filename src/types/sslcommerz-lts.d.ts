
declare module "sslcommerz-lts" {
  interface SSLCommerzConfig {
    store_id: string;
    store_passwd: string;
    is_live: boolean;
  }

  export default class SSLCommerzPayment {
    constructor(
      store_id: string,
      store_passwd: string,
      is_live: boolean
    );

    init(data: any): Promise<any>;
  }
}
