import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { formatRupiah } from '@/lib/helpers'
import { Product } from '@/types/product'
import { ColumnDef } from '@tanstack/react-table'
import { EllipsisIcon } from 'lucide-react'
import { HiMiniChevronUpDown } from "react-icons/hi2"
import { Link } from 'react-router-dom'

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'no',
    header: 'No.',
    cell: ({ row }) => {
      return <span>{row.index + 1}.</span>
    }
  },
  {
    accessorKey: 'image',
    header: () => {
      return <span className='hidden md:block text-muted-foreground'>Gambar</span>
    },
    cell: ({ row }) => {
      return <img src={row.original.image} alt={row.original.name} width={50} height={50} className='hidden md:block' />
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex items-center gap-2'
        >
          Nama
          <HiMiniChevronUpDown className='w-4 h-4' />
        </Button>
      )
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex items-center gap-2'
        >
          Harga
          <HiMiniChevronUpDown className='w-4 h-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      return formatRupiah(row.original.price)
    }
  },
  {
    accessorKey: 'discount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex items-center gap-2'
        >
          Diskon
          <HiMiniChevronUpDown className='w-4 h-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      if (row.original.discount > 0) {
        return <span>{formatRupiah(row.original.discount)}</span>
      }
      return <span>-</span>
    }
  },
  {
    accessorKey: 'stock',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex items-center gap-2'
        >
          Stok
          <HiMiniChevronUpDown className='w-4 h-4' />
        </Button>
      )
    }
  },
  {
    id: 'actions',
    accessorKey: 'actions',
    header: 'Aksi',
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={'ghost'} size={'icon'}>
              <EllipsisIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link to={`/admin/products/edit/${row.original.id}`}>
              <DropdownMenuItem className='cursor-pointer'>
                Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className='cursor-pointer'>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu >
      )
    }
  }
]