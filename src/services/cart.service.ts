import { axiosInstance, phpAxiosInstance } from "@/lib/axios"
import { getCart } from "@/store/cart/cartSlice"
import { RootState } from "@/store/store"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"

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
      await dispatch(getCart(response.data))
      return response.data
    }
  })
}

export const useAddToCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ userId, productId, quantity }: { userId: string; productId: string; quantity: number }) => {
      const response = await axiosInstance.post('/carts', { userId, productId, quantity })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch.cart'] })
    },
  })
}

export const useUpdateCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ cartId, quantity }: { cartId: string; quantity: number }) => {
      const response = await axiosInstance.patch(`/carts/${cartId}`, { quantity })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch.cart'] })
    },
  })
}

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ cartId }: { cartId: string }) => {
      const response = await axiosInstance.delete(`/carts/${cartId}`)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch.cart'] })
    },
  })
}

export const useFetchCartPhp = () => {
  const dispatch = useDispatch()
  const userSelector = useSelector((state: RootState) => state.user)

  return useQuery({
    queryKey: ['fetch.cart.php', userSelector.id],
    queryFn: async () => {
      const response = await phpAxiosInstance.get(`/cart`)
      dispatch(getCart(response.data))
      return response.data
    },
  })
}