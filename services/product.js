import ApiService from "./api.service";

export const ProductService = {

    get() {
      return ApiService.get("productshell");
    },
};