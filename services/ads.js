import ApiService from "./api.service";

export const AdsService = {

    get() {
      console.log('ads');
      return ApiService.get("ads");
    },
    post(param) {
      return ApiService.post("ads_shop",param);
    },
    semi(param) {
      return ApiService.post("ads_shop_semi",param);
    },
};
