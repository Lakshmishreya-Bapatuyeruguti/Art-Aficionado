import React from "react";

function Footer() {
  return (
    <footer className="bg-black  py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 max-md:text-center">
          <h2 className="text-lg font-semibold text-white">Art Aficionado</h2>
          <p className="mt-2 text-slate-300"> Gallery for NFT's</p>
          <h1 className="text-white mt-2">
            Copyright&copy;2023.All Rights Reserved
          </h1>
        </div>
        <div className="w-full  max-md:text-center md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold  max-md:text-center text-white">
            Quick Links
          </h2>
          <ul className="mt-2 text-slate-300">
            <li className="mb-1">
              <a href="/">Home</a>
            </li>
            <li className="mb-1">
              <span>About Us</span>
            </li>
            <li className="mb-1">
              <span>Services</span>
            </li>
            <li className="mb-1">
              <span>Contact</span>
            </li>
          </ul>
        </div>
        <div className="w-full  max-md:text-center md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-white">Social Links</h2>
          <ul className="mt-2 text-slate-300">
            <li className="mb-1 ">
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li className="mb-1">
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li className="mb-1">
              <a href="https://instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
