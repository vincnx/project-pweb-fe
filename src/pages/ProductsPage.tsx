
import { FilterProductDrawerContent, FilterProductSidebar } from "@/components/FilterProduct"
import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import { useState } from "react"
import { CgOptions } from "react-icons/cg"

const ProductsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="mt-32 flex flex-grow max-w-screen-xl mx-auto">
        {
          sidebarOpen &&
          <FilterProductSidebar />
        }
        <div className="px-8 lg:ps-4 lg:pe-8 pb-12 flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-semibold">Semua Produk</h2>
            <div className="lg:hidden">
              <Drawer>
                <DrawerTrigger>
                  <Button variant={"outline"} className="flex items-center gap-2">
                    Filter
                    <CgOptions className="w-6 h-6" />
                  </Button>
                </DrawerTrigger>
                <FilterProductDrawerContent />
              </Drawer>
            </div>
            <Button variant={"outline"} onClick={() => setSidebarOpen(!sidebarOpen)} className="items-center gap-2 hidden lg:flex">
              {sidebarOpen ? 'Sembunyikan' : 'Tampilkan'}
              <CgOptions className="w-6 h-6" />
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 xl:gap-x-4 gap-y-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductsPage
