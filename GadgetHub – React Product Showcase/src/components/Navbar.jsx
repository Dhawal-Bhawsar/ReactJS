import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          ShopNow
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-blue-600 transition duration-300"
            >
              {link}
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;