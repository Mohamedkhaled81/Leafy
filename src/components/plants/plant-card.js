"use client";
import Image from "next/image";
import Link from "next/link";

export default function PlantCard({ plant }) {
  return (
    <Link
      href={`/plants/${plant.id}`}
      className="w-72 cursor-pointer rounded-2xl overflow-hidden border group border-mist-800 bg-mist-900"
    >
      <div className="relative w-full h-64 overflow-hidden ">
        <Image
          src={plant.image}
          alt="plant"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col items-center gap-2 ">
        <p className="text-2xl text-gray-300">{plant.name}</p>
        <span className="text-green-400 text-lg font-semibold">
          ${plant.price.amount}
        </span>
      </div>
    </Link>
  );
}
