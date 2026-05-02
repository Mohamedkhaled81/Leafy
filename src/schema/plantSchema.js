import { z } from "zod";

const plantSchema = z.object({
  name: z.string().min(2),
  scientificName: z.string().min(2),
  category: z.string().min(2),
  origin: z.string().min(2),
  description: z.string().min(10),

  characteristics: z.object({
    leafShape: z.string().min(2),
    growthType: z.string().min(2),
    size: z.string().min(1),
  }),

  care: z.object({
    light: z.string().min(2),
    water: z.string().min(2),
    temperature: z.string().min(2),
    humidity: z.string().min(2),
  }),

  image: z.any(),
});


export default plantSchema;
