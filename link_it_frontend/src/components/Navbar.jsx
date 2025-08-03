import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-[#f9fbfc] shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-extrabold text-blue-600 hover:text-blue-700 no-underline"
        >
          <FaLink className="text-blue-500 text-2xl" />
          LINK_IT
        </Link>

        {/* Navigation Links (Right Aligned) */}
        <div className="flex gap-8 text-lg font-medium text-gray-800">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors no-underline"
          >
            📰 Feed
          </Link>
          <Link
            to="/create"
            className="hover:text-blue-600 transition-colors no-underline"
          >
            ✍️ Create
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-600 transition-colors no-underline"
          >
            🔑 Login
          </Link>
          <Link
            to="/register"
            className="hover:text-blue-600 transition-colors no-underline"
          >
            👤 Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
