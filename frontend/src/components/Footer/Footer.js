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
                <a href="https://www.abstract.com/blog" className="hover:underline">Blog</a>
              </li>
              <li>
                <a href="/" className="hover:underline">Help Center</a>
              </li>
              <li>
                <a href="https://www.abstract.com/release-notes" className="hover:underline">Release Notes</a>
              </li>
              <li>
                <a href="https://status.goabstract.com/" className="hover:underline">Status</a>
              </li>
            </ul>
          </div>    
          <div className="mr-8">
            <h2 className="mb-1 text-sm font-semibold text-white">Community</h2>
            <ul className="text-white">
              <li>
                <a href="https://x.com/goabstract" className="hover:underline">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/abstract-app/" className="hover:underline">LinkedIn</a>
              </li>
              <li>
                <a href="https://facebook.com/Abstract/" className="hover:underline">Facebook</a>
              </li>
              <li>
                <a href="https://dribbble.com/abstract" className="hover:underline">Dribbble</a>
              </li>
              <li>
                <a href="https://www.abstract.com/podcast" className="hover:underline">Podcast</a>
              </li>
            </ul>
          </div>
          <div className="mr-8">
            <h2 className="mb-1 text-sm font-semibold text-white">Company</h2>
            <ul className="text-white">
              <li>
                <a href="https://www.abstract.com/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="https://abstract.breezy.hr/" className="hover:underline">Careers</a>
              </li>
              <li>
                <a href="https://www.abstract.com/legal" className="hover:underline">Legal</a>
              </li>
              <li className="mt-3">
                <h1 className="font-semibold">Contact Us</h1>
              </li>
              <li>
                <a href="mailto:info@abstract.com" className="hover:underline">info@abstract.com</a>
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
