import { format, isFuture } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface Period {
  start: Date | string;
  end?: Date | string;
  currentText?: string;
}

export const parseDate = ({
  year,
  month,
  day = 1,
}: {
  year: number;
  month: number;
  day?: number;
}): Date => {
  return new Date(year, month - 1, day);
};

export const formatDate = (
  date: Date | string,
  dateFormat = "MMM yyyy"
): string => {
  const dateToFormat = typeof date === "string" ? new Date(date) : date;
  return format(dateToFormat, dateFormat, { locale: ptBR });
};

export const formatPeriod = ({
  start,
  end,
  currentText = "Atual",
}: Period): string => {
  const formattedStart = formatDate(start);
  const formattedEnd =
    end && !isFuture(new Date(end)) ? formatDate(end) : currentText;
  return `${formattedStart} - ${formattedEnd}`;
};
