import ApiServiceAll from "./api.serviceall";

export const ShippingService = {

    getdatashipping(param) {
      return ApiServiceAll.post("servicedelivery",param);
    },
};