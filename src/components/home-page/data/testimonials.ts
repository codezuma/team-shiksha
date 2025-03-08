
export interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    image: {
      src: string;
      srcSet: string;
    };
  };
}
export const testimonialData: Testimonial[] = [
  {
    quote: "Being part of team shikhsa has completely changed my tech career trajectory. The community's free workshops and mentorship programs helped me master full-stack development in ways I couldn't achieve through self-study alone.",
    author: {
      name: "Arjun Mehta",
      title: "Software Engineer",
      company: "InnovateX Solutions",
      image: {
        src: "https://randomuser.me/api/portraits/men/75.jpg",
        srcSet: "https://randomuser.me/api/portraits/men/75.jpg 1x, https://randomuser.me/api/portraits/men/75.jpg 2x, https://randomuser.me/api/portraits/men/75.jpg 3x"
      }
    }
  },
  {
    quote: "As a college student with limited resources, team shikhsa's free tech community became my second home. The practical projects and peer code reviews improved my skills dramatically, helping me secure an internship at my dream company.",
    author: {
      name: "Priya Sharma",
      title: "Frontend Developer",
      company: "TechVision India",
      image: {
        src: "https://randomuser.me/api/portraits/women/65.jpg",
        srcSet: "https://randomuser.me/api/portraits/women/65.jpg 1x, https://randomuser.me/api/portraits/women/65.jpg 2x, https://randomuser.me/api/portraits/women/65.jpg 3x"
      }
    }
  },
  {
    quote: "Team shikhsa filled the gap between theoretical knowledge and industry requirements. The collaborative environment and hands-on projects gave me confidence to tackle real-world challenges. I've recommended this community to everyone in my network.",
    author: {
      name: "Vikram Reddy",
      title: "Backend Developer",
      company: "CloudMatrix Technologies",
      image: {
        src: "https://randomuser.me/api/portraits/men/45.jpg",
        srcSet: "https://randomuser.me/api/portraits/men/45.jpg 1x, https://randomuser.me/api/portraits/men/45.jpg 2x, https://randomuser.me/api/portraits/men/45.jpg 3x"
      }
    }
  },
] as const;