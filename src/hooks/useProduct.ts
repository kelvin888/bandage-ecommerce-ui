"use client"
import { useState, useEffect } from 'react';
import { productKeys } from '@/constants/queryKeys';
import productService from '@/services/productService';
import { Product } from '@/types/product'; 
import { useQuery } from '@tanstack/react-query';


const useProduct = (limit: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const defaultLimit = limit || 30; 
  const [skip, setSkip] = useState(0);

  const { data: fetchedProducts, isLoading, isFetching } = useQuery({
    queryKey: [productKeys.FIND_ALL_PRODUCTS, { limit: defaultLimit, skip }],
    queryFn: () => productService.getProducts({ limit: defaultLimit, skip }),
    enabled: true,
  });

  useEffect(() => {
    if (fetchedProducts) {
      setProducts((prevProducts) => [...prevProducts, ...fetchedProducts.data.products]);
    }
  }, [fetchedProducts]);

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + defaultLimit);
  };

  return { products, isLoading, isFetching, handleLoadMore };
};

export default useProduct;
