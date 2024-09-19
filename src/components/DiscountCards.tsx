import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Button } from "./ui/button"
import { ProductCard } from "./ProductCard"

const DiscountCards = () => {

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Sedang Diskon</h2>
        <div className="flex items-center gap-2">
          <Button variant={"secondary"} className="w-12 h-12 rounded-full flex items-center justify-center">
            <IoIosArrowBack className="w-6 h-6" />
          </Button>
          <Button variant={"secondary"} className="w-12 h-12 rounded-full flex items-center justify-center">
            <IoIosArrowForward className="w-8 h-8" />
          </Button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-hidden">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}

export default DiscountCards
