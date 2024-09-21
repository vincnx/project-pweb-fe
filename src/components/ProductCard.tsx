import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"
import { IoIosArrowBack, IoIosArrowForward, IoMdHeart } from "react-icons/io"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { Product } from "@/types/product"
import { formatRupiah } from "@/lib/helpers"

export const ProductCard = ({ className, product }: { className?: string, product: Product }) => {
  return (
    <div className={className}>
      <div className='p-2 border rounded-md flex flex-col gap-4 h-full'>
        <Link to={`/product/${product.id}`} className="flex flex-col h-full">
          <div className='aspect-square w-full rounded-md overflow-hidden'>
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-full object-cover rounded-md'
            />
          </div>
          <div className="flex flex-col flex-grow">
            <div className='flex flex-col justify-between mt-2 flex-grow'>
              <div>
                <p className="font-medium line-clamp-2 h-12">{product.name}</p>
                <p className='text-xl font-semibold mt-1'>{formatRupiah(product.price)}</p>
              </div>
              <p className='text-muted-foreground text-sm mt-2'>Sisa Stok: {product.stock}</p>
            </div>
            <p className='text-sm text-muted-foreground text-justify hidden md:block mt-2 line-clamp-3'>{product.description}</p>
          </div>
        </Link>
        <div className="gap-2 hidden md:flex mt-auto">
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

export const ProductCardGroup = ({ title, titleLink }: { title: string, titleLink: string }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Link to={titleLink}>
          <h2 className="text-3xl font-semibold">{title}</h2>
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant={isAtStart ? "outline" : "secondary"}
            className="w-12 h-12 rounded-full flex items-center justify-center"
            onClick={scrollLeft}
            disabled={isAtStart}
          >
            <IoIosArrowBack className="w-6 h-6" />
          </Button>
          <Button
            variant={isAtEnd ? "outline" : "secondary"}
            className="w-12 h-12 rounded-full flex items-center justify-center"
            onClick={scrollRight}
            disabled={isAtEnd}
          >
            <IoIosArrowForward className="w-8 h-8" />
          </Button>
        </div>
      </div>
      <div ref={scrollContainerRef} className="flex gap-2 md:gap-4 overflow-x-scroll">
        <ProductCard className="min-w-64" />
        <ProductCard className="min-w-64" />
        <ProductCard className="min-w-64" />
        <ProductCard className="min-w-64" />
        <ProductCard className="min-w-64" />
        <ProductCard className="min-w-64" />
        <ProductCard className="min-w-64" />
        <ProductCard className="min-w-64" />
      </div>
    </>
  )
}

export const ProductCardSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className='p-2 border rounded-md flex flex-col gap-4 h-full'>
        <div className="flex flex-col h-full">
          <Skeleton className="aspect-square w-full rounded-md" />
          <div className="flex flex-col flex-grow">
            <div className='flex flex-col justify-between mt-2 flex-grow'>
              <div>
                <Skeleton className="h-4 w-3/4 mt-2" />
                <Skeleton className="h-6 w-1/2 mt-1" />
              </div>
              <Skeleton className="h-4 w-1/4 mt-2" />
            </div>
            <Skeleton className="h-6 w-full mt-2 hidden md:block" />
          </div>
        </div>
        <div className="gap-2 hidden md:flex mt-auto">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  )
}
