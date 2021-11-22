import ApiServiceAll from "./api.serviceall";

export const MyshopService = {

    getshop() {
   
      return ApiServiceAll.get("getshop");
    },
};