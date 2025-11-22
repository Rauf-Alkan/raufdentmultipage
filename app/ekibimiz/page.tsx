import type { Metadata } from "next";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Ekibimiz | Rauf Dent",
  description:
    "Tecrübeli hekimlerimiz, modern klinik altyapımız ve kişiye özel yaklaşımımızla her hastamızın güvenle gülümsemesini sağlıyoruz.",
};

const TeamPage = () => {
  return (
    <main>
      <Team />
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
    </main>
  );
};

export default TeamPage;
