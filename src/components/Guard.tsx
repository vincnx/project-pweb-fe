import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const userSelector = useSelector((state: RootState) => state.user)

  if (userSelector.role !== 'admin') {
    return <Navigate to="/" />
  }

  return children
}

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const userSelector = useSelector((state: RootState) => state.user)

  if (!userSelector.id) {
    return <Navigate to="/login" />
  }

  return children
}