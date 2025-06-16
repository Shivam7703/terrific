"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { logo, logo2 } from "@/assets";
import { BiSolidPhoneCall } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { headercountry } from "@/data/homeData";


const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Split the pathname and get the last part
    const lastSegment = pathname?.split("/").filter(Boolean).pop();

    let path = lastSegment || "home";
    // Store the last word (segment) in the state
    setActiveItem(path);
  }, [pathname]);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setNavItems(header?.navItems || []);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = ( href: string) => {
  
    setIsMobileMenuOpen(false);
  };

  return (
    <>
   
    <header
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300  
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isAtTop ? "bg-[#00000032] text-color1" : "bg-[#000000de] shadow-lg"}`}
    >
      <div className="hidden md:flex items-center justify-between  bg-white h-24 px-5 lg:px-10">
        <Link href={header?.href || "/"}>
          <Image
            src={isAtTop ? logo : logo}
            alt="logo"
            className=" h-16 w-min object-contain md:h-20 my-1"
          />
        </Link>
        <Menu
          navItemsArray={navItems}
          activeItemId={activeItem}
          onTop={isAtTop}
          onItemClick={handleNavItemClick}
        />
        <RightSide onTop={isAtTop}/>
      </div>
<div className="max-lg:hidden flex max-w-[1250px] mx-auto py-3  justify-between gap-1">
  {headercountry?.map((count)=>(
    <div key={count?.id} className="text-center text-white">
<Link href={count?.slug || "#"}><Image src={count?.img} alt="package" className="mx-auto" height={50} width={40}/>
<p className="text-xs">{count.label}</p></Link>
    </div>
  ))}
</div>

      {/* Mobile Section */}
      <div className={`flex md:hidden w-screen items-center  justify-between h-24 px-3 ${
        isAtTop ? "bg-black bg-opacity-40  backdrop-blur-[7px]" : "bg-opacity-100 bg-white"
      }`}>
        <div className="flex items-center relative cursor-pointer text-3xl justify-between w-full">
        <Link href={header?.href || "/"}>
            <Image src={isAtTop ? logo2 : logo} alt="logo" className="w-[80px] object-contain" />
          </Link>
          {isMobileMenuOpen ? (
            <VscChromeClose onClick={handleMobileMenu} className={isAtTop ? "text-white" : "text-black"} />
          ) : (
            <IoMenu onClick={handleMobileMenu} className={isAtTop ? "text-white" : "text-black"} />
          )}
         
        </div>
        {/* <RightSide /> */}
      </div>

      {/* Mobile Menu */}
         <div className={`fixed h-screen left-0 top-24  md:hidden  overflow-x-hidden duration-300 transition-all ${
          isAtTop ? "bg-black bg-opacity-60 backdrop-blur-[7px]" : "bg-opacity-100 bg-white"
        }${
          isMobileMenuOpen ? " !w-full" : " !w-0"
        }`}>
          <MenuMobile
          onTop={isAtTop}
            // navItemsArray={navItems}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeItemId={activeItem}
            onItemClick={handleNavItemClick}
          />
        </div>
     
    </header>
    </>
  );
};

export default Header;

function RightSide(onTop :any) {
  return (
    <div className="flex flex-wrap gap-2 items-center flex-row h-full">
      <a href="tel:+911234567890">
        <button className={`${onTop ? "bg-color1" : "bg-color1"} px-6 py-3 rounded-lg text-white font-bold flex items-center group hover:bg-color2 transition-all shadow-lg`}>
          <BiSolidPhoneCall className="mr-2 text-xl group-hover:scale-x-[-1] transition-all"/>
          +91 1234567890
        </button>  
      </a>
    </div>
  );
}