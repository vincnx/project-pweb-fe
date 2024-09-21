import { axiosInstance } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"

export const useFetchProducts = (params?: { sort?: string; minPrice?: number; maxPrice?: number }) => {
  return useQuery({
    queryKey: ['fetch.products', params?.sort, params?.minPrice, params?.maxPrice],
    queryFn: async () => {
      const response = await axiosInstance.get('/products', {
        params: {
          _sort: params?.sort === 'asc' ? 'price' : params?.sort === 'desc' ? '-price' : '',
          price_gte: params?.minPrice,
          price_lt: params?.maxPrice,
        },
      });
      return response.data;
    },
  });
};