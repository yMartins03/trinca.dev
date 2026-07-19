import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronDown,
  Code2,
  Gauge,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MessageCircleMore,
  Phone,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type KeyboardEvent } from "react"

import { CTASection } from "../components/ui/hero-dithering-card"

type Solution = {
  icon: LucideIcon
  label: string
  title: string
  description: string
  items: string[]
  idealFor: string
}

const solutions: Solution[] = [
  {
    icon: Globe2,
    label: "Presença e aquisição",
    title: "Sites e landing pages",
    description:
      "Transformamos sua oferta em uma experiência digital clara, rápida e preparada para gerar oportunidades.",
    items: [
      "Estratégia de página e arquitetura de conteúdo",
      "Design responsivo alinhado à sua marca",
      "Formulários, integrações e publicação",
    ],
    idealFor: "Empresas que precisam apresentar melhor, lançar ou vender online.",
  },
  {
    icon: Code2,
    label: "Operação e escala",
    title: "Software sob medida",
    description:
      "Transformamos processos manuais que consomem horas em fluxos digitais que podem rodar em minutos, seguindo as regras reais da sua operação.",
    items: [
      "Sistemas web e portais personalizados",
      "Automação de tarefas repetitivas e integrações via API",
      "Arquitetura preparada para evoluir",
    ],
    idealFor: "Operações que perdem horas com planilhas, retrabalho ou ferramentas desconectadas.",
  },
  {
    icon: BarChart3,
    label: "Dados e evolução",
    title: "Dashboards e melhorias",
    description:
      "Organizamos indicadores e evoluímos produtos existentes para que a tecnologia continue servindo às decisões do negócio.",
    items: [
      "Painéis operacionais e executivos",
      "Evolução de interfaces e funcionalidades",
      "Performance, manutenção e suporte técnico",
    ],
    idealFor: "Times que precisam enxergar melhor os dados ou destravar um produto.",
  },
]

const benefits = [
  {
    icon: Layers3,
    title: "Visão de produto",
    text: "Não recebemos apenas uma lista de telas. Entendemos o objetivo para construir o que realmente precisa existir.",
  },
  {
    icon: MessageCircleMore,
    title: "Comunicação direta",
    text: "Você acompanha decisões, prioridades e andamento sem camadas desnecessárias entre negócio e desenvolvimento.",
  },
  {
    icon: Gauge,
    title: "Qualidade técnica",
    text: "Responsividade, performance, segurança e manutenção entram no projeto desde o começo.",
  },
  {
    icon: ShieldCheck,
    title: "Entrega responsável",
    text: "Publicação, validações finais e orientação para os próximos passos fazem parte da entrega.",
  },
]

const processSteps = [
  {
    title: "Entendimento",
    text: "Alinhamos o cenário, o objetivo comercial e o que hoje impede o projeto de avançar.",
  },
  {
    title: "Direcionamento",
    text: "Você recebe uma proposta com solução recomendada, escopo, etapas, prazo e investimento.",
  },
  {
    title: "Construção",
    text: "Desenvolvemos em ciclos curtos e mostramos o progresso nos pontos importantes de decisão.",
  },
  {
    title: "Publicação",
    text: "Validamos a entrega, colocamos no ar e deixamos o caminho preparado para a evolução.",
  },
]

const faqs = [
  {
    question: "Quanto custa desenvolver um projeto?",
    answer:
      "O investimento depende do objetivo, da complexidade e das integrações envolvidas. Depois da conversa inicial, enviamos uma proposta com escopo e valores claros para você decidir com segurança.",
  },
  {
    question: "Em quanto tempo o projeto fica pronto?",
    answer:
      "Landing pages costumam ter um ciclo menor; sistemas e integrações exigem mais etapas. O cronograma é definido antes do início e organizado por entregas para dar visibilidade ao progresso.",
  },
  {
    question: "Vocês trabalham com projetos que ainda estão só na ideia?",
    answer:
      "Sim. Ajudamos a transformar a ideia em uma primeira versão viável, priorizando o que precisa ser validado antes de ampliar o investimento.",
  },
  {
    question: "É possível integrar com ferramentas que já usamos?",
    answer:
      "Na maioria dos casos, sim. Avaliamos APIs, regras de negócio e limitações técnicas durante o diagnóstico para recomendar o caminho mais seguro.",
  },
  {
    question: "Existe suporte depois da publicação?",
    answer:
      "Sim. Podemos combinar manutenção, melhorias e novas etapas conforme a necessidade do produto e da operação.",
  },
]

const projectOptions = [
  "Landing page",
  "Site institucional",
  "Software sob medida",
  "Automação ou integração",
  "Dashboard",
  "Melhoria em produto existente",
  "Ainda não sei",
]

const deadlineOptions = [
  "O quanto antes",
  "Nos próximos 30 dias",
  "Entre 1 e 3 meses",
  "Estou pesquisando",
]

const investmentOptions = [
  "Ainda não defini",
  "Até R$ 5 mil",
  "De R$ 5 mil a R$ 15 mil",
  "Acima de R$ 15 mil",
]

const revealStyle = (index = 0): CSSProperties => ({
  transitionDelay: `${index * 80}ms`,
})

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -64px 0px", threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

type SelectFieldProps = {
  label: string
  name: string
  options: string[]
}

function SelectField({ label, name, options }: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("")
  const rootRef = useRef<HTMLDivElement>(null)
  const fieldId = `select-${name.toLowerCase().replace(/\s+/g, "-")}`

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false)
    }

    function handleFormReset() {
      setValue("")
      setIsOpen(false)
    }

    const form = rootRef.current?.closest("form")

    document.addEventListener("pointerdown", handlePointerDown)
    form?.addEventListener("reset", handleFormReset)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      form?.removeEventListener("reset", handleFormReset)
    }
  }, [])

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape") setIsOpen(false)
    if ((event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") && !isOpen) {
      event.preventDefault()
      setIsOpen(true)
    }
  }

  return (
    <div className="field custom-select" ref={rootRef}>
      <span id={`${fieldId}-label`}>{label}</span>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        className={`select-trigger ${isOpen ? "is-open" : ""}`}
        aria-labelledby={`${fieldId}-label ${fieldId}-value`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={handleKeyDown}
      >
        <span id={`${fieldId}-value`} className={value ? "text-white" : "text-[#7f8da1]"}>
          {value || "Selecione"}
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
      </button>

      {isOpen && (
        <div className="select-menu" role="listbox" aria-labelledby={`${fieldId}-label`}>
          {options.map((option) => (
            <button
              type="button"
              className="select-option"
              role="option"
              aria-selected={value === option}
              key={option}
              onClick={() => {
                setValue(option)
                setIsOpen(false)
              }}
            >
              <span>{option}</span>
              {value === option && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [formStatus, setFormStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  useScrollReveal()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus("")

    const form = event.currentTarget
    const formData = new FormData(form)
    const senderEmail = String(formData.get("Email") || "")

    formData.set("_subject", "Novo pedido de projeto pelo site Trivium")
    formData.set("_template", "box")
    formData.set("_captcha", "false")
    formData.set("_replyto", senderEmail)
    formData.set("Origem", "Formulário comercial do site Trivium")

    try {
      const response = await fetch("https://formsubmit.co/ajax/trincadev1@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })

      if (!response.ok) throw new Error("Falha no envio")

      form.reset()
      setFormStatus("Mensagem enviada. Vamos responder pelo e-mail informado.")
    } catch {
      setFormStatus("Não foi possível enviar agora. Tente novamente ou fale com a gente pelo Instagram.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/65 px-3 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-5"
          aria-label="Navegação principal"
        >
          <a href="#topo" className="flex min-w-0 items-center gap-2.5" aria-label="Trivium - ir para o topo">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center">
              <img src="/trivium-symbol.png" alt="" className="h-full w-full object-contain" aria-hidden="true" />
            </span>
            <span className="truncate text-lg font-semibold text-white">Trivium</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
            <a className="nav-link" href="#solucoes">Soluções</a>
            <a className="nav-link" href="#diferenciais">Diferenciais</a>
            <a className="nav-link" href="#processo">Processo</a>
            <a className="nav-link" href="#duvidas">Dúvidas</a>
          </div>

          <a href="#contato" className="header-cta">
            <span className="hidden sm:inline">Solicitar proposta</span>
            <span className="sm:hidden">Orçamento</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <main id="topo">
        <CTASection
          title={
            <>
              Tecnologia para sua empresa <span className="text-primary">vender, operar e crescer.</span>
            </>
          }
          description="Criamos sites, landing pages, sistemas e automações sob medida para transformar objetivos de negócio em soluções digitais claras, rápidas e prontas para evoluir."
          buttonLabel="Solicitar um diagnóstico"
          buttonHref="#contato"
          secondaryLabel="Conhecer as soluções"
          secondaryHref="#solucoes"
        />

        <section id="solucoes" className="section-band scroll-mt-24">
          <div className="section-container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Soluções orientadas ao negócio</p>
              <h2 className="section-title">O projeto certo para o momento da sua empresa.</h2>
              <p className="section-copy">
                Da primeira presença digital ao sistema que sustenta a operação, cada entrega começa pelo problema que precisa ser resolvido.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon

                return (
                  <article className="solution-card" key={solution.title} data-reveal style={revealStyle(index)}>
                    <div className="solution-icon"><Icon className="h-6 w-6" /></div>
                    <p className="solution-label">{solution.label}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{solution.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{solution.description}</p>

                    <ul className="mt-7 space-y-3" aria-label={`O que inclui ${solution.title}`}>
                      {solution.items.map((item) => (
                        <li className="flex gap-3 text-sm leading-6 text-foreground/90" key={item}>
                          <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 border-t border-white/10 pt-5">
                      <p className="text-xs font-semibold uppercase text-muted-foreground">Indicado para</p>
                      <p className="mt-2 text-sm leading-6 text-white/90">{solution.idealFor}</p>
                    </div>

                    <a href="#contato" className="solution-link">
                      Conversar sobre esta solução <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="commercial-cta">
          <div className="section-container flex flex-col justify-between gap-7 py-10 md:flex-row md:items-center">
            <div data-reveal>
              <p className="text-sm font-semibold text-accent">Não sabe qual caminho faz mais sentido?</p>
              <h2 className="mt-2 max-w-2xl text-2xl font-semibold text-white md:text-3xl">
                Conte o cenário. A gente ajuda a organizar o próximo passo.
              </h2>
            </div>
            <a href="#contato" className="primary-button shrink-0" data-reveal style={revealStyle(1)}>
              Falar sobre o projeto <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        <section id="diferenciais" className="section-band section-band-alt scroll-mt-24">
          <div className="section-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div data-reveal>
              <p className="section-kicker">Por que a Trivium</p>
              <h2 className="section-title">Uma parceria técnica com visão comercial.</h2>
              <p className="section-copy">
                Bonito não basta. A solução precisa comunicar valor, funcionar bem e continuar simples de evoluir depois da publicação.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-foreground/90">
                <BadgeCheck className="h-5 w-5 text-accent" />
                Escopo transparente e decisões compartilhadas
              </div>
            </div>

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <article className="benefit-item" key={benefit.title} data-reveal style={revealStyle(index)}>
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-5 text-lg font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{benefit.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="processo" className="section-band scroll-mt-24">
          <div className="section-container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Do primeiro contato à publicação</p>
              <h2 className="section-title">Um processo simples para tirar o projeto do papel.</h2>
              <p className="section-copy">
                Cada etapa reduz incertezas e deixa claro o que está sendo decidido, construído e entregue.
              </p>
            </div>

            <ol className="process-grid mt-12">
              {processSteps.map((step, index) => (
                <li className="process-step" key={step.title} data-reveal style={revealStyle(index)}>
                  <span className="process-number">0{index + 1}</span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="duvidas" className="section-band section-band-alt scroll-mt-24">
          <div className="section-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div data-reveal>
              <p className="section-kicker">Perguntas frequentes</p>
              <h2 className="section-title">O que você precisa saber antes de começar.</h2>
              <p className="section-copy">Se a sua dúvida não estiver aqui, pode mandar direto no formulário.</p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10" data-reveal style={revealStyle(1)}>
              {faqs.map((faq) => (
                <details className="faq-item group" key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-control" aria-hidden="true">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section scroll-mt-20">
          <div className="section-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div data-reveal>
              <p className="section-kicker">Vamos conversar</p>
              <h2 className="section-title">Qual resultado a tecnologia precisa gerar para você?</h2>
              <p className="section-copy">
                Compartilhe o momento da empresa e o que você quer construir ou melhorar. A conversa inicial é objetiva e sem compromisso.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Entendimento do cenário atual",
                  "Direcionamento da solução mais adequada",
                  "Próximos passos claros para o projeto",
                ].map((item) => (
                  <div className="flex items-center gap-3 text-sm text-foreground/90" key={item}>
                    <Check className="h-4 w-4 text-accent" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-5">
                <a className="contact-channel" href="mailto:trincadev1@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span>
                    <small>Prefere enviar um e-mail?</small>
                    trincadev1@gmail.com
                  </span>
                </a>
                <a
                  className="contact-channel"
                  href="https://wa.me/5553981268866"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  <span>
                    <small>Prefere chamar no WhatsApp?</small>
                    (53) 98126-8866
                  </span>
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/trincadev1@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              data-reveal
              style={revealStyle(1)}
            >
              <div className="mb-7">
                <p className="text-sm font-semibold text-primary">Conte sobre o seu projeto</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Receba um direcionamento inicial.</h3>
              </div>

              <input type="hidden" name="_subject" value="Novo pedido de projeto pelo site Trivium" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="Origem" value="Formulário comercial do site Trivium" />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="field">Nome<input required name="Nome" placeholder="Seu nome" autoComplete="name" /></label>
                <label className="field">E-mail<input required type="email" name="Email" placeholder="voce@empresa.com" autoComplete="email" /></label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="field">Empresa<input name="Empresa" placeholder="Nome da empresa" autoComplete="organization" /></label>
                <SelectField label="Tipo de projeto" name="Tipo de projeto" options={projectOptions} />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <SelectField label="Prazo desejado" name="Prazo" options={deadlineOptions} />
                <SelectField label="Investimento previsto" name="Investimento previsto" options={investmentOptions} />
              </div>

              <label className="field mt-4">Sobre o projeto
                <textarea required name="Mensagem" rows={5} placeholder="O que você quer construir, melhorar ou automatizar?" />
              </label>

              <button className="primary-button mt-6 w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Solicitar contato"}
                {isSubmitting && <Sparkles className="h-5 w-5 animate-pulse" />}
              </button>

              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Ao enviar, você autoriza o contato da Trivium sobre esta solicitação.
              </p>
              {formStatus && <p className="mt-4 text-sm font-medium text-primary" role="status" aria-live="polite">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.08] bg-black px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#topo" className="flex items-center" aria-label="Trivium - voltar ao topo">
            <img src="/trivium-logo.png" alt="Trivium Soluções Digitais" className="h-auto w-36 object-contain" />
          </a>

          <p className="text-sm text-muted-foreground">Software, sites e automações para negócios digitais.</p>

          <div className="flex items-center gap-2">
            <a className="social-link" href="https://wa.me/5553981268866" target="_blank" rel="noreferrer" aria-label="WhatsApp da Trivium">
              <Phone className="h-5 w-5" />
            </a>
            <a className="social-link" href="https://www.instagram.com/triviumtech1/" target="_blank" rel="noreferrer" aria-label="Instagram da Trivium">
              <Instagram className="h-5 w-5" />
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/trivium-tech-12aaa8421/" target="_blank" rel="noreferrer" aria-label="LinkedIn da Trivium">
              <Linkedin className="h-5 w-5" />
            </a>
            <a className="social-link" href="mailto:trincadev1@gmail.com" aria-label="Enviar e-mail para a Trivium">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
