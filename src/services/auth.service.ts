import { axiosInstance } from "@/lib/axios"
import { login } from "@/store/user/userSlice"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux"

interface User {
  id: string
  username: string
}

export const useLogin = () => {
  const dispatch = useDispatch()
  return useMutation({
    mutationFn: async ({ username, password }: { username: string; password: string }) => {
      const response = await axiosInstance.get<User[]>('/users', {
        params: {
          username,
          password
        }
      })
      return response.data
    },
    onSuccess: (data) => {
      localStorage.setItem('user', data[0].id)
      dispatch(login(data[0]))
    }
  })

}

export const useRegister = () => {
  const dispatch = useDispatch()

  return useMutation({
    mutationFn: async ({ username, password }: { username: string; password: string }) => {
      const response = await axiosInstance.post('/users', { username, password })
      return response.data
    },
    onSuccess: (data) => {
      localStorage.setItem('user', data.id)
      dispatch(login(data))
    }
  })
}

export const useGetUserById = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: async () => {
      const response = await axiosInstance.get<User>(`/users/${id}`)
      return response.data
    }
  })
}