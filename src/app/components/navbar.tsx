'use client'

import Link from "next/link"
import axios from "axios"

const Navbar = () => {

    const seed = async () => {
      // await seedData()
      const res = await axios.get('/api/movies')
      console.log(res)
    }

    return <nav className="bg-gray-800 px-6 py-3">
    <div className="text-xl max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href={'/'}>
            <div className="text-gray-300">Cinematxt</div>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-2">
            <Link href={'/login'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-base font-medium">
              Login
            </Link>
            <Link href={'/movies'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-base font-medium">
              Movies
            </Link>
            <Link href={'/order'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-base font-medium">
              Order
            </Link>
            <Link href={'/profile'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-base font-medium">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar