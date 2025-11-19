export const teamMembers = [
  {
    name: "Uzm. Dt. Ali Yılmaz",
    title: "İmplant ve Cerrahi",
    photo: "/doctor1.webp",
    badge: "Dijital Implant Cerrahisi",
    summary:
      "Uludağ Üniversitesi Diş Hekimliği Fakültesi’nden 2008’de mezun oldu. İleri implantoloji ve rehberli cerrahi üzerine eğitimler alarak dijital planlama protokollerini kliniğe taşıdı. Minimal invaziv uygulamalarla doğal görünümlü sonuçlara odaklanıyor.",
    highlights: ["12+ yıl implant deneyimi", "3D rehberli cerrahi", "4.9 hasta memnuniyeti"],
  },
  {
    name: "Uzm. Dt. Ayşe Demir",
    title: "Estetik Diş Hekimi",
    photo: "/doctor2.webp",
    badge: "Gülüş Tasarımı",
    summary:
      "Hacettepe Üniversitesi mezunu olan Dt. Ayşe, estetik restorasyonlar ve gülüş tasarımında 10 yılı aşkın süredir çalışıyor. Dijital mock-up ve kişiye özel renk planlama teknikleriyle doğala en yakın sonuçları hedefliyor.",
    highlights: ["5.000+ gülüş tasarımı", "CAD/CAM lamina uzmanı", "Kişiye özel renk planlama"],
  },
  {
    name: "Uzm. Dt. Emre Akman",
    title: "Ortodonti ve Pedodonti",
    photo: "/doctor3.webp",
    badge: "Şeffaf Plak & Pedodonti",
    summary:
      "Ankara Üniversitesi mezunu Dt. Emre, uzmanlığını ortodonti ve pedodonti alanında tamamladı. Şeffaf plak tedavilerini dijital ölçülerle planlıyor, aynı zamanda çocuk hastalarda davranış odaklı yaklaşımıyla tanınıyor.",
    highlights: ["Invisalign sertifikalı", "Pedodonti deneyimi", "Davranış odaklı iletişim"],
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="bg-gradient-to-b from-white to-slate-50 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">Ekibimiz</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-slate-900 md:text-5xl">Alanında uzman hekimlerimizle tanışın</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Dijital planlama, modern klinik altyapısı ve hasta konforuna odaklanan yaklaşımımızla her tedavide deneyimli ekibimiz yanınızda.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((doctor) => (
            <article
              key={doctor.name}
              className="flex h-full flex-col rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)]"
            >
              <div className="relative mb-5">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="aspect-[3/4] w-full rounded-[28px] object-cover shadow-[0_20px_60px_rgba(15,23,42,0.2)]"
                  loading="lazy"
                />
                {doctor.badge ? (
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-[#384B70] shadow-[0_10px_30px_rgba(15,23,42,0.15)]">
                    {doctor.badge}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col flex-1">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{doctor.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{doctor.title}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{doctor.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-500">
                  {doctor.highlights.map((item) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
