"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

const PrintButton = () => {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="fixed bottom-28 right-4 print-hidden z-50">
      <div className="tooltip tooltip-left" data-tip="Imprimir/Baixar CV">
        <button
          onClick={handlePrint}
          className="btn btn-circle btn-secondary btn-lg shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Imprimir ou baixar currículo em PDF"
        >
          <FontAwesomeIcon icon={faFilePdf} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default memo(PrintButton);
