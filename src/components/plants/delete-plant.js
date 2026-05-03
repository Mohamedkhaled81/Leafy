"use client";
import { redirect } from "next/navigation";

const deletePlant = async (plantId) => {
  const response = await fetch(`http://localhost:3000/plants/${plantId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return null;
  }

  if (response.status === 204) return true;

  return response.json();
};

export default function DeletePlant({ plantId }) {
  const handleDelete = async () => {
    const result = await deletePlant(plantId);

    if (result !== null) {
      redirect("/plants");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="self-start text-xl font-semibold sm:self-auto rounded-full px-5 py-2 text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-black transition cursor-pointer"
    >
      -
    </button>
  );
}