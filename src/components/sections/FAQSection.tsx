'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageSquare,
  Phone,
  DollarSign,
  Clock,
  Shield,
  Users,
  Target,
  Settings,
  TrendingUp,
  AlertCircle,
  Lock,
  Infinity,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'

const strategicFaqs = [
  {
    question: 'Preciso ter experiência prévia em avicultura para participar?',
    answer:
      'Não é necessário! Desenvolvemos uma metodologia que atende desde iniciantes até profissionais com décadas de experiência. Começamos com fundamentos sólidos e evoluímos para técnicas avançadas. Profissionais experientes podem pular diretamente para módulos especializados e focar nos hotseats de casos complexos.',
    category: 'Qualificacao',
    icon: Users,
    urgency: false,
  },
  {
    question: 'Por que apenas 100 vagas? Não seria melhor abrir mais?',
    answer:
      'Limitamos propositalmente para garantir acompanhamento VIP. Cada participante recebe atenção personalizada que seria impossível com turmas maiores. Os primeiros 20 têm prioridade absoluta nos hotseats, os primeiros 50 ganham mentoria individual de 15 minutos. Após 100, as condições nunca mais serão as mesmas.',
    category: 'Exclusividade',
    icon: Lock,
    urgency: true,
  },
  {
    question: 'O preço de R$ 397 é real? Qual a forma de pagamento?',
    answer:
      'R$ 397 é o preço promocional exclusivo da 1ª turma (valor normal R$ 1.497). Aceitamos PIX à vista com desconto ou cartão em até 12x. IMPORTANTE: Este preço NUNCA mais será oferecido. As próximas turmas começarão em R$ 1.497, sem os benefícios vitalicícios.',
    category: 'Investimento',
    icon: DollarSign,
    urgency: true,
  },
  {
    question: 'O acesso vitalício é garantido mesmo? Como tenho certeza?',
    answer:
      'SIM, garantido em contrato. A primeira turma tem acesso PERMANENTE a todos os módulos, lives gravadas, hotseats, atualizações futuras e comunidade. É um privilégio exclusivo dos fundadores que NUNCA mais será oferecido. Próximas turmas terão acesso limitado a 12-24 meses.',
    category: 'Garantias',
    icon: Infinity,
    urgency: false,
  },
  {
    question: 'Como aplicar isso na minha propriedade sem parar as atividades?',
    answer:
      'Todo conteúdo é desenhado para aplicação imediata sem interromper operações. Você recebe POPs prontos, checklists de implementação gradual e planilhas automatizadas. Cada módulo tem cronograma de implementação que você adapta à sua realidade. Nos hotseats, resolvemos desafios específicos da sua granja.',
    category: 'Aplicacao',
    icon: Settings,
    urgency: false,
  },
  {
    question: 'Se eu perder as lives ao vivo, perco o conteúdo?',
    answer:
      'Absolutamente não! Todas as lives são gravadas em alta qualidade e organizadas por temas na plataforma. Você assiste quando e quantas vezes quiser. Os hotseats também ficam gravados e indexados por problema/solução para consulta rápida. Acesso vitalício significa que funciona no SEU tempo.',
    category: 'Flexibilidade',
    icon: Clock,
    urgency: false,
  },
  {
    question: 'A garantia de 7 dias é real ou tem pegadinha?',
    answer:
      'Garantia REAL, sem pegadinhas. Após a primeira live, se você não estiver 100% convencido do valor, enviamos reembolso total em até 7 dias úteis. Sem perguntas incômodas, sem burocracia. Basta um email. Temos essa confiança porque sabemos que nosso conteúdo transforma operações.',
    category: 'Garantias',
    icon: Shield,
    urgency: false,
  },
  {
    question: 'Quanto tempo preciso dedicar por semana?',
    answer:
      'Mínimo 3-4 horas semanais para absorver o conteúdo principal. Lives são 2h mensais + hotseats de 1h. Mas o curso é estruturado para ser consumido no seu ritmo. Módulos têm vídeos curtos (5-12min) que você pode assistir entre atividades. A comunidade ativa 24/7 permite tirar dúvidas a qualquer momento.',
    category: 'Tempo',
    icon: Clock,
    urgency: false,
  },
  {
    question: 'Funciona para granjas pequenas ou só para grandes operações?',
    answer:
      'Funciona para QUALQUER tamanho! Protocolos são escaláveis desde 1.000 aves até operações de 500.000+. Os fundamentos sanitários são os mesmos, adaptamos a implementação ao seu porte. Pequenos produtores frequentemente veem resultados mais rápidos pois têm mais agilidade para implementar mudanças.',
    category: 'Aplicacao',
    icon: Target,
    urgency: false,
  },
  {
    question: 'Posso mesmo reduzir a mortalidade? Qual o resultado real?',
    answer:
      'RESULTADOS COMPROVADOS: Redução média de 12-18% na mortalidade em 90 dias aplicando nossos protocolos. Cada 1% de redução representa R$ 2.000-8.000 economizados por lote (dependendo do tamanho). Alguns alunos reduziram de 8% para 3% em 6 meses. Temos cases documentados e depoimentos reais.',
    category: 'Resultados',
    icon: TrendingUp,
    urgency: false,
  },
  {
    question: 'E se eu não conseguir implementar ou não der resultado?',
    answer:
      'Oferecemos DUAS garantias: 1) Reembolso total em 7 dias se não gostar; 2) Se aplicar os protocolos corretamente por 60 dias e não ver melhoria, oferecemos consultoria individual gratuita até resolver. Nosso compromisso é com seu RESULTADO, não apenas entrega de conteúdo.',
    category: 'Garantias',
    icon: Shield,
    urgency: false,
  },
  {
    question: 'Depois das 100 vagas, não terá mais turmas?',
    answer:
      'Terá sim, MAS nunca mais com essas condições. Próximas turmas: preço de R$ 1.497+, acesso limitado a 12-24 meses, sem mentoria individual, sem prioridade nos hotseats, turmas maiores (menos atenção). Os "fundadores" da 1ª turma mantém privilégios exclusivos para sempre.',
    category: 'Exclusividade',
    icon: AlertCircle,
    urgency: true,
  },
]

const categoryConfig = {
  Todas: {
    icon: HelpCircle,
    color: 'text-slate-400',
    count: strategicFaqs.length,
  },
  Investimento: {
    icon: DollarSign,
    color: 'text-emerald-400',
    count: strategicFaqs.filter((faq) => faq.category === 'Investimento')
      .length,
  },
  Exclusividade: {
    icon: Lock,
    color: 'text-yellow-400',
    count: strategicFaqs.filter((faq) => faq.category === 'Exclusividade')
      .length,
  },
  Garantias: {
    icon: Shield,
    color: 'text-blue-400',
    count: strategicFaqs.filter((faq) => faq.category === 'Garantias').length,
  },
  Resultados: {
    icon: TrendingUp,
    color: 'text-green-400',
    count: strategicFaqs.filter((faq) => faq.category === 'Resultados').length,
  },
  Aplicacao: {
    icon: Settings,
    color: 'text-purple-400',
    count: strategicFaqs.filter((faq) => faq.category === 'Aplicacao').length,
  },
  Qualificacao: {
    icon: Users,
    color: 'text-cyan-400',
    count: strategicFaqs.filter((faq) => faq.category === 'Qualificacao')
      .length,
  },
  Flexibilidade: {
    icon: Clock,
    color: 'text-orange-400',
    count: strategicFaqs.filter((faq) => faq.category === 'Flexibilidade')
      .length,
  },
  Tempo: {
    icon: Clock,
    color: 'text-pink-400',
    count: strategicFaqs.filter((faq) => faq.category === 'Tempo').length,
  },
}

const categories = Object.keys(categoryConfig)

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('Todas')

  const filteredFaqs =
    activeCategory === 'Todas'
      ? strategicFaqs
      : strategicFaqs.filter((faq) => faq.category === activeCategory)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const getCategoryStyle = (category: string) => {
    const config = categoryConfig[category as keyof typeof categoryConfig]
    if (!config) {
      return {
        icon: HelpCircle,
        color: 'text-slate-400',
        count: 0,
      }
    }
    return {
      icon: config.icon,
      color: config.color,
      count: config.count,
    }
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-indigo-950/40 py-24 sm:py-32"
    >
      {/* Knowledge Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_65%,#6366f1_1px,transparent_1px),radial-gradient(circle_at_65%_35%,#8b5cf6_1px,transparent_1px)] bg-[length:90px_90px]" />
      </div>

      {/* Wisdom Ambient Light */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: 999999,
        }}
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5"
      />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-indigo-700/40 bg-indigo-950/30 px-6 py-3 backdrop-blur-sm">
            <HelpCircle className="h-5 w-5 text-indigo-400" />
            <span className="text-sm font-semibold tracking-wide text-indigo-300 uppercase">
              Perguntas Estratégicas
            </span>
          </div>

          <h2 className="mb-8 text-5xl leading-[0.9] font-black tracking-tight text-white lg:text-6xl">
            Dúvidas que Impedem
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Sua Decisão
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed font-light text-white/80">
            Respostas diretas e honestas para as{' '}
            <strong className="font-semibold text-indigo-400">
              objeções mais comuns
            </strong>
            de quem está considerando investir na{' '}
            <strong className="font-semibold text-purple-400">
              primeira turma
            </strong>
            .
          </p>
        </motion.div>

        {/* Strategic Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const style = getCategoryStyle(category)
              const IconComponent = style.icon
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group flex items-center gap-2 rounded-2xl px-4 py-3 font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'scale-105 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'border border-white/10 bg-black/60 text-white/70 hover:border-indigo-400/40 hover:bg-black/80 hover:text-white'
                  }`}
                >
                  <IconComponent
                    className={`h-4 w-4 ${activeCategory === category ? 'text-white' : style.color}`}
                  />
                  <span className="text-sm font-medium">
                    {category === 'Todas'
                      ? 'Todas'
                      : category === 'Investimento'
                        ? 'Preço & Pagamento'
                        : category === 'Exclusividade'
                          ? 'Vagas Limitadas'
                          : category === 'Garantias'
                            ? 'Segurança'
                            : category === 'Resultados'
                              ? 'Eficácia'
                              : category === 'Aplicacao'
                                ? 'Implementação'
                                : category === 'Qualificacao'
                                  ? 'Pré-requisitos'
                                  : category === 'Flexibilidade'
                                    ? 'Flexibilidade'
                                    : 'Tempo'}
                  </span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      activeCategory === category
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {style.count}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Strategic FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl space-y-6"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Urgency Glow for Critical Questions */}
              {faq.urgency && (
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-red-500/20 to-yellow-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
              )}

              {/* Main FAQ Card */}
              <div
                className={`relative overflow-hidden rounded-3xl border bg-black/80 backdrop-blur-2xl transition-all duration-500 ${
                  faq.urgency
                    ? 'border-red-500/30 hover:border-red-400/50'
                    : 'border-indigo-500/20 hover:border-indigo-400/40'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group/btn flex w-full items-start gap-6 px-8 py-6 text-left transition-colors hover:bg-white/5"
                >
                  {/* Question Icon */}
                  <div
                    className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border backdrop-blur-sm ${
                      faq.urgency
                        ? 'border-red-400/30 bg-red-500/10'
                        : 'border-indigo-400/30 bg-indigo-500/10'
                    }`}
                  >
                    <faq.icon
                      className={`h-6 w-6 ${
                        faq.urgency ? 'text-red-400' : 'text-indigo-400'
                      }`}
                    />
                  </div>

                  {/* Question Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="pr-4 text-xl font-bold text-white transition-colors group-hover/btn:text-indigo-300">
                        {faq.question}
                      </h3>
                      <div className="flex flex-shrink-0 items-center gap-2">
                        {faq.urgency && (
                          <div className="rounded-full border border-red-400/40 bg-red-500/20 px-2 py-1">
                            <span className="text-xs font-bold tracking-wide text-red-400 uppercase">
                              Urgente
                            </span>
                          </div>
                        )}
                        {activeIndex === index ? (
                          <ChevronUp className="h-5 w-5 flex-shrink-0 text-indigo-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 flex-shrink-0 text-white/60" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="px-8 pb-8"
                  >
                    <div
                      className={`ml-18 border-t pt-6 ${
                        faq.urgency
                          ? 'border-red-500/20'
                          : 'border-indigo-500/20'
                      }`}
                    >
                      <p className="text-lg leading-relaxed text-white/80">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expert Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl" />

            <div className="relative rounded-3xl border border-indigo-500/20 bg-black/60 p-8 backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-center gap-3">
                <MessageSquare className="h-6 w-6 text-indigo-400" />
                <h3 className="text-2xl font-bold text-white">
                  Ainda tem dúvidas específicas?
                </h3>
              </div>

              <p className="mb-6 text-white/70">
                Fale diretamente com nossa equipe especializada
              </p>

              <div className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-indigo-700 hover:to-purple-700">
                <Phone className="h-5 w-5" />
                <span>
                  WhatsApp Especializado: <strong>(11) 99999-9999</strong>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Floating Knowledge Elements */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { left: 8, top: 25, delay: 0, duration: 12 },
          { left: 92, top: 35, delay: 1.5, duration: 14 },
          { left: 15, top: 75, delay: 2, duration: 16 },
          { left: 85, top: 15, delay: 0.8, duration: 13 },
          { left: 25, top: 50, delay: 1.8, duration: 15 },
          { left: 75, top: 65, delay: 2.5, duration: 11 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: 999999,
              ease: 'easeInOut',
            }}
            className="absolute h-2 w-2 rounded-full bg-indigo-400/30 blur-sm"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
