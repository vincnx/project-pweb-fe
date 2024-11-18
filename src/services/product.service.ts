import { axiosInstance, phpAxiosInstance } from "@/lib/axios"
import { CreateProductSchema, UpdateProductSchema } from "@/lib/schema/product/productSchema";
import { queryClient } from "@/main";
import { useMutation, useQuery } from "@tanstack/react-query"

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

export const useFetchProductsPhp = () => {
  return useQuery({
    queryKey: ['fetch.products.php'],
    queryFn: async () => {
      const response = await phpAxiosInstance.get('/products')
      return response.data.data
    }
  })
}

export const useFetchProductByIdPhp = (productId: string) => {
  return useQuery({
    queryKey: ['fetch.product.php', productId],
    queryFn: async () => {
      const response = await phpAxiosInstance.get(`/products/${productId}`)
      return response.data.data
    }
  })
}

export const useCreateProductPhp = () => {
  return useMutation({
    mutationFn: async (data: CreateProductSchema) => {
      const response = await phpAxiosInstance.post('/products', data)
      return response.data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch.products.php'] })
    }
  })
}

export const useUpdateProductPhp = (productId: string) => {
  return useMutation({
    mutationFn: async (data: UpdateProductSchema) => {
      const response = await phpAxiosInstance.post(`/products/${productId}`, data)
      return response.data.data
    }
  })
}