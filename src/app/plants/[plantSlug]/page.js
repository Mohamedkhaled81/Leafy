import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

const getPlantDetail = async (plntId) => {
  const response = await fetch(`http://localhost:3000/plants/${plntId}`);
  return response.json();
};

const Plant = async ({ plntId }) => {
  const plant = await getPlantDetail(plntId);
  return (
    <div className="text-gray-300 max-w-7xl mx-auto px-4 mt-10">
      <div className="flex flex-col gap-8">
        <div className="flex  justify-between items-center gap-4">
          <h2 className="text-3xl font-semibold">Modify plant's data</h2>
          <div className="flex gap-5">
            <Link
                href="/plants/add"
                className="self-start font-semibold sm:self-auto rounded-full px-5 py-2 text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black transition cursor-pointer"
            >
                Edit
            </Link>
            <Link
                href="/plants/add"
                className="self-start font-semibold sm:self-auto rounded-full px-5 py-2 text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-black transition cursor-pointer"
            >
                -
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:divide-x md:divide-gray-700 ">
          <div className="relative w-full md:w-[400px] h-[400px] md:h-[500px] overflow-hidden rounded-xl">
            <Image
              src={plant.image}
              alt={plant.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 md:pl-10">
            <h1 className="text-3xl font-bold">{plant.name}</h1>
            <p className="text-sm text-gray-400 italic">
              {plant.scientificName}
            </p>

            <p className="mt-2">{plant.description}</p>

            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Characteristics</h2>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <strong>Leaf:</strong> {plant.characteristics.leafShape}
                </li>
                <li>
                  <strong>Type:</strong> {plant.characteristics.growthType}
                </li>
                <li>
                  <strong>Size:</strong> {plant.characteristics.size}
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Care</h2>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <strong>Light:</strong> {plant.care.light}
                </li>
                <li>
                  <strong>Water:</strong> {plant.care.water}
                </li>
                <li>
                  <strong>Temperature:</strong> {plant.care.temperature}
                </li>
                <li>
                  <strong>Humidity:</strong> {plant.care.humidity}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function PlantsDetails({ params }) {
  // params return is a promise..
  const { plantSlug } = await params;
  return (
    <Suspense
      fallback={
        <div className="flex animate-pulse justify-center items-center mx-auto w-2xl text-gray-300 text-4xl h-10">
          <h1>Loading ...</h1>
        </div>
      }
    >
      <Plant plntId={plantSlug} />
    </Suspense>
  );
}
