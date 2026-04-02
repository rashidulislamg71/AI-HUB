import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">AI Hub</h2>
          <p className="text-sm">
            Discover the best AI tools for coding, writing, learning and productivity.
            Explore, compare and choose your favorite tools easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-400 cursor-pointer">Home</li>
            <li className="hover:text-teal-400 cursor-pointer">Products</li>
            <li className="hover:text-teal-400 cursor-pointer">Cart</li>
            <li className="hover:text-teal-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Popular AI</li>
            <li>New Tools</li>
            <li>Favorite</li>
            <li>Most Wanted</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Email: support@aihub.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>

          <div className="flex gap-3 mt-3">
            <span className="hover:text-teal-400 cursor-pointer">Facebook</span>
            <span className="hover:text-teal-400 cursor-pointer">YouTube</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2026 AI Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;