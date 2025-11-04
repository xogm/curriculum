"use client";

import { memo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronUp, 
  faPalette, 
  faFilePdf,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import ThemeSelector from "./ThemeSelector";
import PrintButton from "./PrintButton";

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 print-hidden">
      <div className="flex items-end gap-3">
        {/* Botões expandidos - posicionados à esquerda */}
        <div className={`flex items-center gap-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}>
          {/* Seletor de tema */}
          <ThemeSelector />

          {/* Botão de imprimir */}
          <PrintButton />
        </div>

        {/* Container para voltar ao topo e menu (empilhados) */}
        <div className="flex flex-col items-end gap-3">
          {/* Voltar ao topo */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="btn btn-circle btn-primary shadow-lg hover:scale-110 transition-transform"
              aria-label="Voltar ao topo"
              title="Voltar ao topo"
            >
              <FontAwesomeIcon icon={faChevronUp} size="lg" />
            </button>
          )}

          {/* Botão principal (sempre visível) */}
          <button
            onClick={toggleMenu}
            className="btn btn-circle btn-neutral shadow-lg hover:scale-110 transition-transform"
            aria-label={isExpanded ? "Fechar menu" : "Abrir menu de ações"}
            title={isExpanded ? "Fechar menu" : "Menu de ações"}
          >
            <FontAwesomeIcon 
              icon={isExpanded ? faXmark : faBars} 
              size="lg"
              className="transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(FloatingButtons);
