import { useGetUserByToken } from "@/services/auth.service"
import { login } from "@/store/user/userSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const useUserHydration = () => {
  const dispatch = useDispatch()
  const [isHydrated, setIsHydrated] = useState(false)
  const token = localStorage.getItem('token')

  const { data: userData } = useGetUserByToken(token || '')

  useEffect(() => {
    if (userData) {
      dispatch(login(userData))
      setIsHydrated(true)
    }
  }, [userData, dispatch])

  return { isHydrated }
}