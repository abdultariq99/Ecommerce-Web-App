import React from "react";

function NavLinks(props) {
  return (
    <div>
      <ul
        className={`text-aesthetic-white md:flex-row md:space-y-0 z-2 space-y-4 md:flex md:space-x-20 ${
          props.isOpen ? "block items-center justify-center flex-col" : "hidden"
        }`}
      >
        <li className="flex flex-col items-center justify-center">
          <a href="#" className="group block w-min">
            Home
            <div className="bg-yellow-main rounded-sm h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
        </li>
        <li className="flex flex-col items-center justify-center">
          <a href="#" className="group">
            Shop
            <div className="bg-yellow-main rounded-sm h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
        </li>
        <li className="flex flex-col items-center justify-center">
          <a href="#" className="group">
            Products
            <div className="bg-yellow-main rounded-sm h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
        </li>
        <li className="flex flex-col items-center justify-center">
          <a href="#" className="group">
            Contact
            <div className="bg-yellow-main rounded-sm h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
