const features = [
  {
    icon: "⭐",
    title: "Uzman Kadro",
    description:
      "Alanında uzun yıllara dayanan deneyime sahip hekimlerimiz, tedavi sürecinizi güvenle planlar.",
  },
  {
    icon: "⚙️",
    title: "Yenilikçi Yöntemler",
    description:
      "Diş hekimliğindeki en güncel tedavi protokollerini uygulayarak daha hızlı ve konforlu çözümler sunuyoruz.",
  },
  {
    icon: "🛡️",
    title: "Garantili Sonuçlar",
    description:
      "Estetiği ve fonksiyonu bir araya getirerek uzun ömürlü, başarılı sonuçlara odaklanıyoruz.",
  },
  {
    icon: "💎",
    title: "Son Teknoloji",
    description:
      "Dijital görüntüleme ve modern klinik donanımlarıyla tedavilerimizi hassasiyetle gerçekleştiriyoruz.",
  },
];

const FourFeatures = () => {
  return (
    <section
      id="features"
      className="bg-white py-28 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="transform transition-transform duration-500 hover:-translate-y-1 animate-fade-up"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          >
            <div className="rounded-2xl border border-slate-100 bg-white/90 p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] md:p-8">
              <span
                aria-hidden="true"
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-2xl"
              >
                {feature.icon}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-[#384B70]">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourFeatures;
