import { phpAxiosInstance } from "@/lib/axios"
import { queryClient } from "@/main"
import { RootState } from "@/store/store"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"

export const useCreateTransactionPhp = () => {
  const userSelector = useSelector((state: RootState) => state.user)

  return useMutation({
    mutationFn: async () => {
      const response = await phpAxiosInstance.post('/transactions')
      return response.data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch.cart.php', userSelector.id] })
      queryClient.invalidateQueries({ queryKey: ['fetch.transactions.admin.php'] })
    }
  })
}

export const useFetchTransactionsAdminPhp = () => {
  return useQuery({
    queryKey: ['fetch.transactions.admin.php'],
    queryFn: async () => {
      const response = await phpAxiosInstance.get('/admin/transactions')
      return response.data.data
    }
  })
}
