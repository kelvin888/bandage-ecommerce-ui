import { productUrls } from "@/constants/apiUrls/product";
import { get } from "./client";
import {
  PaginationParams,
  SingleProductResponse,
  AllProductResponse
} from "@/types/product";

export const productRepository = {
  getAllProducts: async ({limit, skip}:PaginationParams): Promise<AllProductResponse> => {

      return await get(`${productUrls.ALL_PRODUCTS}?limit=${limit}&skip=${skip}`);
  },
  getProductById: async (productId: number):Promise<SingleProductResponse> => {
    return await get(`${productUrls.ALL_PRODUCTS}/${productId}`)
  }
};