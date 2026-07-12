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
}: CTASectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full px-4 py-10 md:px-6 md:py-16">
      <div
        className="relative mx-auto w-full max-w-7xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-[32px] border border-primary/20 bg-[#050505] shadow-[0_0_80px_rgba(28,232,9,0.08)] duration-500 md:min-h-[560px] md:rounded-[44px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,9,92,0.95),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(28,232,9,0.18),transparent_30%)]" />
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div className="pointer-events-none absolute inset-0 z-0 opacity-35 mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#1CE809"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              {eyebrow}
            </div>

            <h2 className="mb-8 max-w-5xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
              {title}
            </h2>

            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>

            <a
              href={buttonHref}
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:ring-4 hover:ring-primary/20 active:scale-95 sm:px-12"
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
