import PlantCard from "./plant-card";

export default async function PlantsGrid() {
  const getAllPlants = async () => {
    const response = await fetch("http://localhost:3000/plants");
    return response.json();
  }
  const plants = await getAllPlants();   
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center px-50">
        {plants.map((plant) => <PlantCard key={plant.id} plant={plant}></PlantCard>)}
    </div>
  )
}
