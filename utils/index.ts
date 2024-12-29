import { CarCardPorps } from "@/types";

export async function fetchCars(fillter:any) {
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${fillter}`,
    {
      headers: {
        "x-rapidapi-key": "c3d8ea1779msh5b4a9770d659a63p136d76jsnb5fd89dcf54f",
        "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    }
  );
  const reslut = await response.json();
  return reslut;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

