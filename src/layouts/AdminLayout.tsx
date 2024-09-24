import {
  CircleUser,
  Menu,
  Search
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Link } from "react-router-dom"
import { FiHome, FiPackage } from "react-icons/fi";
import { SidebarButton } from "@/components/Sidebar"
import { BiShoppingBag } from "react-icons/bi";



export const AdminLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/admin" className="flex items-center gap-2 font-semibold">
              <span className="text-3xl">Alfiah.</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-lg lg:px-4">
              <SidebarButton to="/admin">
                <FiHome className="h-6 w-6" />
                Dashboard
              </SidebarButton>
              <SidebarButton to="/admin/order">
                <BiShoppingBag className="h-6 w-6" />
                Orders
              </SidebarButton>
              <SidebarButton to="/admin/product">
                <FiPackage className="h-6 w-6" />
                Products
              </SidebarButton>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col">
              <SheetHeader>
                <Link to="/admin" className="w-fit">
                  <SheetTitle className="text-3xl font-semibold">Alfiah.</SheetTitle>
                  <SheetDescription></SheetDescription>
                </Link>

              </SheetHeader>
              <nav className="grid gap-2 text-lg font-medium">
                <SidebarButton to="/admin">
                  <FiHome className="h-6 w-6" />
                  Dashboard
                </SidebarButton>
                <SidebarButton to="/admin/order">
                  <BiShoppingBag className="h-6 w-6" />
                  Orders
                </SidebarButton>
                <SidebarButton to="/admin/product">
                  <FiPackage className="h-6 w-6" />
                  Products
                </SidebarButton>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
