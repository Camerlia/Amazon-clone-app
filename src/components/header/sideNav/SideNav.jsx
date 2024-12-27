import { KeyboardArrowRight } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
const SideNav = ({title, one, two, three}) => {
  return (
    
      <div>
        <h3 className="px-6  text-lg font-semibold my-1">{title}</h3>
        <ul className="text-sm">
          <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
            {one}{" "}
            <span>
              <KeyboardArrowRight />
            </span>
          </li>
          <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
            {two}{" "}
            <span>
              <KeyboardArrowRight />
            </span>
          </li>
          <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
            {three}{" "}
            <span>
              <KeyboardArrowRight />
            </span>
          </li>
        </ul>
      </div>
    
  );
};

export default SideNav;
