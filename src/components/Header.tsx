import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { IoBagOutline, IoHeartOutline } from "react-icons/io5"
import { memo } from "react"

export const Header = memo(() => {
  return (
    <header className="px-8 flex justify-between h-20 items-center border-b fixed top-0 left-0 right-0 bg-white bg-opacity-75 backdrop-blur-md z-50">
      <Link to={'/'}>
        <p className="text-2xl font-bold hover:cursor-pointer">Logo</p>
      </Link>

      <Input className="max-w-96 hidden sm:block" placeholder="Search..." />

      <div className="flex items-center gap-4 h-6">
        <div className="flex gap-2">
          <Button variant={'ghost'} size={'icon'}>
            <IoBagOutline className="w-6 h-6" />
          </Button>
          <Button variant={'ghost'} size={'icon'}>
            <IoHeartOutline className="w-6 h-6" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button>Login</Button>
          <Button variant={"outline"}>Signin</Button>
        </div>
      </div>
    </header>
  )
})