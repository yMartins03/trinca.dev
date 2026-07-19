import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react"
import { Suspense, lazy, useState, type ReactNode } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

type CTASectionProps = {
  title?: ReactNode
  description?: string
  buttonLabel?: string
  buttonHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

const assurances = [
  "Projeto sob medida",
  "Comunicação direta",
  "Publicação acompanhada",
]

export function CTASection({
  title = <>Tecnologia para sua empresa vender, operar e crescer.</>,
  description = "Criamos experiências digitais e software sob medida para transformar objetivos de negócio em soluções prontas para evoluir.",
  buttonLabel = "Solicitar um diagnóstico",
  buttonHref = "#contato",
  secondaryLabel = "Conhecer as soluções",
  secondaryHref = "#solucoes",
}: CTASectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden border-b border-white/[0.08] bg-black"
      aria-labelledby="hero-title"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#000000_0%,#06080d_55%,#07111d_100%)]" />
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <div className="pointer-events-none absolute inset-0 opacity-38 mix-blend-screen">
          <Dithering
            colorBack="#00000000"
            colorFront="#0A84FF"
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.5 : 0.16}
            className="size-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.82)_48%,rgba(0,0,0,0.38)_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-35" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-28 pt-32 md:px-8 md:pb-32 md:pt-36">
        <div className="max-w-5xl">
          <h1 id="hero-title" className="max-w-5xl text-4xl font-semibold leading-[1.06] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-7 text-[#b6c2d3] sm:text-lg md:text-xl md:leading-8">
            {description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={buttonHref} className="primary-button">
              {buttonLabel}<ArrowRight className="h-5 w-5" />
            </a>
            <a href={secondaryHref} className="secondary-button">
              {secondaryLabel}<ArrowDown className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
            {assurances.map((item) => (
              <span className="flex items-center gap-2 text-sm text-[#c8d2df]" key={item}>
                <CheckCircle2 className="h-4 w-4 text-accent" />{item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/[0.08] bg-black/60 px-5 py-4 backdrop-blur-xl md:px-8">
        <div className="mx-auto grid max-w-7xl place-items-center gap-4 text-center text-sm text-muted-foreground sm:grid-cols-3 sm:gap-0">
          <p className="w-full sm:border-r sm:border-white/10 sm:px-8"><strong className="text-white">Para vender:</strong> sites e landing pages</p>
          <p className="w-full sm:border-r sm:border-white/10 sm:px-8"><strong className="text-white">Para operar:</strong> sistemas e automações</p>
          <p className="w-full sm:px-8"><strong className="text-white">Para decidir:</strong> dashboards e integrações</p>
        </div>
      </div>
    </section>
  )
}
