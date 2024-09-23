import { axiosInstance } from "@/lib/axios"
import { addToCart, getCart } from "@/store/cart/cartSlice"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux"

export const useFetchCart = (userId: string) => {
  const dispatch = useDispatch()

  return useQuery({
    queryKey: ['fetch.cart', userId],
    queryFn: async () => {
      const response = await axiosInstance.get('/carts', {
        params: {
          userId,
          _embed: 'product'
        }
      })
      dispatch(getCart(response.data))
      return response.data
    }
  })
}

export const useAddToCart = () => {
  const dispatch = useDispatch()

  return useMutation({
    mutationFn: async ({ userId, productId, quantity }: { userId: string; productId: string; quantity: number }) => {
      const response = await axiosInstance.post('/carts', { userId, productId, quantity })
      dispatch(addToCart(response.data))
      return response.data
    },
  })
}
