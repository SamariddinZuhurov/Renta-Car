"use client";
import { CarCardPorps } from "@/types";
import { calculateCarRent } from "../utils/index";
import carImg from "../public/hero.png";
import Image from "next/image";
import steering from "../public/steering-wheel.svg";
import tire from "../public/tire.svg";
import gas from "../public/gas.svg";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarDetails from "./CarDetails";
import rightIcon from "../public/right-arrow.svg";
interface carprops {
  car: CarCardPorps;
}
function CarCard({ car }: carprops) {
  const [openModal, setOpenModal] = useState(false);

  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div
      className=" group flex flex-col p-6 justify-center items-start text-black-100 bg-gray-100 hover:bg-white hover:shadow-md rounded-3xl relative"
    >
      <div className=" w-full flex justify-between items-start gap-2">
        <h1 className=" text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h1>
      </div>
      <p className=" flex mt-6 text-[32px] font-extrabold">
        <span className="text-[14px]  font-medium ">$</span>
        {carRent}
        <span className="text-[14px]  font-medium  self-end">/day</span>
      </p>
      <div className=" relative w-full h-40  my-3 object-contain">
        <Image src={carImg} fill alt="img" className=" object-contain" />
      </div>
      <div className=" relative flex mt-2  w-full">
        <div className=" flex group-hover:invisible w-full justify-between  text-gray">
          <div className=" flex flex-col  justify-center items-center  gap-2">
            <Image src={steering} width={20} height={20} alt="steering" />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic " : "Manual"}
            </p>
          </div>
          <div className=" flex flex-col  justify-center items-center  gap-2">
            <Image src={tire} width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className=" flex flex-col  justify-center items-center  gap-2">
            <Image src={gas} width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg + "MPG"}</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpenModal(true)}
        className="  hidden group-hover:flex  absolute bottom-5 w-full   z-10"
      >
        <CustomButton
          rightIcon={rightIcon}
          type=""
          disabled={false}
          title=" View More "
          containerStyle="  text-white  mr-12  w-full p-[16px]  rounded-full bg-blue-600"
        />
      </div>
      <CarDetails
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard;
