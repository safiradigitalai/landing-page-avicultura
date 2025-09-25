'use client'

import { motion } from 'framer-motion'
import {
  Video,
  MessageSquare,
  Phone,
  Calendar,
  Star,
  Users,
  PlayCircle,
  Zap,
  Crown,
  CheckCircle,
  Clock
} from 'lucide-react'
import { Container } from '@/components/ui/Container'

const methodologySteps = [
  {
    step: '01',
    icon: PlayCircle,
    title: 'Lives Científicas Mensais',
    subtitle: '4 encontros estratégicos de 2h cada',
    description: 'Metodologia estruturada: Explicação teórica → Demonstração prática → Q&A direcionado com foco em resultados mensuráveis.',
    benefits: ['Conteúdo estruturado', 'Casos práticos reais', 'Interação direta'],
    highlight: 'Metodologia Científica Validada',
    duration: '8h de conteúdo intensivo'
  },
  {
    step: '02',
    icon: Zap,
    title: 'Hotseats de Resolução Rápida',
    subtitle: 'Sessões mensais contínuas',
    description: 'Encontros focados em resolver problemas reais dos participantes. Replays organizados por tema para consulta permanente.',
    benefits: ['Problemas reais resolvidos', 'Network qualificado', 'Base de conhecimento'],
    highlight: 'Soluções Personalizadas',
    duration: 'Acesso vitalicío (1ª turma)'
  },
  {
    step: '03',
    icon: Users,
    title: 'Comunidade Executiva',
    subtitle: 'Network de alto nível',
    description: 'Grupo exclusivo com profissionais sérios do agronegócio. Expert ativo diariamente para tirar dúvidas e orientar decisões.',
    benefits: ['Network qualificado', 'Suporte contínuo', 'Troca de experiências'],
    highlight: 'Exclusivo 1ª Turma',
    duration: 'Comunidade ativa 24/7'
  },
  {
    step: '04',
    icon: Crown,
    title: 'Mentoria Individual VIP',
    subtitle: 'Primeiros 50 participantes',
    description: 'Call laser de 15 minutos focada no seu problema #1. Roteiro personalizado com soluções específicas para sua propriedade.',
    benefits: ['Atenção exclusiva', 'Soluções personalizadas', 'Roteiro focado'],
    highlight: 'Exclusivo Fundadores',
    duration: '15 min de ouro'
  },
]

const exclusiveBenefits = [
  {
    icon: Crown,
    title: '20 Primeiros',
    subtitle: 'Status Platinum',
    description: 'Prioridade absoluta na fila dos hotseats mensais + badge especial na comunidade',
    value: 'Valor inestimável'
  },
  {
    icon: Phone,
    title: '50 Primeiros',
    subtitle: 'Mentoria VIP',
    description: 'Call individual exclusiva de 15min focada no seu problema mais crítico',
    value: 'R$ 500 de valor'
  },
  {
    icon: CheckCircle,
    title: '100 Primeiros',
    subtitle: 'Fundadores',
    description: 'Acesso vitalício garantido + preço especial + todos os bônus futuros',
    value: 'Benefício vitalício'
  }
]


export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-purple-950/40 py-24 sm:py-32">
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
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"
      />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-purple-950/30 border border-purple-700/40 backdrop-blur-sm rounded-xl px-6 py-3 mb-8">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold text-sm tracking-wide uppercase">
              Metodologia Comprovada
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight mb-8">
            Sistema que
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Funciona na Prática
            </span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
            Não é curso gravado. É uma <strong className="text-purple-400 font-semibold">mentoria executiva</strong> com
            acompanhamento real e <strong className="text-cyan-400 font-semibold">comunidade de elite</strong>.
          </p>
        </motion.div>

        {/* Methodology Steps */}
        <div className="space-y-8 mb-24">
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
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Main Step Card */}
              <div className="relative bg-black/80 backdrop-blur-2xl border border-purple-500/20 rounded-3xl p-4 sm:p-6 md:p-8 hover:border-purple-400/40 transition-all duration-500">
                {/* Step Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
                  {/* Step Number & Icon - Mobile Stack, Desktop Inline */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-3xl sm:text-4xl md:text-6xl font-black text-purple-400/30">
                      {step.step}
                    </div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-purple-300 text-base sm:text-lg font-semibold">
                          {step.subtitle}
                        </p>
                      </div>
                      <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-center self-start">
                        <div className="text-cyan-400 text-xs sm:text-sm font-bold whitespace-nowrap">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                      {step.description}
                    </p>

                    {/* Benefits */}
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      {step.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 bg-purple-950/30 rounded-lg px-3 py-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span className="text-white/80 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlight Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-950/60 to-cyan-950/60 border border-purple-500/30 rounded-xl px-4 py-2">
                      <Star className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-300 text-sm font-semibold">
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
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl animate-pulse" />

          <div className="relative bg-gradient-to-r from-yellow-950/60 to-orange-950/60 backdrop-blur-2xl border border-yellow-500/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center"
              >
                <Crown className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-4xl font-bold text-white mb-4">
                Bônus Exclusivos dos <span className="text-yellow-400">Fundadores</span>
              </h3>
              <p className="text-white/70 text-lg">
                Quanto mais cedo você entra, maiores são os privilégios
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {exclusiveBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-center bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h4 className="text-yellow-400 font-bold text-lg mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-orange-300 text-sm font-semibold mb-3">
                    {benefit.subtitle}
                  </p>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-yellow-400 text-xs font-bold bg-yellow-500/10 rounded-full px-3 py-1">
                    {benefit.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Floating Process Elements */}
      <div className="absolute inset-0 pointer-events-none">
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
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full blur-sm"
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
