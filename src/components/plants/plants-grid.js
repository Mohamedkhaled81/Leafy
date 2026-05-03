import Link from "next/link";
import PlantCard from "./plant-card";
import { Suspense } from "react";

const getAllPlants = async () => {
  const response = await fetch("http://localhost:3000/plants");
  return response.json();
};

const Plants = async () => {
  const plants = await getAllPlants();
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default async function PlantsGrid() {
  return (
    <>
      <div className="text-gray-300 max-w-7xl mx-auto px-4 mt-10">
        <div className="flex flex-col gap-8">
          <div className="flex  justify-between items-center gap-4">
            <h2 className="text-4xl font-semibold">
              Add a plant to your shelf
            </h2>
            <Link
              href="/plants/add"
              className="self-start text-xl font-semibold sm:self-auto rounded-full px-5 py-2 text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black transition cursor-pointer"
            >
              +
            </Link>
          </div>
          <Suspense
            fallback={
              <div className="flex animate-pulse justify-center items-center mx-auto w-2xl text-gray-300 text-4xl h-10">
                <h1>Loading ...</h1>
              </div>
            }
          >
            <Plants />
          </Suspense>
        </div>
      </div>
    </>
  );
}
