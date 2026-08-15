"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroVideoProps = {
  poster: {
    src: string;
    width: number;
    height: number;
  };
};

const videos = ["/media/video1.mp4", "/media/video2.mp4"];

export function HeroVideo({ poster }: HeroVideoProps) {
  const [activeVideo, setActiveVideo] = useState(0);
  const [motionAllowed, setMotionAllowed] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setMotionAllowed(!mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () =>
      mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* scale-110 hides the soft edge introduced by the blur filter */}
      <Image
        alt="Paisaje del Valle del Cauca"
        className="h-full w-full scale-110 object-cover blur-[2px]"
        fill
        priority
        sizes="100vw"
        src={poster}
      />
      {motionAllowed && (
        <video
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-95 blur-[2px]"
          key={videos[activeVideo]}
          muted
          onEnded={() =>
            setActiveVideo((current) => (current + 1) % videos.length)
          }
          playsInline
          poster={poster.src}
          preload="metadata"
          src={videos[activeVideo]}
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,68,134,0.92)_0%,rgba(0,68,134,0.55)_55%,rgba(0,68,134,0.22)_100%)]" />
    </div>
  );
}
