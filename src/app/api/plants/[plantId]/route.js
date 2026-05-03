import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, {params}) {
  try {
    const client = await clientPromise;
    const { plantId } = await params;

    const db = client.db("plantsDb");

    const plant = await db
      .collection("plants")
      .findOne({_id: new ObjectId(plantId)});
    
    console.log(plant);
    return NextResponse.json(plant);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch plant" },
      { status: 500 }
    );
  }
}