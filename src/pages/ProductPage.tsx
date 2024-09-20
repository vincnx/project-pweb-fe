import { ProductCardGroup } from "@/components/ProductCard";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";


const ProductPage = () => {
  const [quantity, setQuantity] = useState<number>(0)

  return (
    <main className="mt-32 min-h-screen max-w-screen-xl mx-auto px-8 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center">
        <img src={'https://placehold.co/600x400/EEE/31343C'} alt="product" className="w-full rounded-md" />
        <div className="flex flex-col gap-1 justify-center">
          <h1 className="text-xl">Judul</h1>
          <h3 className="text-3xl font-bold">Rp. 23432432</h3>
          <p className="text-sm text-muted-foreground mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus explicabo veniam nisi ut quibusdam, delectus atque neque nemo consequuntur accusantium ipsum ullam magni voluptate rem commodi maiores quod at iure.</p>

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

      <ProductCardGroup title="Produk Lainnya" titleLink="/product" />
    </main>
  )
}

export default ProductPage