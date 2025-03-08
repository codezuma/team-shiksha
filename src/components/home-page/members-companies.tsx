"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from 'react';
import Container from "../common/container";

const companyLogos = [
  {
    src: '/images/company/adobe.svg',
    alt: 'Adobe Logo'
  },
  {
    src: '/images/company/amazon.svg',
    alt: 'Amazon Logo'
  },
  {
    src: '/images/company/atlassian.svg',
    alt: 'Atlassian Logo'
  },
  {
    src: '/images/company/cisco.svg',
    alt: 'Cisco Logo'
  },
  {
    src: '/images/company/flipkart.svg',
    alt: 'Flipkart Logo'
  },
  {
    src: '/images/company/google.svg',
    alt: 'Google Logo'
  },
  {
    src: '/images/company/hasura.svg',
    alt: 'Hasura Logo'
  },
  {
    src: '/images/company/Intuit-Logo.wine.svg',
    alt: 'Intuit Logo'
  },
] as const;

const MembersCompanies = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <Container
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {companyLogos.map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="h-16 w-auto flex-none"
              />
            ))}
          </React.Fragment>
        ))}
      </ul>
    </Container>
  );
};

export default MembersCompanies;