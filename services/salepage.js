import ApiServiceAll from "./api.serviceall";

export const SalePageService = {
    getsale(param) {
  
      return ApiServiceAll.post("salepage",param);
    },

};