import ApiServiceAll from "./api.serviceall";

export const LayoutService = {

    navbar(param) {
      return ApiServiceAll.post("navbar",param);
    },
    blogonly(param) {
      return ApiServiceAll.post("blogonly",param);
    },
};