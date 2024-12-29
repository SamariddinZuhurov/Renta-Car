

"use client";
import { SearchMenuFacturerProps } from "@/types";
import { Fragment } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  Transition,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import CarLogo from "../public/car-logo.svg";
import Image from "next/image";
import { manufacturers } from "@/constants";
import React, { useState } from "react";
import searchIcon from "../public/magnifying-glass.svg";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [searchMenuFactor, setSearchMenuFactor] = useState("");
  const router = useRouter();
  const filteredManufacturers =
  searchMenuFactor === ""
    ? manufacturers
    : manufacturers.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(searchMenuFactor.toLowerCase().replace(/\s+/g, ""))
      );
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchMenuFactor == "") {
      return alert("Please fill  in the search bar .");
    } else {
      updateSearchParams(searchMenuFactor.toLocaleLowerCase());
    }
  };
  const updateSearchParams = (searchMenuFactor: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (searchMenuFactor) {
      searchParams.set("manufacturer", searchMenuFactor);
    } else {
      searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
    
    
  };
  return (
    <form
      onSubmit={handleSearch}
      className="  flex items-center justify-start max-sm:flex-col  relative max-sm:gap-4 max-w-3xl"
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <div className="flex-1 max-sm:w-full  flex justify-start items-center">
          <Combobox>
            <div className="relative w-full">
              <ComboboxButton className="  absolute  flex  top-[15px]  ">
                <Image
                  src={CarLogo}
                  width={20}
                  height={20}
                  className="ml-4"
                  alt="Car logo"
                />
              </ComboboxButton>
              <ComboboxInput
                value={searchMenuFactor}
                onChange={(e) => setSearchMenuFactor(e.target.value)}
                placeholder="Volkswagen"
                displayValue={(manufactor: string) => manufactor}
                className="  w-full h-[48px] pl-12 p-4 rounded-full max-sm:rounded-full bg-gray-200 outline-none cursor-pointer text-md  "
              />
              <Transition
                as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ComboboxOptions
                  className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  static
                >
                  {filteredManufacturers.length === 0 && searchMenuFactor !== "" ? (
                    <ComboboxOption
                      value={searchMenuFactor}
                      className="cursor-default select-none py-2 pl-10 pr-4}"
                    >
                      Create "{searchMenuFactor}"
                    </ComboboxOption>
                  ) : (
                    filteredManufacturers.map((item) => (
                      <ComboboxOption
                        key={item}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-blue-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              onClick={() => setSearchMenuFactor(item)}
                              className={`block truncate   ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item}
                            </span>

                            {/* Show an active blue background color if the option is selected */}
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active
                                    ? "text-black "
                                    : "text-pribg-primary-purple"
                                }`}
                              ></span>
                            ) : null}
                          </>
                        )}
                      </ComboboxOption>
                    ))
                  )}
                </ComboboxOptions>
              </Transition>
            </div>
          </Combobox>
        </div>
      </div>
      <button
        onClick={() => {
          handleSearch;
        }}
        className="  absolute  top-1   right-0"
      >
        <Image
          src={searchIcon}
          alt="Search icon"
          width={40}
          height={40}
          className=" h-full mr-1 rounded-full"
        />
      </button>
    </form>
  );
}

export default SearchBar;
