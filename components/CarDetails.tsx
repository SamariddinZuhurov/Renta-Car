"use client";
import { CarCardPorps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import closeSvg from "../public/close.svg";
import carImg from "../public/hero.png";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
interface CarDetailsProps {
  car: CarCardPorps;
  isOpen: boolean;
  closeModal: () => void;
}
function CarDetails({ car, isOpen, closeModal }: CarDetailsProps) {


  
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10  " onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              onClick={closeModal}
              className=" inset-0  fixed bg-[#0000007c]"
            ></div>
          </TransitionChild>
          <div className=" fixed inset-0 overflow-y-auto ">
            <div className=" flex min-h-full  items-center justify-center  p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100  scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className=" p-5 relative w-full  max-w-lg max-h-[90vh] overflow-y-auto  transform rounded-2xl  text-left  bg-white   shadow-2xl  transition-all  flex-col flex gap-5">
                  <button
                    className=" absolute top-2 *: right-2 z-10 w-fit  p-2 bg-white rounded-full "
                    type="button"
                    onClick={closeModal}
                  >
                    <Image
                      src={closeSvg}
                      alt="closeSVG"
                      width={20}
                      height={20}
                      className=" object-contain"
                    />
                  </button>
                  <div className="  flex flex-1  flex-col  gap-3">
                    <div className="  bg-blue-600 relative w-full  h-40  bg-cover  bg-center   rounded-lg ">
                      <Image
                        src={carImg}
                        fill
                        alt="car"
                        className=" object-contain "
                      />
                    </div>
                    <div className=" flex gap-3">
                      <div className="   w-full   h-24  relative  rounded-lg bg-gray-200">
                        <Image
                          src={carImg}
                          fill
                          alt="car"
                          className=" object-contain "
                        />
                      </div>
                      <div className="   w-full   h-24  relative  rounded-lg bg-gray-200">
                        <Image
                          src={carImg}
                          fill
                          alt="car"
                          className=" object-contain "
                        />
                      </div>
                      <div className="   w-full   h-24  relative  rounded-lg bg-gray-200">
                        <Image
                          src={carImg}
                          fill
                          alt="car"
                          className=" object-contain "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="  flex flex-1 flex-col gap-2">
                    <h1 className="   font-semibold text-xl  campitalize">
                      {car.make} {car.model}
                    </h1>
                    <div className=" flex flex-wrap gap-3  mt-3 ">
                      {Object.entries(car).map(([key, value]) => (
                        <div key={key} className=" text-right  justify-between flex w-full ">
                            <h4 className="  text-gray-600  capitalize ">{key.split("_").join(" ")}</h4>
                            <p className=" text-black font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetails;
