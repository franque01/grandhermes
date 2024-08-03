// import { roundImages } from "../constants"
// import Stars from "./Stars";
import { AiFillStar } from "react-icons/ai";

const Card = ({ Images, hideStar, xsNowrap, hova, imgSz }) => {
  return (
    <div className="justify-center w-full flex" >
      <ul className={`flex [1040px]:flex-wrap flex-wrap ss:justify-between justify-center w-full xs:max-w-[1040px] max-w-full ${xsNowrap}`}>
        {Images.map((image) => (
          <li key={image.id} className={`border-dimblackopacity shadow-dimblackopacity shadow-sm flex-col items-center justify-center mx-1 my-4 p-3 transition ease-in-out sm:min-w-32 w-[140px] ss:w-full [1040px]:max-w-2xl  xs:max-w-40 ss:max-w-[180px] self-center xs:mb-0 mb-5 ${hova}`}>
            <a>
              <img src={image.title} alt={image.alt} className={`flex w-full object-center object-cover mb-4 ${imgSz}`} />
            </a>
            <span className="sm:text-sm text-xs text-center w-full inline-block ">
              {image.description}
            </span>
            <span className={`flex flex-col w-full justify-between my-2 `}>
                <span className={`flex mb-2 ${hideStar}`}>
                  <AiFillStar className="text-yellow-500 xs:text-sm text-xs " />
                  <AiFillStar className="text-yellow-500 xs:text-sm text-xs " />
                  <AiFillStar className="text-yellow-500 xs:text-sm text-xs " />
                  <AiFillStar className="text-yellow-500 xs:text-sm text-xs " />
                  <AiFillStar className="text-yellow-500 xs:text-sm text-xs " />
                </span>
                <span className="flex">
                  {image.price}
                  <span className="text-dimblackopacity text-[12px] items-center align-middle line-through">{`${image.priceStrike}`}</span>
                </span>
              </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card
