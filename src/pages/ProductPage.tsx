import { ProductDisplay, ProductDisplaySkeleton } from "@/components/Product";
import { ProductCardGroup } from "@/components/ProductCard";
import { useFetchProductById, useFetchProducts } from "@/services/product.service";
import { useParams } from "react-router-dom";


const ProductPage = () => {
  const { productId } = useParams()

  const { data: productData, isPending: productIsPending, isFetching: productIsFetching, error: productError } = useFetchProductById(productId ?? '')
  const { data: productsData, isPending: productsIsPending, isFetching: productsIsFetching } = useFetchProducts({ limit: 10 })

  if (productError) return <div>Error: {productError.message}</div>

  return (
    <main className="mt-32 max-w-screen-xl mx-auto px-8 pb-24">
      {
        productIsPending || productIsFetching ? (
          <ProductDisplaySkeleton />
        ) : (
          <ProductDisplay data={productData} />
        )
      }

      <ProductCardGroup title="Produk Lainnya" titleLink="/product" data={productsData} isPending={productsIsPending} isFetching={productsIsFetching} />
    </main>
  )
}

export default ProductPage