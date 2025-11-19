import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function POST(_: Request, { params }: Params) {
  try {
    const { slug } = await params;
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
