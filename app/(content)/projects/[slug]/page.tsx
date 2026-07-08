import { ArrowLeftIcon, ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { projects, statusConfig } from "@/utils/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug as string }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const statusLabel = project.status.label ?? statusConfig[project.status.type].label;

  return (
    <article className="flex w-full max-w-2xl flex-col gap-8">
      <Link
        className="flex w-fit items-center gap-1 text-muted-foreground text-sm hover:text-foreground"
        href="/"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        All projects
      </Link>

      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-2xl">{project.name}</h1>
          <span
            className={`rounded-md px-2 py-1 font-medium text-xs ${statusConfig[project.status.type].className}`}
          >
            {statusLabel}
          </span>
        </div>

        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <Badge key={tech.name} variant="outline">
              {tech.name}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              className="flex items-center gap-1 text-foreground text-sm hover:underline"
              href={project.liveUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowSquareOutIcon className="h-4 w-4" />
              Visit site
            </a>
          )}
          {project.githubUrl && (
            <a
              className="flex items-center gap-1 text-primary text-sm hover:underline"
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Source
            </a>
          )}
        </div>
      </header>

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="flex flex-col gap-4">
          {project.screenshots.map((src) => (
            <div className="overflow-hidden rounded-xl border border-border" key={src}>
              <Image
                alt={`${project.name} screenshot`}
                className="w-full object-cover"
                height={720}
                src={src}
                width={1280}
              />
            </div>
          ))}
        </div>
      )}

      {project.longDescription && project.longDescription.length > 0 && (
        <div className="flex flex-col gap-4 text-foreground">
          {project.longDescription.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Highlights</h2>
          <ul className="flex flex-col gap-2 text-foreground text-sm">
            {project.highlights.map((highlight) => (
              <li className="flex gap-2" key={highlight.slice(0, 40)}>
                <span className="text-muted-foreground">–</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
