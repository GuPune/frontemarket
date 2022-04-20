import ApiService from "./api.service";

export const ProductService = {

    getshell(param) {
      return ApiService.post("productshell",param);
    },
    find(param) {
      return ApiService.find("productshellcategory",param);
    },
    getproductbyshop(param) {
      return ApiService.post("productbyshop",param);
    },
    getproductshellfind(param) {
      return ApiService.post("productshellfind",param);
    },
    getcatebyshop(param){
      return ApiService.post("catebyshop",param);
    },
    findcatebyshop(param){
      return ApiService.post("searchproduct",param);
    },
    getproductbyitem(param){
      return ApiService.post("productbyitem",param);
    },
    getproductbyseller(param){
      return ApiService.post("productseller",param);
    },
    getproductbynew(param){
      return ApiService.post("productnew",param);
    },
    getproductbyrecom(param){
      return ApiService.post("productrecom",param);
    },
    getimages(param){
      return ApiService.post("producimages",param);
    },
    getfav(param){
      return ApiService.post("getfav",param);
    },
    addfav(param){
      return ApiService.post("addfav",param);
    },
    delfav(param){

      return ApiService.post("delfav",param);
    },
    getfavall(param){
      return ApiService.post("getfavall",param);
    },
    removefavall(param){
      return ApiService.post("removefavall",param);
    },
}
