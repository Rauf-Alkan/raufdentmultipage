import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Hizmetler | Rauf Dent",
  description: "İmplant, estetik diş hekimliği, ortodonti ve diğer güncel tedavi çözümlerimizi inceleyin.",
};

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main>
        <Services />
        <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
        <Footer />
      </main>
    </>
  );
};

export default ServicesPage;
