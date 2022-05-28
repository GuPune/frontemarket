import ApiServiceAll from "./api.serviceall";

export const MenuService = {

    getmenu(param) {
      return ApiServiceAll.post("listmenu",param);
    },
    cookie(param) {
      return ApiServiceAll.post("consent",param);
    },

};
