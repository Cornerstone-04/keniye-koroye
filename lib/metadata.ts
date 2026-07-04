import type { Metadata } from "next";

type PageMetadataInput = {
  title: Metadata["title"];
  description: string;
  path: string;
  openGraphTitle?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  openGraphTitle,
}: PageMetadataInput): Metadata {
  const fallbackTitle =
    typeof title === "string"
      ? `${title} | Keniyē`
      : typeof title === "object" && title && "absolute" in title
        ? String(title.absolute)
        : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: openGraphTitle || fallbackTitle,
      description,
      url: path,
    },
  };
}
