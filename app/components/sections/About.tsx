import Link from "next/link";

const whatsappUrl = "https://wa.me/905455555050?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

export const aboutContent = {
  eyebrow: "Hakkımızda",
  title: "Ankara Kızılay'da premium diş hekimliği deneyimi",
  subtitle: "Estetik, fonksiyon ve konforu bir araya getiren modern tedavi yaklaşımı.",
  description:
    "İleri teknolojiyi, estetik hedefleri ve hasta konforunu aynı çatı altında buluşturuyoruz. Dijital planlama ile başlayan süreçlerimizi şeffaf şekilde yönetiyor, implant, estetik diş hekimliği ve ortodonti alanlarında uzman ekibimizle kişiye özel çözümler sunuyoruz.",
  clinicTitle: "Kliniğimize Hoş Geldiniz",
  clinicSubtitle: "Modern klinik ortamı ve kişiye özel tedavi planlaması",
  clinicDescription:
    "Ağız ve diş sağlığında modern teknolojiyi, estetik hedefleri ve hasta konforunu bir araya getiriyoruz. Her tedavi adımını dijital planlama ile başlatıyor, süreç boyunca şeffaf ve anlaşılır rehberlik sunuyoruz.",
  bullets: [
    "Her tedavi öncesi ayrıntılı muayene ve dijital planlama",
    "Uzman hekimlerle implant, estetik ve ortodonti çözümleri",
    "Konforlu klinik ortamı ve şeffaf süreç yönetimi",
  ],
  image: {
    src: "/about.webp",
    alt: "Rauf Dent kliniği",
  },
  doctor: {
    name: "Dt. Rauf Alkan",
    title: "Diş Hekimi & Klinik Sorumlusu",
    quote: "Estetik, fonksiyon ve konforu bir araya getiren modern tedavi yaklaşımını benimsiyorum.",
    highlights: [
      "Ankara Üniversitesi Diş Hekimliği mezunu",
      "15+ yıl klinik deneyimi",
      "Dijital planlama & implant odaklı çalışma",
      "180+ Google yorumu, yüksek memnuniyet",
    ],
  },
  advantages: [
    {
      icon: "⭐",
      title: "Kişiye özel planlama",
      description: "Her hastanın ağız yapısı ve beklentisine özel dijital planlama yapıyoruz.",
    },
    {
      icon: "⚙️",
      title: "Son teknoloji donanım",
      description: "Dijital röntgen, intraoral kamera ve mikromotor sistemlerle hassas çalışıyoruz.",
    },
    {
      icon: "🤝",
      title: "Şeffaf ve konforlu süreç",
      description: "Her adımı önceden anlatıyor, sürpriz maliyetleri ortadan kaldırıyoruz.",
    },
  ],
  cta: {
    primaryLabel: "WhatsApp'tan Randevu Al",
    secondaryLabel: "Kliniği Ziyaret Et",
    secondaryHref: "/iletisim#contact",
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-slate-50 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">{aboutContent.eyebrow}</p>
          <h2 className="mt-2 font-heading text-3xl tracking-tight text-[#1f2937] md:text-5xl">{aboutContent.title}</h2>
          <p className="mt-3 text-lg text-slate-600">{aboutContent.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-[0_35px_100px_rgba(15,23,42,0.12)]">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
              <img
                src="/doctor.webp"
                alt={aboutContent.doctor.name}
                className="h-48 w-full rounded-3xl object-cover shadow-[0_15px_35px_rgba(15,23,42,0.15)]"
                loading="lazy"
              />
              <div>
                <p className="text-lg font-semibold text-slate-900">{aboutContent.doctor.name}</p>
                <p className="text-sm text-slate-500">{aboutContent.doctor.title}</p>
                <p className="mt-4 text-base italic text-slate-600">“{aboutContent.doctor.quote}”</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {aboutContent.doctor.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#D7C3A3]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {aboutContent.advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="rounded-2xl border border-slate-100 bg-white/90 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <span className="text-3xl">{advantage.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{advantage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">{aboutContent.clinicTitle}</p>
            <h3 className="text-2xl font-semibold text-slate-900">{aboutContent.clinicSubtitle}</h3>
            <p className="text-lg leading-relaxed text-slate-600">{aboutContent.clinicDescription}</p>
            <ul className="space-y-2 text-base text-slate-600">
              {aboutContent.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-[#D7C3A3]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              className="h-full w-full rounded-3xl object-cover shadow-[0_40px_90px_rgba(15,23,42,0.12)]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-7 py-3.5 font-semibold text-white transition hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
          >
            {aboutContent.cta.primaryLabel}
          </a>
          <Link
            href={aboutContent.cta.secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-[#D7C3A3] px-7 py-3.5 font-semibold text-[#384B70] transition hover:bg-[#F8F4EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
          >
            {aboutContent.cta.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
