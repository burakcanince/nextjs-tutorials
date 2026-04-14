import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("blog");
  const posts = await db.collection("posts").find({}).toArray();

  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.title || !body.author || !body.description) {
    return NextResponse.json(
      { error: "title, author and description fields are required" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("blog");

  const result = await db.collection("posts").insertOne({
    title: body.title,
    author: body.author,
    description: body.description,
    createdAt: new Date(),
  });

  return NextResponse.json(
    { message: "Post added", id: result.insertedId },
    { status: 201 }
  );
}
