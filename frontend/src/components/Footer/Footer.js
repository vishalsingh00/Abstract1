import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-wrap ">
          <div className="mr-8">
            <h2 className="mb-1 text-sm font-semibold text-white">Abstract</h2>
            <ul className="text-white">
              <li>
                <a href="https://flowbite.com/" className="hover:underline">Branches</a>
              </li>
            </ul>
          </div>
          <div className="mr-8">
            <h2 className="mb-1 text-sm font-bold text-white">Resources</h2>
            <ul className="text-white">
              <li>
                <a href="https://github.com/themesberg/flowbite" className="hover:underline">Blog</a>
              </li>
              <li>
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Help Center</a>
              </li>
              <li>
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Release Notes</a>
              </li>
              <li>
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Status</a>
              </li>
            </ul>
          </div>
          
          <div className="mr-8">
            <h2 className="mb-1 text-sm font-semibold text-white">Community</h2>
            <ul className="text-white">
              <li>
                <a href="/" className="hover:underline">Twitter</a>
              </li>
              <li>
                <a href="/" className="hover:underline">LinkedIn</a>
              </li>
              <li>
                <a href="/" className="hover:underline">Facebook</a>
              </li>
              <li>
                <a href="/" className="hover:underline">Dribbble</a>
              </li>
              <li>
                <a href="/" className="hover:underline">Podcast</a>
              </li>
            </ul>
          </div>
          <div className="mr-8">
            <h2 className="mb-1 text-sm font-semibold text-white">Company</h2>
            <ul className="text-white">
              <li>
                <a href="/" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/" className="hover:underline">Careers</a>
              </li>
              <li>
                <a href="/" className="hover:underline">Legal</a>
              </li>
              <li>
                <a href="/" className="mt-1 font-semibold hover:underline">Contact Us</a>
              </li>
              <li>
                <a href="/">info@abstract.com</a>
              </li>
            </ul>
          </div>
          <div className="mr-8 mt-20">
          <a href="https://www.abstract.com/" className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHENnu5kFzmgLNKZf94d3EfTJvpXlG7x_8arlo3Mncz2A6PhGLqwxXFU8AppmJEPnNnPs&usqp=CAU"
              className="h-8 mr-3"
              alt="FlowBite Logo"
            />
            
          </a>
        </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
