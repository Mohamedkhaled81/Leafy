"use client";
import Link from "next/link";
import PlantCard from "@/components/plants/plant-card";
import { useEffect, useState } from "react";

export default function Plants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPlants() {
      try {
        const response = await fetch("http://localhost:3000/api/plants");
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          console.log(message);
          return;
        }
        const plants = await response.json();
        setPlants(plants);
        console.log(plants);
      } catch (error) {
        console.error("Error fetching plants:", error);
      } finally {
        setLoading(false);
      }
    }
    getPlants();
  }, []);

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

          {loading ? (
            <div className="flex animate-pulse justify-center items-center mx-auto w-2xl text-gray-300 text-4xl h-10">
              <h1>Loading ...</h1>
            </div>
          ) : (
            <div className="flex flex-wrap gap-8 justify-center">
              {plants.map((plant) => (
                <PlantCard key={plant._id} plant={plant} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
