"use client";

import { useEffect, useState } from "react";
import heroSlides from "@/data/heroSlides";
import HeroSlide from "./HeroSlide";

const AUTO_INTERVAL = 8000;

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (direction: "next" | "prev") => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % heroSlides.length;
      }
      return (prev - 1 + heroSlides.length) % heroSlides.length;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide("next");
    }, AUTO_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white via-white to-slate-50 pb-16 pt-8 md:pb-20 md:pt-12">
      <div className="mx-auto w-full max-w-none px-0">
        <div className="relative overflow-hidden rounded-none bg-white/80 shadow-[0_35px_120px_rgba(15,23,42,0.12)] md:rounded-[40px]">
          <div className="relative min-h-[85vh] md:min-h-[95vh]">
            {heroSlides.map((slide, index) => (
              <HeroSlide
                key={slide.title}
                slide={slide}
                isActive={currentIndex === index}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Önceki slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/70 p-3 text-[#384B70] shadow-md transition hover:bg-white"
            onClick={() => goToSlide("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Sonraki slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/70 p-3 text-[#384B70] shadow-md transition hover:bg-white"
            onClick={() => goToSlide("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${currentIndex === index ? "w-10 bg-[#384B70]" : "w-3 bg-slate-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
