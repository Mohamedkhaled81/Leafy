"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { addPlant, updatePlant } from "@/utilities/serverActions";
import { useActionState } from "react";

export default function PlantsForm(props) {
  const {addFlag, plantsData} = props;
  const [pickedImg, setPickedImg] = useState(null);
  const newUpdatePlant = updatePlant.bind(null, plantsData?.id);
  const actionFn = addFlag ? addPlant : newUpdatePlant;
  const [state, formAction, pending] = useActionState(actionFn, {
    errors: null,
  });

  console.log(plantsData)
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
    <div className="text-gray-300 max-w-7xl mx-auto px-4 mt-1">
      <form
        className="flex flex-col text-xl gap-15  mx-auto p-10"
        action={formAction}
      >
        <div className="flex flex-row justify-between ">
          <h1 className="text-4xl font-bold">
            {addFlag ? (<>Add a new plant <span className="text-green-400">+</span></>) : <>Edit the plant's data <span className="text-green-400">*</span></>} 
          </h1>
          <Link
            href={addFlag ? "/plants" : `/plants/${plantsData?.id}`}
            className="self-start font-semibold sm:self-auto rounded-full px-5 py-2 text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black transition cursor-pointer"
          >
            Back
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Plant Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                required
                name="name"
                defaultValue={!addFlag ? plantsData?.name : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.name && (
                <p className="text-red-500 text-sm">{state.errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label>Scientific Name</label>
              <input
                name="scientificName"
                defaultValue={!addFlag ? plantsData?.scientificName : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.scientificName && (
                <p className="text-red-500 text-sm">
                  {state.errors.scientificName}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label>Category</label>
              <input
                required
                name="category"
                defaultValue={!addFlag ? plantsData?.category : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.category && (
                <p className="text-red-500 text-sm">{state.errors.category}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label>Origin</label>
              <input
                required
                name="origin"
                defaultValue={!addFlag ? plantsData?.origin : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.origin && (
                <p className="text-red-500 text-sm">{state.errors.origin}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Description</label>
            <textarea
              required
              name="description"
              defaultValue={!addFlag ? plantsData?.description : ''}
              className="resize-none focus:outline-none focus:ring-0 border-b border-gray-400"
            />
            {state.errors?.description && (
              <p className="text-red-500 text-sm">{state.errors.description}</p>
            )}
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
                defaultValue={!addFlag ? plantsData?.characteristics?.leafShape : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.["characteristics.leafShape"] && (
                <p className="text-red-500 text-sm">
                  {state.errors["characteristics.leafShape"]}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label>Growth Type</label>
              <input
                required
                name="growthType"
                defaultValue={!addFlag ? plantsData?.characteristics?.growthType : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.["characteristics.growthType"] && (
                <p className="text-red-500 text-sm">
                  {state.errors["characteristics.growthType"]}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label>Size</label>
              <input
                required
                name="size"
                defaultValue={!addFlag ? plantsData?.characteristics?.size : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.["characteristics.size"] && (
                <p className="text-red-500 text-sm">
                  {state.errors["characteristics.size"]}
                </p>
              )}
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
                defaultValue={!addFlag ? plantsData?.care?.light : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.["care.light"] && (
                <p className="text-red-500 text-sm">
                  {state.errors["care.light"]}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label>Water</label>
              <input
                required
                name="water"
                defaultValue={!addFlag ? plantsData?.care?.water : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.["care.water"] && (
                <p className="text-red-500 text-sm">
                  {state.errors["care.water"]}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label>Temperature</label>
              <input
                required
                name="temperature"
                defaultValue={!addFlag ? plantsData?.care?.temperature : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.["care.temperature"] && (
                <p className="text-red-500 text-sm">
                  {state.errors["care.temperature"]}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label>Humidity</label>
              <input
                required
                name="humidity"
                defaultValue={!addFlag ? plantsData?.care?.humidity : ''}
                className="focus:outline-none focus:ring-0 border-b border-gray-400"
              />
              {state.errors?.["care.humidity"] && (
                <p className="text-red-500 text-sm">
                  {state.errors["care.humidity"]}
                </p>
              )}
            </div>
          </div>
        </div>

        {(pickedImg || (!addFlag && plantsData?.image)) && (
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl font-semibold">Image Preview</h2>
            <div className="relative w-150 h-150 overflow-hidden rounded-xl">
              <Image
                src={pickedImg || plantsData?.image || undefined}
                alt="slide"
                fill
                className="object-cover "
              />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center justify-center">
            <input
              disabled={pending}
              required={addFlag}
              type="file"
              accept="image/png, image/jpeg"
              name="image"
              onChange={handleImage}
              className="flex-1 font-semibold  text-gray-300 file:mr-4 file:py-2 file:px-4 
                 file:rounded-lg file:border-0 file:bg-green-500 
                 file:text-black hover:file:bg-green-600"
            />

            <button
              disabled={pending}
              className="flex-1 font-semibold bg-green-500 hover:bg-green-600 text-black py-2 rounded-lg"
            >
              {pending ? (
                <span className="animate-pulse">{ addFlag ? "Adding..." : "Editing..."}</span>
              ) : (
                <span>{ addFlag ? "Add plant" : "Edit plant"}</span>
              )}
            </button>
          </div>
          {state.errors?.image && (
            <p className="text-red-500 text-sm">{state.errors.image}</p>
          )}
          {state.errors?.submit && (
            <p className="text-red-500 text-sm">{state.errors.submit}</p>
          )}
        </div>
      </form>
    </div>
  );
}
