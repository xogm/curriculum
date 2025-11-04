import { memo } from "react";
import { FadeIn } from "./Animations";

type SectionProps = {
  title: string;
  color?: "primary" | "primary" | "accent" | "neutral"; // Restringir as cores permitidas
  children: React.ReactNode;
  id?: string;
};

const Section = ({ title, color = "neutral", children, id }: SectionProps) => (
  <FadeIn>
    <section className="mb-8" id={id}>
      <h2
        className={`divider divider-${color} text-3xl md:text-4xl font-bold my-6 py-4 text-${color}`}
      >
        {title}
      </h2>
      {children}
    </section>
  </FadeIn>
);

export default memo(Section);
