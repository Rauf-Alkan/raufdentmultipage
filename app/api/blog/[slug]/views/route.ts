import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type Params = {
  params: {
    slug: string;
  };
};

export async function POST(_: Request, { params }: Params) {
  try {
    const updated = await prisma.blogPost.update({
      where: { slug: params.slug },
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
