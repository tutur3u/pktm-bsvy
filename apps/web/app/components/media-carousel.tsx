"use client";

import Image from "next/image";
import { useState } from "react";

type Slide = {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  position?: string;
  fit?: "contain" | "cover";
};

type MediaCarouselProps = {
  slides: Slide[];
  aspectRatio: string;
};

export function MediaCarousel({ slides, aspectRatio }: MediaCarouselProps) {
  const [index, setIndex] = useState(0);
  const activeSlide = slides[index];

  if (slides.length === 0 || !activeSlide) {
    return null;
  }

  const showPrevious = () => {
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div className="mediaCarousel">
      <div className="mediaCarousel__frame">
        <button
          type="button"
          className="carouselButton carouselButton--previous"
          onClick={showPrevious}
          aria-label="Xem slide trước"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <div className="mediaCarousel__body">
          <div className="mediaCarousel__media" style={{ aspectRatio }}>
            <Image
              fill
              src={activeSlide.imageSrc}
              alt={activeSlide.imageAlt}
              sizes="(max-width: 960px) 100vw, 80vw"
              style={{
                objectFit: activeSlide.fit ?? "cover",
                objectPosition: activeSlide.position ?? "center",
              }}
            />
          </div>

          <div className="mediaCarousel__copy">
            <p>{activeSlide.badge}</p>
            <h3>{activeSlide.title}</h3>
            <span>{activeSlide.description}</span>
          </div>
        </div>

        <button
          type="button"
          className="carouselButton carouselButton--next"
          onClick={showNext}
          aria-label="Xem slide tiếp theo"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="mediaCarousel__dots" aria-hidden="true">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.title}
            type="button"
            className={slideIndex === index ? "is-active" : ""}
            onClick={() => setIndex(slideIndex)}
          >
            {slideIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
