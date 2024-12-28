import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { headerItems } from "../../context/context";
import { useEffect, useRef, useState } from "react";
import { AccountCircle, Close } from "@mui/icons-material";
import SideNav from "../sideNav/SideNav";

const HeaderBottom = () => {
  const [sidebar, setSideBar] = useState(false);
  const ref = useRef()
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(e.target.contains(ref.current)){
        setSideBar(false)
      }
    } )
  },[ref, sidebar])
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
            <motion.div initial={{x:-500, opacity:0}} animate={{x:0, opacity: 1}}  transition={{duration:.5}} ref={ref} className="w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazonLight text-white py-2 px-6 flex  items-center gap-4">
                <AccountCircle />
                <h3 className="font-semibold text-lg tracking-wide">
                  Howdy, Sign In
                </h3>
              </div>
              <SideNav
                title="Digital Contents & Devices"
                one="Amazon Music"
                two="Kindle E-render & Books"
                three="Amazon Appstore"
              />
              <SideNav
                title="Shop by Department"
                one="Electronics"
                two="Computer"
                three="Smart Home"
              />
              <SideNav
                title="Program & Features"
                one="Gift Cards"
                two="Amazon Live"
                three="International Shopping"
              />
              <SideNav
                title="Help & Settings"
                one="Your Accounts"
                two="Customer Care"
                three="Contact Us"
              />
            </motion.div>
            <span
              onClick={() => setSideBar(false)}
              className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
            >
              <Close />
            </span>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
