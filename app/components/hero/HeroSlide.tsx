"use client";

import Image from "next/image";
import HeroButtons from "./HeroButtons";
import type { HeroSlideContent } from "@/data/heroSlides";

type HeroSlideProps = {
  slide: HeroSlideContent;
  isActive: boolean;
};

const HeroSlide = ({ slide, isActive }: HeroSlideProps) => {
  return (
    <div
      className={`absolute inset-0 px-6 py-10 sm:px-8 transition-all duration-700 ${isActive ? "opacity-100 translate-x-0" : "pointer-events-none translate-x-6 opacity-0"}`}
    >
      <div className="grid min-h-[85vh] grid-rows-[auto_auto_auto] items-start gap-8 lg:min-h-[95vh] lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-1 lg:items-center lg:gap-12">
        <div className="max-w-xl space-y-6 text-center lg:col-start-1 lg:row-start-1 lg:text-left">
          <span className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">
            {slide.label}
          </span>
          <h1 className="font-heading text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">{slide.title}</h1>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{slide.subtitle}</p>
        </div>

        <div className="relative w-full lg:col-start-2 lg:row-span-2">
          <div className="rounded-[32px] border border-white/60 bg-white/70 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <Image
              src={slide.image}
              alt={slide.title}
              width={900}
              height={600}
              className="h-full w-full rounded-[28px] object-cover"
              priority={isActive}
            />
          </div>
        </div>

        <div className="max-w-xl lg:col-start-1 lg:row-start-2 lg:self-start">
          <HeroButtons
            primary={slide.ctaPrimary}
            secondary={slide.ctaSecondary}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
