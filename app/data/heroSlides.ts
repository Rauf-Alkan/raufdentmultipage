export type HeroSlideContent = {
  label: string;
  title: string;
  subtitle: string;
  image: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
};

const heroSlides: HeroSlideContent[] = [
  {
    label: "Steril Ortamda Diş Bakımı",
    title: "Dijital planlı tedavilerle sağlıklı gülüşlere güvenle ulaşın.",
    subtitle:
      "Kişiye özel cerrahi rehberler ve deneyimli hekimlerimizle konforlu implant ve cerrahi uygulamaları sunuyoruz.",
    image: "/hero.webp",
    ctaPrimary: {
      text: "Randevu Al",
      href: "/iletisim#fast-appointment",
    },
    ctaSecondary: {
      text: "Bize Ulaşın",
      href: "https://wa.me/905455555050?text=Merhaba%2C%20randevu%20almak%20istiyorum.",
    },
  },
  {
    label: "Estetik Diş Hekimliği",
    title: "Gülüş tasarımında sanat ve teknolojiyi bir araya getiriyoruz.",
    subtitle:
      "Lamina, bonding ve zirkonyum uygulamalarında dijital mock-up ile sonucu önceden görerek ilerleyin.",
    image: "/esthetic.webp",
    ctaPrimary: {
      text: "Gülüş Tasarımını İncele",
      href: "/hizmetler/gulus-tasarimi",
    },
    ctaSecondary: {
      text: "Bize Ulaşın",
      href: "/iletisim",
    },
  },
  {
    label: "Ortodonti & Şeffaf Plak",
    title: "Şeffaf plaklarla konforlu hizalama deneyimi yaşatıyoruz.",
    subtitle:
      "3D planlama, düzenli takip ve pekiştirme protokolleri ile hem çocuklar hem yetişkinler için öngörülebilir sonuçlar.",
    image: "/about.webp",
    ctaPrimary: {
      text: "Ortodonti Detayları",
      href: "/hizmetler/ortodonti",
    },
    ctaSecondary: {
      text: "İletişime Geç",
      href: "/iletisim#contact",
    },
  },
];

export default heroSlides;
