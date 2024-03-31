import { productRepository } from "@/api/productRepository";
import { PaginationParams } from "@/types/product";

const productService = {
  getProducts: async ({limit, skip}:PaginationParams) => {
    return await productRepository.getAllProducts({limit, skip});
  },
  getProductById: async (id: number) => {
    return await productRepository.getProductById(id);
  }
};


export default productService;
