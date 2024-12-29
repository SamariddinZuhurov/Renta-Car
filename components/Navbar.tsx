import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import CustomButton from "./CustomButton";

function Navbar() {
  return (
    <header className="  w-full  absolute z-10 ">
      <nav className="  max-w-[1440px] m-auto flex justify-between items-center sm:p-16 py-4">
        <Link href="/" className="flex  justify-center  items-center">
          <Image
            src={logo}
            alt="logo"
            width={118}
            height={18}
            className=" object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          containerStyle=" bg-white text-blue-600 rounded-full  hover:bg-blue-500 hover:text-white   "
          type="button"
          disabled={false}
        />
      </nav>
    </header>
  );
}

export default Navbar;
