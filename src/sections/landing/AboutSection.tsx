import {
  BookOpen,
  Bug,
  MapPinned,
  Users,
} from "lucide-react";

export function AboutSection() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-8">

        {/* Título */}

        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Sobre o site
        </h2>

        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-neutral-600">
          Consulte registros epidemiológicos e literatura científica sobre
          doenças parasitárias no Brasil.
        </p>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-2 gap-y-10 lg:grid-cols-4">

          <div className="flex flex-col items-center text-center">
            <Bug className="mb-4 h-8 w-8 text-primary" />

            <h3 className="text-lg font-semibold">
              Doenças
            </h3>

            <p className="mt-2 max-w-[180px] text-sm leading-6 text-neutral-600">
              Consulte doenças parasitárias registradas.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <MapPinned className="mb-4 h-8 w-8 text-primary" />

            <h3 className="text-lg font-semibold">
              Ocorrências
            </h3>

            <p className="mt-2 max-w-[180px] text-sm leading-6 text-neutral-600">
              Visualize registros no mapa do Brasil.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Users className="mb-4 h-8 w-8 text-primary" />

            <h3 className="text-lg font-semibold">
              Hospedeiros
            </h3>

            <p className="mt-2 max-w-[180px] text-sm leading-6 text-neutral-600">
              Pesquise espécies hospedeiras e vetores.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <BookOpen className="mb-4 h-8 w-8 text-primary" />

            <h3 className="text-lg font-semibold">
              Literatura
            </h3>

            <p className="mt-2 max-w-[180px] text-sm leading-6 text-neutral-600">
              Explore os artigos científicos relacionados.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}