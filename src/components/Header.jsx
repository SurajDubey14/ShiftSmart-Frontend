// import React from "react";

// const Header = () => {
//   return (
//     <div className="header lg:block hidden">
//       <div className="flex items-center justify-between px-44 py-2 shadow-xl">
//         <div className="logo">
//           <img src="./white-logo.png" alt="" className="w-18 h-14" />
//         </div>
//         <nav>
//           <ul className="flex items-center justify-center text-sm  gap-x-10">
//             <li>
//               <Link to="" className="hover:font-semibold">About</Link>
//             </li>
//             <li>
//               <Link to="" className="hover:font-semibold">Book Your Slot</Link>
//             </li>
//             <li>
//               <Link to="" className="hover:font-semibold">Support</Link>
//             </li>
//             <li>
//               <Link to="" className="hover:font-semibold">Contact</Link>
//             </li>
//             <li>
//               <button className="bg-[var(--color-primary)] active:scale-95 text-white px-4 py-1 rounded-md cursor-pointer">Sign In</button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔵 Navbar */}
      <div className="shadow-2xl px-6 md:px-20 py-3 mb-5 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img src="./white-logo.png" alt="logo" className="w-16 h-12" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-x-10 text-sm">
            <li>
              <Link to="/about" className="hover:font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:font-semibold">
                Book Your Slot
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:font-semibold">
                Support
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:font-semibold">
                Contact
              </Link>
            </li>
            <li>
              <button className="bg-[var(--color-primary)] active:scale-95 text-white px-4 py-2 rounded-md">
                Sign In
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {menuOpen ? (
            <FaTimes
              size={22}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <FaBars
              size={22}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-sm transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="bg-white w-3/4 h-full p-6">
          {/* Close Button */}
          <div className="flex justify-between  items-center">
            <div>
              <Link to={"/"}>
                <img src="./white-logo.png" alt="logo" className="w-16 h-12" />
              </Link>
            </div>
            <FaTimes
              size={22}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          </div>

          {/* Menu Links */}
          <ul className="flex flex-col gap-6 mt-10 text-lg">
            <li>
              <Link to="#" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setMenuOpen(false)}>
                Book Your Slot
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setMenuOpen(false)}>
                Support
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-md w-full">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
