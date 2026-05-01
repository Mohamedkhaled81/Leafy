"use client";
import Image from "next/image";
import { useState } from "react";
import { addPlant } from "@/utilities/serverActions";

export default function AddPlant() {
  const [pickedImg, setPickedImg] = useState(null);

  function handleImage(evnt) {
    const file = evnt.target.files[0];
    if (!file) {
      setPickedImg(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickedImg(fileReader.result);
    };
  }
  return (
    <div className="text-gray-300 max-w-7xl mx-auto px-4 mt-10">
      <form
        className="flex flex-col text-xl gap-20  mx-auto p-10"
        action={addPlant}
      >
        <h1 className="text-4xl font-bold">
          Add a new plant <span className="text-green-400">+</span>
        </h1>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Plant Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                required
                name="name"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Scientific Name</label>
              <input
                name="scientificName"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Category</label>
              <input
                required
                name="category"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Origin</label>
              <input
                required
                name="origin"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Description</label>
            <textarea
              required
              name="description"
              className="resize-none focus:outline-none focus:ring-0 border-b border-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Characteristics</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label>Leaf Shape</label>
              <input
                required
                name="leafShape"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Growth Type</label>
              <input
                required
                name="growthType"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Size</label>
              <input
                required
                name="size"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label>Light</label>
              <input
                required
                name="light"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Water</label>
              <input
                required
                name="water"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Temperature</label>
              <input
                required
                name="temperature"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Humidity</label>
              <input
                required
                name="humidity"
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
            </div>
          </div>
        </div>

        {pickedImg && (
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl font-semibold">Image Preview</h2>
            <div className="relative w-150 h-150 overflow-hidden rounded-xl">
              <Image
                src={pickedImg}
                alt="slide"
                fill
                className="object-cover "
              />
            </div>
          </div>
        )}

        <div className="flex gap-4 items-center justify-center">
          <input
            type="file"
            accept="image/png, image/jpeg"
            name="image"
            onChange={handleImage}
            className="flex-1 font-semibold  text-gray-300 file:mr-4 file:py-2 file:px-4 
               file:rounded-lg file:border-0 file:bg-green-500 
               file:text-black hover:file:bg-green-600"
          />

          <button className="flex-1 font-semibold bg-green-500 hover:bg-green-600 text-black py-2 rounded-lg">
            Add Plant
          </button>
        </div>
      </form>
    </div>
  );
}
