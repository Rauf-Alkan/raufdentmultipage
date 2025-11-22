import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Hizmetler | Rauf Dent",
  description: "İmplant, estetik diş hekimliği, ortodonti ve diğer güncel tedavi çözümlerimizi inceleyin.",
};

const ServicesPage = () => {
  return (
    <main>
      <Services />
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
    </main>
  );
};

export default ServicesPage;
