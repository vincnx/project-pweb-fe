
import { ProductCard, ProductCardGroup, ProductCardSkeleton } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { useFetchProductsPhp } from "@/services/product.service"
import { Product } from "@/types/product"
import { Link } from "react-router-dom"

const HomePage = () => {
  const fetchProductsPhp = useFetchProductsPhp()
  const fetchDiscountProductsPhp = useFetchProductsPhp({ discount: 1 })

  return (
    <>
      <main className="mt-32">
        {/* hero */}
        <div className="max-w-screen-md mx-auto px-4 pb-24">
          <div className='mx-auto text-center flex flex-col items-center max-w-3xl'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
              Temukan kebutuhan sehari-hari di Toko Kelontong Alfiah.
            </h1>
            <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
              Toko kelontong kami menyediakan berbagai kebutuhan rumah tangga dengan harga terjangkau dan kualitas terbaik.
            </p>
          </div>
        </div>

        {/* discount cards */}
        <div className="px-8 pb-24">
          <div className="max-w-screen-xl mx-auto">
            <ProductCardGroup title="Sedang Diskon" titleLink="/product" data={fetchDiscountProductsPhp.data} isPending={fetchDiscountProductsPhp.isPending} isFetching={fetchDiscountProductsPhp.isFetching} />
          </div>
        </div>

        {/* eksplor produk lainnya */}
        <div className="px-8 pb-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-semibold">Eksplor Produk Lainnya</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 xl:gap-x-4 gap-y-8">
              {
                fetchProductsPhp.isPending || fetchProductsPhp.isFetching ? (
                  <>
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                  </>
                ) : (
                  fetchProductsPhp.data?.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                )
              }
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-12">
          <Link to={'/product'}>
            <Button>Lihat Semua</Button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default HomePage
