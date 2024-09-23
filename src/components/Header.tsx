import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { IoBagOutline, IoHeartOutline } from "react-icons/io5"
import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { logout } from "@/store/user/userSlice"
import { Avatar, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useFetchCart } from "@/services/cart.service"

export const Header = memo(() => {
  const dispatch = useDispatch()
  const userSelector = useSelector((state: RootState) => state.user)
  const cartSelector = useSelector((state: RootState) => state.cart)

  const handleLogout = () => {
    localStorage.removeItem('user')
    dispatch(logout())
  }

  useFetchCart(userSelector.id)

  return (
    <div className="border-b fixed top-0 left-0 right-0 bg-white bg-opacity-75 backdrop-blur-md z-50">
      <header className="px-8 flex justify-between h-20 items-center max-w-screen-2xl mx-auto gap-4">
        <Link to={'/'}>
          <p className="text-3xl font-bold hover:cursor-pointer">Alfiah.</p>
        </Link>

        <Input className="max-w-96 hidden sm:block" placeholder="Search..." />

        <div className="flex items-center gap-4 h-6">
          <div className="flex gap-2">
            <Link to={'/cart'} className="relative">
              <Button variant={'ghost'} size={'icon'}>
                <IoBagOutline className="w-6 h-6" />
              </Button>
              {cartSelector.items.length > 0 && (
                <span className="absolute transform -top-2 -right-2 flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
                  {cartSelector.items.length}
                </span>
              )}
            </Link>
            <Button variant={'ghost'} size={'icon'}>
              <IoHeartOutline className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex gap-2 items-center">
            {
              userSelector.id ?
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex gap-2 items-center">
                        <p className="text-lg font-medium">Hai, {userSelector.username}</p>
                        <Avatar>
                          <AvatarImage src={'https://github.com/shadcn.png'} />
                        </Avatar>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                        <p className="text-lg text-red-400">Logout</p>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </> :
                <>
                  <Link to={'/login'}>
                    <Button>Login</Button>
                  </Link>
                  <Link to={'/register'}>
                    <Button variant={"outline"}>Signin</Button>
                  </Link>
                </>
            }
          </div>
        </div>
      </header>
    </div>
  )
})