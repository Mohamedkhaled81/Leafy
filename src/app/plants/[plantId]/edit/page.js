import PlantsForm from "@/components/plants/plants-form";

const getPlantDetail = async (plantId) => {
  const response = await fetch(`http://localhost:3000/plants/${plantId}`);

  if(!response.ok) {
    return null;
  }
  return response.json();
};


export default async function EditPlant({ params }) {
  const { plantId } = await params;
  const plantDetails = await getPlantDetail(plantId);
  plantDetails ?? notFound();

  return (
    <PlantsForm addFlag={false} plantsData={ plantDetails }></PlantsForm>
  )
}
