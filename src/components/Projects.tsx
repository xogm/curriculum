"use client";
import { useState, memo } from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import Section from "./Section";
import ButtonFilter from "./ButtonFilter";
import { projects } from "@/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

type Project = (typeof projects)[number];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.2 }}
    layout
    className="group hover:bg-base-200 -mx-4 px-4 py-4 rounded-lg transition-all duration-200"
  >
    <div className="flex gap-4">
      {/* Ícone */}
      <div className="text-primary mt-1 flex-shrink-0">
        <FontAwesomeIcon icon={faCode} size="lg" />
      </div>
      
      {/* Conteúdo */}
      <div className="flex-1">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-ghost btn-primary gap-2 self-start md:self-center"
          >
            Ver projeto
            <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3" />
          </Link>
        </div>

        {/* Descrição com Markdown */}
        <div className="prose prose-sm max-w-none mb-4 opacity-80">
          <Markdown>{project.description}</Markdown>
        </div>

        {/* Tecnologias */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const MemoProjectCard = memo(ProjectCard);

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <Section title="Projetos">
      <ButtonFilter
        name="technologies"
        data={projects}
        onClick={setFilteredProjects}
      />
      <div className="divide-y divide-base-300 mt-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <MemoProjectCard key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default memo(Projects);
