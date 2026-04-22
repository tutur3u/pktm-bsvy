"use client";

import { useState } from "react";
import {
  HERO_VIDEO_EMBED_URL,
  HERO_VIDEO_POSTER_URL,
} from "./content";
import { PlayIcon } from "./icons";

const AUTOPLAY_EMBED_URL = `${HERO_VIDEO_EMBED_URL}&autoplay=1&playsinline=1`;

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[22px] bg-[#071c2c] pt-[177.78%] md:rounded-[24px]">
      {isPlaying ? (
        <iframe
          src={AUTOPLAY_EMBED_URL}
          title="Video giới thiệu điều trị lõm ngực"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 block h-full w-full overflow-hidden bg-[#071c2c] text-left outline-none transition focus-visible:ring-4 focus-visible:ring-[#8ad8ff]"
          aria-label="Phát video giới thiệu điều trị lõm ngực"
        >
          <img
            src={HERO_VIDEO_POSTER_URL}
            alt="Ảnh xem trước video giới thiệu điều trị lõm ngực"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#071c2c]/40 via-transparent to-[#071c2c]/20" />
          <span className="absolute inset-x-0 bottom-7 flex justify-center px-4">
            <span className="inline-flex items-center gap-3 rounded-full bg-white/94 px-4 py-3 text-sm font-black uppercase tracking-[0.04em] text-[#0b5ea6] shadow-[0_22px_44px_rgba(7,28,44,0.26)] ring-1 ring-white/75">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#ff0033] text-white shadow-[0_14px_28px_rgba(255,0,51,0.26)]">
                <PlayIcon className="translate-x-[1px] size-5" />
              </span>
              <span>Xem video</span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
