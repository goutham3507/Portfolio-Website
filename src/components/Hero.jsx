import { RiArrowRightUpLine } from "@remixicon/react";
import david from "../assets/David.webp";
import { PROFILE } from "../constants";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      // Responsive GSAP animation
      const mm = gsap.matchMedia();

      // Desktop animations
      mm.add("(min-width: 768px)", () => {
        tl.from(".hero-title", {
          opacity: 0,
          y: -50,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.15,
        })
          .from(
            ".hero-subheading",
            {
              opacity: 0,
              y: 50,
              scale: 0.95,
              duration: 0.8,
            },
            "-=0.4"
          )
          .from(
            ".hero-text",
            {
              opacity: 0,
              y: 30,
              duration: 0.7,
            },
            "-=0.4"
          )
          .from(
            ".hero-btn",
            {
              opacity: 0,
              scale: 0.9,
              duration: 0.7,
            },
            "-=0.3"
          )
          .from(
            ".hero-img",
            {
              opacity: 0,
              y: 100,
              scale: 0.9,
              duration: 0.8,
            },
            "-=0.5"
          );
      });

      // Mobile animations (less movement, no scaling)
      mm.add("(max-width: 767px)", () => {
        tl.from(".hero-title", {
          opacity: 0,
          y: -20, // Less movement for better mobile readability
          scale: 1, // No scaling to prevent text distortion
          duration: 0.6,
          stagger: 0.1,
        })
          .from(
            ".hero-subheading",
            {
              opacity: 0,
              y: 20,
              scale: 1,
              duration: 0.6,
            },
            "-=0.3"
          )
          .from(
            ".hero-text",
            {
              opacity: 0,
              y: 15,
              duration: 0.5,
            },
            "-=0.3"
          )
          .from(
            ".hero-btn",
            {
              opacity: 0,
              scale: 1,
              duration: 0.5,
            },
            "-=0.3"
          )
          .from(
            ".hero-img",
            {
              opacity: 0,
              y: 50,
              scale: 1,
              duration: 0.6,
            },
            "-=0.4"
          );
      });

      return () => mm.revert(); // Clean up GSAP animations
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6 pt-28 px-4 text-center"
      ref={heroRef}
    >
      <div className="mt-8 lg:mt-20">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase leading-tight">
          {PROFILE.name}
        </h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-2xl sm:text-3xl text-transparent tracking-tight">
          {PROFILE.role}
        </h2>
      </div>
      <p className="hero-text max-w-2xl p-2 text-lg sm:text-xl md:text-2xl tracking-tight">
        {PROFILE.subheading}
      </p>
      <a
        href="/G.G_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="hero-btn mb-6 flex items-center gap-2 rounded-full border border-pink-200/50 px-4 py-2 text-sm sm:text-base tracking-tight"
      >
        <span>Download Resume</span>
        <RiArrowRightUpLine />
      </a>
      <img
        src={david}
        alt={PROFILE.name}
        width={300}
        height="300"
        className="hero-img rounded-3xl border border-purple-300/20 p-1 sm:w-96 sm:h-96"
      />
    </section>
  );
};

export default Hero;
