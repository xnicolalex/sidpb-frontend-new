import Image from "next/image";

export function InfoSection() {
  return (
    <section className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-12 px-3 py-5">

            <div className="text-left">
            <h3 className="mb-4 text-lg font-semibold">
                Desenvolvido por
            </h3>

            {/* Logos */}

            <div className="flex items-center gap-10">
            <Image src="/sidpb/lcp_logo.svg" alt="LCP" className="h-20 w-auto" width={200} height={100} />
            <Image src="/sidpb/nca_logo.svg" alt="NCA" className="h-20 w-auto" width={200} height={100} />
            <Image src="/sidpb/ufma_logo.png" alt="UFMA" className="h-20 w-auto" width={200} height={100} />
            
            </div>
            </div>

            {/* Linha */}

            <div className="h-28 border-l border-neutral-300" />

            {/* Contato */}

            <div className="text-left">
            <h3 className="mb-4 text-lg font-semibold">
                Contato
            </h3>

            <div className="space-y-2 text-sm leading-6 text-neutral-600">
                <p>Prédio de Pós-graduação do CCBS</p>
                <p>Av. dos Portugueses, 1966</p>
                <p>Vila Bacanga, São Luís - MA, 65080-805</p>

                <a
                href="mailto:lcp@ufma.br"
                className="mt-3 block text-primary hover:underline"
                >
                lcp@ufma.br
                </a>
            </div>
            </div>

        </div>
    </section>
  );
}