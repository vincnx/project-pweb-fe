import { CartItem, CartSummary } from "@/components/Cart"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RootState } from "@/store/store"
import React from "react"
import { useSelector } from "react-redux"

const CartPage = () => {
  const cartSelector = useSelector((state: RootState) => state.cart)

  return (
    <main className="min-h-full max-w-screen-xl mx-auto px-8 mt-32 mb-60 sm:mb-12">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 flex flex-col">
          <h2 className="text-3xl font-semibold mb-8">Keranjang Anda</h2>
          <div className="flex flex-col gap-8">
            {
              cartSelector.items.map((item) => (
                <React.Fragment key={item.id}>
                  <CartItem
                    imageUrl={item.product.image}
                    cartId={item.id}
                    productId={item.product.id}
                    name={item.product.name}
                    price={item.product.price}
                    discount={item.product.discount}
                    quantity={item.quantity}
                    stock={item.product.stock}
                  />
                  <Separator />
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 flex-col hidden lg:flex">
          <CartSummary />
          <Separator className="my-4" />
          <Button className="w-full">Checkout</Button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t p-8 bg-white bg-opacity-75 backdrop-blur-md z-50 lg:hidden">
        <div className="flex flex-col mb-4">
          <CartSummary />
        </div>
        <Button className="w-full">Checkout</Button>
      </div>
    </main>
  )
}

export default CartPage
