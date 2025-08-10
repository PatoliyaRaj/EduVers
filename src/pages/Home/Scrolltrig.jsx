import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CardScroll() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.to(cardsRef.current, {
        xPercent: -200, 
        ease: "inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "top -150%",
          scrub: 2,
          pin: true,    
          markers: true, 
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        style={{
          height: "100vh",
          background: "#ffe0cc",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            ref={cardsRef}
            style={{
              display: "flex",
              gap: "20px",
              padding: "0 20px",
            }}
          >
            {[
              "Card 1",
              "Card 2",
              "Card 3",
              "Card 4",
              "Card 5",
              "Card 6",
              "Card 7",
              "Card 8",
              "Card 9",
              "Card 10",
              "Card 11",
              "Card 12",
              "Card 13",
            ].map((title, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 300px",
                  height: "400px",
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
                
              >
                {title}
              </div>
                    ))}
          </div>
        </section>
    </div>
  );
}
