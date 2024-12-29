"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
function CustomButton({
  title,
  containerStyle,
  rightIcon,
  type,
  disabled,
}: CustomButtonProps) {
  return (
    <button
      className={`flex-row flex   relative justify-center items-center py-3 px-6 outline-none ${containerStyle}`}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="   relative h-6 w-6 ">
          <Image
            src={rightIcon}
            alt=" right icon"
            fill
            className="  object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
