import PlantsForm from "@/components/plants/plants-form";

export default async function EditPlant({ params }) {
  const { plantId } = await params;
  let plantDetails = null;
  try {
    const response = await fetch(`http://localhost:3000/api/plants/${plantId}`);
    if (response.ok) {
      plantDetails = await response.json();
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }

  plantDetails ?? notFound();

  return <PlantsForm addFlag={false} plantsData={plantDetails}></PlantsForm>;
}
