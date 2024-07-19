import { memo } from "react";

type SectionProps = {
  title: string;
  color?: "primary" | "primary" | "accent" | "neutral"; // Restringir as cores permitidas
  children: React.ReactNode;
};

const Section = ({ title, color = "neutral", children }: SectionProps) => (
  <section className="mb-6">
    <h2
      className={`divider divider-${color} text-4xl italic font-bold my-6 py-6 text-${color}`}
    >
      {title}
    </h2>
    {children}
  </section>
);

export default memo(Section);
