import { productRepository } from "@/api/productRepository";
import { PaginationParams } from "@/types/product";

const productService = {
  getProducts: async ({limit, skip}:PaginationParams) => {
    return await productRepository.getAllProducts({limit, skip});
  },
};


export default productService;
