import { axiosInstance } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"

export const useFetchProducts = (params?: { sort?: string; minPrice?: number; maxPrice?: number; isDiscount?: boolean, limit?: number }) => {
  return useQuery({
    queryKey: ['fetch.products', params?.sort, params?.minPrice, params?.maxPrice, params?.isDiscount, params?.limit],
    queryFn: async () => {
      const response = await axiosInstance.get('/products', {
        params: {
          _sort: params?.sort === 'asc' ? 'price' : params?.sort === 'desc' ? '-price' : '',
          price_gte: params?.minPrice,
          price_lt: params?.maxPrice,
          discount_gte: params?.isDiscount ? 1 : 0,
          _limit: params?.limit,
        },
      });
      return response.data;
    },
  });
};

export const useFetchProductById = (productId: string) => {
  return useQuery({
    queryKey: ['fetch.product', productId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/products/${productId}`);
      return response.data;
    },
  });
};
