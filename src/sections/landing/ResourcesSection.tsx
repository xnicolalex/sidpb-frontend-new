import Link from "next/link";
import { BookOpen } from "lucide-react";

export function ResourcesSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto flex max-w-5xl justify-center px-2 py-2">

        <Link
          href="/documentacao"
          className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:underline"
        >

          Consulte a documentação da plataforma

        </Link>
        

      </div>
    </section>
  );
}