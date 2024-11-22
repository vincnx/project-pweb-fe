import { phpAxiosInstance } from "@/lib/axios"
import { queryClient } from "@/main"
import { RootState } from "@/store/store"
import { useMutation } from "@tanstack/react-query"
import { useSelector } from "react-redux"

export const useCreateTransaction = () => {
  const userSelector = useSelector((state: RootState) => state.user)

  return useMutation({
    mutationFn: async () => {
      const response = await phpAxiosInstance.post('/transactions')
      return response.data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch.cart.php', userSelector.id] })
    }
  })
}