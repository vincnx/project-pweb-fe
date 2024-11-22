import { ProductDisplay, ProductDisplaySkeleton } from "@/components/Product";
import { ProductCardGroup } from "@/components/ProductCard";
import { useFetchProductByIdPhp, useFetchProductsPhp } from "@/services/product.service";
import { useParams } from "react-router-dom";


const ProductPage = () => {
  const { productId } = useParams()

  const fetchProductPhp = useFetchProductByIdPhp(productId!)
  const fetchProductsPhp = useFetchProductsPhp()

  return (
    <main className="mt-32 max-w-screen-xl mx-auto px-8 pb-24">
      {
        fetchProductPhp.isLoading || fetchProductPhp.isFetching ? (
          <ProductDisplaySkeleton />
        ) : (
          <ProductDisplay data={fetchProductPhp.data} />
        )
      }

      <ProductCardGroup title="Produk Lainnya" titleLink="/product" data={fetchProductsPhp.data} isPending={fetchProductsPhp.isPending} isFetching={fetchProductsPhp.isFetching} />
    </main>
  )
}

export default ProductPage