import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/img/OnePlaceLogo1.svg"
              alt="Logo OnePlace"
              className="w-12 h-12"
            />
            <span className="font-medium text-gray-800">ONEPLACE</span>
          </div>

          {/* Links (centered) */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
            <a href="#" className="hover:text-gray-500">
              HOME
            </a>
            <a href="#" className="hover:text-gray-500">
              NEW
            </a>
            <a href="#" className="hover:text-gray-500">
              CATEGORIES
            </a>
            <a href="#" className="hover:text-gray-500">
              MORE SELLS
            </a>
            <a href="#" className="hover:text-gray-500">
              SELL
            </a>
          </div>

          {/* Search + Cart */}
          <div className="hidden md:flex items-center space-x-6 text-gray-800">
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500">Look for</span>
              <img
                src="/img/Lupa.svg"
                alt="Buscar"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-sm text-gray-500">cart</span>
              <img
                src="/img/Carrito.png"
                alt="Carrito"
                className="w-5 h-5"
              />
            </div>
          </div>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <img src="/img/MenuHamburguesa.jpg" alt="Menú" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-3 space-y-2">
          <a href="#" className="block text-gray-800">
            HOME
          </a>
          <a href="#" className="block text-gray-800">
            NEW
          </a>
          <a href="#" className="block text-gray-800">
            CATEGORIES
          </a>
          <a href="#" className="block text-gray-800">
            MORE SELLS
          </a>
          <a href="#" className="block text-gray-800">
            SELL
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
