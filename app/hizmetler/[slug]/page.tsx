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
      intro: "İmplant tedavisi, tek diş eksikliğinden tam dişsizlik durumuna kadar fonksiyonel ve estetik bir çözüm sunar. Sağlam çene kemiği olan, sistemik hastalığı kontrol altında olan ve ağız hijyenine özen gösteren yetişkin hastalar için planlanır.",
      sections: [
        {
          title: "İmplant Tedavisi Nedir?",
          text: "Diş implantı, eksik dişin kökünü taklit eden titanyum vidaların çene kemiğine yerleştirilmesi ve üzerine porselen ya da zirkonyum protezlerin uygulanmasıdır. Doğal diş kökünü taklit ettiği için hem çiğneme kuvvetini hem de estetik görünümü geri kazandırır.",
        },
        {
          title: "Kimler İçin Uygundur?",
          text: "Yeterli kemik hacmine sahip, diş eti hastalığı kontrol altında olan, sistemik hastalıkları hekim onayıyla uygun görülen yetişkinler için tercih edilir. Sigara kullanımı, kontrolsüz diyabet veya ileri osteoporoz gibi durumlar tedavi planlamasını değiştirebilir.",
        },
        {
          title: "Tedavi Süreci",
          text: "Çene kemiği ve diş eti değerlendirmesi, dijital görüntüleme ve ölçüyle başlar. Lokal anestezi altında implant yerleştirilir, iyileşme sürecinde (osseointegrasyon) geçici dişler kullanılır. Ortalama 2-6 ay sonra kalıcı porselen veya zirkonyum dişler hazırlanır.",
        },
        {
          title: "İmplant Çeşitleri ve Teknikler",
          text: "Standart implantlar tek diş eksikliği için idealdir. Mini implantlar dar kemik alanlarında veya geçici protezleri sabitlemek için kullanılır. All-on-4/All-on-6 gibi konseptlerde tam dişsizlik durumunda 4 veya 6 implant üzerine sabit protezler yapılır, kemik grefti ihtiyacını azaltır.",
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
        answer: "Lokal anestezi altında yapılır, işlem sırasında ağrı hissedilmez. Sonrasında hafif sızı veya şişlik normaldir ve ağrı kesicilerle kontrol altına alınır."
      },
      {
        question: "İmplant herkese uygulanabilir mi?",
        answer: "Kemik gelişimi tamamlanmış, sistemik durumu uygun olan yetişkinlere uygulanır. Yetersiz kemik hacmi varsa kemik grefti veya sinüs lifting ile desteklenebilir."
      },
      {
        question: "İmplant tedavisi ne kadar sürer?",
        answer: "Cerrahi işlem genellikle tek seansta tamamlanır. İmplantın kemikle kaynaşması 2-6 ay sürer, bu sürede geçici dişler kullanılabilir."
      },
      {
        question: "İmplantın ömrü ne kadardır?",
        answer: "Düzenli kontrol ve iyi ağız bakımıyla implantlar çok uzun yıllar, doğru bakımda ömür boyu kullanılabilir."
      },
      {
        question: "İmplant sonrası nelere dikkat etmeliyim?",
        answer: "İlk günlerde sıcak-soğuk ve sert gıdalardan kaçınmak, hekim önerdiği ilaç ve bakım talimatlarına uymak, sigarayı azaltmak veya bırakmak iyileşmeyi hızlandırır."
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
       intro: "Gülüş tasarımı; yüz oranları, dudak hattı, diş eti seviyesi ve dişlerin formunu birlikte değerlendirerek kişiye özel estetik bir plan oluşturur. Amaç, hem doğal hem de fonksiyonel bir gülüş elde etmektir.",
       sections: [
        {title: "Süreç Nasıl İşler?", text: "Fotoğraf analizi, dijital gülüş simülasyonu ve yüz oranlarının değerlendirilmesiyle başlar. Dijital mock-up ve prova dişlerle, tedavi öncesi olası sonucu birlikte görürüz."},
        {title: "Kullanılan Yöntemler", text: "Porselen veya zirkonyum kaplamalar, laminate veneer (yaprak porselen), bonding, diş beyazlatma ve diş eti seviyeleme gibi işlemler kombine edilir."},
        {title: "Tedavi Planı ve Prova", text: "Geçici materyallerle prova yapılır, dudak uyumu ve konuşma sırasında dişlerin görünürlüğü test edilir. Ardından kalıcı restorasyonlara geçilir."},
        {title: "Doğallık ve Kalıcılık", text: "Materyal seçimi, renk tonlaması ve yüz şekline uygun diş formu, uzun ömürlü ve doğal bir sonuç sağlar. Düzenli kontrollerle kalıcılık desteklenir."}
       ],
       listTitle: "Kimler İçin Uygundur?",
       listItems: ["Diş renginden memnun olmayanlar", "Kırık veya aşınmış dişleri olanlar", "Diş boyu veya formundan rahatsız olanlar", "Diş eti gülümsemesi (gummy smile) yaşayanlar", "Çapraşıklık için ortodonti beklemek istemeyen, hızlı çözüm arayanlar"]
     },
     faqs: [
      {question: "Gülüş tasarımı kaç seansta biter?", answer: "Planlamaya göre değişir ancak genellikle 2-3 prova ve 1-2 son randevuyla 1-3 hafta içinde tamamlanır."},
      {question: "Yaprak porselenler doğal durur mu?", answer: "Doğru renk seçimi, translusens ayarı ve diş eti uyumuyla yaprak porselenler doğal diş görünümü verir."},
      {question: "İşlem sonrası hassasiyet olur mu?", answer: "Geçici hassasiyet görülebilir, genellikle kısa sürede kaybolur. Hassasiyet giderici ürünlerle desteklenir."},
      {question: "Diş eti seviyem düzensiz, düzeltilir mi?", answer: "Diş eti şekillendirme (gingivektomi/gingivoplasti) ile seviyeleme yapılabilir, gülüş tasarımının önemli bir parçasıdır."},
      {question: "Sonuç ne kadar kalıcı?", answer: "Doğru bakım ve düzenli kontrollerle porselen/restorasyonlar uzun ömürlüdür; bruksizm varsa gece plağı tavsiye edilir."}
     ],
     cta: {title: "Randevu Alın", text: "Hayalinizdeki gülüş için ilk adımı atın.", buttonText: "RANDEVU AL"}
  },
   "dis-beyazlatma": {
     slug: "dis-beyazlatma",
     title: "Diş Beyazlatma",
     heroTitle: "Profesyonel Diş Beyazlatma",
     heroDescription: "Daha parlak ve beyaz dişlere sahip olmak için güvenli ve hızlı çözümler.",
     heroImage: "/services/beyazlatma-hero.webp",
     content: {
       intro: "Zamanla gıda, kahve-çay tüketimi veya sigara nedeniyle renklenen dişlerin yüzey ve iç lekelerini, hekim kontrollü beyazlatma ajanlarıyla güvenle açıyoruz.",
       sections: [
        {title: "Ofis Tipi ve Ev Tipi Beyazlatma", text: "Ofis tipi beyazlatma klinikte güçlü ama kontrollü ajanlarla tek seansta yapılır. Ev tipi beyazlatmada kişiye özel plaklara yerleştirilen ajanlar hekim önerdiği sürelerde kullanılır."},
        {title: "Kimler İçin Uygundur?", text: "Mine yapısı sağlıklı, aktif çürüğü veya ileri diş eti hastalığı olmayan, hamilelik veya emzirme döneminde bulunmayan hastalar için uygundur."},
        {title: "İşlem Sonrası Dikkat Edilecekler", text: "İlk 48 saat renkli gıdalardan kaçınmak, hassasiyet giderici ürünler kullanmak ve sigarayı azaltmak sonuçları korur."},
        {title: "Kullanılan Ajanlar Güvenli mi?", text: "Hekim gözetiminde uygulanan hidrojen veya karbamid peroksit içerikli ajanlar mine yapısına zarar vermez; doğru doz ve süre ile güvenli sonuç verir."}
       ],
       listTitle: "Avantajları",
       listItems: ["Hızlı ve gözle görülür sonuç", "Mine dokusuna zarar vermeyen güvenli ajanlar", "Kişiye özel uygulama seçenekleri (ofis/ev tipi)", "Uzun süre kalıcılık için bakım önerileri", "Dijital renk takibi ile kontrollü açılma"]
     },
     faqs: [
      {question: "Beyazlatma sonrası hassasiyet normal mi?", answer: "İlk 24-48 saatte geçici hassasiyet olabilir; hassasiyet giderici macun ve gerekirse flor uygulamasıyla rahatlar."},
      {question: "Kaç ton açılma sağlanır?", answer: "Başlangıç rengine bağlı olarak genellikle 2-6 ton arası açılma elde edilir."},
      {question: "Sonuçlar ne kadar kalıcı?", answer: "Beslenme alışkanlıklarına bağlıdır; düzenli bakım ve renkli gıdalardan kaçınma ile 1-3 yıl kalıcılık mümkündür."},
      {question: "Dolgu veya kaplamalar da beyazlar mı?", answer: "Hayır, dolgu ve kaplamaların rengi değişmez. Gerekirse beyazlatma sonrası ton eşitlemek için yenilenebilir."},
      {question: "Ev tipi beyazlatmayı ne kadar süre kullanmalıyım?", answer: "Hekimin belirlediği gün ve saat aralığında, genellikle 7-14 gün arası kontrollü kullanım önerilir."}
     ],
     cta: {title: "Randevu Alın", text: "Parlak bir gülüş için randevu oluşturun.", buttonText: "RANDEVU AL"}
  },
  ortodonti: {
     slug: "ortodonti",
     title: "Ortodonti",
     heroTitle: "Ortodonti Tedavisi",
     heroDescription: "Çapraşık dişleri düzeltmek ve ideal kapanışı sağlamak için modern çözümler.",
     heroImage: "/services/ortodonti-hero.webp",
     content: {
       intro: "Ortodonti, diş ve çene ilişkisini düzelterek hem estetik hem fonksiyonel bir kapanış sağlar. Tel tedavisi, şeffaf plaklar ve modern biyomekanik yöntemlerle planlanır.",
       sections: [
        {title: "Hangi Problemler Tedavi Edilir?", text: "Çapraşıklık, dişler arası boşluklar, derin kapanış, açık kapanış, sınıf II/III çene ilişkileri ve çene darlıkları ortodontik yöntemlerle düzeltilir."},
        {title: "Tedavi Seçenekleri", text: "Metal braketler dayanıklıdır, porcelen/şeffaf braketler estetik alternatif sunar. Şeffaf plak tedavisi (aligner) tel kullanmadan, çıkarılabilir plaklarla ilerler."},
        {title: "Tedavi Süresi ve Kontroller", text: "Vakaya göre 6 ay ile 24+ ay arası sürebilir. Düzenli 4-8 haftalık kontroller hareketin kontrollü olmasını sağlar."},
        {title: "Erişkin Ortodontisi", text: "Yetişkinlerde de ortodonti güvenle uygulanabilir. Estetik braketler veya şeffaf plaklar ile sosyal yaşama uyum kolaydır."}
       ],
       listTitle: "Tedavi Seçenekleri",
       listItems: ["Metal braketler", "Porselen/estetik braketler", "Şeffaf plaklar (telsiz)", "Mini vidalarla destekli tedaviler", "Çene darlığı için genişletme apareyleri"]
     },
     faqs: [
      {question: "Ortodonti tedavisi için yaş sınırı var mı?", answer: "Çene gelişimi devam eden çocuklarda erken dönemde başlamak avantajlıdır, ancak yetişkinlerde de estetik seçeneklerle güvenle uygulanabilir."},
      {question: "Şeffaf plak tedavisi etkili mi?", answer: "Uygun vakalarda şeffaf plaklar dişleri kontrollü şekilde hareket ettirir; hasta uyumu ve düzenli kullanım önemlidir."},
      {question: "Ağrı veya rahatsızlık olur mu?", answer: "İlk günlerde hafif baskı ve batmalar normaldir, kısa sürede alışılır. Mum ve küçük düzeltmelerle konfor artırılır."},
      {question: "Tedavi süresini dikkat/uyum etkiler mi?", answer: "Kontrollere düzenli gelmek, hastanın önerilere uyması ve apareylerini doğru kullanması süreci kısaltır ve başarıyı artırır."},
      {question: "Tedavi bittikten sonra dişler geri döner mi?", answer: "Pekiştirme (retention) plakları düzenli kullanılırsa dişler stabil kalır. Pekiştirme protokolü hekimin önerdiği gibi sürdürülmelidir."}
     ],
     cta: {title: "Randevu Alın", text: "Ücretsiz muayene için randevu alın.", buttonText: "RANDEVU AL"}
  },
  "zirkonyum-kaplama": {
     slug: "zirkonyum-kaplama",
     title: "Zirkonyum Kaplama",
     heroTitle: "Zirkonyum Diş Kaplama",
     heroDescription: "Metal desteksiz, ışık geçirgenliği yüksek ve doğal görünümlü kaplamalar.",
     heroImage: "/services/zirkonyum-hero.webp",
     content: {
       intro: "Zirkonyum kaplamalar, metal altyapı gerektirmeden doğal ışık geçirgenliği sağlar ve diş eti dostudur. Hem estetik hem dayanıklılık sunar.",
       sections: [
        {title: "Neden Zirkonyum?", text: "Metal yansıması olmadığı için diş eti kenarında grileşme yapmaz, doğal diş gibi ışığı yansıtır. Alerji riski düşüktür ve biyouyumlu bir materyaldir."},
        {title: "Hazırlık ve Ölçü Alma", text: "Dişler minimal aşındırılır, hassas ölçü alınarak laboratuvarda kişiye özel zirkonyum altyapı ve porselen üst yapı hazırlanır."},
        {title: "Ömür ve Bakım", text: "Yüksek dayanıklılığı sayesinde posterior bölgede de güvenle kullanılır. Düzenli fırçalama, diş ipi ve hekim kontrolleriyle uzun ömürlüdür."},
        {title: "Renk ve Doğallık", text: "Çevre dişlerle uyumlu renk ve translusens seçimi yapılır, doğal diş formu ve yüz hatlarına göre şekillendirilir."}
       ],
       listTitle: "Kullanım Alanları",
       listItems: ["Ön diş estetiği", "Kanal tedavili dişlerin restorasyonu", "Koyu renkli veya metal destekli kaplamaların yenilenmesi", "Kırık veya aşınmış dişlerin güçlendirilmesi"]
     },
     faqs: [
      {question: "Zirkonyum kaplamalar dayanıklı mı?", answer: "Yüksek kırılma direncine sahiptir, arka bölge çiğneme kuvvetlerine karşı dayanıklıdır."},
      {question: "Diş eti uyumu nasıldır?", answer: "Biyouyumlu olduğu için diş eti kenarında renk değişimi yapmaz, düzgün kenar uyumuyla diş eti sağlığını destekler."},
      {question: "Renk zamanla değişir mi?", answer: "Kaplama kendi rengini korur, yüzey pürüzsüzlüğü sayesinde leke tutma direnci yüksektir."},
      {question: "Hazırlık aşaması acı verir mi?", answer: "Lokal anestezi altında minimal aşındırma yapılır, işlem konforlu ve kontrollüdür."},
      {question: "Ne kadar sürede tamamlanır?", answer: "Ölçü ve prova seanslarıyla birlikte genellikle 5-10 gün içinde teslim edilir."}
     ],
     cta: {title: "Randevu Alın", text: "Doğal görünümlü dişler için bizi arayın.", buttonText: "RANDEVU AL"}
  },
  "dolgu-kanal": {
     slug: "dolgu-kanal",
     title: "Dolgu ve Kanal Tedavisi",
     heroTitle: "Dolgu ve Kanal Tedavisi",
     heroDescription: "Ağrıyan veya çürüyen dişlerinizi çekimden kurtaran koruyucu tedaviler.",
     heroImage: "/services/dolgu-hero.webp",
     content: {
       intro: "Dolgu ve kanal tedavisi, çürük veya enfeksiyon nedeniyle zarar gören dişleri çekmeden kurtarmayı hedefler; dişin işlevini ve estetiğini geri kazandırır.",
       sections: [
        {title: "Dolgu Nedir?", text: "Çürük veya kırık nedeniyle mine-dentin kaybı olan diş, temizlenip kompozit veya porselen inley/onley dolgularla restore edilir."},
        {title: "Kanal Tedavisi Süreci", text: "İlerlemiş çürüklerde pulpa temizlenir, kök kanalları şekillendirilip dezenfekte edilir ve biyouyumlu dolgu materyaliyle kapatılır. Sonrasında dolgu veya kaplama ile güçlendirilir."},
        {title: "Ağrısız Tedavi", text: "Lokal anestezi altında uygulanır; modern cihazlarla işlem süresi kısalır ve konfor artar."},
        {title: "Tedavi Sonrası Bakım", text: "İlk 24 saat sert gıdalardan kaçınmak, düzenli fırçalama ve diş ipi kullanmak, kontrolleri aksatmamak tedavi ömrünü uzatır."}
       ],
       listTitle: "Belirtiler",
       listItems: ["Sıcak-soğuk hassasiyeti", "Gece başlayan zonklayıcı ağrı", "Diş renginde koyulaşma", "Çiğneme sırasında sızı", "Diş etinde şişlik veya fistül"]
     },
     faqs: [
      {question: "Dolgu veya kanal tedavisi ağrılı mı?", answer: "Lokal anesteziyle ağrısızdır, işlem sonrası hafif hassasiyet normaldir ve kısa sürede geçer."},
      {question: "Tedavi tek seansta biter mi?", answer: "Basit dolgular tek seansta biter. Kanal tedavisi enfeksiyon durumuna göre 1-2 seans sürebilir."},
      {question: "Kanal tedavili diş kırılır mı?", answer: "Nemi azaldığı için kırılganlık artabilir; porselen onley veya kaplama ile güçlendirmek uzun ömür sağlar."},
      {question: "Tedavi sonrası neye dikkat etmeli?", answer: "İlk saatlerde yemek yememek, sert gıdalardan uzak durmak ve hekimin ilaç/bakım önerilerine uymak gerekir."},
      {question: "Tedavi başarısı neye bağlı?", answer: "Doğru teşhis, iyi izolasyon, dezenfeksiyon ve düzenli kontrol ile başarı oranı yüksektir; gece plağı ve iyi ağız bakımı destekler."}
     ],
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
      <main className="bg-white pb-14">
        
        {/* --- HERO SECTION (Resim + Mavi Çizgi) --- */}
        <div className="relative isolate w-full overflow-hidden border-b border-neutral-200 bg-white">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-10 md:block">
            <img
              src={detail.heroImage}
              alt={detail.heroTitle}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent" />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-900 md:text-xs">
              Hizmetlerimiz / {detail.title}
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              {detail.heroTitle}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">{detail.heroDescription}</p>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#4A5D89]" />
          </div>
        </div>

        {/* --- ANA ICERIK GRID (SOL: İçerik | SAĞ: Sticky Sidebar) --- */}
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
            
            {/* ================= SOL KOLON (Makale / İçerik) ================= */}
            <div className="space-y-10 max-w-3xl mx-auto lg:mx-0">
              
              {/* Mavi Kutucuklu Giriş */}
              <div className="relative rounded-2xl border-l-4 border-[#4A5D89] bg-white p-6 shadow-sm">
                 <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
                   {detail.content.intro}
                 </p>
              </div>

              {/* Dinamik Bölümler (H3 Başlık ve Paragraflar) */}
              <div className="space-y-10">
                {detail.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3 first:mt-0 mt-12">
                    {section.title && (
                      <h3 className="font-heading text-3xl font-medium leading-tight text-neutral-900 md:text-[34px]">
                        {section.title}
                      </h3>
                    )}
                    <p className="text-base leading-relaxed text-neutral-600 md:text-lg md:leading-loose">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Liste Alanı (Mavi Tik İşaretli) */}
              {detail.content.listItems && (
                <div className="rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgba(56,75,112,0.18)]">
                  {detail.content.listTitle && (
                    <h3 className="mb-6 font-heading text-3xl font-medium leading-tight text-neutral-900 md:text-[34px]">
                      {detail.content.listTitle}
                    </h3>
                  )}
                  <ul className="space-y-4">
                    {detail.content.listItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                          <svg className="h-3 w-3 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base font-normal leading-relaxed text-neutral-700 md:text-lg">{item}</span>
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
                  <h3 className="mb-5 font-heading text-2xl font-medium leading-tight text-neutral-900">Sık Sorulan Sorular</h3>
                  <div className="space-y-3">
                    {detail.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md open:shadow-md"
                      >
                        <summary className="flex w-full cursor-pointer list-none items-center justify-between p-4 text-left font-medium text-neutral-800 focus:outline-none">
                          <span className="pr-4 text-lg font-medium leading-tight text-neutral-800 md:text-lg">{faq.question}</span>
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 transition group-open:rotate-180 group-open:bg-[#E8EDF7] group-open:text-[#384B70]">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="border-t border-neutral-100 px-4 pb-4 pt-2 text-base leading-relaxed text-neutral-600 animate-in fade-in slide-in-from-top-1 md:text-lg md:leading-loose">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

                {/* 2. BÖLÜM: Randevu Kartı (Mavi Butonlu) */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-center border border-neutral-200">
                  {/* Üst Kısım: İkon ve Başlık */}
                 <div className="bg-white p-8 pb-6">
                     <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#384B70] text-white">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                     </div>
                     <h3 className="font-heading text-2xl font-semibold text-neutral-900">{detail.cta.title}</h3>
                     <p className="mt-3 text-base leading-relaxed text-neutral-500 px-2 md:text-lg">
                        {detail.cta.text}
                     </p>
                  </div>

                  {/* Alt Kısım: Mavi Buton */}
                  <div className="bg-[#F8FAFC] p-6 pt-0">
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
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white py-3 text-sm font-semibold text-neutral-600 transition hover:bg-[#F8FAFC]"
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
