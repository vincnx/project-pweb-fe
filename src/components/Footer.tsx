import { memo } from "react"
import { CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export const Footer = memo(() => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <h1 className="text-5xl font-bold">Toko <br />Alfiah.</h1>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
            <p className="md:text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, vitae aut error accusantium illo ipsa reprehenderit corrupti repellendus dolores facilis?</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-primary">Kebijakan Pengiriman</a></li>
              <li><a href="#" className="hover:text-primary">Pengembalian & Pengganti</a></li>
              <li><a href="#" className="hover:text-primary">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <CgFacebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <CgInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <CgTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="md:text-justify mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email address" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Toko Alfiah.</p>
        </div>
      </div>
    </footer>
  )
})
