export default function AddPlant() {
  return (
    <div className="text-gray-300 max-w-7xl mx-auto px-4 mt-10">
      <form className="flex flex-col text-xl gap-20  mx-auto p-10">
        <h1 className="text-4xl font-bold">
          Add a new plant <span className="text-green-400">+</span>
        </h1>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Plant Info</h2>
          <label>Name</label>
          <input name="name" className="focus:outline-none focus:ring-0 border-b border-gray-400" />

          <label>Scientific Name</label>
          <input name="scientificName" className="focus:outline-none focus:ring-0 border-b border-gray-400" />

          <label>Category</label>
          <input name="category" className="focus:outline-none focus:ring-0 border-b border-gray-400" />

          <label>Origin</label>
          <input name="origin" className="focus:outline-none focus:ring-0 border-b border-gray-400" />

          <label>Description</label>
          <textarea name="description" className="resize-none focus:outline-none focus:ring-0 border-b border-gray-400" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Characteristics</h2>

          <label>Leaf Shape</label>
          <input name="leafShape" className="focus:outline-none focus:ring-0 border-b border-gray-400" />

          <label>Growth Type</label>
          <input name="growthType" className="focus:outline-none focus:ring-0 border-b border-gray-400" />

          <label>Size</label>
          <input name="size" className="focus:outline-none focus:ring-0 border-b border-gray-400" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Care</h2>

          <label>Light</label>
          <input name="light" className="focus:outline-none focus:ring-0 border-b border-gray-400" />

          <label>Water</label>
          <input name="water" className="focus:outline-none focus:ring-0 border-b border-gray-400" />

          <label>Temperature</label>
          <input name="temperature" className="focus:outline-none focus:ring-0 border-b border-gray-400" />

          <label>Humidity</label>
          <input name="humidity" className="focus:outline-none focus:ring-0 border-b border-gray-400" />
        </div>

        <button className="mt-6 font-bold bg-green-500 hover:bg-green-600 text-black py-2 rounded-lg">
          Add Plant
        </button>
      </form>
    </div>
  );
}
