import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Braces,
  CheckCircle2,
  Code2,
  Gauge,
  Instagram,
  LayoutTemplate,
  Mail,
  MessagesSquare,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { useEffect, useState, type CSSProperties, type FormEvent } from "react"

import { CTASection } from "../components/ui/hero-dithering-card"

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

type CaseItem = {
  name: string
  type: string
  description: string
  metrics: string
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Software sob demanda",
    description: "Sistemas web e mobile feitos para o seu fluxo, com base tecnica preparada para crescer.",
  },
  {
    icon: LayoutTemplate,
    title: "Sites institucionais",
    description: "Presenca digital profissional, responsiva e com conteudo organizado para gerar confianca.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description: "Paginas de campanha com foco em conversao, velocidade, clareza e CTA bem posicionado.",
  },
  {
    icon: Workflow,
    title: "Automacoes e integracoes",
    description: "Conectamos ferramentas, APIs e rotinas para reduzir trabalho manual e ganhar eficiencia.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Paineis claros para acompanhar indicadores, operacao, vendas e decisoes do dia a dia.",
  },
  {
    icon: ShieldCheck,
    title: "Evolucao tecnica",
    description: "Melhorias, manutencao e refino de produtos existentes sem baguncar o que ja funciona.",
  },
]

const processSteps = [
  {
    title: "Briefing direto",
    text: "Entendemos objetivo, publico, urgencia e o que precisa estar pronto primeiro.",
  },
  {
    title: "Proposta clara",
    text: "Definimos escopo, prazo, investimento e prioridades sem documento interminavel.",
  },
  {
    title: "Desenvolvimento",
    text: "Construimos em ciclos curtos, com checkpoints para validar visual, conteudo e fluxo.",
  },
  {
    title: "Entrega e evolucao",
    text: "Publicamos, ajustamos os detalhes finais e deixamos o projeto pronto para crescer.",
  },
]

const cases: CaseItem[] = [
  {
    name: "Portal comercial B2B",
    type: "Site institucional",
    description: "Arquitetura de conteudo, paginas de servicos e formulario orientado a oportunidades.",
    metrics: "SEO + performance",
  },
  {
    name: "Painel operacional",
    type: "Dashboard",
    description: "Interface para acompanhar indicadores, status de atendimento e gargalos da operacao.",
    metrics: "Dados em tempo real",
  },
  {
    name: "Campanha de lancamento",
    type: "Landing page",
    description: "Pagina escura, direta e otimizada para captar leads de um novo produto digital.",
    metrics: "Foco em conversao",
  },
]

const testimonials = [
  {
    quote:
      "O processo foi muito mais direto do que estavamos acostumados. A cada reuniao ja tinha alguma coisa real para validar.",
    author: "Cliente em tecnologia",
  },
  {
    quote:
      "Conseguiram transformar uma ideia solta em uma pagina profissional, rapida e facil de manter.",
    author: "Empreendedor local",
  },
  {
    quote:
      "A comunicacao fez diferenca. A gente sabia o que estava sendo feito, por que e quando seria entregue.",
    author: "Operacao de servicos",
  },
]

const revealStyle = (index = 0): CSSProperties => ({
  transitionDelay: `${index * 90}ms`,
})

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.15 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [formStatus, setFormStatus] = useState("")
  useScrollReveal()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormStatus("Recebido. Agora e so conectar esse formulario ao WhatsApp, email ou CRM de voces.")
  }

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <a href="#topo" className="flex items-center gap-3" aria-label="Ir para o topo">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-sm font-black text-primary">
              T
            </span>
            <span className="text-lg font-semibold tracking-tight">Trinca.dev</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a className="transition hover:text-primary" href="#servicos">
              Servicos
            </a>
            <a className="transition hover:text-primary" href="#processo">
              Processo
            </a>
            <a className="transition hover:text-primary" href="#cases">
              Cases
            </a>
            <a className="transition hover:text-primary" href="#contato">
              Contato
            </a>
          </div>

          <a
            href="#contato"
            className="hidden rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Fale com a gente
          </a>
        </nav>
      </header>

      <main id="topo">
        <section className="relative min-h-screen px-4 pb-20 pt-32 md:px-6 md:pt-40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,rgba(18,9,92,0.78),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(28,232,9,0.16),transparent_24%),linear-gradient(180deg,#020202_0%,#050505_55%,#020202_100%)]" />
          <div className="absolute inset-0 -z-10 bg-grid opacity-35" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div data-reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Estudio de software, sites e automacoes
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                Sua ideia no ar com produto, site e landing feitos do jeito certo.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Criamos experiencias digitais para empresas que precisam vender melhor, organizar processos
                ou validar uma ideia rapido, com visual forte e desenvolvimento bem estruturado.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contato"
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground transition hover:scale-[1.02] hover:bg-primary/90"
                >
                  Pedir orcamento
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-7 text-base font-semibold text-white transition hover:border-primary/60 hover:text-primary"
                >
                  Ver servicos
                </a>
              </div>

              <div className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                {["Briefing em 24h", "Entrega por sprint", "Design + codigo"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-reveal style={revealStyle(1)}>
              <div className="absolute -inset-8 rounded-[40px] bg-primary/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.04] p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[24px] border border-white/10 bg-black p-5">
                  <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                      <span className="h-3 w-3 rounded-full bg-white/30" />
                      <span className="h-3 w-3 rounded-full bg-[#12095C]" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">build: production</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                      <Gauge className="mb-8 h-6 w-6 text-primary" />
                      <p className="text-3xl font-semibold">98</p>
                      <p className="mt-1 text-sm text-muted-foreground">Performance score</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <Smartphone className="mb-8 h-6 w-6 text-primary" />
                      <p className="text-3xl font-semibold">100%</p>
                      <p className="mt-1 text-sm text-muted-foreground">Responsivo</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-white">Pipeline do projeto</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">on track</span>
                    </div>
                    <div className="space-y-3">
                      {["UX e conteudo", "Front-end", "Integracoes"].map((item, index) => (
                        <div key={item}>
                          <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                            <span>{item}</span>
                            <span>{index === 0 ? "100%" : index === 1 ? "78%" : "42%"}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: index === 0 ? "100%" : index === 1 ? "78%" : "42%" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-[#12095C]/40 p-4">
                    <div className="flex items-start gap-3">
                      <Braces className="mt-1 h-5 w-5 text-primary" />
                      <p className="text-sm leading-6 text-muted-foreground">
                        Arquitetura limpa, interface caprichada e entregas que voce consegue acompanhar sem
                        precisar falar "tecnologues".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="px-4 py-20 md:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div data-reveal>
              <p className="section-kicker">Sobre o estudio</p>
              <h2 className="section-title">Tres especialistas no nucleo. Processo de empresa grande.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Dev full-stack", "Produto, arquitetura e integracoes com foco em estabilidade."],
                ["Design e front-end", "Interfaces modernas, responsivas e coerentes com a marca."],
                ["Entrega e estrategia", "Priorizacao, comunicacao e publicacao sem enrolacao."],
              ].map(([title, text], index) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                  data-reveal
                  style={revealStyle(index)}
                >
                  <BadgeCheck className="mb-8 h-7 w-7 text-primary" />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl" data-reveal>
              <p className="section-kicker">Servicos</p>
              <h2 className="section-title">Do primeiro site ao sistema que sustenta a operacao.</h2>
              <p className="section-copy">
                Escolhemos a tecnologia pelo problema, nao por moda. A entrega precisa ser bonita,
                rapida, facil de usar e pronta para o proximo passo.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <article
                    key={service.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.06]"
                    data-reveal
                    style={revealStyle(index)}
                  >
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="processo" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
              <div>
                <p className="section-kicker">Como funciona</p>
                <h2 className="section-title">Fluxo simples, visivel e sem misterio.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-muted-foreground">
                O objetivo e diminuir risco: alinhar antes, construir com checkpoints e entregar com criterio.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-2xl border border-white/10 bg-[#050505] p-6"
                  data-reveal
                  style={revealStyle(index)}
                >
                  <span className="mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl" data-reveal>
              <p className="section-kicker">Cases e entregas</p>
              <h2 className="section-title">Uma vitrine pronta para os proximos projetos.</h2>
              <p className="section-copy">
                Estrutura comercial ja preparada para substituir por projetos reais, resultados e imagens
                quando voces quiserem publicar o portfolio oficial.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {cases.map((item, index) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
                  data-reveal
                  style={revealStyle(index)}
                >
                  <div className="case-preview">
                    <div className="case-window">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="case-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {item.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.metrics}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl" data-reveal>
              <p className="section-kicker">Depoimentos</p>
              <h2 className="section-title">Espaco pronto para prova social de verdade.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={testimonial.author}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                  data-reveal
                  style={revealStyle(index)}
                >
                  <MessagesSquare className="mb-8 h-6 w-6 text-primary" />
                  <blockquote className="text-base leading-7 text-white">"{testimonial.quote}"</blockquote>
                  <figcaption className="mt-6 text-sm font-medium text-muted-foreground">
                    {testimonial.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Pronto para tirar do papel"
          title={
            <>
              Seu projeto pode parecer grande.{" "}
              <span className="text-foreground/70">A primeira entrega nao precisa ser.</span>
            </>
          }
          description="A gente ajuda a escolher o melhor primeiro passo: uma landing, um site institucional, um MVP, uma automacao ou um dashboard que destrava a operacao."
          buttonLabel="Comecar conversa"
          buttonHref="#contato"
        />

        <section id="contato" className="px-4 pb-24 pt-10 md:px-6">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal>
              <p className="section-kicker">Contato</p>
              <h2 className="section-title">Conte o que voce quer construir.</h2>
              <p className="section-copy">
                Manda a ideia, o prazo e o tipo de projeto. A resposta pode ser direta: caminho sugerido,
                escopo inicial e proximos passos.
              </p>

              <div className="mt-10 space-y-4">
                <a className="contact-link" href="mailto:contato@trinca.dev">
                  <Mail className="h-5 w-5" />
                  contato@trinca.dev
                </a>
                <a className="contact-link" href="https://wa.me/" target="_blank" rel="noreferrer">
                  <Phone className="h-5 w-5" />
                  WhatsApp
                </a>
                <a className="contact-link" href="https://instagram.com/" target="_blank" rel="noreferrer">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </div>
            </div>

            <form
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-8"
              onSubmit={handleSubmit}
              data-reveal
              style={revealStyle(1)}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="field">
                  Nome
                  <input required name="name" placeholder="Seu nome" />
                </label>
                <label className="field">
                  Email
                  <input required type="email" name="email" placeholder="voce@email.com" />
                </label>
              </div>

              <label className="field mt-4">
                Tipo de projeto
                <select name="project">
                  <option>Landing page</option>
                  <option>Site institucional</option>
                  <option>Software sob demanda</option>
                  <option>Automacao / integracao</option>
                  <option>Dashboard</option>
                </select>
              </label>

              <label className="field mt-4">
                Mensagem
                <textarea required name="message" rows={5} placeholder="Conta um pouco do projeto..." />
              </label>

              <button className="mt-6 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground transition hover:bg-primary/90">
                Enviar mensagem
                <Zap className="h-5 w-5" />
              </button>

              {formStatus && <p className="mt-4 text-sm text-primary">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
