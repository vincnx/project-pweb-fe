import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { IoMdHeart } from "react-icons/io"

export const ProductCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className='p-2 border rounded-md flex flex-col gap-4'>
        <div className='aspect-square w-full rounded-md'>
          <img src={'https://placehold.co/600x400/EEE/31343C'} alt="product" className='w-full h-full object-cover' />
        </div>
        <div>
          <div className='flex flex-col md:flex-row justify-between mb-2'>
            <div>
              <p className='text-md'>Judul</p>
              <p className='text-xl font-semibold'>Rp. 10.000</p>
            </div>
            <p className='text-muted-foreground text-sm'>Sisa Stok: 5</p>
          </div>
          <p className='text-sm text-muted-foreground text-justify hidden md:block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="gap-2 hidden md:flex">
          <Button className="flex-1">
            Tambahkan ke Keranjang
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <IoMdHeart className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
