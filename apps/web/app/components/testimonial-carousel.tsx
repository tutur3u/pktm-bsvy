"use client";

import Image from "next/image";
import { useState } from "react";

type TestimonialSlide = {
  quote: string;
  name: string;
  detail: string;
  imageSrc: string;
  imageAlt: string;
  position: string;
};

type TestimonialCarouselProps = {
  slides: TestimonialSlide[];
};

export function TestimonialCarousel({ slides }: TestimonialCarouselProps) {
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
    <div className="testimonialCarousel">
      <div className="testimonialCarousel__frame">
        <button
          type="button"
          className="carouselButton carouselButton--previous"
          onClick={showPrevious}
          aria-label="Xem phản hồi trước"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <article className="testimonialCarousel__card">
          <div className="testimonialCarousel__image">
            <Image
              fill
              src={activeSlide.imageSrc}
              alt={activeSlide.imageAlt}
              sizes="(max-width: 960px) 100vw, 28vw"
              style={{ objectFit: "cover", objectPosition: activeSlide.position }}
            />
          </div>

          <div className="testimonialCarousel__stars" aria-label="5 sao">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <blockquote>{activeSlide.quote}</blockquote>
          <p className="testimonialCarousel__author">
            {activeSlide.name} - <span>{activeSlide.detail}</span>
          </p>
        </article>

        <button
          type="button"
          className="carouselButton carouselButton--next"
          onClick={showNext}
          aria-label="Xem phản hồi tiếp theo"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="mediaCarousel__dots" aria-hidden="true">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.name}
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
