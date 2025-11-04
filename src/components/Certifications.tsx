"use client";
import { useState, memo, useMemo } from "react";
import { faCertificate, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "@/utils/formatDates";
import { certifications } from "@/data/certifications";
import ButtonFilter from "./ButtonFilter";
import ListSection from "./ListSection";

const ITEMS_PER_PAGE = 6;

const Certifications = () => {
  const [filteredCertifications, setFilteredCertifications] = useState(certifications);
  const [currentPage, setCurrentPage] = useState(1);

  // Resetar para página 1 quando filtrar
  const handleFilterChange = (filtered: typeof certifications) => {
    setFilteredCertifications(filtered);
    setCurrentPage(1);
  };

  // Calcular paginação
  const totalPages = Math.ceil(filteredCertifications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredCertifications.slice(startIndex, endIndex);

  const items = currentItems.map((cert) => ({
    id: cert.name,
    title: cert.name,
    subtitle: cert.institution,
    period: formatDate(cert.date),
    badges: cert.skills,
    link: cert.url ? { url: cert.url, label: "Ver certificado" } : undefined,
  }));

  return (
    <>
      <ButtonFilter
        name="skills"
        data={certifications}
        onClick={handleFilterChange}
      />
      <ListSection
        title="Certificações"
        sectionId="certificacoes"
        items={items}
        icon={faCertificate}
      />
      
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
        Mostrando {startIndex + 1}-{Math.min(endIndex, filteredCertifications.length)} de {filteredCertifications.length} certificações
      </div>
    </>
  );
};

export default memo(Certifications);
