import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  type: any;
  disabled: boolean;
  title: string;
  containerStyle: string;
  rightIcon?: any;
}
export interface SearchMenuFacturerProps {
  manufactor: any;
  setMenufactor: (manufactor: any) => void;
}
export interface CarCardPorps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

