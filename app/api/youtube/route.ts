import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const videos = await prisma.youtube.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json(videos);
}