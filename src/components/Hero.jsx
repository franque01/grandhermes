import Card from "./Card";
import { navMenu, insight, shopIcons, roundImages, heroImages } from "../constants";
import Button from "./Button";
import About from "./About";
import Input from "./Input";

const Hero = () => {
  const show = () => {
    let close = document.querySelector('#sign');

    close.style.display = 'inline-block';
  };
  return (
    <div>
        <div className="ss:mt-16 mt-28"> {/*sub_nav_bar*/}
          <div className="w-full h-14 overflow-x-scroll flex items-center justify-center bg-primary" style={{msOverflowStyle: 'none', scrollbarWidth: 'none',}}>
            <div className="w-full sm:min-w-[768px] sm:flex  sm:justify-center">
              <ul className="flex ss:flex-nowrap flex-wrap  items-center justify-between sm:w-full max-w-[1040px]  min-w-[768px] h-full space-x-2 px-3">
              {navMenu.map((nav) => (
                <li key={nav} className="text-sm text-white">
                  <a href="#" className="border-b pb-0.5 hover:border-b-slate-400">{nav}</a>
                </li>
              ))}
              </ul>
            </div>
          </div> 

          <div className=" h-80 w-full overflow-x-scroll"> {/* Top Hero Images (Card) */}
              <h1 className="text-center my-4 bg-dimblackopacity text-secondary sticky top-0 z-10 ">Premium Products 20% Off</h1>
              <div className="w-full ">
                <Card Images={heroImages}  hideStar={`hidden`} hova={`hover:scale-105  max-w-[90px] `} imgSz={`m-0 p-0 xs:scale-100 scale-125 `} /> {/* hero Images */}
              </div>
           </div>  


          <div className="mt-8 cursor-pointer"> {/* Popular products with hero Images */}
            <div className="flex justify-between text-dimblack ml-4 sm:mr-12 mr-4 xs:flex-row flex-col space-y-4">
              <h1 className="xs:text-2xl text-[26px] ">Popular Products</h1>
              <Button onClick={show}  classN='xs:text-xs text-[11px] xs:inline-block hidden underline' text='See More' />
            </div>
            <Card Images={roundImages} hova={`w-[160px]`} />
            <div className="w-full flex items-center justify-center px-3 ">
                <Button classN='w-full py-1 mt-6 text-lg shadow-lg underline text-sm' onClick={show} text='See More' />             
            </div>
          </div>

          <div className="w-full bg-dimblackopacity xs:h-20 h-28 mt-8 flex items-center justify-center">
            <ul className="xs:w-10/12 w-full  flex text-white xs:flex-nowrap xs:flex-row flex-col space-y-2">
              {insight.map((item) => (
                <li key={item.id}
                  className="w-full text-center justify-center flex items-center ss:text-lg text-sm "
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div> {/* Insights */}

          <div className="my-12 "> {/* shop with confidence */}
              <h1 className="w-full text-center font-semibold">Shop With Confidence</h1>

              <ul className="w-full flex px-6 my-8 xs:flex-nowrap flex-wrap justify-center h-full align-top items-start text-dimblack">
                {shopIcons.map((icon) => (
                  <li 
                    key={icon.icon}
                    className="w-full text-center xs:max-w-full max-w-24 h-full mt-4"
                  >
                    <a className="text-4xl">
                      {<icon.icon className="w-full "/>}
                    </a>
                    <p className="text-sm ">{icon.title}</p>
                  </li>
                ))}
              </ul>
          </div>

          <About /> {/* About section */}

          <div className="text-center mb-8 px-4"> {/* subscribe input */}
            <p>Suscribe To Get Our Latest Updates!</p><br />
            <div className="flex">
              <div className="w-11/12">
                <Input placeholder={`Enter Email Address`} />
              </div>
              <Button classN={`ml-2 py-2 border-0 bg-primary text-white`} text={`Suscribe`} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
