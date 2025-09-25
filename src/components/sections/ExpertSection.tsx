'use client'

import { motion } from 'framer-motion'
import {
  Award,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle,
  GraduationCap,
  Stethoscope,
  Trophy,
  Target,
  Star,
  Shield,
  Zap,
  Crown,
  Heart,
  Globe
} from 'lucide-react'
import { Container } from '@/components/ui/Container'

const expertProfile = {
  name: 'Dr. Carlos Eduardo Silva',
  title: 'Médico Veterinário & Especialista em Sanidade Avícola',
  subtitle: 'Referência Nacional em Protocolos Sanitários',
  quote: 'Transformo conhecimento científico em resultados financeiros reais. Cada protocolo que ensino foi validado em granjas que faturam milhões, gerando economia comprovada de milhares de reais por lote.',
  years: '18',
  totalSaved: 'R$ 2,5M+',
  propertiesHelped: '300+',
  studentsFormed: '800+'
}

const expertise = [
  {
    icon: Stethoscope,
    title: '18 Anos de Experiência Clínica',
    subtitle: 'Especialista reconhecido nacionalmente',
    description: 'Formação em Medicina Veterinária (UFRGS) + Mestrado em Sanidade Avícola + Especialização em Avicultura Industrial. Membro ativo do Conselho Técnico Nacional de Avicultura.',
    metrics: ['300+ granjas assistidas', 'R$ 2,5M+ em perdas evitadas', '18 anos de expertise'],
    category: 'authority'
  },
  {
    icon: Trophy,
    title: 'Resultados Transformadores Comprovados',
    subtitle: 'Impacto financeiro mensurável',
    description: 'Redução média de 15% na mortalidade em granjas assistidas. Desenvolvimento do "Protocolo Silva" adotado por 80+ propriedades no Sul e Sudeste com ROI médio de 300%.',
    metrics: ['15% redução média mortalidade', '300% ROI médio', '80+ granjas com protocolo'],
    category: 'results'
  },
  {
    icon: GraduationCap,
    title: 'Mentor de uma Nova Geração',
    subtitle: 'Formador de especialistas de elite',
    description: 'Já capacitou 800+ profissionais em protocolos sanitários avançados. Professor convidado em 25+ universidades e palestrante em 50+ eventos técnicos nacionais e internacionais.',
    metrics: ['800+ profissionais formados', '25+ universidades parceiras', '50+ eventos técnicos'],
    category: 'teaching'
  },
  {
    icon: Globe,
    title: 'Reconhecimento Internacional',
    subtitle: 'Autoridade além das fronteiras',
    description: 'Consultor técnico para operações na América Latina. Autor de 15+ artigos científicos publicados. Desenvolvedor de protocolos adotados em 5 países.',
    metrics: ['5 países com protocolos', '15+ artigos científicos', 'Consultor internacional'],
    category: 'recognition'
  }
]

const impactMetrics = [
  {
    icon: Target,
    value: 'R$ 2,5M+',
    label: 'Perdas Evitadas',
    description: 'Economia comprovada em granjas assistidas'
  },
  {
    icon: Trophy,
    value: '300+',
    label: 'Granjas Transformadas',
    description: 'Propriedades com resultados mensuráveis'
  },
  {
    icon: Users,
    value: '800+',
    label: 'Profissionais Formados',
    description: 'Especialistas capacitados em protocolos avançados'
  },
  {
    icon: Crown,
    value: '15%',
    label: 'Redução Média',
    description: 'Mortalidade reduzida consistentemente'
  }
]

const testimonialHighlights = [
  '"Protocolo do Dr. Carlos reduziu nossa mortalidade de 8% para 3% em 6 meses"',
  '"ROI de 400% no primeiro ano aplicando as metodologias ensinadas"',
  '"Finalmente encontrei alguém que entende o dia a dia da granja"',
  '"Investimento que se pagou no primeiro lote. Resultados impressionantes"'
]

export function ExpertSection() {
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'authority':
        return {
          border: 'border-blue-500/30',
          bg: 'bg-blue-950/20',
          glow: 'from-blue-500/20 to-blue-600/20',
          text: 'text-blue-400'
        }
      case 'results':
        return {
          border: 'border-emerald-500/30',
          bg: 'bg-emerald-950/20',
          glow: 'from-emerald-500/20 to-emerald-600/20',
          text: 'text-emerald-400'
        }
      case 'teaching':
        return {
          border: 'border-purple-500/30',
          bg: 'bg-purple-950/20',
          glow: 'from-purple-500/20 to-purple-600/20',
          text: 'text-purple-400'
        }
      default:
        return {
          border: 'border-yellow-500/30',
          bg: 'bg-yellow-950/20',
          glow: 'from-yellow-500/20 to-yellow-600/20',
          text: 'text-yellow-400'
        }
    }
  }

  return (
    <section id="expert" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-blue-950/30 py-24 sm:py-32">
      {/* Authority Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#3b82f6_1px,transparent_1px),radial-gradient(circle_at_80%_20%,#fbbf24_1px,transparent_1px)] bg-[length:100px_100px]" />
      </div>

      {/* Prestige Ambient Light */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: 999999,
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-yellow-500/5"
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
          <div className="inline-flex items-center gap-3 bg-blue-950/30 border border-blue-700/40 backdrop-blur-sm rounded-xl px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold text-sm tracking-wide uppercase">
              Autoridade Nacional
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight mb-8">
            Quem vai Transformar
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 bg-clip-text text-transparent">
              Sua Operação
            </span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
            Não é teoria acadêmica. É <strong className="text-blue-400 font-semibold">experiência comprovada</strong> que
            transforma <strong className="text-yellow-400 font-semibold">conhecimento em lucro real</strong>.
          </p>
        </motion.div>

        {/* Expert Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-yellow-500/20 rounded-3xl blur-2xl" />

          <div className="relative bg-black/80 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-12">
            {/* Profile Header */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-yellow-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                  <div className="text-6xl font-black text-blue-400">
                    Dr.
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl font-black text-white mb-2">
                  {expertProfile.name}
                </h3>
                <p className="text-xl text-blue-300 font-semibold mb-2">
                  {expertProfile.title}
                </p>
                <p className="text-lg text-yellow-400 font-medium mb-6">
                  {expertProfile.subtitle}
                </p>

                <div className="bg-black/60 border border-blue-500/20 rounded-2xl p-6">
                  <p className="text-white/80 leading-relaxed text-lg italic">
                    "{expertProfile.quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: 999999,
                    ease: "easeInOut",
                  }}
                  className="text-center bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-black text-yellow-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white font-bold mb-1">
                    {metric.label}
                  </div>
                  <div className="text-white/60 text-sm">
                    {metric.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <div className="space-y-8 mb-20">
          {expertise.map((area, index) => {
            const styles = getCategoryStyle(area.category)
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Expertise Glow */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${styles.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />

                {/* Main Expertise Card */}
                <div className={`relative bg-black/80 backdrop-blur-2xl border ${styles.border} rounded-3xl p-8 hover:border-opacity-60 transition-all duration-500`}>
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-yellow-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                      <area.icon className={`w-10 h-10 ${styles.text}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {area.title}
                      </h3>
                      <p className={`text-lg font-semibold mb-4 ${styles.text}`}>
                        {area.subtitle}
                      </p>
                      <p className="text-white/80 leading-relaxed mb-6 text-lg">
                        {area.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid md:grid-cols-3 gap-3">
                        {area.metrics.map((metric, i) => (
                          <div key={i} className={`flex items-center gap-2 rounded-lg px-3 py-2 ${styles.bg}`}>
                            <Star className={`w-4 h-4 ${styles.text}`} />
                            <span className="text-white/80 text-sm font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonial Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse" />

          <div className="relative bg-gradient-to-r from-yellow-950/60 to-blue-950/60 backdrop-blur-2xl border border-yellow-500/30 rounded-3xl p-12 text-center">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: 999999,
                ease: "easeInOut",
              }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-yellow-500 to-blue-500 flex items-center justify-center"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-4xl font-black text-white mb-8">
              O que os <span className="text-yellow-400">Alunos</span> Dizem
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonialHighlights.map((testimonial, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6">
                  <p className="text-white/80 italic text-lg leading-relaxed">
                    {testimonial}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">
                Primeira turma limitada: máximo 100 alunos para acompanhamento VIP
              </span>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Floating Authority Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 10, top: 15, delay: 0, duration: 15 },
          { left: 90, top: 25, delay: 2, duration: 18 },
          { left: 20, top: 85, delay: 1, duration: 16 },
          { left: 80, top: 75, delay: 3, duration: 14 },
          { left: 30, top: 45, delay: 1.5, duration: 17 },
          { left: 70, top: 35, delay: 2.5, duration: 13 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: 999999,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
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