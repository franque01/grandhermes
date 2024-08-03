import { useState } from "react";
import { AlignJustify, UserRound, ShoppingCart} from "lucide-react";
import { IoClose, IoSearchCircle, IoDiamondOutline } from "react-icons/io5";
import { Menu } from "../constants/index";


const Navbar = () => {
    // const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState("false");

    const show = () => {
      let close = document.querySelector('#sign');

      close.style.display = 'inline-block';
    };

  return (
    <nav className="ss:border-b-0 border-b-2 pb-2 bg-white w-full top-0 z-20 fixed">
      <div className="flex justify-between h-14 items-center px-2.5 mt-2">
        <div className="xs:text-3xl text-2xl flex items-center z-20">
          <IoDiamondOutline className="text-dimwhite sm:text-3xl text-2xl rotate-180 mx-1" />
          <a href="#" target="_blank">
            <span className="glaze-font">GRAND</span>
            <span className="playright-font text-primary xs:text-2xl text-lg">hermes</span>
          </a>
        </div>{/* Logo */}
        <div className="rounded-md relative ss:flex hidden justify-end items-center h-10 w-full mx-4">
          <input
            type="text"
            placeholder="search..."
            className="border border-dimblackopacity rounded-2xl w-full h-full px-4 hover:border-dimblack transition eas-in-out"
          />
          <button className="absolute right-0.5">
            <IoSearchCircle className="text-primary text-4xl" />
          </button>
        </div> {/* search */}
        <div className="flex gap-x-4 mr-1 items-center z-30">
            <a href="#" id="signin" onClick={show}  className="gap-2 text-xl flex "><span className="xs:flex hidden text-sm items-center">Account</span><UserRound className="text-dimblack text-xl transition-all ease-in-out duration-500" /></a>
            <a href="#" className="text-xl flex gap-2"><span className="xs:flex hidden text-sm items-center">Cart</span><ShoppingCart className="text-dimblack text-xl " /></a>
            <button 
                className="text-dimblack text-xl xs:hidden flex items-center justify-end cursor-pointer  w-6 h-12 z-50"
                 onClick={() => setToggle(!toggle)}
            >
                {
                    toggle ? <AlignJustify className="text-dimblack text-3xl" /> :  <IoClose className="text-dimblack text-3xl "  />
                }
            </button>
        </div>{/* menu toggle and Icon */}
      </div>
   
      <div className="ss:hidden  mx-1">
        <div className="max-w-full rounded-md relative flex justify-end items-center h-10">
          <input
            type="text"
            placeholder="search..."
            className="border border-dimblackopacity rounded-2xl w-full h-full px-4 hover:border-dimblack transition ease-in-out"
          />
          <button className="absolute right-1.5">
            <IoSearchCircle className="text-primary text-4xl" />
          </button>
        </div>
      </div>{/* search bar */}

      <div className={` ${toggle ? '-translate-x-full' : 'translate-x-0'} fixed z-20 w-10/12 h-full bg-white px-12 pt-10 transition-transform .3s ease-in-out `}>
        <ul className="flex flex-col justify-between  min-h-96 text-dimblack">
          {Menu.map((menu) => (
            <li key={menu.id} className="border-b border-dimblack pb-2 cursor-pointer hover:text-dimblackopacity transition ease-in-out">
              <a href="menu.href">{menu.id}</a>
            </li>            
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
