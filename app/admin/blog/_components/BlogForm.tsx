"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@prisma/client";

type BlogFormProps = {
  initialData?: BlogPost;
};

const BlogForm = ({ initialData }: BlogFormProps) => {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [summary, setSummary] = useState(initialData?.summary ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? "");
  const [readTime, setReadTime] = useState(initialData?.readTime ?? 2);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      const payload = {
        title,
        summary,
        content,
        coverImage,
        readTime,
      };

      const response = await fetch(initialData ? `/api/admin/blog/${initialData.id}` : "/api/admin/blog", {
        method: initialData ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("İstek başarısız");
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Kaydetme sırasında bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="text-sm font-semibold text-slate-700"
        >
          Başlık
        </label>
        <input
          id="title"
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="summary"
          className="text-sm font-semibold text-slate-700"
        >
          Kısa Özet
        </label>
        <textarea
          id="summary"
          required
          rows={3}
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="content"
          className="text-sm font-semibold text-slate-700"
        >
          İçerik (Markdown desteklenir)
        </label>
        <textarea
          id="content"
          required
          rows={10}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="coverImage"
            className="text-sm font-semibold text-slate-700"
          >
            Kapak Görsel URL
          </label>
          <input
            id="coverImage"
            type="url"
            value={coverImage}
            onChange={(event) => setCoverImage(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="readTime"
            className="text-sm font-semibold text-slate-700"
          >
            Okuma Süresi (dk)
          </label>
          <input
            id="readTime"
            type="number"
            min={1}
            max={60}
            value={readTime}
            onChange={(event) => {
              const parsed = Number(event.target.value);
              setReadTime(Number.isNaN(parsed) || parsed < 1 ? 1 : parsed);
            }}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-[#384B70] focus:ring-2 focus:ring-[#384B70]/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-[#384B70] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2E3D63] disabled:opacity-60"
      >
        {isSubmitting ? "Kaydediliyor..." : initialData ? "Blogu Güncelle" : "Blogu Oluştur"}
      </button>
    </form>
  );
};

export default BlogForm;
