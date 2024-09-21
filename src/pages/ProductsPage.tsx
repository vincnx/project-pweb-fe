import { FilterProductDrawerContent, FilterProductSidebar } from "@/components/FilterProduct"
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer"
import { useState } from "react"
import { CgOptions } from "react-icons/cg"
import { Product } from "@/types/product"
import { useFetchProducts } from "@/services/product.service"
import { useSearchParams } from "react-router-dom"

const ProductsPage = () => {
  const [searchParams] = useSearchParams()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const { data, isPending, error, isFetching } = useFetchProducts({
    sort: searchParams.get('sort') || undefined,
    minPrice: Number(searchParams.get('minPrice')) || undefined,
    maxPrice: Number(searchParams.get('maxPrice')) || undefined,
  })

  if (isPending || isFetching) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="flex flex-col lg:flex-row min-h-screen max-w-screen-xl mx-auto mt-32 px-8 mb-12">
      {/* sidebar filter */}
      {
        sidebarOpen &&
        <FilterProductSidebar />
      }

      <div className="flex-1">
        {/* title */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">Semua Produk</h2>
          <div className="lg:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant={"outline"} className="flex items-center gap-2">
                  Filter
                  <CgOptions className="w-6 h-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <FilterProductDrawerContent />
              </DrawerContent>
            </Drawer>
          </div>
          <Button variant={"outline"} onClick={() => setSidebarOpen(!sidebarOpen)} className="items-center gap-2 hidden lg:flex">
            {sidebarOpen ? 'Sembunyikan' : 'Tampilkan'}
            <CgOptions className="w-6 h-6" />
          </Button>
        </div>

        {/* product cards */}
        <main className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 xl:gap-x-4 gap-y-8 w-full">
          {
            isPending || isFetching ? (
              <>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </>
            ) : (
              data.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )
          }
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </main>
      </div>
    </div>
  )
}

export default ProductsPage
