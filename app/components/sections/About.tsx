// sections/About.tsx
import Link from "next/link";
import { LuCpu, LuDiamond, LuHandshake, LuUsers } from "react-icons/lu";

export const aboutContent = {
  eyebrow: "HAKKIMIZDA",
  title: "Sağlıklı ve Estetik Gülüşler İçin Buradayız",
  description: "Ankara Kızılay'da bulunan kliniğimiz, modern diş hekimliğinin tüm imkanlarını kullanarak, estetik ve fonksiyonu bir araya getiren kişiye özel tedavi planları sunmaktadır. Hedefimiz; size sadece bir tedavi değil, konforlu ve güven dolu bir deneyim yaşatmaktır.",
  image: {
    src: "/service2.webp",
    alt: "Rauf Dent Klinik",
  },
  features: [
    {
      icon: <LuDiamond className="h-7 w-7" />,
      title: "Premium Materyal",
      desc: "Dünya standartlarında sertifikalı ürünler.",
    },
    {
      icon: <LuCpu className="h-7 w-7" />,
      title: "Modern Teknoloji",
      desc: "Dijital ölçü ve 3D görüntüleme sistemleri.",
    },
    {
      icon: <LuUsers className="h-7 w-7" />,
      title: "Uzman Hekim Kadrosu",
      desc: "Deneyimli ve sürekli gelişen ekip.",
    },
    {
      icon: <LuHandshake className="h-7 w-7" />,
      title: "Hasta Memnuniyeti",
      desc: "Şeffaf süreç ve konforlu deneyim.",
    }
  ],
  cta: {
    primary: "Randevu Oluştur",
    secondary: "Hizmetlerimizi İncele"
  }
};

const About = () => {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* GÖRSEL */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.05)] bg-slate-50 h-[350px] lg:h-[420px] w-full border border-slate-100">
               <img 
                 src={aboutContent.image.src} 
                 alt={aboutContent.image.alt} 
                 className="h-full w-full object-cover"
               />
            </div>
          </div>

          {/* İÇERİK */}
          <div className="order-1 lg:order-2">
            {/* Eyebrow: Services stili */}
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#384B70]">
              {aboutContent.eyebrow}
            </span>

            {/* Başlık: font-heading ve slate-900 */}
            <h2 className="mb-6 font-heading text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {aboutContent.title}
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-slate-600">
              {aboutContent.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              {aboutContent.features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-2">
                   {/* İkon Rengi: #384B70 */}
                   <span className="mb-1 text-2xl text-[#384B70] drop-shadow-sm">{feature.icon}</span>
                   <div>
                      <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-normal text-slate-500">{feature.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="rounded-full bg-[#384B70] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2a3a5a] shadow-[0_10px_20px_rgba(56,75,112,0.2)]"
              >
                {aboutContent.cta.primary}
              </a>
              <Link
                href="/hizmetler"
                className="rounded-full border border-slate-200 px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
              >
                {aboutContent.cta.secondary}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
