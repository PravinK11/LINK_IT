function Footer() {
  return (
    <footer className="bg-[#f9fbfc] text-gray-700 border-t border-blue-100 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Left side */}
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600">LINK_IT</span>. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;