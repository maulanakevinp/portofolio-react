import { useEffect, useRef, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import ProjectsFeatured from "../components/home/ProjectsFeatured";
import StackOverview from "../components/home/StackOverview";

function ScrollReveal({ children, className }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(section);
      },
      { threshold: 0.15 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`page-reveal ${className} ${isVisible ? "page-reveal--visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <div className="px-4 relative mx-auto max-w-7xl flex flex-col gap-16">
      <ScrollReveal className="page-reveal--first">
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal className="page-reveal--second">
        <StackOverview />
      </ScrollReveal>
      <ScrollReveal className="page-reveal--third">
        <ProjectsFeatured />
      </ScrollReveal>
    </div>
  );
}
