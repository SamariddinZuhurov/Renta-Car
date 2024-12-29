import { CarCard, CustormFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

async function Home({ searchParams }: { searchParams: any }) {
  const allCars = await fetchCars(
    searchParams.manufacturer == undefined
      ? "corolla"
      : searchParams.manufacturer
  );
  
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className=" overflow-hidden">
      <Hero />
      <div className="   sm:px-16 mt-10  m-auto py-4 max-w-[1440px]">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl  font-extrabold ">Car catalogue</h1>
          <p>Explore the car you might like </p>
        </div>
        <div className="mt-12 w-full ">
          <SearchBar />
          <div className="flex  justify-start flex-wrap items-center gap-2">
            <CustormFilter />
            <CustormFilter />
          </div>
        </div>
        {!isDataEmpty ? (
          <section className="  p-2 w-full">
            <div className="grid 2xl:grid-cols-4  m-auto  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars.map((car) => {
                return <CarCard car={car} />;
              })}
            </div>
          </section>
        ) : (
          <div className=" mt-16 flex justify-center items-center flex-col gap-2">
            <h3 className="text-black text-xl  font-bold">
              Oops , no result .
            </h3>
            <p className="">{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
