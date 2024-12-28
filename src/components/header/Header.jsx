import {
  ArrowDropDownOutlined,
  LocationOnOutlined,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { logo } from "../../assets";
import { useState } from "react";
import { allItems } from "../context/context";
import HeaderBottom from "./headerBottom/HeaderBottom";

const Header = () => {
  const [show, setShow] = useState(false);
  const showdetails = allItems.name;
  console.log(showdetails);
  return (
    <div className='w-full bg-amazonBlue'>
      <div className="max-w-container mx-auto text-white px-4 py-3 gap-4 flex items-center">
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-ponter duration-100">
          <LocationOnOutlined />
          <p className="text-sm text-lightText font-light flex flex-col items-center">
            Deliver to{" "}
            <span className="text-sm text-lightText font-light">Camelia</span>
          </p>
        </div>
        <div
          className="h-10 rounded-md flex flex-grow relative"
          onClick={() => setShow(!show)}
        >
          <span className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-point duration-300 text-sm text-amazonBlue font-light flex items-center justify-center rounded-tl-md rounded-bl-md">
            All{" "}
            <span>
              <ArrowDropDownOutlined />
            </span>
          </span>
          {show && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white-[1px] border-amazonBlue text-black p-2 flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    key={item.id}
                    className="py-2 text-sm tracking-wide font-light border-b-[1px] border-b-transparent hover:border-b-amazonBlue hover:bg-amazonBlue/10 cursor-pointer duration-100 "
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazonBlue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazonYellow hover:bg-[#f3a847] duration-300 text-amazonBlue cursor-pointer rounded-tr-md rounded-br-md">
            <Search />
          </span>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <p className="text-xs text-lightText font-light">Hello, sign in</p>
          <p className="text-xs text-lightText font-semibold mt-1">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlined />
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-xs text-lightText font-semibold mt-1">Orders</p>
        </div>
        <div className='flex items-start justify-center relative'>
          <ShoppingCart />
          <p className="text-xs font-sembold mt-3 text-white">Cart <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazonBlue rounded-full flex justify-center items-center">0</span></p>
        </div>
        
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
