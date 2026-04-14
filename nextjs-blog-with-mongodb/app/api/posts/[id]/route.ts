import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type Params = Promise<{ id: string }>;

export async function GET(_req: Request, { params }: { params: Params }) {
  const { id } = await params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("blog");
  const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });

  if (!post) {
    return NextResponse.json({ error: "Post bulunamadı" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(req: Request, { params }: { params: Params }) {
  const { id } = await params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
  }

  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("blog");

  const result = await db.collection("posts").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        ...(body.title && { title: body.title }),
        ...(body.author && { author: body.author }),
        ...(body.description && { description: body.description }),
        updatedAt: new Date(),
      },
    }
  );

  if (result.matchedCount === 0) {
    return NextResponse.json({ error: "Post bulunamadı" }, { status: 404 });
  }

  return NextResponse.json({ message: "Post güncellendi" });
}

export async function DELETE(_req: Request, { params }: { params: Params }) {
  const { id } = await params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("blog");

  const result = await db
    .collection("posts")
    .deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return NextResponse.json({ error: "Post bulunamadı" }, { status: 404 });
  }

  return NextResponse.json({ message: "Post silindi" });
}
