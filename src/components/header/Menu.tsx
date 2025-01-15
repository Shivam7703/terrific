import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navItemsArray } from "@/data/homeData";

const Menu = ({ activeItemId, onItemClick, onTop }: any) => {
  return (
    <ul
      className={`hidden items-center lg:gap-x-5 md:gap-x-0 font-medium ${
        onTop ? "text-white" : "text-black"
      } md:flex`}
    >
      {navItemsArray?.map((item: any) => (
        <li key={item?.id} className="group relative transition-all">
          <Link
            href={item?.href || "#"}
            className="flex cursor-pointer items-center"
            onClick={() => onItemClick(item.id, item.href)}
          >
            <span
              className={`font px-4 py-3 transition-all hover:text-color2 hover:scale-105 duration-300 
             
              ${
                activeItemId === item.href
                  ? "bg-white  rounded-md bg-opacity-90 text-green3"
                  : "bg-transparent"
              }`}
            >
              {item?.label}
            </span>
            {item?.subNav && item.subNav?.length !== 0 && (
              <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0 -ml-2" />
            )}
          </Link>
          {/* dropdown */}
          {item.subNav && (
            <div
              className={`absolute left-0 top-[100%] z-30 hidden w-auto flex-col gap-1 rounded bg-white py-3 shadow-md transition-all group-hover:flex ${
                onTop ? "bg-opacity-30 text-white" : "bg-opacity-100 text-black"
              }`}
            >
              {item.subNav.map((nav: any) => (
                <Link
                  key={nav.id}
                  href={nav.href || "#"}
                  className={`hover:bg-white bg-opacity-30 flex cursor-pointer items-center py-1 pl-2 pr-8 hover:text-color2 
                    ${
                      activeItemId === nav.id
                        ? " bg-white bg-opacity-30 backdrop-blur-xl"
                        : "bg-transparent"
                    }`}
                  onClick={() => onItemClick(nav.id, nav.href)}
                >
                  <span className="whitespace-nowrap pl-3">{nav.label}</span>
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
