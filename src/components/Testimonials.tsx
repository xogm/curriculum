"use client";
import { memo } from "react";
import Section from "./Section";
import { testimonials } from "@/data/testimonials";
import { createInitials } from "@/utils/createInitials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

type Testimonial = (typeof testimonials)[number];

const TestimonialCard = ({
  author: { name, title, company },
  quote,
}: Testimonial) => {
  const initials = createInitials(name);

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 w-[300px] md:w-[350px] flex-shrink-0 snap-center flex flex-col">
      <div className="card-body flex flex-col h-full">
        {/* Ícone de aspas */}
        <div className="text-primary mb-4">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="opacity-30" />
        </div>

        {/* Citação */}
        <p className="text-lg leading-relaxed mb-6 flex-1">
          <span className="italic text-base-content/90">{quote}</span>
        </p>

        {/* Autor */}
        <div className="flex items-center gap-4 pt-4 border-t border-base-300">
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-12 h-12 ring-2 ring-primary ring-offset-2 ring-offset-base-100">
              <span className="text-sm font-bold">{initials}</span>
            </div>
          </div>
          <div>
            <div className="font-bold text-base">{name}</div>
            <div className="text-sm opacity-70">
              {title}
              {company && <> · {company}</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MemoTestimonialCard = memo(TestimonialCard);

const Testimonials = () => (
  <Section title="Depoimentos" id="depoimentos" color="primary">
    {/* Container com scroll horizontal */}
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-6 overflow-x-auto pb-4 items-stretch -mx-4 px-4 md:-mx-6 md:px-6">
        {testimonials.map((testimonial, index) => (
          <MemoTestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </Section>
);

export default memo(Testimonials);
