"use client";

import { memo, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Section from "./Section";

interface ListItem {
  id: string;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  period?: string;
  location?: string;
  description?: string | string[];
  link?: { url: string; label: string };
  badges?: string[];
}

interface ListSectionProps {
  title: string;
  sectionId: string;
  items: ListItem[];
  icon: IconProp;
  color?: "primary" | "accent" | "neutral";
}

const ListSection = ({ title, sectionId, items, icon, color = "neutral" }: ListSectionProps) => {
  return (
    <Section title={title} id={sectionId} color={color}>
      <AnimatePresence mode="popLayout">
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-300"
            >
              <div className="card-body p-6">
                <div className="flex items-start gap-4">
                  {/* Ícone */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon || <FontAwesomeIcon icon={icon} className="text-primary text-xl" />}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 min-w-0">
                    {/* Cabeçalho */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-base-content break-words">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-base text-base-content/70 font-medium">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                      {item.period && (
                        <div className="badge badge-outline badge-lg whitespace-nowrap">
                          {item.period}
                        </div>
                      )}
                    </div>

                    {/* Localização */}
                    {item.location && (
                      <p className="text-sm text-base-content/60 mb-3">{item.location}</p>
                    )}

                    {/* Descrição */}
                    {item.description && (
                      <div className="prose prose-sm max-w-none text-base-content/80">
                        {Array.isArray(item.description) ? (
                          <ul className="space-y-1">
                            {item.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{item.description}</p>
                        )}
                      </div>
                    )}

                    {/* Badges */}
                    {item.badges && item.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.badges.map((badge, i) => (
                          <span
                            key={i}
                            className="badge badge-primary badge-sm"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Link */}
                    {item.link && (
                      <div className="mt-4">
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          {item.link.label}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </Section>
  );
};

export default memo(ListSection);
