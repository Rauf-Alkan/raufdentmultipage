import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/sections/Header";
import HeroSlider from "@/components/hero/HeroSlider";
import PatientTestimonials from "@/components/sections/PatientTestimonials";
import Footer from "@/components/sections/Footer";
import { services } from "@/components/sections/Services";
import { teamMembers } from "@/components/sections/Team";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Ana Sayfa | Rauf Dent",
  description:
    "Ankara Kızılay'da modern, konforlu diş hekimliği; uzman ekibimiz gülüşünüzü sağlık, estetik ve konfor dengesiyle yeniden tasarlar.",
};

export const dynamic = "force-dynamic";

const formatBlogDate = (date: Date) => {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch {
    return date.toISOString().split("T")[0];
  }
};

const Home = async () => {
  const featuredServices = services.slice(0, 6);
  const featuredTeam = teamMembers.slice(0, 2);
  const latestPosts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
    take: 3,
  });

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">
                Güncel Diş Hekimliği Çözümleri
              </p>
              <div className="mb-12 space-y-4">
                <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
                  Tüm Diş İhtiyaçlarınız İçin Tek Adres
                </h2>
                <div className="mx-auto accent-line" />
                <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
                  Estetikten fonksiyona kadar tüm ağız ve diş sağlığı ihtiyaçlarınıza özel çözümlerle yaklaşarak,
                  modern teknolojiler eşliğinde üst düzey bir tedavi deneyimi sunuyoruz.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col rounded-2xl border border-slate-100 bg-white/95 p-7 shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.14)]"
                >
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-2xl">
                    {service.icon}
                  </span>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-base leading-relaxed text-slate-600">{service.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#384B70]">Detaylar için kliniğimizle iletişime geçin.</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-8 py-3.5 text-base font-semibold text-white shadow-[0_20px_45px_rgba(56,75,112,0.25)] transition hover:bg-opacity-90"
              >
                Tüm Hizmetler
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white via-slate-50 to-white py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">Blog &amp; Makaleler</p>
              <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">Son Yazılarımız</h2>
              <div className="mx-auto accent-line" />
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                Diş sağlığınızla ilgili güncel bilgiler, estetik yaklaşımlar ve uzman önerilerini blog yazılarımızdan takip
                edin.
              </p>
            </div>

            {latestPosts.length > 0 ? (
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {latestPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.15)]"
                  >
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={post.coverImage || "/hero.webp"}
                        alt={post.title}
                        fill
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <time className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6B5A45]">
                        {formatBlogDate(post.publishedAt)}
                      </time>
                      <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
                      <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600 line-clamp-3">{post.summary}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#384B70] transition hover:gap-3"
                      >
                        Devamını Oku
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-12 rounded-3xl border border-dashed border-slate-200 bg-white/70 p-10 text-center text-slate-500">
                Henüz blog yazısı yayınlanmadı.
              </div>
            )}

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-[#384B70] px-8 py-3.5 text-base font-semibold text-white shadow-[0_20px_45px_rgba(56,75,112,0.3)] transition hover:bg-[#2F3D61]"
              >
                Tüm Blog Yazılarını Görüntüle
              </Link>
            </div>
          </div>
        </section>

        <PatientTestimonials />

        <section className="bg-gradient-to-b from-white to-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">Ekibimiz</p>
              <div className="space-y-4">
                <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
                  Alanında Uzman Hekimlerimizle Tanışın
                </h2>
                <div className="mx-auto accent-line" />
              </div>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Modern klinik altyapımızı deneyimli hekimlerimizle birleştirerek her hastamıza kişiye özel çözümler sunuyoruz.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {featuredTeam.map((doctor) => (
                <div
                  key={doctor.name}
                  className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white/95 p-8 text-center shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                >
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="mb-5 h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-[0_10px_25px_rgba(15,23,42,0.15)]"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold text-slate-900">{doctor.name}</h3>
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">{doctor.title}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{doctor.summary}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/ekibimiz"
                className="inline-flex items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-7 py-3 font-semibold text-white transition hover:bg-opacity-90"
              >
                Tüm Ekibi Gör
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-100 bg-gradient-to-br from-white via-[#F8F4EF] to-white p-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <p className="inline-flex items-center rounded-full bg-[#F3EBDF] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">
              Hızlı Randevu
            </p>
            <h2 className="mt-6 font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
              İlk ziyareti planlayın, ekibimiz hemen sizi arasın.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Premium kliniğimizde randevu almak için iletişim sayfamızdaki formu kullanın. Tüm talepleri dakikalar içinde yanıtlıyor ve size en uygun zamanı birlikte belirliyoruz.
            </p>
            <div className="mt-8 space-y-4">
              <a
                className="block text-3xl font-semibold text-slate-900 transition hover:text-[#384B70]"
                href="tel:+905455555050"
              >
                +90 545 555 50 50
              </a>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Hafta içi 09:00 – 20:00</p>
              <div className="mt-6 flex items-center justify-center">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-7 py-3.5 font-semibold text-white transition hover:bg-opacity-90"
                >
                  Randevu Talep Formunu Aç
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
        <Footer />
      </main>
    </>
  );
};

export default Home;
