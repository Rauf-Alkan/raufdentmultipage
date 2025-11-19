import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(_: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
    const updated = await prisma.blogPost.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      },
      select: {
        views: true,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("View increment failed", error);
    return NextResponse.json({ message: "Güncellenemedi" }, { status: 500 });
  }
}
