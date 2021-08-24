import ApiService from "./api.service";

export const UserService = {
    forgot(params) {
      return ApiService.forgot("forgot",params);
    },
    register(params) {
      return ApiService.register("registershop",params);
    },
    registerbyshop(params) {
      return ApiService.registerbyshop("registerbyshop",params);
    },

    

};