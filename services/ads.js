import ApiService from "./api.service";

export const AdsService = {

    get() {
      return ApiService.get("ads");
    },
};