import { techDescriptions } from "@/constants/techDescriptions";
import { techMap } from "@/constants/techMap";

// Utility function for className merging
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain";
};

export const getTechDescription = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return (
    techDescriptions[normalizedTechName] ||
    `Learn more about ${techName} and related technologies.`
  );
};

export const getTimestamp = (date: Date | string | number) => {
  const d =
    typeof date === "string" || typeof date === "number"
      ? new Date(date)
      : date;
  const now = Date.now();
  const diff = Math.floor((now - d.getTime()) / 1000); // diff in seconds

  if (isNaN(diff)) return "unknown";

  if (diff < 5) return "just now";
  if (diff < 60) return `${diff} second${diff === 1 ? "" : "s"} ago`;

  const minutes = Math.floor(diff / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;

  const years = Math.floor(months / 12);
  return `${years} year${years === 1 ? "" : "s"} ago`;
};
