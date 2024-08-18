import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-wrap gap-5 justify-around">
          <div className="mr-8">
            <h2 className="mb-1 text-sm font-semibold text-white">Abstract</h2>
            <ul className="text-white">
              <li>
                <a href="/" className="hover:underline">Branches</a>
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
              <li className="mt-3">
                <a href="/" className=" font-semibold hover:underline">Contact Us</a>
              </li>
              <li>
                <a href="/">info@abstract.com</a>
              </li>
            </ul>
          </div>
          <div className="mr-8 mt-28 flex items-end">
          <a href="https://www.abstract.com/" >
            <img
              src="https://i.ibb.co/wzBQDMH/copyright.jpg"
              className="w-full mr-3"
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
