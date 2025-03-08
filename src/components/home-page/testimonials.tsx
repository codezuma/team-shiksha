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
      <header className="mb-8 lg:mb-16">
        <h2 className="inline-block relative mb-6 md:mb-8 text-ui-32-normal md:text-heading-lg font-sans-heading">
          What do our customers say?
        </h2>
        <a className="block text-button-lg hover:underline">
          Read all our cases →
        </a>
      </header>

      <div className="flex flex-col">
        <ul className="flex -mx-8 md:mx-0 px-8 pt-20 pb-8 md:py-0 md:px-0 overflow-x-scroll md:overflow-x-visible snap-x snap-mandatory md:grid md:grid-cols-3 gap-8 lg:gap-16 scrollbar-none">
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
                <svg className="size-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.0001 13.3845C32.0001 13.4072 32 13.4298 31.9998 13.4524V27.5382H31.975C31.6622 23.7478 29.4868 20.7691 24.6157 20.7691C20.5374 20.7691 17.2311 17.4629 17.2311 13.3845C17.2311 9.30617 20.5372 6 24.6156 6C28.6939 6 32.0001 9.30617 32.0001 13.3845Z" fill="black" />
                  <path d="M7.38449 20.7691C12.245 20.781 14.4316 23.7554 14.7437 27.5382H14.7692V13.3845C14.7692 9.30616 11.4628 6.00001 7.38449 6.00001C3.30615 6.00001 0 9.30618 0 13.3845C0 17.4629 3.30615 20.7691 7.38449 20.7691Z" fill="black" />
                </svg>
                <p className="mt-4 text-body-md text-gray-800">
                  {testimonial.quote}
                </p>
                <footer className="mt-6">
                  <figure className="flex items-center">
                    <picture>
                      <img
                        src={testimonial.author.image.src}
                        srcSet={testimonial.author.image.srcSet}
                        className="size-12 rounded-10 border-hairline border-gray-900/10 bg-gray-300 select-none"
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