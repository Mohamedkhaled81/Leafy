"use server";

import fs from "fs/promises";
import { redirect } from "next/navigation";
import plantSchema from "@/schema/plantSchema";
import { revalidatePath } from "next/cache";

function retrieveRawData(formData) {
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
  return rawPlant;
}

function validatePlant(plantRaw, requireImage = true) {
  const result = plantSchema.safeParse(plantRaw);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  const file = result.data.image;

  if (requireImage) {
    if (!file || file.size === 0) {
      return {
        success: false,
        errors: { image: ["Image is required"] },
      };
    }

    if (!file.type.startsWith("image/")) {
      return {
        success: false,
        errors: { image: ["Only image files are allowed"] },
      };
    }
  } else {
    if (file && file.size > 0 && !file.type.startsWith("image/")) {
      return {
        success: false,
        errors: { image: ["Only image files are allowed"] },
      };
    }
  }

  return { success: true, data: result.data };
}

export async function addPlant(prevState, formData) {
  const rawPlant = retrieveRawData(formData);
  const result = validatePlant(rawPlant, true);

    if (!result.success) {
    return { errors: result.errors };
  }

  const validPlant = result.data;
  const file = validPlant.image;

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

  if (!response.ok) {
    return {
      errors: {
        submit: [`Failed to add plant: ${response.statusText}`],
      },
    };
  }

  revalidatePath("/plants");
  redirect("/plants");
}

export async function updatePlant(plantId, prevState, formData) {
  const rawPlant = retrieveRawData(formData);
  const result = validatePlant(rawPlant, false);
  if (!result.success) {
    return { errors: result.errors };
  }

  const validPlant = result.data;

  const file = validPlant.image;

  if (file && file.size > 0) {
    const buffer = await file.arrayBuffer();
    const fileName = `${Date.now()}-${file.name}`;
    await fs.writeFile(`public/uploads/${fileName}`, Buffer.from(buffer));

    validPlant.image = `/uploads/${fileName}`;
  } else {
    delete validPlant.image;
  }

  const response = await fetch(`http://localhost:3000/plants/${plantId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validPlant),
  });

  if (!response.ok) {
    return {
      errors: {
        submit: [`Failed to update plant: ${response.statusText}`],
      },
    };
  }

  revalidatePath("/plants");
  revalidatePath(`/plants/${plantId}`);
  redirect(`/plants/${plantId}`);
}
