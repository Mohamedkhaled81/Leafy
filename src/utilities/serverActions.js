"use server";
export async function addPlant(formData) {
  const plant = {
    name: formData.get("name"),
    scientificName: formData.get("scientificName"),
    category: formData.get("category"),
    origin: formData.get("origin"),
    description: formData.get("description"),

    characteristics: {
      leafShape: formData.get("leafShape"),
      growthType: formData.get("growthType"),
      size: formData.get("size"),
    },

    care: {
      light: formData.get("light"),
      water: formData.get("water"),
      temperature: formData.get("temperature"),
      humidity: formData.get("humidity"),
    },

    image: formData.get("image"),
  };
  console.log(plant);
}
