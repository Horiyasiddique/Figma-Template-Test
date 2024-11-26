import React from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import logo from "../../../src/public/logo.png";

function Header() {
  return (
    <div>
      {/* Navbar Container */}
      <div className="w-screen py-8 px-[2.3rem] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <div>
            <Image src={logo} alt="fashion logo image" />
          </div>
          <div id="fashion">
            <h1 className="font-black text-xl">FASHION</h1>
          </div>
        </div>

        {/* Links and Sign-Up Button for Medium and Large Screens */}
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <ul className="flex items-center justify-between gap-7">
              <li className="text-[1rem] font-medium cursor-pointer">
                CATALOGUE
              </li>
              <li className="text-[1rem] font-medium cursor-pointer">
                FASHION
              </li>
              <li className="text-[1rem] font-medium cursor-pointer">
                FAVOURITE
              </li>
              <li className="text-[1rem] font-medium cursor-pointer">
                LIFE STYLE
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-black text-white py-[0.4rem] px-[1rem] rounded-sm">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-black cursor-pointer" size={24} />
            </SheetTrigger>
            <SheetContent>
              {/* Links for Small Screens */}
              <div>
                <ul className="flex flex-col items-center justify-between gap-7">
                  <li className="text-[1rem] font-medium cursor-pointer">
                    CATALOGUE
                  </li>
                  <li className="text-[1rem] font-medium cursor-pointer">
                    FASHION
                  </li>
                  <li className="text-[1rem] font-medium cursor-pointer">
                    FAVOURITE
                  </li>
                  <li className="text-[1rem] font-medium cursor-pointer">
                    LIFE STYLE
                  </li>
                </ul>
              </div>
              {/* Sign-Up Button */}
              <div>
                <button className="bg-black text-white py-[0.4rem] px-[1rem] rounded-sm ">
                  SIGN UP
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Header;
