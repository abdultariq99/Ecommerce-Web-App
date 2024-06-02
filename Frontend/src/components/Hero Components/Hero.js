import React from "react";
import heroShoe from "../../assets/hero-shoe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

function Hero(props) {
  return (
    <div className="h-screen w-full bg-matte-black flex items-center justify-center">
      <div className="flex flex-row justify-around h-full w-[90%] items-center flex-wrap-reverse sm:flex-nowrap">
        <div className="flex flex-col h-40 justify-around -mt-48 md:-mt-32">
          <h1 className="sm:text-4xl md:text-6xl text-2xl text-aesthetic-white font-Main font-medium text-left">
            Find The Exclusive Shoe
          </h1>
          <p className="text-left text-sm md:text-lg text-text-gray mt-4 w-4/5">
            Step into style with our exclusive collection of shoes, crafted for
            comfort and designed to impress. Discover quality, fashion, and
            unbeatable prices all in one place!
          </p>
          <div className="flex flex-row w-4/5 h-38 mt-10">
            <button className="bg-yellow-main text-aesthetic-white text-sm md:text-lg  py-2 px-4 rounded-full h-12 w-36 mr-10">
              Add To Cart
            </button>
            <a
              href="https://www.google.com/"
              className="text-yellow-main flex flex-row items-center justify-evenly w-36"
            >
              <span>Explore More</span>
              <FontAwesomeIcon icon={faRightToBracket} className="pt-1" />
            </a>
          </div>
        </div>
        <div>
          <img src={heroShoe} height={1200} width={1200} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
