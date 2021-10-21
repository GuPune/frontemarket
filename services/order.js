import ApiServiceAll from "./api.serviceall";

export const OrderService = {

    saveorder(param) {
      return ApiServiceAll.post("checkout",param);
    },
    fetchorder(param) {
      return ApiServiceAll.post("fetchorder",param);
    },
};