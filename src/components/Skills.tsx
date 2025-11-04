"use client";
import { memo } from "react";
import Section from "./Section";
import { getSkillsOrdered, Skills as ISkills } from "@/data/skills";
import { motion } from "framer-motion";

const skills = getSkillsOrdered();

type SkillListProps = {
  title: string;
  skills: ISkills["languages"] | string[];
  showLevel?: boolean;
  delay?: number;
};

const SkillList = ({ title, skills, showLevel = true, delay = 0 }: SkillListProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.4, delay }}
    className="space-y-3"
  >
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <div className="space-y-2">
      {skills.map((skill, index) => {
        const isObject = typeof skill === "object";
        const name = isObject ? skill.name : skill;
        const level = isObject ? skill.level : 0;
        const percentage = (level / 5) * 100;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{name}</span>
              {showLevel && isObject && (
                <span className="text-xs opacity-60">{level}/5</span>
              )}
            </div>
            {showLevel && isObject && (
              <div className="w-full bg-base-300 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: delay + index * 0.05 + 0.2, ease: "easeOut" }}
                />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

const Skills = () => (
  <Section title="Skills" color="primary">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      <SkillList title="Linguagens" skills={skills.languages} delay={0} />
      <SkillList title="Frameworks" skills={skills.frameworks} delay={0.1} />
      <SkillList title="Bancos de Dados" skills={skills.databases} delay={0.2} />
      <SkillList title="Soft Skills" skills={skills.softSkills} showLevel={false} delay={0.3} />
    </div>
  </Section>
);

export default memo(Skills);
