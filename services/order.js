import ApiServiceAll from "./api.serviceall";

export const OrderService = {

    saveorder(param) {
      return ApiServiceAll.post("saveorder");
    },
};