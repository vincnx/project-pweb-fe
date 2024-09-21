import { DrawerContent } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useSearchParams } from "react-router-dom"
import { useDebounce } from 'use-debounce';
import { useState, useEffect } from 'react';

export const FilterProductDrawerContent = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState(searchParams.get('sort') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [debouncedMinPrice] = useDebounce(minPrice, 1500);
  const [debouncedMaxPrice] = useDebounce(maxPrice, 1500);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('sort', sort);
    newSearchParams.set('minPrice', debouncedMinPrice);
    newSearchParams.set('maxPrice', debouncedMaxPrice);
    setSearchParams(newSearchParams);
  }, [sort, debouncedMinPrice, debouncedMaxPrice, searchParams, setSearchParams]);

  return (
    <DrawerContent className="h-[70vh]">
      <div className="w-full py-4 px-8">
        <span className="text-lg">Filter</span>
      </div>
      <div className="flex flex-col gap-8 overflow-y-scroll px-8 pb-8">
        <div className="flex flex-col gap-8">
          <span className="font-semibold text-lg">Urutkan Dari</span>
          <RadioGroup className="flex flex-col gap-4" defaultValue="terbaru">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="terbaru" id="terbaru" className="w-6 h-6" onClick={() => setSort('')} checked={sort !== 'asc' && sort !== 'desc'} />
              <Label htmlFor="terbaru" className="text-lg">Terbaru</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="harga-rendah-tinggi" id="harga-rendah-tinggi" className="w-6 h-6" onClick={() => setSort('asc')} checked={sort === 'asc'} />
              <Label htmlFor="harga-rendah-tinggi" className="text-lg">Harga Rendah - Tinggi</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="harga-tinggi-rendah" id="harga-tinggi-rendah" className="w-6 h-6" onClick={() => setSort('desc')} checked={sort === 'desc'} />
              <Label htmlFor="harga-tinggi-rendah" className="text-lg">Harga Tinggi - Rendah</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator />
        <div className="flex flex-col gap-8 max-w-96">
          <span className="font-semibold text-lg">Harga</span>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-5 gap-2 items-center">
              <Label className="text-lg col-span-1">Min</Label>
              <div className="relative col-span-4">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">Rp.</span>
                <Input
                  type="text"
                  id="price"
                  className="pl-10 text-lg"
                  placeholder="0"
                  onChange={(e) => setMinPrice(e.target.value)}
                  value={minPrice}
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 items-center">
              <Label className="text-lg col-span-1">Max</Label>
              <div className="relative col-span-4">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">Rp.</span>
                <Input
                  type="text"
                  id="price"
                  className="pl-10 text-lg"
                  placeholder="0"
                  onChange={(e) => setMaxPrice(e.target.value)}
                  value={maxPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DrawerContent>
  )
}

export const FilterProductSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState(searchParams.get('sort') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [debouncedMinPrice] = useDebounce(minPrice, 1500);
  const [debouncedMaxPrice] = useDebounce(maxPrice, 1500);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('sort', sort);
    newSearchParams.set('minPrice', debouncedMinPrice);
    newSearchParams.set('maxPrice', debouncedMaxPrice);
    setSearchParams(newSearchParams);
  }, [sort, debouncedMinPrice, debouncedMaxPrice, searchParams, setSearchParams]);

  return (
    <aside className="hidden lg:flex h-screen max-w-64 xl:max-w-72 flex-col gap-4 pe-4 pb-36 sticky top-24 overflow-y-auto">
      <div className="flex flex-col gap-8">
        <span className="text-lg">Filter</span>
        <div className="flex flex-col gap-8">
          <span className="text-lg font-semibold">Urutkan dari</span>
          <RadioGroup className="flex flex-col gap-4" defaultValue="terbaru">
            <div className="grid grid-cols-5 items-center gap-2">
              <RadioGroupItem value="terbaru" className="w-6 h-6 col-span-1" onClick={() => setSort('')} checked={sort !== 'asc' && sort !== 'desc'} />
              <Label htmlFor="terbaru" className="text-lg col-span-4">Terbaru</Label>
            </div>
            <div className="grid grid-cols-5 items-center gap-2">
              <RadioGroupItem value="harga-rendah-tinggi" className="w-6 h-6 col-span-1" onClick={() => setSort('asc')} checked={sort === 'asc'} />
              <Label htmlFor="harga-rendah-tinggi" className="text-lg col-span-4">Harga Rendah - Tinggi</Label>
            </div>
            <div className="grid grid-cols-5 items-center gap-2">
              <RadioGroupItem value="harga-tinggi-rendah" className="w-6 h-6 col-span-1" onClick={() => setSort('desc')} checked={sort === 'desc'} />
              <Label htmlFor="harga-tinggi-rendah" className="text-lg col-span-4">Harga Tinggi - Rendah</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator />
        <div className="flex flex-col gap-8">
          <span className="font-semibold text-lg">Harga</span>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-5 gap-2 items-center">
              <Label className="text-lg col-span-1">Min</Label>
              <div className="relative col-span-4">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">Rp.</span>
                <Input
                  type="text"
                  id="minPrice"
                  className="pl-10 text-lg"
                  placeholder="0"
                  onChange={(e) => setMinPrice(e.target.value)}
                  value={minPrice}
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 items-center">
              <Label className="text-lg col-span-1">Max</Label>
              <div className="relative col-span-4">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">Rp.</span>
                <Input
                  type="text"
                  id="maxPrice"
                  className="pl-10 text-lg"
                  placeholder="0"
                  onChange={(e) => setMaxPrice(e.target.value)}
                  value={maxPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}