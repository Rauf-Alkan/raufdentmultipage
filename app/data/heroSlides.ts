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
      text: "WhatsApp'tan Sor",
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
      text: "Randevu Al",
      href: "/iletisim#fast-appointment",
    },
    ctaSecondary: {
      text: "WhatsApp'tan Sor",
      href: "https://wa.me/905455555050?text=Merhaba%2C%20g%C3%BCl%C3%BC%C5%9F%20tasar%C4%B1m%C4%B1%20i%C3%A7in%20h%C4%B1zl%C4%B1%20dan%C4%B1%C5%9Fmak%20istiyorum.",
    },
  },
  {
    label: "Ortodonti & Şeffaf Plak",
    title: "Şeffaf plaklarla konforlu hizalama deneyimi yaşatıyoruz.",
    subtitle:
      "3D planlama, düzenli takip ve pekiştirme protokolleri ile hem çocuklar hem yetişkinler için öngörülebilir sonuçlar.",
    image: "/about.webp",
    ctaPrimary: {
      text: "Randevu Al",
      href: "/iletisim#fast-appointment",
    },
    ctaSecondary: {
      text: "WhatsApp'tan Sor",
      href: "https://wa.me/905455555050?text=Merhaba%2C%20ortodonti%20i%C3%A7in%20h%C4%B1zl%C4%B1%20dan%C4%B1%C5%9Fmak%20istiyorum.",
    },
  },
];

export default heroSlides;
