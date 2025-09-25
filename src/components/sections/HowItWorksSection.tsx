'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  Star,
  Users,
  PlayCircle,
  Zap,
  Crown,
  CheckCircle,
  Clock,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'

const methodologySteps = [
  {
    step: '01',
    icon: PlayCircle,
    title: 'Lives Científicas Mensais',
    subtitle: '4 encontros estratégicos de 2h cada',
    description:
      'Metodologia estruturada: Explicação teórica → Demonstração prática → Q&A direcionado com foco em resultados mensuráveis.',
    benefits: [
      'Conteúdo estruturado',
      'Casos práticos reais',
      'Interação direta',
    ],
    highlight: 'Metodologia Científica Validada',
    duration: '8h de conteúdo intensivo',
  },
  {
    step: '02',
    icon: Zap,
    title: 'Hotseats de Resolução Rápida',
    subtitle: 'Sessões mensais contínuas',
    description:
      'Encontros focados em resolver problemas reais dos participantes. Replays organizados por tema para consulta permanente.',
    benefits: [
      'Problemas reais resolvidos',
      'Network qualificado',
      'Base de conhecimento',
    ],
    highlight: 'Soluções Personalizadas',
    duration: 'Acesso vitalicío (1ª turma)',
  },
  {
    step: '03',
    icon: Users,
    title: 'Comunidade Executiva',
    subtitle: 'Network de alto nível',
    description:
      'Grupo exclusivo com profissionais sérios do agronegócio. Expert ativo diariamente para tirar dúvidas e orientar decisões.',
    benefits: [
      'Network qualificado',
      'Suporte contínuo',
      'Troca de experiências',
    ],
    highlight: 'Exclusivo 1ª Turma',
    duration: 'Comunidade ativa 24/7',
  },
  {
    step: '04',
    icon: Crown,
    title: 'Mentoria Individual VIP',
    subtitle: 'Primeiros 50 participantes',
    description:
      'Call laser de 15 minutos focada no seu problema #1. Roteiro personalizado com soluções específicas para sua propriedade.',
    benefits: [
      'Atenção exclusiva',
      'Soluções personalizadas',
      'Roteiro focado',
    ],
    highlight: 'Exclusivo Fundadores',
    duration: '15 min de ouro',
  },
]

const exclusiveBenefits = [
  {
    icon: Crown,
    title: '20 Primeiros',
    subtitle: 'Status Platinum',
    description:
      'Prioridade absoluta na fila dos hotseats mensais + badge especial na comunidade',
    value: 'Valor inestimável',
  },
  {
    icon: Phone,
    title: '50 Primeiros',
    subtitle: 'Mentoria VIP',
    description:
      'Call individual exclusiva de 15min focada no seu problema mais crítico',
    value: 'R$ 500 de valor',
  },
  {
    icon: CheckCircle,
    title: '100 Primeiros',
    subtitle: 'Fundadores',
    description:
      'Acesso vitalício garantido + preço especial + todos os bônus futuros',
    value: 'Benefício vitalício',
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-purple-950/40 py-24 sm:py-32"
    >
      {/* Process Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,#8b5cf6_1px,transparent_1px),radial-gradient(circle_at_60%_40%,#06b6d4_1px,transparent_1px)] bg-[length:70px_70px]" />
      </div>

      {/* Dynamic Process Light */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: 999999,
        }}
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"
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
          <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-purple-700/40 bg-purple-950/30 px-6 py-3 backdrop-blur-sm">
            <Clock className="h-5 w-5 text-purple-400" />
            <span className="text-sm font-semibold tracking-wide text-purple-300 uppercase">
              Metodologia Comprovada
            </span>
          </div>

          <h2 className="mb-8 text-5xl leading-[0.9] font-black tracking-tight text-white lg:text-6xl">
            Sistema que
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Funciona na Prática
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed font-light text-white/80">
            Não é curso gravado. É uma{' '}
            <strong className="font-semibold text-purple-400">
              mentoria executiva
            </strong>{' '}
            com acompanhamento real e{' '}
            <strong className="font-semibold text-cyan-400">
              comunidade de elite
            </strong>
            .
          </p>
        </motion.div>

        {/* Methodology Steps */}
        <div className="mb-24 space-y-8">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Step Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              {/* Main Step Card */}
              <div className="relative rounded-3xl border border-purple-500/20 bg-black/80 p-4 backdrop-blur-2xl transition-all duration-500 hover:border-purple-400/40 sm:p-6 md:p-8">
                {/* Step Header */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  {/* Step Number & Icon - Mobile Stack, Desktop Inline */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-3xl font-black text-purple-400/30 sm:text-4xl md:text-6xl">
                      {step.step}
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm sm:h-16 sm:w-16 md:h-20 md:w-20">
                      <step.icon className="h-6 w-6 text-purple-400 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start sm:gap-4">
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-bold text-white sm:text-xl md:text-2xl">
                          {step.title}
                        </h3>
                        <p className="text-base font-semibold text-purple-300 sm:text-lg">
                          {step.subtitle}
                        </p>
                      </div>
                      <div className="self-start rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-center sm:px-4 sm:py-2">
                        <div className="text-xs font-bold whitespace-nowrap text-cyan-400 sm:text-sm">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-white/80 sm:mb-6 sm:text-base md:text-lg">
                      {step.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-4 grid gap-4 md:grid-cols-3">
                      {step.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-lg bg-purple-950/30 px-3 py-2"
                        >
                          <CheckCircle className="h-4 w-4 text-cyan-400" />
                          <span className="text-sm font-medium text-white/80">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Highlight Badge */}
                    <div className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-950/60 to-cyan-950/60 px-4 py-2">
                      <Star className="h-4 w-4 text-purple-400" />
                      <span className="text-sm font-semibold text-purple-300">
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exclusive Benefits for Founders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 animate-pulse rounded-3xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-2xl" />

          <div className="relative rounded-3xl border border-yellow-500/30 bg-gradient-to-r from-yellow-950/60 to-orange-950/60 p-12 backdrop-blur-2xl">
            <div className="mb-12 text-center">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: 999999,
                  ease: 'easeInOut',
                }}
                className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-500"
              >
                <Crown className="h-10 w-10 text-white" />
              </motion.div>

              <h3 className="mb-4 text-4xl font-bold text-white">
                Bônus Exclusivos dos{' '}
                <span className="text-yellow-400">Fundadores</span>
              </h3>
              <p className="text-lg text-white/70">
                Quanto mais cedo você entra, maiores são os privilégios
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {exclusiveBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.8,
                    repeat: 999999,
                    ease: 'easeInOut',
                  }}
                  className="rounded-2xl border border-yellow-500/20 bg-black/40 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                    <benefit.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h4 className="mb-1 text-lg font-bold text-yellow-400">
                    {benefit.title}
                  </h4>
                  <p className="mb-3 text-sm font-semibold text-orange-300">
                    {benefit.subtitle}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-white/70">
                    {benefit.description}
                  </p>
                  <div className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-bold text-yellow-400">
                    {benefit.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Floating Process Elements */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { left: 8, top: 20, delay: 0, duration: 12 },
          { left: 92, top: 30, delay: 2, duration: 14 },
          { left: 20, top: 80, delay: 1, duration: 16 },
          { left: 80, top: 10, delay: 3, duration: 13 },
          { left: 15, top: 90, delay: 1.5, duration: 15 },
          { left: 85, top: 70, delay: 2.5, duration: 11 },
          { left: 50, top: 45, delay: 0.8, duration: 17 },
          { left: 35, top: 25, delay: 1.8, duration: 12 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: 999999,
              ease: 'easeInOut',
            }}
            className="absolute h-2 w-2 rounded-full bg-purple-400/30 blur-sm"
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
