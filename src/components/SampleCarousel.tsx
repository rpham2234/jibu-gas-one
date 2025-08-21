import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

/**
 * React + Tailwind Card Carousel
 * -------------------------------------------------------
 * Features
 * - Pure React + Tailwind (no external slider libs)
 * - Responsive: 1 card (sm), 2 (md), 3 (lg+)
 * - Scroll-snap for smooth native touch scrolling
 * - Prev/Next buttons, keyboard arrows, and pagination dots
 * - Optional autoplay with pause-on-hover/focus
 * - Accessible: buttons and dots have labels, aria-live updates
 *
 * Usage: <CardCarousel items={yourItemsArray} autoplay interval={4000} />
 */

// Demo items (replace with your own)
  const franchisees = [
    {
        "caption": "Rehema Uwamahoro",
        "description" : "abcd",
        "image": "https://images.ctfassets.net/biri6h57v7dr/6GrT7WFV2OyNeBjC1blJUc/1ea96f3b21feb09e7a75f71f86c2422b/IMG-20250612-WA0011.jpg"
      },
      {
        "caption": "Dorcus",
        "description" : "abcd",
        "image": "https://images.ctfassets.net/biri6h57v7dr/5XXSLjCzaKoXHB6b0ErqbQ/60b0f350570c806635453dd07d49f69f/IMG-20250620-WA0004.jpg"
      },
      {
        "caption": "Mediatrice Muvuna",
        "description" : "abcd",
        "image": "https://images.ctfassets.net/biri6h57v7dr/1GDwX593LieRG5wig1Ta8E/1c570cc29b246b7e079577b8e5e1d55b/IMG-20250808-WA0010.jpg"
      },
      {
        "caption": "Carol Mbabazi",
        "description" : "abcd",
        "image": "https://jibuco.com/wp-content/uploads/2022/10/Carol-Mbabazi-Franchisee-Kicukiro-and-Sonatube-min-731x1024.jpg"
      },
  ];

function useResizeObserver(targetRef: React.RefObject<HTMLElement>) {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;
    const el = targetRef.current;
    const ro = new ResizeObserver(() => {
      setRect(el.getBoundingClientRect());
    });
    ro.observe(el);
    setRect(el.getBoundingClientRect());
    return () => ro.disconnect();
  }, [targetRef]);

  return rect;
}

function classNames(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export type Franchisee = {
    caption: string;
    description: string;
    image: string;
    //cta?: { label: string; href: string };
};

export default function CardCarousel({
  items = franchisees,
  title = "Meet Our Franchisees",
  autoplay = false,
  interval = 4500,
  className,
}: {
  items?: Franchisee[];
  title?: string;
  autoplay?: boolean;
  interval?: number;
  className?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Observe children to calculate the active slide robustly
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handler = () => {
      const children = Array.from(
        viewport.querySelectorAll<HTMLDivElement>("[data-slide]")
      );
      if (!children.length) return;
      // find the child whose left edge is closest to viewport scrollLeft
      const { scrollLeft } = viewport;
      let idx = 0;
      let min = Infinity;
      children.forEach((el, i) => {
        const left = el.offsetLeft;
        const dist = Math.abs(left - scrollLeft);
        if (dist < min) {
          min = dist;
          idx = i;
        }
      });
      setActive(idx);
    };

    handler();
    viewport.addEventListener("scroll", handler, { passive: true });
    return () => viewport.removeEventListener("scroll", handler);
  }, []);

  // Autoplay (pause on hover or when not in view)
  useEffect(() => {
    if (!autoplay) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    let frame: number | null = null;
    let timer: number | null = null;

    const next = () => {
      if (!viewport) return;
      const children = Array.from(
        viewport.querySelectorAll<HTMLDivElement>("[data-slide]")
      );
      if (!children.length) return;

      const nextIndex = (active + 1) % children.length;
      const target = children[nextIndex];
      viewport.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    };

    const start = () => {
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(() => {
        if (!document.hidden && !isHovering) next();
      }, Math.max(1800, interval));
    };

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    };

    start();

    const vis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", vis);

    return () => {
      if (timer) window.clearInterval(timer);
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", vis);
    };
  }, [active, autoplay, interval, isHovering]);

  const rect = useResizeObserver(viewportRef);
  const gap = 16; // matches gap-x-4

  const scrollByCards = (dir: 1 | -1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    // Scroll by (viewport width - a small padding) to mimic paging
    const delta = (rect?.width || viewport.clientWidth) - 32; // px
    viewport.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  const goTo = (index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const target = viewport.querySelector<HTMLDivElement>(
      `[data-slide="${index}"]`
    );
    if (target) viewport.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  // Keyboard arrow support
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollByCards(1);
      if (e.key === "ArrowLeft") scrollByCards(-1);
    };
    viewport.addEventListener("keydown", onKey);
    return () => viewport.removeEventListener("keydown", onKey);
  }, [rect]);

  const dotCount = useMemo(() => {
    const viewport = viewportRef.current;
    if (!viewport) return items.length; // fallback
    // Estimate slides by visible step: when 3-up, dot per card still fine.
    return items.length;
  }, [items.length]);

  return (
    <section
      className={classNames(
        "w-full",
        "relative",
        "py-8",
        "bg-gradient-to-b from-white to-slate-50",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="text-slate-500">Swipe, scroll, or use arrows</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollByCards(-1)}
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Previous"
              type="button"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Next"
              type="button"
            >
              <ArrowRight />
            </button>
          </div>
        </header>

        <div
          ref={viewportRef}
          className="group/viewport relative flex gap-4 overflow-x-auto px-4 pb-2 pt-1 focus:outline-none"
          role="region"
          aria-roledescription="carousel"
          aria-label="Card carousel"
          tabIndex={0}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ scrollSnapType: "x mandatory" as React.CSSProperties["scrollSnapType"] }}
        >
          {/* Gradient edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white/90 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white/90 to-transparent" />

          {items.map((item, i) => (
            <div key={i} data-slide={i} className="snap-start shrink-0 min-w-0 basis-[85%] sm:basis-[75%] md:basis-[48%] lg:basis-[32%]">
                <article className="bg-white rounded-2xl shadow-md overflow-hidden text-center">
                    {/* Keep image inside card, keep aspect ratio */}
                    <div className="relative w-full aspect-[4/3]">
                    <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        className="object-cover"
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 48vw, 85vw"
                    />
                    </div>

                    <div className="p-4">
                    <h3 className="font-semibold">{item.caption}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                </article>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={classNames(
                "h-2.5 w-2.5 rounded-full transition-all",
                i === active ? "w-6 bg-slate-900" : "bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>

        {/* Mobile arrow overlay */}
        <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={() => scrollByCards(-1)}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm"
            aria-label="Previous"
            type="button"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => scrollByCards(1)}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm"
            aria-label="Next"
            type="button"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Live region for screen readers */}
        <p className="sr-only" aria-live="polite">
          Slide {active + 1} of {items.length}
        </p>
      </div>
    </section>
  );
}
