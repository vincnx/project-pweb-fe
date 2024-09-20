import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { IoIosArrowBack, IoIosArrowForward, IoMdHeart } from "react-icons/io"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

export const ProductCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className='p-2 border rounded-md flex flex-col gap-4'>
        <Link to={'/product/1'}>
          <div className='aspect-square w-full rounded-md'>
            <img src={'https://placehold.co/600x400/EEE/31343C'} alt="product" className='w-full h-full object-cover' />
          </div>
          <div>
            <div className='flex flex-col md:flex-row justify-between mt-2'>
              <div>
                <p className='text-md'>Judul</p>
                <p className='text-xl font-semibold'>Rp. 10.000</p>
              </div>
              <p className='text-muted-foreground text-sm'>Sisa Stok: 5</p>
            </div>
            <p className='text-sm text-muted-foreground text-justify hidden md:block mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </Link>
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
