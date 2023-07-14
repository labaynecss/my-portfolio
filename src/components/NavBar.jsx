import React from "react";
import { navigation } from "./../data";
import { Link } from "react-scroll";
export const NavBar = () => {
  return (
    <nav className="navbar border-b-[#6699CC] ">
      <ul className="flex space-x-8 capitalize lg:text-xl md:text-[15px] sm:text-[10px]">
        {navigation.map((items, index) => {
          return (
            <li
              className="text-primary hover:text-[#6699CC] cursor-pointer  "
              key={index}
            >
              <Link
                to={items.href}
                spy={true}
                smooth={true}
                duration={400}
                offset={-70}
                className="transition-all duration-400"
              >
                {items.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
