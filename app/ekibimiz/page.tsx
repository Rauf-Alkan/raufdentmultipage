import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Team from "@/components/sections/Team";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Ekibimiz | Rauf Dent",
  description:
    "Tecrübeli hekimlerimiz, modern klinik altyapımız ve kişiye özel yaklaşımımızla her hastamızın güvenle gülümsemesini sağlıyoruz.",
};

const TeamPage = () => {
  return (
    <>
      <Header />
      <main>
        <Team />
        <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
        <Footer />
      </main>
    </>
  );
};

export default TeamPage;
