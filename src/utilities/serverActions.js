"use server";

import fs from "fs/promises";
import { redirect } from "next/navigation";
import plantSchema from "@/schema/plantSchema";
import { revalidatePath } from "next/cache";

export async function addPlant(prevState, formData) {
  const rawPlant = {
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

  const result = plantSchema.safeParse(rawPlant);

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const validPlant = result.data;
  const file = validPlant.image;

  if (!file || file.size === 0) {
    return {
      errors: {
        image: ["Image is required"],
      },
    };
  }

  if (!file.type.startsWith("image/")) {
    return {
      errors: {
        image: ["Only image files are allowed"],
      },
    };
  }

  const buffer = await file.arrayBuffer();
  const fileName = `${Date.now()}-${file.name}`;

  await fs.writeFile(`public/uploads/${fileName}`, Buffer.from(buffer));

  validPlant.image = `/uploads/${fileName}`;

  const response = await fetch("http://localhost:3000/plants/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validPlant),
  });

  revalidatePath("/plants");
  redirect("/plants");
}
