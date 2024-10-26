import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020C1B]">
      <div className="wrapper py-10">
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-5 text-white">
            <li>Terms of Use</li>
            <li>Privacy-Policy</li>
            <li>About</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex justify-center my-10">
          <p className="max-w-[955px] text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="text-white flex items-center justify-center gap-2">
          <div className="w-[50px] h-[50px] bg-[#04152D] rounded-full flex items-center justify-center cursor-pointer">
            <FaFacebookF className="text-[20px]" />
          </div>
          <div className="w-[50px] h-[50px] bg-[#04152D] rounded-full flex items-center justify-center cursor-pointer">
            <FaInstagram className="text-[20px]" />
          </div>
          <div className="w-[50px] h-[50px] bg-[#04152D] rounded-full flex items-center justify-center cursor-pointer">
            <FaTwitter className="text-[20px]" />
          </div>
          <div className="w-[50px] h-[50px] bg-[#04152D] rounded-full flex items-center justify-center cursor-pointer">
            <FaLinkedin className="text-[20px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
