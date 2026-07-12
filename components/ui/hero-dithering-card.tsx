import { ArrowRight } from "lucide-react"
import { Suspense, lazy, useState, type ReactNode } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

type CTASectionProps = {
  eyebrow?: string
  title?: ReactNode
  description?: string
  buttonLabel?: string
  buttonHref?: string
  asHero?: boolean
  className?: string
}

export function CTASection({
  eyebrow = "Sprint aberto para novos projetos",
  title = (
    <>
      Vamos tirar seu projeto do rascunho.{" "}
      <span className="text-foreground/72">Com visual, codigo e entrega.</span>
    </>
  ),
  description = "Criamos software, sites, landing pages e automacoes com uma equipe enxuta, processo claro e foco no que faz o negocio andar.",
  buttonLabel = "Pedir orcamento",
  buttonHref = "#contato",
  asHero = false,
  className = "",
}: CTASectionProps) {
  const [isHovered, setIsHovered] = useState(false)
  const sectionClass = asHero ? "w-full px-0 py-0" : "w-full px-4 py-10 md:px-6 md:py-16"
  const wrapperClass = asHero ? "relative mx-auto w-full max-w-none" : "relative mx-auto w-full max-w-7xl"
  const panelClass = asHero
    ? "relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-primary/20 bg-[#07111f] shadow-[0_30px_120px_rgba(14,165,233,0.14)] duration-500"
    : "relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-[#07111f] shadow-[0_30px_120px_rgba(14,165,233,0.14)] duration-500 md:min-h-[670px]"

  return (
    <section className={`${sectionClass} ${className}`}>
      <div
        className={wrapperClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={panelClass}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(16,185,129,0.13),transparent_28%),linear-gradient(180deg,rgba(7,17,31,0.08),rgba(2,6,23,0.72))]" />
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div className="pointer-events-none absolute inset-0 z-0 opacity-45 mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#38BDF8"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(2,6,23,0.68),rgba(2,6,23,0.22),rgba(2,6,23,0.68)),radial-gradient(circle_at_center,rgba(2,6,23,0.06),rgba(2,6,23,0.72)_74%)]" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center sm:px-8">
            {eyebrow && (
              <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                {eyebrow}
              </div>
            )}

            {asHero ? (
              <h1 className="mb-8 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
                {title}
              </h1>
            ) : (
              <h2 className="mb-8 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
                {title}
              </h2>
            )}

            <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              {description}
            </p>

            <a
              href={buttonHref}
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-lg bg-primary px-10 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 hover:ring-4 hover:ring-primary/20 active:scale-95 sm:px-12"
            >
              <span className="relative z-10">{buttonLabel}</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
