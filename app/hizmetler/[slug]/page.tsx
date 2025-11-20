import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
// Kendi component yollarını buraya göre güncellemen gerekebilir:
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { services } from "@/components/sections/Services";

// --- VERİ YAPISI (Görsellerdeki İçerik Mantığına Göre) ---

const servicesMap = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<
  string,
  (typeof services)[number]
>;

type ServiceDetail = {
  slug: string;
  title: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  content: {
    intro: string;
    sections: { title?: string; text: string }[]; // Alt başlık ve paragraflar
    listTitle?: string;
    listItems?: string[];
  };
  faqs: { question: string; answer: string }[];
  cta: { title: string; text: string; buttonText: string };
};

// Örnek içerik: İmplant (Diğerlerini de aynı formatta doldurabilirsin)
const detailContent: Record<string, ServiceDetail> = {
  implant: {
    slug: "implant",
    title: "İmplant Tedavisi",
    heroTitle: "İmplant Tedavisi",
    heroDescription: "Eksik dişlerin yerine doğal görünümlü ve fonksiyonel dişler kazandıran modern diş hekimliğinin en etkili çözümüdür.",
    heroImage: "/services/implant-hero.webp", // Buraya kendi görsel yolunu koy
    content: {
      intro: "İmplant tedavisi, genel sağlık durumu iyi olan ve yeterli çene kemiği yoğunluğuna sahip hemen hemen tüm yetişkinler için uygundur.",
      sections: [
        {
          title: "İmplant Tedavisi Nedir?",
          text: "Diş implantı, eksik dişlerin yerine çene kemiğine yerleştirilen, genellikle titanyumdan yapılan yapay diş kökleridir. Doğal diş kökünü taklit eder ve üzerine yapılacak protezlere sağlam bir temel oluşturur.",
        },
        {
          title: "3. Mini İmplantlar",
          text: "Standart implantlardan daha küçük çaplı implantlardır. Dar kemik alanlarında veya geçici protezleri sabitlemek için kullanılabilir.",
        },
        {
          title: "4. All-on-4 veya All-on-6 İmplant Sistemi",
          text: "Tam dişsizlik durumunda, tüm çeneyi 4 veya 6 implant üzerine sabitlenmiş protezlerle restore etme tekniğidir. Kemik grefti ihtiyacını azaltır ve hızlı sonuç sağlar.",
        },
        {
          title: "İmplant Tedavisinin Maliyeti",
          text: "İmplant tedavisinin maliyeti, kullanılan implant markası, implant sayısı, ek cerrahi işlemler (sinüs lifting, kemik grefti vb.) ve üst yapı türüne göre değişiklik gösterir. Tedavi planlaması sırasında detaylı maliyet bilgisi verilir. Başlangıçta maliyetli görünse de ömür boyu kullanım düşünüldüğünde ekonomiktir.",
        }
      ],
      listTitle: "İmplant Tedavisinin Avantajları",
      listItems: [
        "Doğal diş görünümü ve fonksiyonu sağlar",
        "Çene kemiğinin erimesini önler",
        "Uzun ömürlüdür ve dayanıklıdır",
        "Komşu dişlere zarar vermez",
        "Çiğneme fonksiyonunu tam olarak yerine getirir",
        "Yüz estetiğini korur ve yaşlanma belirtilerini azaltır",
        "Özgüvenle gülümsemenizi sağlar"
      ]
    },
    faqs: [
      {
        question: "İmplant tedavisi ağrılı bir işlem midir?",
        answer: "Uygulama lokal anestezi altında yapılır. Operasyon sırasında ağrı hissedilmez, sonrasında hafif ağrılar olabilir, genellikle ağrı kesicilerle kontrol altına alınır."
      },
      {
        question: "İmplant herkese uygulanabilir mi?",
        answer: "Kemik gelişimi tamamlanmış, genel sağlık durumu elverişli olan herkese uygulanabilir. Yetersiz kemik durumunda ek tedaviler gerekebilir."
      },
      {
        question: "İmplant tedavisi ne kadar sürer?",
        answer: "İmplantın kemikle kaynaşması (osseointegrasyon) genellikle 2-6 ay sürer. Bu süreçte geçici protezler kullanılır."
      },
      {
        question: "İmplantın ömrü ne kadardır?",
        answer: "İyi bir ağız bakımı ve düzenli kontrollerle implantlar ömür boyu kullanılabilir."
      }
    ],
    cta: {
      title: "Randevu Alın",
      text: "İmplant tedavisi hakkında detaylı bilgi almak ve hekimlerimizle görüşmek için hemen randevu alın.",
      buttonText: "RANDEVU TALEBİ OLUŞTUR"
    }
  },
  // Diğer sayfalar için (Slug eşleşmesi olmazsa 404 verir, burayı doldurmalısın)
  "gulus-tasarimi": {
     slug: "gulus-tasarimi",
     title: "Gülüş Tasarımı",
     heroTitle: "Gülüş Tasarımı",
     heroDescription: "Yüz hatlarınıza en uygun, estetik ve doğal gülüşü dijital yöntemlerle tasarlıyoruz.",
     heroImage: "/services/gulus-hero.webp",
     content: {
        intro: "Gülüş tasarımı, estetik beklentilerinizi fonksiyonellikle birleştiren kapsamlı bir süreçtir.",
        sections: [{title: "Süreç Nasıl İşler?", text: "Fotoğraf analizi ve dijital modelleme ile başlar."}],
        listTitle: "Kimler İçin Uygundur?",
        listItems: ["Diş renginden memnun olmayanlar", "Dişlerinde çapraşıklık olanlar"]
     },
     faqs: [{question: "Kalıcı mıdır?", answer: "Evet, kullanılan porselenler uzun ömürlüdür."}],
     cta: {title: "Randevu Alın", text: "Hayalinizdeki gülüş için ilk adımı atın.", buttonText: "RANDEVU AL"}
  },
   "dis-beyazlatma": {
     slug: "dis-beyazlatma",
     title: "Diş Beyazlatma",
     heroTitle: "Profesyonel Diş Beyazlatma",
     heroDescription: "Daha parlak ve beyaz dişlere sahip olmak için güvenli ve hızlı çözümler.",
     heroImage: "/services/beyazlatma-hero.webp",
     content: {
        intro: "Zamanla sararan dişlerinizi ofis tipi beyazlatma ile eski parlaklığına kavuşturuyoruz.",
        sections: [{title: "Zararlı mı?", text: "Hayır, mine yapısına zarar vermez."}],
        listTitle: "Avantajları",
        listItems: ["Hızlı sonuç", "Ağrısız işlem", "Uzun süre kalıcılık"]
     },
     faqs: [{question: "Hassasiyet olur mu?", answer: "İlk 24 saat hafif hassasiyet olabilir."}],
     cta: {title: "Randevu Alın", text: "Parlak bir gülüş için randevu oluşturun.", buttonText: "RANDEVU AL"}
  },
  ortodonti: {
     slug: "ortodonti",
     title: "Ortodonti",
     heroTitle: "Ortodonti Tedavisi",
     heroDescription: "Çapraşık dişleri düzeltmek ve ideal kapanışı sağlamak için modern çözümler.",
     heroImage: "/services/ortodonti-hero.webp",
     content: {
        intro: "Tel tedavisi veya şeffaf plaklarla dişlerinizi ideal konumuna getiriyoruz.",
        sections: [{title: "Yaş Sınırı Var mı?", text: "Her yaşta ortodontik tedavi mümkündür."}],
        listTitle: "Tedavi Seçenekleri",
        listItems: ["Metal braketler", "Şeffaf plaklar (Telsiz)", "Porselen braketler"]
     },
     faqs: [{question: "Ne kadar sürer?", answer: "Vakaya göre 1-2 yıl arasında değişir."}],
     cta: {title: "Randevu Alın", text: "Ücretsiz muayene için randevu alın.", buttonText: "RANDEVU AL"}
  },
  "zirkonyum-kaplama": {
     slug: "zirkonyum-kaplama",
     title: "Zirkonyum Kaplama",
     heroTitle: "Zirkonyum Diş Kaplama",
     heroDescription: "Metal desteksiz, ışık geçirgenliği yüksek ve doğal görünümlü kaplamalar.",
     heroImage: "/services/zirkonyum-hero.webp",
     content: {
        intro: "Estetik diş hekimliğinde en çok tercih edilen, doku dostu materyaldir.",
        sections: [{title: "Neden Zirkonyum?", text: "Diş eti ile mükemmel uyum sağlar ve grileşme yapmaz."}],
        listTitle: "Kullanım Alanları",
        listItems: ["Ön diş estetiği", "Kanal tedavili dişlerin restorasyonu"]
     },
     faqs: [{question: "Kırılır mı?", answer: "Çok dayanıklı bir malzemedir."}],
     cta: {title: "Randevu Alın", text: "Doğal görünümlü dişler için bizi arayın.", buttonText: "RANDEVU AL"}
  },
  "dolgu-kanal": {
     slug: "dolgu-kanal",
     title: "Dolgu ve Kanal Tedavisi",
     heroTitle: "Dolgu ve Kanal Tedavisi",
     heroDescription: "Ağrıyan veya çürüyen dişlerinizi çekimden kurtaran koruyucu tedaviler.",
     heroImage: "/services/dolgu-hero.webp",
     content: {
        intro: "Dişin doğal yapısını koruyarak fonksiyonunu geri kazandırmayı hedefleriz.",
        sections: [{title: "Ağrılı mı?", text: "Lokal anestezi ile tamamen ağrısızdır."}],
        listTitle: "Belirtiler",
        listItems: ["Sıcak-soğuk hassasiyeti", "Gece başlayan ağrı", "Diş renginde değişim"]
     },
     faqs: [{question: "Tek seansta biter mi?", answer: "Genellikle evet, enfeksiyon durumuna göre değişebilir."}],
     cta: {title: "Randevu Alın", text: "Diş ağrınızı ertelemeyin.", buttonText: "RANDEVU AL"}
  },
};

export const generateStaticParams = () => {
  return Object.keys(detailContent).map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  const detail = detailContent[slug];
  if (!detail) {
    return {
      title: "Hizmet Bulunamadı | Rauf Dent",
    };
  }
  return {
    title: `${detail.title} | Rauf Dent`,
    description: detail.heroDescription,
  };
};

const whatsappUrl = "https://wa.me/905455555050";

const ServiceDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const detail = detailContent[slug];

  if (!detail) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-[#F8F4EF] pb-20">
        
        {/* --- HERO SECTION (Resim + Mavi Çizgi) --- */}
        <div className="relative h-[300px] w-full bg-[#1F2A44] md:h-[400px] lg:h-[450px]">
           <img
            src={detail.heroImage}
            alt={detail.heroTitle}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44]/90 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
               <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#D7C3A3]">Hizmetlerimiz / {detail.title}</p>
               <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">{detail.heroTitle}</h1>
               <div className="mt-4 h-1 w-20 rounded-full bg-[#D7C3A3]"></div>
            </div>
          </div>
        </div>

        {/* --- ANA ICERIK GRID (SOL: İçerik | SAĞ: Sticky Sidebar) --- */}
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
            
            {/* ================= SOL KOLON (Makale / İçerik) ================= */}
            <div className="space-y-10">
              
              {/* Mavi Kutucuklu Giriş */}
              <div className="relative rounded-2xl border-l-4 border-[#D7C3A3] bg-white p-6 shadow-sm">
                 <p className="text-lg font-medium leading-relaxed text-slate-700">
                   {detail.content.intro}
                 </p>
              </div>

              {/* Dinamik Bölümler (H3 Başlık ve Paragraflar) */}
              <div className="space-y-8">
                {detail.content.sections.map((section, idx) => (
                  <div key={idx}>
                    {section.title && (
                      <h3 className="mb-3 font-heading text-2xl font-bold text-slate-800">
                        {section.title}
                      </h3>
                    )}
                    <p className="text-base leading-7 text-slate-600 md:text-lg">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Liste Alanı (Mavi Tik İşaretli) */}
              {detail.content.listItems && (
                <div className="rounded-[2rem] bg-[#FFFDF9] p-8 shadow-[0_8px_30px_rgba(215,195,163,0.35)]">
                  {detail.content.listTitle && (
                    <h3 className="mb-6 font-heading text-2xl font-bold text-slate-800">
                      {detail.content.listTitle}
                    </h3>
                  )}
                  <ul className="space-y-4">
                    {detail.content.listItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5E9DC]">
                          <svg className="h-3 w-3 text-[#B48341]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* ================= SAĞ KOLON (Sticky Sidebar) ================= */}
            <div className="relative h-full">
              <div className="sticky top-28 space-y-8">
                
                {/* 1. BÖLÜM: Sık Sorulan Sorular (Accordion) */}
                <div>
                  <h3 className="mb-5 font-heading text-xl font-bold text-slate-900">Sık Sorulan Sorular</h3>
                  <div className="space-y-3">
                    {detail.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:shadow-md open:shadow-md"
                      >
                        <summary className="flex w-full cursor-pointer list-none items-center justify-between p-4 text-left font-semibold text-slate-700 focus:outline-none">
                          <span className="pr-4 text-sm md:text-base">{faq.question}</span>
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F8F4EF] text-slate-400 transition group-open:rotate-180 group-open:bg-[#F5E9DC] group-open:text-[#6D4A2F]">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="border-t border-slate-50 px-4 pb-4 pt-2 text-sm leading-relaxed text-slate-600 animate-in fade-in slide-in-from-top-1">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

                {/* 2. BÖLÜM: Randevu Kartı (Mavi Butonlu) */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-center border border-slate-100">
                  {/* Üst Kısım: İkon ve Başlık */}
                 <div className="bg-white p-8 pb-6">
                     <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5E9DC] text-[#B48341]">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                     </div>
                     <h3 className="font-heading text-2xl font-bold text-slate-900">{detail.cta.title}</h3>
                     <p className="mt-3 text-sm text-slate-500 leading-relaxed px-2">
                        {detail.cta.text}
                     </p>
                  </div>

                  {/* Alt Kısım: Mavi Buton */}
                  <div className="bg-[#F8F4EF] p-6 pt-0">
                     <Link
                        href="/iletisim"
                        className="flex w-full items-center justify-center rounded-xl bg-[#384B70] py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#384B70]/30 transition-transform hover:scale-[1.02] hover:shadow-[#384B70]/40 active:scale-[0.98]"
                     >
                        {detail.cta.buttonText}
                     </Link>
                     <a
                        href={whatsappUrl}
                        target="_blank"
                         rel="noopener noreferrer"
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#E4D7C7] bg-white py-3 text-sm font-semibold text-slate-600 transition hover:bg-[#FDF8F1]"
                     >
                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        <span>WhatsApp</span>
                     </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
