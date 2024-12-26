import MenuIcon from "@mui/icons-material/Menu";
import { headerItems } from "../context/context";
import { useState } from "react";
import { AccountCircle, KeyboardArrowRight } from "@mui/icons-material";

const HeaderBottom = () => {
  const [sidebar, setSideBar] = useState(false);
  return (
    <div className="w-full px-4 h-[36px] bg-amazonLight text-white flex items-center">
      <ul className="flex items-center justify-center gap-4 text-sm tracking-wide">
        <li
          className="flex gap-1 items-center"
          onClick={() => setSideBar(!sidebar)}
        >
          {<MenuIcon />} All
        </li>
        {headerItems.map((item) => (
          <li key={item.id}>{item.title} </li>
        ))}
      </ul>
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 bg-amazonBlue bg-opacity-50">
          <div className="w-full h-full relative ">
            <div className="w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazonLight text-white py-2 px-6 flex  items-center gap-4">
                <AccountCircle />
                <h3 className="font-semibold text-lg tracking-wide">
                  Howdy, Sign In
                </h3>
              </div>
              <div>
                <h3>Digital Contents & Devices</h3>
                <ul>
                  <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
                    Amazon Music{" "}
                    <span>
                      <KeyboardArrowRight />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
