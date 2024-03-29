import { productUrls } from "@/constants/apiUrls/product";
import { get } from "./client";
import {
  PaginationParams,
  ProductResponse,
} from "@/types/product";

export const productRepository = {
  getAllProducts: async ({limit, skip}:PaginationParams): Promise<ProductResponse> => {

      return await get(`${productUrls.ALL_PRODUCTS}?limit=${limit}&skip=${skip}`);
  },
};