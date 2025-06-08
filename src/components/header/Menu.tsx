import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navItemsArray } from "@/data/homeData";
import { MdKeyboardArrowRight } from "react-icons/md";

const Menu = ({ activeItemId, onItemClick, onTop }: any) => {
  return (
    <ul className={`hidden items-center lg:gap-x-5 md:gap-x-0 font-medium ${onTop ? "text-zinc-800" : "text-zinc-800"} md:flex`}>
      {navItemsArray?.map((item: any) => (
        <li key={item?.id} className="group relative transition-all ">
          <Link
            href={item?.href || "#"}
            className={`${activeItemId === item.href ? "bg-white rounded-md bg-opacity-90 text-color1" : "bg-transparent"} px-4 py-3 flex justify-center cursor-pointer items-center gap-1`}
            onClick={() => onItemClick(item.id, item.href)}
          >
            <span className="transition-all hover:text-green2 hover:scale-105 duration-300">
              {item?.label}
            </span>
            {item?.subNav && item.subNav.length !== 0 && (
              <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
            )}
          </Link>
          
          {/* First-level dropdown */}
          {item.subNav && (
            <div className="absolute left-0 top-[100%] z-30 hidden text-zinc-700 w-auto flex-col gap-1 rounded bg-white py-3 shadow-md transition-all group-hover:flex">
              {item.subNav.map((nav: any) => (
                <div key={nav.id} className="group/subnav relative">
                  <Link
                    href={nav.href || "#"}
                    className={`hover:bg-color1 relative w-full flex gap-4 justify-between hover:text-white cursor-pointer items-center py-1 pl-2 pr-8 ${activeItemId === nav.id ? "bg-white bg-opacity-30 backdrop-blur-xl" : "bg-transparent"}`}
                    onClick={() => onItemClick(nav.id, nav.href)}
                  >
                    <span className="whitespace-nowrap pl-3">{nav.label}</span>
                    {nav?.subNav && nav.subNav.length !== 0 && (
                      <MdKeyboardArrowRight className="text-xl" />
                    )}
                  </Link>

                  {/* Second-level dropdown */}
                  {nav.subNav && (
                    <div className="absolute left-full top-0 z-30 hidden text-zinc-700 w-auto flex-col gap-1 rounded bg-white py-3 shadow-md transition-all group-hover/subnav:flex max-h-[500px] overflow-y-auto">
                      {nav.subNav.map((subNav: any) => (
                        <Link
                          key={subNav.id}
                          href={subNav.href || "#"}
                          className={`hover:bg-color1 w-full gap-4 justify-between flex hover:text-white cursor-pointer items-center py-1 pl-2 pr-8 ${activeItemId === subNav.id ? "bg-white bg-opacity-30 backdrop-blur-xl" : "bg-transparent"}`}
                          onClick={() => onItemClick(subNav.id, subNav.href)}
                        >
                          <span className="whitespace-nowrap pl-3">{subNav.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;