import DiscountCards from "@/components/DiscountCards"
import Footer from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="mt-24">
        <div className="max-w-screen-md mx-auto px-4">
          <div className='mx-auto text-center flex flex-col items-center max-w-3xl'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Temukan kebutuhan sehari-hari di Toko Kelontong Alfiah.
            </h1>
            <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
              Toko kelontong kami menyediakan berbagai kebutuhan rumah tangga dengan harga terjangkau dan kualitas terbaik.
            </p>
          </div>
        </div>

        <div className="px-8 py-24">
          <div className="max-w-screen-xl mx-auto">
            <DiscountCards />
          </div>
        </div>

        <div className="px-8 pt-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-semibold">Eksplor Produk Lainnya</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
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
        </div>
        <div className="flex justify-center my-12">
          <Button>Lihat Semua</Button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
