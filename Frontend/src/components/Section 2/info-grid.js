import react from "react";
import shoes1 from "../../assets/shoe-info.jpg";
import shoes2 from "../../assets/shoe-2-info.jpg"
import shoe3 from "../../assets/girl-shoe.png"
import shoe4 from "../../assets/two-shoes.png"
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Info() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-3/4 h-54 grid grid-auto-flow grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="border-[2px]">
          <div>
            <a href="#">
              <img src={shoes1} className="h-34 w-18 rounded-2xl"></img>
              <div className="flex flex-row justify-between items-center p-2 px-4">
              <p className="font-Main font-semibold text-gray-600 text-lg">Nike Air 2</p>
              <span className="font-Main text-[12px] text-gray-600">Men's Shoe</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="text-xl font-Main font-bold text-gray-800">250$</span>
              <button
                type="button"
                class="text-yellow-main border-[1.5px] font-sans
                font-bold border-yellow-main w-28 h-10 rounded-full text-sm text-center me-2 mb-2"
              >
                Add to Cart
              </button>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col">
            <p className="text-2xl md:text-3xl lg:text-4xl text-left font-Main font-bold text-gray-800">See Our New Collection</p>
            <button className="w-full text-right pr-2">
            <FontAwesomeIcon className="h-8 md:h-10 text-yellow-main" icon={faCircleArrowRight}></FontAwesomeIcon>
            </button>
            <img src={shoes2}className="h-auto w-auto rounded-2xl mt-auto"></img>
        </div>
        <div className="flex lg:flex-col flex-row md:w-[53vh] sm:w-[40vh] md:justify-around gap-4">
            <img src={shoe3} className="rounded-lg h-[250px] w-[215px] object-contain"></img>
            <div className="flex lg:flex-row flex-col items-center justify-center gap-2 lg:-ml-12 -m-0">
               <span className="text-yellow-main font-semibold lg:w-20 w-28">Shop Now </span>
               <FontAwesomeIcon icon={faRightToBracket} className="pt-1 text-yellow-main" /> 
            <img src={shoe4} className="h-26 w-28 rounded-lg"></img>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
