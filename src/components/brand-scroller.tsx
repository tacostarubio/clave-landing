"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const BrandScroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollerInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return

    // Set animation without cloning nodes in DOM
    const scrollerInner = scrollerInnerRef.current
    scrollerInner.setAttribute("style", `animation: scroll 45s linear infinite;`)

    return () => {
      if (scrollerInner) {
        scrollerInner.removeAttribute("style")
      }
    }
  }, [])

  const brands = [
    { src: "/images/partners/bonchon.png", alt: "Bon Chon", width: 160 },
    { src: "/images/partners/dunkin.png", alt: "Dunkin'", width: 90 },
    { src: "/images/partners/gogreen.png", alt: "Go Green", width: 160 },
    { src: "/images/partners/jreck.png", alt: "JRECK Subs", width: 180 },
    { src: "/images/partners/Wienerschnitzel.png", alt: "Wienerschnitzel", width: 190 },
    { src: "/images/partners/churromania.png", alt: "Churromania", width: 330 },
    { src: "/images/partners/auntieannes.png", alt: "Auntie Anne's", width: 170 },
    { src: "/images/partners/cinnabon.png", alt: "Cinnabon", width: 280 },
  ]
  
  // Double the brands array for a smoother infinite scroll
  const allBrands = [...brands, ...brands]

  return (
    <div ref={scrollerRef} className="relative scroller overflow-hidden">
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroller {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
      <div
        ref={scrollerInnerRef}
        className="scroller-inner flex items-center gap-12 py-6 w-max"
      >
        {allBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-12 md:h-16 grayscale filter opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={brand.width}
              height={60}
              className="object-contain h-full w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandScroller

