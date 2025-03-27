"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const TestimonialScroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollerInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return

    // Clone the content for seamless scrolling
    const scrollerContent = Array.from(scrollerInnerRef.current.children)
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true)
      scrollerInnerRef.current?.appendChild(clone)
    })

    // Set animation
    const scrollerInner = scrollerInnerRef.current
    scrollerInner.setAttribute("style", `animation: testimonialScroll 45s linear infinite;`)

    return () => {
      if (scrollerInner) {
        scrollerInner.removeAttribute("style")
      }
    }
  }, [])

  const testimonials = [
    {
      name: "Luis",
      stores: "220+",
      image: "/images/testimonials/luis.png",
      quote: "Clave certainly does a lot more than the typical franchisee does. And a lot better. It's a great tool!",
    },
    {
      name: "Kim",
      stores: "95",
      image: "/images/testimonials/kim.png",
      quote:
        "I have 4 employees spending 15 hours a WEEK collecting and analyzing data into an excel and we still struggle with making any sense of it.",
    },
    {
      name: "Fernando",
      stores: "15+",
      image: "/images/testimonials/fernando.png",
      quote: "If you give me Clave right now, I'll fire my CEO and use it instead.",
    },
    {
      name: "Werner",
      stores: "400+",
      image: "/images/testimonials/werner.png",
      quote:
        "There's lots of tools that put together the data and make it look pretty, but Clave is the only one that goes above and beyond and delivers useful, actionable steps.",
    },
    {
      name: "Ariel",
      stores: "120",
      image: "/images/testimonials/ariel.png",
      quote: "Clave is like having my best operator at every single one of my stores every single day.",
    },
  ]

  return (
    <div ref={scrollerRef} className="relative testimonial-scroller overflow-hidden">
      <style jsx global>{`
        @keyframes testimonialScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .testimonial-scroller {
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
      <div ref={scrollerInnerRef} className="testimonial-scroller-inner flex items-center gap-8 py-4 w-max">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="w-[350px] flex-shrink-0 overflow-hidden bg-white text-primary">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-accent">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-mint">{testimonial.stores} stores</p>
                  </div>
                </div>
                <p className="text-primary">&quot;{testimonial.quote}&quot;</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TestimonialScroller

