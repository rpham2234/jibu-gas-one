import React, { useEffect, useRef, useState } from "react";

// ---- Types
export type Slide = {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
};

export type CarouselProps = {
  slides: Slide[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  /** Tailwind aspect utility, e.g. 'aspect-[16/9]' or 'aspect-[4/3]' */
  aspect?: string;
};

// ---- Component
export function Carousel({
  slides = [],
  className = "",
  autoPlay = true,
  interval = 6000,
  showDots = true,
  aspect = "aspect-[16/10]",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Use a browser timer type
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const count = slides.length;
  const goto = (i: number) => setIndex(((i % count) + count) % count);
  const next = () => count && goto(index + 1);
  const prev = () => count && goto(index - 1);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || paused || count <= 1) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, interval);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [autoPlay, paused, interval, index, count]);

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  };

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50; // px
    if (touchDeltaX.current > threshold) prev();
    if (touchDeltaX.current < -threshold) next();
    touchDeltaX.current = 0;
  };

  if (!count) {
    return (
      <div className={`w-full rounded-2xl border border-gray-200 p-6 text-center text-gray-500 ${className}`}>
        No slides provided.
      </div>
    );
  }

  return (
    <section
      className={`relative w-full select-none rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Stage */}
      <div className={`relative w-full overflow-hidden ${aspect}`}>
        {slides.map((s, i) => (
          <figure
            key={i}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <img
              src={s.src}
              alt={s.alt || s.title || `Slide ${i + 1}`}
              className="h-full w-full object-cover"
              draggable={false}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            />
          </figure>
        ))}

        {/* Controls */}
        <div className="pointer-events-none absolute bottom-3 right-3 z-10 flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={prev}
          >
            {/* Left chevron */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={next}
          >
            {/* Right chevron */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Caption area */}
      <figcaption className="space-y-1 border-t border-gray-200 p-4" aria-live="polite">
        <p className="text-sm font-medium text-gray-800">{slides[index]?.title || "Caption"}</p>
        <p className="text-sm text-gray-600">{slides[index]?.description || "Description of the current photo."}</p>
      </figcaption>

      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-[72px] left-0 right-0 z-10 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goto(i)}
              className={`h-2.5 w-2.5 rounded-full border border-black/10 transition ${
                i === index ? "bg-gray-900" : "bg-white/90 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

// ---- Example usage (keep as default export if you want a demo in the same file)
export default function ExampleCarousel() {
  const slides: Slide[] = [
    {
      src: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063",
      alt: "Industrial tank in a yard",
      title: "Caption",
      description: "Description of the current photo.",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      alt: "Another image",
      title: "Caption",
      description: "Second image description.",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Forest",
      title: "Caption",
      description: "Third image description.",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl p-6">
      <Carousel slides={slides} />
      <p className="mt-6 text-sm text-gray-500">Tip: Hover to pause, use arrows or swipe on mobile.</p>
    </div>
  );
}
