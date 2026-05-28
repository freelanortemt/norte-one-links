import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-premium px-5 text-center text-softblack">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-titanium">
          Norte One
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal">
          Página não encontrada.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-graphite/70">
          Volte para a página principal e conheça as soluções digitais premium.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-softblack px-6 text-sm font-semibold text-premium"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
