import Image from "next/image";
import logo from "../public/logo.svg";
import { footerLinks } from "../constants/index";
import Link from "next/link";

function Footer() {
  return (
    <footer className="   px-20 flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="  flex max-md:flex-col  flex-wrap  justify-between  gap-5  sm:px-16  py-10">
        <div className="flex flex-col   justify-start  items-start gap-6">
          <Image
            src={logo}
            alt="logo"
            width={118}
            height={18}
            className=" object-contain"
          />
          <p className="text-gray-700 text-base">
            Carhub 2024 <br /> All right reserved
          </p>
        </div>
        <div className="flex-1   flex md:justify-end flex-wrap   max-md:mt-10 gap-20 ">
          {footerLinks.map((link) => {
            return (
              <div
                key={link.title}
                className="flex-1  items-end flex-col   flex md:justify-end flex-wrap max-md:mt-10 gap-14"
              >
                <h3 className=" font-bold">{link.title}</h3>
                {link.links.map((item) => {
                  return <Link key={item.title} href={item.url}>{item.title}</Link>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
