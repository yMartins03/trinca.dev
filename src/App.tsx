import {
  BadgeCheck,
  BarChart3,
  Code2,
  Instagram,
  LayoutTemplate,
  Mail,
  MessagesSquare,
  Phone,
  Rocket,
  ShieldCheck,
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
    description: "Sistemas web e mobile desenhados para fluxos reais, com arquitetura preparada para crescer.",
  },
  {
    icon: LayoutTemplate,
    title: "Sites institucionais",
    description: "Presenca digital clara, responsiva e organizada para gerar confianca em decisoes B2B.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description: "Paginas de campanha com hierarquia visual, velocidade e CTAs pensados para conversao.",
  },
  {
    icon: Workflow,
    title: "Automacoes e integracoes",
    description: "Conectamos sistemas, APIs e rotinas para reduzir friccao operacional e retrabalho.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Paineis executivos e operacionais para acompanhar indicadores com leitura rapida.",
  },
  {
    icon: ShieldCheck,
    title: "Evolucao tecnica",
    description: "Refino, manutencao e evolucao de produtos existentes com criterio e estabilidade.",
  },
]

const processSteps = [
  {
    title: "Briefing direto",
    text: "Mapeamos objetivo, publico, restricoes tecnicas e o que precisa estar pronto primeiro.",
  },
  {
    title: "Proposta clara",
    text: "Definimos escopo, prazo, investimento e prioridades com linguagem objetiva.",
  },
  {
    title: "Desenvolvimento",
    text: "Construimos em ciclos curtos, com checkpoints para validar UX, conteudo e integracoes.",
  },
  {
    title: "Entrega e evolucao",
    text: "Publicamos, ajustamos os detalhes finais e deixamos base pronta para evolucao.",
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
      <header className="fixed inset-x-0 top-3 z-50 px-4 md:top-4 md:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-primary/20 bg-primary/10 px-4 py-3 text-primary shadow-[0_0_45px_rgba(56,189,248,0.14)] backdrop-blur-xl md:px-5">
          <a href="#topo" className="flex items-center gap-3" aria-label="Ir para o topo">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-white p-1.5 shadow-[0_0_35px_rgba(56,189,248,0.18)]">
              <img src="/trinca-logo.png" alt="" className="h-full w-full object-contain" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Trinca.dev</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-primary/80 md:flex">
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
            className="hidden rounded-lg border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Fale com a gente
          </a>
        </nav>
      </header>

      <main id="topo">
        <section className="relative min-h-screen px-0">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.22),transparent_30%),linear-gradient(180deg,#020617_0%,#07111f_62%,#020617_100%)]" />
          <CTASection
            asHero
            className="py-0"
            eyebrow=""
            title="Produtos, sites e landing pages com padrao tecnico de software."
            description="Criamos experiencias digitais para empresas que precisam vender melhor, organizar processos ou validar uma ideia com clareza, seguranca e desenvolvimento bem estruturado."
            buttonLabel="Comecar conversa"
            buttonHref="#contato"
          />
        </section>

        <section id="sobre" className="px-4 py-20 md:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div data-reveal>
              <p className="section-kicker">Sobre o estudio</p>
              <h2 className="section-title">Time enxuto, criterio tecnico e processo de produto.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Arquitetura full-stack", "Produto, backend, front-end e integracoes com foco em estabilidade."],
                ["UX e interface", "Interfaces responsivas, consistentes e coerentes com marcas de tecnologia."],
                ["Entrega orientada", "Priorizacao, comunicacao e publicacao com visibilidade do progresso."],
              ].map(([title, text], index) => (
                <article
                  key={title}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_70px_rgba(2,6,23,0.18)]"
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
              <h2 className="section-title">Do posicionamento digital ao sistema que sustenta a operacao.</h2>
              <p className="section-copy">
                Escolhemos a tecnologia pelo problema, nao por moda. A entrega precisa transmitir confianca,
                performar bem e estar pronta para o proximo passo do negocio.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <article
                    key={service.title}
                    className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.06]"
                    data-reveal
                    style={revealStyle(index)}
                  >
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
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
                <h2 className="section-title">Fluxo claro, checkpoints curtos e decisao sem ruido.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-muted-foreground">
                O objetivo e diminuir risco: alinhar antes, construir com evidencias e entregar com criterio.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-lg border border-white/10 bg-[#07111f] p-6"
                  data-reveal
                  style={revealStyle(index)}
                >
                  <span className="mb-10 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-sm font-black text-primary-foreground">
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
              <h2 className="section-title">Entregas com cara de produto, nao de template.</h2>
              <p className="section-copy">
                Estrutura comercial preparada para apresentar projetos reais, resultados e imagens
                quando voces quiserem publicar o portfolio oficial.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {cases.map((item, index) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]"
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
                      <span className="rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
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
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
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

        <section id="contato" className="px-4 pb-24 pt-10 md:px-6">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal>
              <p className="section-kicker">Contato</p>
              <h2 className="section-title">Conte o que voce quer construir ou melhorar.</h2>
              <p className="section-copy">
                Manda a ideia, o prazo e o tipo de projeto. A resposta vem com caminho sugerido,
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
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(2,6,23,0.28)] md:p-8"
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

              <button className="mt-6 inline-flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-primary px-7 text-base font-bold text-primary-foreground transition hover:bg-primary/90">
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
