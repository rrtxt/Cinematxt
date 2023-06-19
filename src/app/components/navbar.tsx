const Navbar = () => {
    return <nav className="bg-gray-800 px-6 py-3">
    <div className="text-xl max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <div className="text-gray-300">Cinematxt</div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-2">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-base font-medium">
              Dashboard
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-base font-medium">
              Movies
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-base font-medium">
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar