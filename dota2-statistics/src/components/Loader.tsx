import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function TextLoader() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".char", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
      })

      gsap.to(".loader", {
        opacity: 0.5,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const text = "Dota 2 Statistics"

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <h1 className="loader flex text-3xl md:text-4xl font-semibold tracking-widest text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]">
        {text.split("").map((char, i) => (
          <span key={i} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  )
}
