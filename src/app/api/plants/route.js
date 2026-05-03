import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("plantsDb");

    const plants = await db
      .collection("plants")
      .find({})
      .toArray();

    return NextResponse.json(plants);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch plants" },
      { status: 500 }
    );
  }
}