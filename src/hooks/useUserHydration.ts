import { useGetUserByToken } from "@/services/auth.service"
import { login } from "@/store/user/userSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const useUserHydration = () => {
  const dispatch = useDispatch()
  const [isHydrated, setIsHydrated] = useState(false)
  const token = localStorage.getItem('token')

  const { data: userData, isError, isSuccess } = useGetUserByToken(token || '')

  useEffect(() => {
    if (!token) {
      setIsHydrated(true)
      return
    }

    if (isSuccess && userData) {
      dispatch(login(userData))
      setIsHydrated(true)
    }

    if (isError) {
      localStorage.removeItem('token')
      setIsHydrated(true)
    }
  }, [userData, isSuccess, isError, dispatch, token])

  return { isHydrated }
}