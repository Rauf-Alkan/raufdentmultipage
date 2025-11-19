import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { services } from "@/components/sections/Services";

const servicesMap = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<
  string,
  (typeof services)[number]
>;

type ServiceDetail = {
  slug: string;
  title: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  stats: { label: string; value: string }[];
  advantages: { icon: string; title: string; description: string }[];
  steps: { title: string; description: string }[];
  beforeAfter?: {
    before: { image: string; label: string };
    after: { image: string; label: string };
    description: string;
  };
};

const detailContent: Record<string, ServiceDetail> = {
  implant: {
    slug: "implant",
    title: servicesMap["implant"].title,
    heroEyebrow: "İmplant Tedavisi",
    heroTitle: "Eksik dişler için dijital planlı, kalıcı implant çözümleri",
    heroDescription:
      "İlk muayeneden itibaren taramalar, tedavi simülasyonu ve kişiye özel cerrahi rehberlerle süreci şeffaf şekilde yönetiyoruz. Konforlu klinik ortamında iyileşme sürecinizi adım adım takip ediyoruz.",
    heroImage: "/services/implant-hero.webp",
    heroImageAlt: "İmplant tedavisi sırasında uzman diş hekimi",
    stats: [
      { value: "98%", label: "Uzun dönem başarı" },
      { value: "7.000+", label: "Planlanan implant" },
      { value: "15+ yıl", label: "Cerrahi deneyim" },
    ],
    beforeAfter: {
      before: {
        image: "/hero.webp",
        label: "İşlem Öncesi",
      },
      after: {
        image: "/services/implant-hero.webp",
        label: "İşlem Sonrası",
      },
      description:
        "Dijital planlamayla implant yerleşimini önceden simüle ediyor, porselen restorasyonlarla estetik ve fonksiyonu aynı anda geri kazandırıyoruz.",
    },
    advantages: [
      {
        icon: "🧠",
        title: "Kişiye özel dijital tasarım",
        description: "3D tomografi ve tasarım yazılımlarıyla implant açısını, boyunu ve kemiğe uyumunu önceden belirliyoruz.",
      },
      {
        icon: "🛡️",
        title: "Hassas cerrahi protokoller",
        description:
          "Steril ameliyathane, rehberli cerrahi ve minimal invaziv yaklaşım sayesinde iyileşme sürecini hızlandırıyoruz.",
      },
      {
        icon: "🤝",
        title: "Yakın takip & rehberlik",
        description: "İyileşme döneminde kontrol randevuları, hijyen eğitimleri ve beslenme rehberliği sunuyoruz.",
      },
    ],
    steps: [
      { title: "1. Dijital muayene", description: "BT taraması, panoramik görüntü ve diş eti sağlığı değerlendirmesi." },
      {
        title: "2. Planlama & simülasyon",
        description: "Kemiğinize uygun implant modeli, açısı ve protez tasarımı belirlenir.",
      },
      {
        title: "3. Rehberli cerrahi",
        description: "Lokal anestezi altında minimal kesiyle implant yerleştirilir; gerekirse geçici diş uygulanır.",
      },
      {
        title: "4. İyileşme ve protez",
        description: "3 ay sonunda abutment ve porselen kronlar tamamlanır, çiğneme fonksiyonunuz test edilir.",
      },
    ],
  },
  "gulus-tasarimi": {
    slug: "gulus-tasarimi",
    title: servicesMap["gulus-tasarimi"].title,
    heroEyebrow: "Gülüş Tasarımı",
    heroTitle: "Simetrik, doğal ve yüz hatlarınıza uygun gülüş tasarımı",
    heroDescription:
      "Fotoğraf ve video çekimleriyle mevcut gülüşünüzü analiz ediyor, mock-up çalışmalarıyla tedavi sonucunu önceden gösteriyoruz. Lamina, bonding ve porselen uygulamalarını kombine planlıyoruz.",
    heroImage: "/services/gulus-hero.webp",
    heroImageAlt: "Gülüş tasarımı için planlama yapan diş hekimi",
    stats: [
      { value: "48 saat", label: "Mock-up süresi" },
      { value: "5.000+", label: "Tamamlanan tasarım" },
      { value: "360°", label: "Foto-video analizi" },
    ],
    advantages: [
      {
        icon: "📸",
        title: "Yüz hatlarına göre analiz",
        description: "Dudak çizgisi, yüz oranları ve konuşma dinamiklerini birlikte değerlendiriyoruz.",
      },
      {
        icon: "🧪",
        title: "Önce prova sonra işlem",
        description: "Wax-up ve mock-up ile tasarımı ağızda deneyimleyip onayladıktan sonra uygulamaya geçiyoruz.",
      },
      {
        icon: "💎",
        title: "Uzun ömürlü materyaller",
        description: "Lamina, e.max ve zirkonyum gibi yüksek dayanım ve estetik sağlayan materyaller kullanıyoruz.",
      },
    ],
    steps: [
      { title: "1. Fotoğraf & video çekimi", description: "Gülüşünüz farklı açılardan kaydedilir ve analiz edilir." },
      { title: "2. Dijital tasarım", description: "Diş boyu, gingiva hattı ve simetri parametreleri optimize edilir." },
      { title: "3. Mock-up prova", description: "Geçici materyallerle tasarım ağızda test edilir, revizyonlar yapılır." },
      {
        title: "4. Nihai uygulama",
        description: "Lamina veya porselen restorasyonlar hassas ölçüyle hazırlanıp kalıcı olarak yapıştırılır.",
      },
    ],
  },
  "dis-beyazlatma": {
    slug: "dis-beyazlatma",
    title: servicesMap["dis-beyazlatma"].title,
    heroEyebrow: "Diş Beyazlatma",
    heroTitle: "30 dakikalık ofis tipi beyazlatmayla eşit tonlu gülüş",
    heroDescription:
      "Hassasiyet riskini azaltan jel ve LED kombinasyonuyla kısa sürede birkaç tona kadar açılma sağlıyoruz. Ev tipi kitlerle ton korumasını destekliyoruz.",
    heroImage: "/services/beyazlatma-hero.webp",
    heroImageAlt: "Ofis tipi diş beyazlatma uygulaması",
    stats: [
      { value: "30 dk", label: "Ofis tipi süre" },
      { value: "3-6 ton", label: "Parlaklık artışı" },
      { value: "0", label: "Ağrı / hassasiyet hedefi" },
    ],
    advantages: [
      {
        icon: "🪥",
        title: "Kişiye özel protokol",
        description: "Mine yapınıza göre jel yoğunluğu belirlenir, diş etleri koruyucu bariyerle izole edilir.",
      },
      {
        icon: "🏠",
        title: "Ev tipi destek",
        description: "Ofis uygulamasını kalıcı hale getirmek için ölçüye özel plaklar ve düşük yoğunluklu jel verilir.",
      },
      {
        icon: "📝",
        title: "Bakım rehberi",
        description: "Tonal değişimi korumak için beslenme, kahve/çay tüketimi ve fırçalama rutini planlanır.",
      },
    ],
    steps: [
      { title: "1. Muayene & hassasiyet testi", description: "Mine çatlakları ve diş eti sağlığı kontrol edilir." },
      { title: "2. Ofis tipi beyazlatma", description: "Koruyucu bariyer sonrası jel uygulanır ve LED ışık aktive edilir." },
      { title: "3. Ev tipi kit teslimi", description: "Ölçüye özel plaklar hazırlanır, kullanım programı anlatılır." },
      { title: "4. Kontrol ziyareti", description: "1-2 hafta sonra ton kalıcılığı değerlendirilir, gerekirse rötuş yapılır." },
    ],
  },
  ortodonti: {
    slug: "ortodonti",
    title: servicesMap["ortodonti"].title,
    heroEyebrow: "Ortodonti",
    heroTitle: "Şeffaf plak veya sabit tel ile konforlu hizalama",
    heroDescription:
      "Çocuk ve yetişkinler için çapraşıklık seviyesine göre Invisalign, şeffaf plak veya estetik braket alternatifleri sunuyoruz. Dijital taramalarla her aşamada ilerlemeyi takip ediyoruz.",
    heroImage: "/services/ortodonti-hero.webp",
    heroImageAlt: "Ortodonti tedavisi planlayan diş hekimi",
    stats: [
      { value: "12-18 ay", label: "Ortalama süre" },
      { value: "5.500+", label: "Tamamlanan vaka" },
      { value: "100%", label: "Dijital planlama" },
    ],
    advantages: [
      {
        icon: "🧭",
        title: "3D tarama & simülasyon",
        description: "Tedavi başlamadan final hizalamayı görebilir, farklı senaryoları değerlendirirsiniz.",
      },
      {
        icon: "🛋️",
        title: "Konforlu takip",
        description: "Online ve yüz yüze takip randevularıyla plak değişimleri ve ayarları planlıyoruz.",
      },
      {
        icon: "🔒",
        title: "Retainer & pekiştirme",
        description: "Tedavi sonrası pekiştirme plakları ve retainer protokolüyle kalıcılığı güvence altına alıyoruz.",
      },
    ],
    steps: [
      { title: "1. Kapsamlı muayene", description: "Çene yapısı, kapanış ve alışkanlıklar değerlendirilir." },
      { title: "2. Dijital plan & maliyet", description: "Plak sayısı, tedavi süresi ve ödeme planı netleştirilir." },
      {
        title: "3. Aktif tedavi",
        description: "Plak teslimleri veya tel ayarları düzenli aralıklarla gerçekleştirilir.",
      },
      {
        title: "4. Pekiştirme",
        description: "Retainer uygulamalarıyla yeni konum korunur, kontroller planlanır.",
      },
    ],
  },
  "zirkonyum-kaplama": {
    slug: "zirkonyum-kaplama",
    title: servicesMap["zirkonyum-kaplama"].title,
    heroEyebrow: "Zirkonyum / Porselen",
    heroTitle: "Doğala en yakın ışık geçirgenliğinde kaplamalar",
    heroDescription:
      "Kırık, aşınmış veya renk değiştirmiş dişleri güçlendirmek için dijital ölçü ile yüksek hassasiyetli zirkonyum kaplamalar hazırlıyoruz. Eksiksiz diş eti uyumu ve ısırma dengesiyle uzun ömür sağlıyoruz.",
    heroImage: "/services/zirkonyum-hero.webp",
    heroImageAlt: "Zirkonyum kaplama hazırlığı yapan diş hekimi",
    stats: [
      { value: "48 saat", label: "Geçici kaplama" },
      { value: "12 yıl+", label: "Ortalama ömür" },
      { value: "Full CAD/CAM", label: "Dijital üretim" },
    ],
    advantages: [
      {
        icon: "🖥️",
        title: "Tarama sonrası dijital ölçü",
        description: "Ağız içi tarayıcı ile hassas ölçü alınır, laboratuvara dijital data aktarılır.",
      },
      {
        icon: "🎨",
        title: "Kişiselleştirilmiş renk seçimi",
        description: "Cilt tonu, göz rengi ve doğal diş renginize uygun tonlar belirlenir.",
      },
      {
        icon: "🧩",
        title: "Konforlu prova süreci",
        description: "Geçici kaplamalarla alışma dönemi sağlanır; ısırma ve fonetik ayarları yapılır.",
      },
    ],
    steps: [
      { title: "1. Muayene & planlama", description: "Diş eti sağlığı, çiğneme düzeni ve estetik beklenti değerlendirilir." },
      { title: "2. Hazırlık & ölçü", description: "Dişler minimal aşındırılır, dijital ölçü alınır, geçici kaplamalar takılır." },
      { title: "3. Laboratuvar üretimi", description: "Zirkonyum altyapı ve porselen layering tamamlanır, renk kontrolleri yapılır." },
      { title: "4. Teslim & takip", description: "Kalıcı yapıştırma sonrası 1. ve 3. ay kontrolleri planlanır." },
    ],
  },
  "dolgu-kanal": {
    slug: "dolgu-kanal",
    title: servicesMap["dolgu-kanal"].title,
    heroEyebrow: "Dolgu & Kanal Tedavisi",
    heroTitle: "Ağrısız ve hızlı onarımla dişleri koruma altına alın",
    heroDescription:
      "Çürük veya enfekte dişlerde mikroskobik kanal tedavisi ve yüksek dayanımlı dolgularla dişinizi çekimden kurtarıyoruz. Tek seansta ağrıyı giderip fonksiyonu geri kazandırıyoruz.",
    heroImage: "/services/dolgu-hero.webp",
    heroImageAlt: "Kanal tedavisi yapan diş hekimi",
    stats: [
      { value: "Tek seans", label: "Mümkün tedavi" },
      { value: "99%", label: "Başarı oranı" },
      { value: "0 ağrı", label: "Hassas anestezi" },
    ],
    advantages: [
      {
        icon: "💉",
        title: "Hassas anestezi",
        description: "İntraligamanter ve bilgisayar kontrollü anestezi ile işlem öncesi ağrıyı tamamen kesiyoruz.",
      },
      {
        icon: "🔬",
        title: "Mikroskobik temizlik",
        description: "Kanal içi enfeksiyonları büyütme altında görüp temizleyerek nüks riskini azaltıyoruz.",
      },
      {
        icon: "🧱",
        title: "Estetik dolgular",
        description: "Nano hibrit kompozitler ve seramik inlay/onlay seçenekleriyle yüksek dayanım sağlıyoruz.",
      },
    ],
    steps: [
      { title: "1. Tanı & görüntüleme", description: "Röntgen ve vitalite testleriyle kök kanallarının durumu belirlenir." },
      {
        title: "2. Kanal temizliği",
        description: "Mikromotor ve ultrasonik sistemlerle kök kanalları şekillendirilir, dezenfekte edilir.",
      },
      { title: "3. Dolgu / obturasyon", description: "Sızdırmazlık sağlayan pat ve gutta-percha ile kanal doldurulur." },
      {
        title: "4. Restorasyon",
        description: "Kompozit dolgu, inlay veya kuron ile diş güçlendirilir; çiğneme testi yapılır.",
      },
    ],
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
      title: "Hizmet | Rauf Dent",
      description: "Rauf Dent klinik hizmetleri",
    };
  }

  return {
    title: `${detail.title} | Rauf Dent`,
    description: detail.heroDescription,
  };
};

const whatsappUrl = "https://wa.me/905455555050?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

const ServiceDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const detail = detailContent[slug];

  if (!detail) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-white via-white to-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">{detail.heroEyebrow}</p>
                <div className="space-y-4">
                  <h1 className="font-heading text-3xl tracking-tight text-slate-900 md:text-5xl">{detail.heroTitle}</h1>
                  <p className="text-lg leading-relaxed text-slate-600 md:text-xl">{detail.heroDescription}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {detail.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[26px] border border-slate-100 bg-white/95 px-5 py-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <p className="text-3xl font-semibold text-[#384B70]">{stat.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(16,185,129,0.35)] transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                  >
                    WhatsApp&apos;tan Randevu Al
                  </a>
                  <Link
                    href="/iletisim#fast-appointment"
                    className="inline-flex items-center justify-center rounded-full border border-[#D7C3A3] px-8 py-3 text-sm font-semibold text-[#384B70] transition hover:bg-[#F8F4EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
                  >
                    İlk Muayeneyi Planla
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-[36px] border border-white/60 bg-white/90 shadow-[0_35px_100px_rgba(15,23,42,0.16)]">
                  <img
                    src={detail.heroImage}
                    alt={detail.heroImageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {detail.beforeAfter && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">İşlem Öncesi / Sonrası</p>
                <h2 className="mt-2 font-heading text-3xl text-slate-900">Sonuçları anında gözlemleyin</h2>
                <p className="mt-3 text-sm text-slate-500">{detail.beforeAfter.description}</p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-3 rounded-3xl border border-slate-100 bg-slate-50/60 p-4 shadow-[0_15px_50px_rgba(15,23,42,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{detail.beforeAfter.before.label}</p>
                  <img
                    src={detail.beforeAfter.before.image}
                    alt={detail.beforeAfter.before.label}
                    className="h-64 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 rounded-3xl border border-slate-100 bg-slate-50/60 p-4 shadow-[0_15px_50px_rgba(15,23,42,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{detail.beforeAfter.after.label}</p>
                  <img
                    src={detail.beforeAfter.after.image}
                    alt={detail.beforeAfter.after.label}
                    className="h-64 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">Öne Çıkan Avantajlar</p>
              <h2 className="mt-2 font-heading text-3xl text-slate-900">Tedavi yaklaşımımızın güçlü yönleri</h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {detail.advantages.map((advantage) => (
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
        </section>

        <section className="bg-gradient-to-b from-white to-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">Tedavi Süreci</p>
              <h2 className="mt-2 font-heading text-3xl text-slate-900">Adım adım premium protokol</h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {detail.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex flex-col rounded-3xl border border-white/70 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5EFE6] text-sm font-semibold text-[#384B70]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-100 bg-[#F8F4EF] px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.12)] sm:px-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7a674e]">Randevu</p>
                <h2 className="mt-3 font-heading text-3xl text-slate-900">Uzman ekibimiz sizi dinlemeye hazır</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  Tedavi planınızı yüz yüze görüşmek, maliyet ve süre hakkında bilgi almak için hemen iletişim formunu doldurabilir
                  veya WhatsApp üzerinden mesaj gönderebilirsiniz.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(16,185,129,0.35)] transition hover:bg-emerald-500"
                >
                  WhatsApp&apos;tan Yazın
                </a>
                <Link
                  href="/iletisim#fast-appointment"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-[#384B70] px-6 py-3 text-sm font-semibold text-[#384B70] transition hover:bg-white"
                >
                  Formu Doldurun
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mb-10 w-full max-w-6xl border-t border-slate-200" />
        <Footer />
      </main>
    </>
  );
};

export default ServiceDetailPage;
