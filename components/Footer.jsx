import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 paddingContainer">
      <div className="flex justify-between gap-6 flex-wrap flex-col md:flex-row w-full">
        <div className="flex items-start flex-col gap-4 p-4">
          <div className="flex items-center gap-2">
            <div>
              <Image src="/logo.svg" alt="Logo" width={30} height={30} />
            </div>
            <div className="text-2xl font-urbanist text-balance font-medium">
              GYM Center
            </div>
          </div>
          <div className="w">
            Highlight benefits of each exercise, both physical and mental
          </div>
        </div>
        <div className="flex items-start flex-col gap-3 p-4">
          <h3 className="text-lg font-urbanist font-medium">Sitemap</h3>
          <ul className="flex flex-col gap-1 text-sm font-medium">
            <li className="hover:text-primary opacity-50 hover:opacity-100">
              <Link href="/">About Us</Link>
            </li>
            <li className="hover:text-primary opacity-50 hover:opacity-100">
              <Link href="/">Promos</Link>
            </li>
            <li className="hover:text-primary opacity-50 hover:opacity-100">
              <Link href="/">News & Blogs</Link>
            </li>
            <li className="hover:text-primary opacity-50 hover:opacity-100">
              <Link href="/">Help Center</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start flex-col gap-3 p-4">
          <h3 className="text-lg font-urbanist font-medium">Support</h3>
          <ul className="flex flex-col gap-1 text-sm font-medium">
            <li className="hover:text-primary opacity-50 hover:opacity-100">
              <Link href="/">FAQ</Link>
            </li>
            <li className="hover:text-primary opacity-50 hover:opacity-100">
              <Link href="/">Support Center</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start flex-col gap-3 p-4">
          <h3 className="text-lg font-urbanist font-medium">Social Media</h3>
          <div className="flex flex-wrap gap-2 font-medium">
            <Link
              href="https://github.com/developmentwithumer/"
              target="_blank"
            >
              <Instagram className="hover:text-primary" />
            </Link>
            <Link
              href="https://github.com/developmentwithumer/"
              target="_blank"
            >
              <Twitter className="hover:text-primary" />
            </Link>
            <Link
              href="https://github.com/developmentwithumer/"
              target="_blank"
            >
              <Facebook className="hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-6 items-center flex-wrap text-sm">
          <div className='leading-6'>
            <span className="opacity-50 mr-0.5">
              &copy; 2024 Gym Center. All rights reserved.
            </span>{" "}
            <span className="font-urbanist">
              <span className="opacity-50">Developed by{" "}</span>
              <Link
                className="font-bold text-primary"
                href="https://github.com/developmentwithumer/"
                target="_blank"
              >
                DevelopmentWithUmer
              </Link>
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-4 opacity-50">
            <span>Terms</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
