"use client";
import { useState, memo } from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import Section from "./Section";
import ButtonFilter from "./ButtonFilter";
import { projects } from "@/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faChevronLeft, faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

type Project = (typeof projects)[number];

const ITEMS_PER_PAGE = 3;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.2 }}
    layout
    className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-300"
  >
    <div className="card-body p-6">
      <div className="flex items-start gap-4">
        {/* Ícone */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <FontAwesomeIcon icon={faCode} className="text-primary text-xl" />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0">
          {/* Cabeçalho */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-base-content">
                {project.title}
              </h3>
              {project.featured && (
                <div className="badge badge-primary badge-sm gap-1">
                  <FontAwesomeIcon icon={faStar} className="w-3" />
                  Destaque
                </div>
              )}
            </div>
            
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm gap-2"
            >
              Ver projeto
              <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3" />
            </Link>
          </div>

          {/* Descrição com Markdown */}
          <div className="prose prose-sm max-w-none mb-4 text-base-content/80">
            <Markdown>{project.description}</Markdown>
          </div>

          {/* Tecnologias */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="badge badge-primary badge-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const MemoProjectCard = memo(ProjectCard);

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentPage, setCurrentPage] = useState(1);

  // Resetar para página 1 quando filtrar
  const handleFilterChange = (filtered: typeof projects) => {
    setFilteredProjects(filtered);
    setCurrentPage(1);
  };

  // Calcular paginação
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredProjects.slice(startIndex, endIndex);

  return (
    <Section title="Projetos" color="primary">
      <ButtonFilter
        name="technologies"
        data={projects}
        onClick={handleFilterChange}
      />
      
      <div className="space-y-4 mt-6">
        <AnimatePresence mode="popLayout">
          {currentItems.map((project, index) => (
            <MemoProjectCard key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="btn btn-sm btn-circle btn-ghost"
            aria-label="Página anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`btn btn-sm ${
                  currentPage === page ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="btn btn-sm btn-circle btn-ghost"
            aria-label="Próxima página"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      {/* Informação de itens */}
      <div className="text-center text-sm text-base-content/60 mt-4">
        Mostrando {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} de {filteredProjects.length} projetos
      </div>
    </Section>
  );
};

export default memo(Projects);
