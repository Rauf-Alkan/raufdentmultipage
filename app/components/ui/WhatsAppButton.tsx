"use client";

const WHATSAPP_URL =
  "https://wa.me/905455555050?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      aria-label="WhatsApp ile iletişim kurun"
      className="
        fixed bottom-5 right-5 z-[60] md:bottom-8 md:right-8
        flex items-center justify-center
        h-16 w-16 rounded-full bg-[#25D366] text-white
        shadow-[0_8px_20px_rgba(0,0,0,0.2)]
        transition-all duration-300
        hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)]
        hover:-translate-y-1
        active:scale-95
        focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-4 focus-visible:outline-[#1ebe57]
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 32 32"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M16.03 4C10.35 4 5.73 8.59 5.73 14.27c0 1.82.5 3.58 1.43 5.13L5.33 28l8.8-2.78c1.59.52 3.28.8 4.9.8 5.68 0 10.29-4.58 10.29-10.27C29.32 8.59 24.7 4 19.03 4h-3zm0 1.78c4.68 0 8.51 3.82 8.51 8.49s-3.83 8.5-8.51 8.5c-1.36 0-2.74-.34-3.91-.95l-5.49 1.74 1.69-5.05a8.47 8.47 0 0 1-1.45-4.71c0-4.67 3.83-8.49 8.51-8.49zm-4 3.51c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.85.14.19 1.88 3.05 4.61 4.22 2.73 1.17 2.73.78 3.23.73.5-.05 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.53-.32-.27-.14-1.62-.79-1.86-.88-.25-.09-.43-.14-.62.14-.19.28-.72.88-.88 1.06-.16.18-.32.21-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.71-1.36-1.58-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.27-.32.41-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.64-1.53-.88-2.1-.22-.56-.47-.48-.64-.48z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
