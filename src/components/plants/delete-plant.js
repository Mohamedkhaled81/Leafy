import { deletePlant } from "@/utilities/serverActions";

export default function DeletePlant({ plantId }) {
  const actnFn = deletePlant.bind(null, plantId);
  return (
    <form action={actnFn}>
    <button
      className="self-start text-xl font-semibold sm:self-auto rounded-full px-5 py-2 text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-black transition cursor-pointer"
    >
      -
    </button>
    </form>
  );
}