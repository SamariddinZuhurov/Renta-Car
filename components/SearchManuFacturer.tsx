"use client";
import { SearchMenuFacturerProps } from "@/types";
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
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";
function SearchManuFacturer({
  
  manufactor,
  setMenufactor,
}: SearchMenuFacturerProps) {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
              {filteredManufacturers.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className="cursor-default select-none py-2 pl-10 pr-4}"
                >
                  Create "{query}"
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
                          onClick={() => setQuery(item)}
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
  );
}

export default SearchManuFacturer;
