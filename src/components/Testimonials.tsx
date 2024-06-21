"use client";
import { memo } from "react";
import Section from "./Section";
import { testimonials } from "@/data/testimonials";
import { createInitials } from "@/utils/createInitials";

type Testimonial = (typeof testimonials)[number];

const Chat = ({
  author: { name, title, company },
  quote,
  position = "start",
}: Testimonial & { position: string }) => {
  const initials = createInitials(name);

  return (
    <div className={`chat chat-${position} pb-6`}>
      <div className="chat-image avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-8">
          <span className="text-xs uppercase">{initials}</span>
        </div>
      </div>
      <div className="chat-header">
        {name}
        {title && <span className="text-xs opacity-50"> ({title})</span>}{" "}
        {company && <time className="text-xs opacity-50"> - {company}</time>}
      </div>
      <div className="chat-bubble">{quote}</div>
    </div>
  );
};

const MemoChat = memo(Chat);

const Testimonials = () => (
  <Section title="Depoimentos">
    <div className="mockup-window bg-base-300">
      <div className="p-6 bg-base-200">
        {testimonials.map((testimonial, index) => (
          <MemoChat
            key={index}
            {...testimonial}
            position={index % 2 === 0 ? "start" : "end"}
          />
        ))}
      </div>
    </div>
  </Section>
);

export default memo(Testimonials);
