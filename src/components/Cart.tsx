import { IoAdd, IoRemove } from "react-icons/io5"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { IoMdHeart } from "react-icons/io"
import { Separator } from "./ui/separator"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import { formatRupiah } from "@/lib/helpers"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { useRemoveFromCart, useUpdateCart } from "@/services/cart.service"
import { Link } from "react-router-dom"

export const CartItem = ({ imageUrl, name, price, discount, quantity, stock, cartId, productId }: { imageUrl: string, name: string, price: number, discount: number, quantity: number, stock: number, cartId: string, productId: string }) => {
  const updateCartMutation = useUpdateCart()
  const removeFromCartMutation = useRemoveFromCart()

  const [productQuantity, setProductQuantity] = useState<number>(quantity)

  const handleRemoveProduct = () => {
    const confirm = window.confirm("Apakah Anda yakin ingin menghapus produk ini dari keranjang?")
    if (confirm) {
      removeFromCartMutation.mutate({ cartId })
    }
  }

  useEffect(() => {
    const handleUpdateCart = () => {
      updateCartMutation.mutate({
        cartId,
        quantity: productQuantity
      })
    }
    handleUpdateCart()
  }, [productQuantity])

  return (
    <div className="flex gap-4 mb-4">
      <Link to={'/product/' + productId}>
        <div className="aspect-square w-full overflow-hidden rounded-md max-w-40 h-48">
          <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
        </div>
      </Link>

      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <Link to={'/product/' + productId}>
            <p>{name}</p>
          </Link>
          <Link to={'/product/' + productId}>
            <div className="flex flex-col sm:items-end">
              <p className="text-xl font-semibold">{formatRupiah(price - discount)}</p>
              {
                discount > 0 && (
                  <p className="text-sm text-red-400 line-through">{formatRupiah(price)}</p>
                )
              }
            </div>
          </Link>
        </div>

        <div className="flex flex-col w-full items-end">
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
          {
            productQuantity == stock &&
            <span className="text-sm text-muted-foreground">Stok Produk Sisa {stock}</span>
          }

        </div>

        <div className="flex gap-2 w-full">
          <Button onClick={handleRemoveProduct} className="flex-1 sm:flex-none">Hapus dari Keranjang</Button>
          <Button variant={"outline"} size={"icon"}>
            <IoMdHeart className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export const CartSummary = () => {
  const cartSelector = useSelector((state: RootState) => state.cart)
  const [isOpen, setIsOpen] = useState(true)

  const totalPrice = cartSelector.items.reduce((totPrice: number, item) => totPrice + (item.product.price - item.product.discount) * item.quantity, 0)

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
            <p>{formatRupiah(totalPrice)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Pajak (10%)</p>
            <p>{formatRupiah(totalPrice * 0.1)}</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="my-4" />
      <div className="flex justify-between items-center">
        <p>Subtotal</p>
        <p className="font-semibold">{formatRupiah(totalPrice * 1.1)}</p>
      </div>
    </>
  )
}