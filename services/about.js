import ApiServiceAll from "./api.serviceall";

export const AboutService = {

    getabout(param) {
      return ApiServiceAll.post("about",param);
    },
    getnewe() {
      return ApiServiceAll.get("archives");
    },


};
