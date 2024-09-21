import { Product } from "@/types/product"
import { Button } from "./ui/button"
import { FaMinus, FaPlus } from "react-icons/fa6"
import { IoMdHeart } from "react-icons/io"
import { useState } from "react"
import { formatRupiah } from "@/lib/helpers"
import { Skeleton } from "@/components/ui/skeleton"

export const ProductDisplaySkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24 items-center">
      <Skeleton className="w-full h-[480px] rounded-md" />
      <div className="flex flex-col gap-4 justify-center">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-20 w-full" />

        <div className="flex items-center gap-8 mt-6">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-6 w-8" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>

        <div className="flex items-center mt-4 gap-2">
          <Skeleton className="h-10 flex-grow" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  )
}

// Original ProductDisplay component remains unchanged
export const ProductDisplay = ({ data }: { data: Product }) => {
  const [quantity, setQuantity] = useState<number>(0)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24 items-center">
      <img src={data?.image} alt="product" className="w-full rounded-md max-h-[480px] object-contain" />
      <div className="flex flex-col gap-1 justify-center">
        <h1 className="text-xl">{data?.name}</h1>
        <h3 className="text-3xl font-bold">{formatRupiah(data?.price - data?.discount)}</h3>
        {
          data?.discount > 0 &&
          <h3 className="text-xl line-through text-red-400">{formatRupiah(data?.price)}</h3>
        }
        <p className="text-sm text-muted-foreground mt-4">{data?.description}</p>

        <div className="flex items-center gap-8 mt-6">
          <Button variant={'ghost'} size={'icon'} onClick={() => setQuantity(quantity - 1)} disabled={quantity === 0}>
            <FaMinus />
          </Button>
          <p className="font-bold">{quantity}</p>
          <Button variant={'ghost'} size={'icon'} onClick={() => setQuantity(quantity + 1)} >
            <FaPlus />
          </Button>
        </div>

        <div className="flex items-center mt-4 gap-2">
          <Button className="w-full">Tambahkan ke Keranjang</Button>
          <Button size={'icon'} variant={'outline'}>
            <IoMdHeart className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

