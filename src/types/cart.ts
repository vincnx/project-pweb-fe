import { Product } from "./product"

export interface Cart {
  id: string
  userId: string
  productId: string
  quantity: number
  product: Product
}