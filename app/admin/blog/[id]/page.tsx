import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import BlogForm from "../_components/BlogForm";

type AdminBlogDetailProps = {
  params: {
    id: string;
  };
};

const EditBlogPage = async ({ params }: AdminBlogDetailProps) => {
  const { id } = params;

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const blogId = Number(id);

  if (Number.isNaN(blogId)) {
    notFound();
  }

  const blog = await prisma.blogPost.findUnique({
    where: { id: blogId },
  });

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Blogu Düzenle</h1>
        <p className="text-sm text-slate-500">{blog.title}</p>

        <div className="mt-8">
          <BlogForm initialData={blog} />
        </div>
      </div>
    </main>
  );
};

export default EditBlogPage;
