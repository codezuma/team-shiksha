import React from 'react';
import Container from "../common/container";
import { Testimonial } from './data/testimonials';
import { cn, getStaggeredRotation } from '@/lib/utils';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
}) => {
  return (
    <Container className="relative pt-20 pb-12 md:py-32 border-gray-300">
      <header className="mb-8">
        <h2 className="text-3xl font-bold font-display text-neutral-900 dark:text-neutral-200">
          People who have been part of our community
        </h2>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          We are a community of people who are passionate about learning and sharing knowledge.
        </p>
      </header>

      <div className="flex flex-col mt-20">
        <ul className="flex  md:mx-0 px-8 pt-20 pb-8 md:py-0 md:px-0 overflow-x-scroll md:overflow-x-visible snap-x snap-mandatory md:grid md:grid-cols-3 gap-12 lg:gap-16 scrollbar-none">
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              data-index={index}
              style={{
                rotate: `${getStaggeredRotation(index, { maxRotation: 6 })}deg`
              }}
              className={cn(`snap-center w-full flex-shrink-0 col-span-1`)}
            >
              <blockquote className={cn("relative p-6  bg-white border-gray-200 border rounded-3xl shadow-sm before:absolute before:inset-0 before:border-hairline before:border-gray-200 before:bg-gray-100 before:border  before:-z-10 before:rounded-3xl before:rotate-6 ")} >

                <p className="mt-4 text-body-md text-gray-800">
                  {testimonial.quote}
                </p>
                <footer className="mt-6">
                  <figure className="flex items-center">
                    <picture>
                      <img
                        src={testimonial.author.image.src}
                        srcSet={testimonial.author.image.srcSet}
                        className="size-12 rounded-xl border-hairline border-gray-900/10 bg-gray-300 select-none"
                        loading="lazy"
                        draggable="false"
                        alt={`${testimonial.author.name}'s portrait`}
                      />
                    </picture>
                    <figcaption className="ml-3">
                      <p className="text-caption-lg font-medium">
                        {testimonial.author.name}
                      </p>
                      <p className="text-caption-md text-gray-700">
                        {testimonial.author.title}, {testimonial.author.company}
                      </p>
                    </figcaption>
                  </figure>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Testimonials;