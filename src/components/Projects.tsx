"use client";
import { useState, memo } from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import Section from "./Section";
import ButtonFilter from "./ButtonFilter";
import { projects } from "@/data/projects";
import { contactInfo } from "@/data/contactInfo";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const githubLink = contactInfo.social.find(
    (social) => social.name === "GitHub"
  )?.url;

  return (
    <Section title="Projetos">
      <ButtonFilter
        name="technologies"
        data={projects}
        onClick={setFilteredProjects}
      />
      <div className="mockup-browser bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">
            <Link href={githubLink as string} target="_blank" rel="noreferrer noopener">
              {githubLink}
            </Link>
          </div>
        </div>
        <div className="p-4 bg-base-200">
          {filteredProjects.map((project, index) => (
            <div key={index} id={`project${index}`} className="m-5">
              <div className="card shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="card-title">{project.title}</h2>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-sm btn-neutral"
                    >
                      Ver projeto
                    </Link>
                  </div>
                  <Markdown>{project.description}</Markdown>
                  <div className="card-actions">
                    {project.technologies.map((tech, index) => (
                      <div
                        className="badge badge-outline badge-secondary"
                        key={index}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default memo(Projects);
