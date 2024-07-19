import {memo} from "react";
import Link from "next/link";
import Section from "./Section";
import Timeline from "./Timeline";
import { formatDate } from "@/utils/formatDates";
import { certifications } from "@/data/certifications";

const Certifications = () => {
  return (
    <Section title="Certificações">
      <Timeline
        timeline={certifications.map((cert) => {
          return {
            title: cert.name,
            subtitle: `${formatDate(cert.date)} - ${cert.institution}`,
            content: cert.url ? (
              <Link
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline btn-primary mt-3"
              >
                Ver certificado
              </Link>
            ) : null,
          };
        })}
      />
    </Section>
  );
};

export default memo(Certifications);
