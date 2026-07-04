import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { WorkDetailPage } from "@/components/work/work-detail-page";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description =
    project.desc ||
    project.overview ||
    `${project.title} by Funfere Keniyē Koroye.`;
  const url = `/work/${project.slug}`;

  return {
    title: `${project.title} | Work`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | Work | Keniyē`,
      description,
      url,
      images: project.thumbnail
        ? [
            {
              url: project.thumbnail,
              alt: project.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <WorkDetailPage project={project} />;
}
