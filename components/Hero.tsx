"use client";
import Herro from "../public/hero.png";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  const handlesScroll = () => {
    alert("handleScroll");
  };
  return (
    <div className="flex  xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="sm:px-16 px-6 pt-36 flex-1">
        <h1 className="2xl:text-[72px] sm:text-[64px]  font-extrabold">
          Find , Book , or rent a car - quickly and easly !
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our reffortless booking
          process
        </p>
        <CustomButton
          title={"Explore cars"}
          containerStyle={" bg-blue-600 text-white rounded-full mt-10"}
          
          type="button"
          disabled={false}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0;">
          <Image src={Herro} alt="hero" fill className=" object-contain" />
          <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero  bg-repeat-round  -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
