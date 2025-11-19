import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { prisma } from "@/lib/db";
import ViewTracker from "./ViewTracker";

const BASE_URL = "https://www.raufdent.com";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

const formatDate = (dateInput: string | Date) => {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(typeof dateInput === "string" ? new Date(dateInput) : dateInput);
  } catch {
    return dateInput instanceof Date ? dateInput.toISOString() : dateInput;
  }
};

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: BlogPageProps): Promise<Metadata> => {
  const blog = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  });

  if (!blog) {
    return {
      title: "Blog bulunamadı",
    };
  }

  const url = `${BASE_URL}/blog/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      type: "article",
      url,
      images: blog.coverImage ? [blog.coverImage] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
};

const BlogDetailPage = async ({ params }: BlogPageProps) => {
  const blog = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  });

  if (!blog) {
    notFound();
    return null;
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <ViewTracker slug={blog.slug} />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Klinik Blog</p>
          <h1 className="mt-4 font-heading text-4xl tracking-tight text-slate-900">{blog.title}</h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{formatDate(blog.publishedAt)}</p>
          {blog.coverImage ? (
            <div className="relative mt-8 h-80 w-full overflow-hidden rounded-2xl">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          ) : null}

          <article className="prose prose-lg prose-slate mt-10 max-w-none">
            <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{blog.content}</ReactMarkdown>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
