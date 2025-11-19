import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "İletişim | Rauf Dent",
  description:
    "Telefon, WhatsApp ve konumumuz üzerinden bize kolayca ulaşın; hafta içi 09:00–20:00 arası hızlı dönüş yapıyoruz.",
};

const whatsappUrl = "https://wa.me/905455555050?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <Contact />
        <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
