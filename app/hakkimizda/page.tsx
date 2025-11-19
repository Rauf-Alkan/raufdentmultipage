import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import About, { aboutContent } from "@/components/sections/About";
import Esthetic from "@/components/sections/Esthetic";
import FourFeatures from "@/components/sections/FourFeatures";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Hakkımızda | Rauf Dent",
  description: aboutContent.description,
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Esthetic />
        <FourFeatures />
        <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
