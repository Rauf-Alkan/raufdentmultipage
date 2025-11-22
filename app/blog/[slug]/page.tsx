import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link"; // Geri dön butonu için ekledim (Premium UX için şart)
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { prisma } from "@/lib/db";
import ViewTracker from "./ViewTracker";

const BASE_URL = "https://www.raufdent.com";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// 1. GÜNCELLEME: Slug kontrolü ve Decoding eklendi
const getBlogBySlug = async (rawSlug: string) => {
  if (!rawSlug || rawSlug === "undefined") {
    return null;
  }

  try {
    const decodedSlug = decodeURIComponent(rawSlug);
    return await prisma.blogPost.findUnique({
      where: { slug: decodedSlug },
    });
  } catch (error) {
    console.error("Blog fetch failed:", error);
    return null;
  }
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
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog bulunamadı" };
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
    alternates: { canonical: url },
  };
};

const BlogDetailPage = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
    return null;
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        
        {/* Geri Dön Linki (UX İyileştirmesi) */}
        <Link 
          href="/blog" 
          className="group mb-6 inline-flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-[#384B70]"
        >
          <span className="mr-1 transition-transform group-hover:-translate-x-1">←</span> 
          Blog Listesine Dön
        </Link>

        <ViewTracker slug={blog.slug} />
        
        {/* Üst Başlık Alanı */}
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#384B70]/80">Klinik Blog</p>
          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            {blog.title}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm font-medium text-slate-500 sm:justify-start">
            <time dateTime={blog.publishedAt.toString()}>{formatDate(blog.publishedAt)}</time>
            <span className="h-1 w-1 rounded-full bg-slate-300"></span>
            <span>{blog.readTime} dk okuma</span>
          </div>
        </div>
        
        {/* Görsel Alanı - Daha estetik gölge ve köşe */}
        {blog.coverImage ? (
          <div className="relative mt-8 h-80 w-full overflow-hidden rounded-2xl shadow-lg">
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

        {/* PREMIUM TİPOGRAFİ AYARLARI 
            Buradaki sınıflar metnin okunabilirliğini ve kalitesini artırır.
        */}
        <article className="prose prose-lg prose-slate mt-12 max-w-none 
          /* Genel Ayarlar */
          prose-p:text-slate-600 prose-p:leading-loose prose-p:tracking-wide
          /* Başlıklar */
          prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#384B70]
          prose-h2:mt-12 prose-h2:text-2xl
          prose-h3:mt-8 prose-h3:text-xl
          /* Linkler */
          prose-a:font-medium prose-a:text-[#384B70] prose-a:no-underline prose-a:transition hover:prose-a:text-[#2E3D63] hover:prose-a:underline
          /* Listeler */
          prose-li:text-slate-600
          /* Kalın Yazılar */
          prose-strong:font-bold prose-strong:text-slate-900
          /* Alıntılar (Blockquote) - Dergi stili */
          prose-blockquote:border-l-4 prose-blockquote:border-[#384B70] prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:pl-4 prose-blockquote:pr-4 prose-blockquote:text-lg prose-blockquote:italic prose-blockquote:leading-8 prose-blockquote:text-slate-700
          /* Görseller */
          prose-img:rounded-xl prose-img:shadow-lg">
          
          <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{blog.content}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
};

export default BlogDetailPage;
