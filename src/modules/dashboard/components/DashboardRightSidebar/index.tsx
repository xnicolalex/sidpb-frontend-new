"use client";

import { ExternalLink } from "lucide-react";

import type { Article } from "@/entities/article/article.types";
import type { Occurrence } from "@/entities/occurrence/occurrence.types";

interface DashboardRightSidebarProps {
  occurrences: Occurrence[];
}

export function DashboardRightSidebar({
  occurrences,
}: DashboardRightSidebarProps) {
  return (
    <aside className="flex h-full w-96 shrink-0 flex-col overflow-hidden border-l border-border bg-background">
      <div className="shrink-0 border-b border-border px-5 py-4">
        <h2 className="text-sm font-semibold">
          Fontes
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Fontes relacionadas às ocorrências exibidas
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {occurrences.length === 0 ? (
          <div className="px-5 py-6">
            <p className="text-sm text-muted-foreground">
              Nenhuma ocorrência disponível.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {occurrences.map((occurrence) => (
              <OccurrenceSourceItem
                key={occurrence.id}
                occurrence={occurrence}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

function OccurrenceSourceItem({
  occurrence,
}: {
  occurrence: Occurrence;
}) {
  const mainArticle = occurrence.articles?.[0];

  return (
    <article className="px-5 py-4">
      <div>
        <h3 className="text-sm font-semibold">
          {occurrence.city}, {occurrence.state}
        </h3>

        <p className="mt-0.5 text-xs text-muted-foreground">
          Ocorrência #{occurrence.id}
        </p>
      </div>

      <dl className="mt-3 grid grid-cols-[82px_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-xs">
        <dt className="text-muted-foreground">
          Doença
        </dt>

        <dd className="truncate font-medium">
          {occurrence.disease}
        </dd>

        <dt className="text-muted-foreground">
          Vetor
        </dt>

        <dd
          className="truncate italic"
          title={occurrence.vector}
        >
          {occurrence.vector}
        </dd>

        <dt className="text-muted-foreground">
          Hospedeiro
        </dt>

        <dd
          className="truncate"
          title={occurrence.host}
        >
          {occurrence.host}
        </dd>

        <dt className="text-muted-foreground">
          Data
        </dt>

        <dd>
          {formatOccurrenceDate(occurrence.date)}
        </dd>
      </dl>

      <div className="mt-4 border-t border-border pt-3">
        <p className="mb-1.5 text-xs text-muted-foreground">
          Fonte principal
        </p>

        {mainArticle ? (
          <ArticleSource article={mainArticle} />
        ) : (
          <p className="text-xs text-muted-foreground">
            Nenhuma fonte cadastrada.
          </p>
        )}

        {occurrence.articles &&
          occurrence.articles.length > 1 && (
            <p className="mt-2 text-xs text-muted-foreground">
              + {occurrence.articles.length - 1}{" "}
              {occurrence.articles.length - 1 === 1
                ? "outra fonte"
                : "outras fontes"}
            </p>
          )}
      </div>
    </article>
  );
}

function ArticleSource({
  article,
}: {
  article: Article;
}) {
  return (
    <div>
      {article.url ? (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-start gap-1.5 text-sm font-medium leading-5 text-foreground hover:text-primary"
        >
          <span>
            {article.title}
          </span>

          <ExternalLink className="mt-1 h-3 w-3 shrink-0 opacity-60" />
        </a>
      ) : (
        <p className="text-sm font-medium leading-5">
          {article.title}
        </p>
      )}

      <p className="mt-1 text-xs text-muted-foreground">
        {formatArticleCitation(article)}
      </p>
    </div>
  );
}

function formatArticleCitation(
  article: Article
) {
  const firstAuthor = article.authors[0];

  if (!firstAuthor) {
    return article.journal
      ? `${article.journal} · ${article.year}`
      : String(article.year);
  }

  const authorText =
    article.authors.length > 1
      ? `${firstAuthor} et al.`
      : firstAuthor;

  if (article.journal) {
    return `${authorText} · ${article.journal} · ${article.year}`;
  }

  return `${authorText} · ${article.year}`;
}

function formatOccurrenceDate(
  value: string
) {
  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return value;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(
    new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    )
  );
}