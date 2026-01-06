"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type Props = {
  images: string[];
};

export default function GalleryViewer({ images }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);

  const src = images?.[index] ?? null;
  const canNav = images && images.length > 1;

  // Reset to first image when gallery changes
  useEffect(() => {
    setIndex(0);
  }, [images]);

  // Load image to get natural dimensions (for accurate contain-fit bounds)
  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setNatural({ w: img.naturalWidth, h: img.naturalHeight });
    };
  }, [src]);

  const prev = () => {
    if (!images?.length) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    if (!images?.length) return;
    setIndex((i) => (i + 1) % images.length);
  };

  // Compute the real visible image rect inside the frame (object-fit: contain)
  useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el || !natural) return;

    const recalc = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;

      const imgRatio = natural.w / natural.h;
      const boxRatio = cw / ch;

      let w = 0,
        h = 0,
        left = 0,
        top = 0;

      if (boxRatio > imgRatio) {
        // frame is wider than image -> image height fits
        h = ch;
        w = h * imgRatio;
        left = (cw - w) / 2;
        top = 0;
      } else {
        // frame is taller than image -> image width fits
        w = cw;
        h = w / imgRatio;
        left = 0;
        top = (ch - h) / 2;
      }

      el.style.setProperty("--img-left", `${left}px`);
      el.style.setProperty("--img-top", `${top}px`);
      el.style.setProperty("--img-w", `${w}px`);
      el.style.setProperty("--img-h", `${h}px`);
      el.style.setProperty("--img-w-half", `${w / 2}px`);
    };

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [natural, index]);

  if (!src) return null;

  return (
    <div className="viewer">
      <div className="frame" ref={frameRef}>
        {canNav && (
          <>
            <button
              type="button"
              className="hotzone left"
              aria-label="Previous image"
              onClick={prev}
            />
            <button
              type="button"
              className="hotzone right"
              aria-label="Next image"
              onClick={next}
            />
          </>
        )}

        <img
          src={src}
          className="img"
          alt=""
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}
