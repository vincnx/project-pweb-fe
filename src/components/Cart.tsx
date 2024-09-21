import { IoAdd, IoRemove } from "react-icons/io5"
import { Button } from "./ui/button"
import { useState } from "react"
import { IoMdHeart } from "react-icons/io"
import { Separator } from "./ui/separator"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import { formatRupiah } from "@/lib/helpers"

export const CartItem = ({ imageUrl, name, price, quantity, stock }: { imageUrl: string, name: string, price: number, quantity: number, stock: number }) => {
  const [productQuantity, setProductQuantity] = useState<number>(quantity)

  const handleRemoveProduct = () => {
    window.confirm("Apakah Anda yakin ingin menghapus produk ini dari keranjang?")
  }

  return (
    <div className="flex gap-4 mb-4">
      <div className="aspect-square w-full overflow-hidden rounded-md max-w-40 h-40">
        <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex flex-col sm:flex-row justify-between w-full sm:items-center">
          <p>{name}</p>
          <p className="text-xl font-semibold">{formatRupiah(price)}</p>
        </div>

        <div className="flex items-center justify-between w-full">
          <span>Kuantitas</span>
          <div className="flex items-center gap-2">
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => {
                if (productQuantity < 2) {
                  return handleRemoveProduct()
                }
                setProductQuantity(productQuantity - 1)
              }}
              disabled={productQuantity <= 1}
              className="w-8 h-8"
            >
              <IoRemove className="w-4 h-4" />
            </Button>
            <p className="text-lg font-semibold">{productQuantity}</p>
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => setProductQuantity(productQuantity + 1)}
              disabled={productQuantity >= stock}
              className="w-8 h-8"
            >
              <IoAdd className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-2 w-full">
          <Button className="flex-1 sm:flex-none">Hapus dari Keranjang</Button>
          <Button variant={"outline"} size={"icon"}>
            <IoMdHeart className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export const CartSummary = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <h2 className={`text-3xl font-semibold flex w-full justify-between items-center cursor-pointer ${isOpen ? 'mb-8' : ''}`}>
            Ringkasan Pesanan
            {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="flex justify-between items-center">
            <p>Total Harga Produk</p>
            <p>Rp. 10.000</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Pajak (10%)</p>
            <p>Rp. 1.000</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="my-4" />
      <div className="flex justify-between items-center">
        <p>Subtotal</p>
        <p className="font-semibold">Rp. 11.000</p>
      </div>
    </>
  )
}