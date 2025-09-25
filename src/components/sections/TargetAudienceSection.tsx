'use client'

import { motion } from 'framer-motion'
import { TreePine, Sprout, Leaf, Users, Award, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const targetProfiles = [
  {
    icon: TreePine,
    title: 'Produtores Sustentáveis',
    subtitle: 'Avicultura Responsável',
    description:
      'Proprietários rurais comprometidos com práticas sustentáveis que buscam maximizar a produtividade enquanto preservam o meio ambiente.',
    benefits: [
      'Redução de 75% na mortalidade',
      'ROI sustentável comprovado',
      'Certificação ambiental',
    ],
    highlight: 'Foco na sustentabilidade',
  },
  {
    icon: Sprout,
    title: 'Técnicos Especializados',
    subtitle: 'Expertise Avançada',
    description:
      'Profissionais técnicos e veterinários que lideram programas de sanidade em cooperativas e empresas do agronegócio.',
    benefits: [
      'Metodologia científica',
      'Protocolos validados',
      'Network especializado',
    ],
    highlight: 'Conhecimento técnico',
  },
  {
    icon: Leaf,
    title: 'Novos Empreendedores',
    subtitle: 'Inovação Rural',
    description:
      'Empreendedores e estudantes que desejam ingressar na avicultura com base científica e práticas inovadoras.',
    benefits: [
      'Mentoria especializada',
      'Suporte inicial completo',
      'Cases de sucesso',
    ],
    highlight: 'Futuro do agronegócio',
  },
]

const impactStats = [
  { number: '500+', label: 'Propriedades Atendidas', icon: Users },
  { number: '15 Anos', label: 'Experiência Comprovada', icon: Award },
  { number: '40%', label: 'Aumento Médio de Lucro', icon: TrendingUp },
]

export function TargetAudienceSection() {
  return (
    <section
      id="target-audience"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-emerald-950/40 py-24 sm:py-32"
    >
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#10b981_1px,transparent_1px),radial-gradient(circle_at_70%_30%,#f59e0b_1px,transparent_1px)] bg-[length:80px_80px]" />
      </div>

      {/* Subtle Ambient Light */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-emerald-500/5 via-transparent to-amber-500/5"
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
          <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-emerald-700/40 bg-emerald-950/30 px-6 py-3 backdrop-blur-sm">
            <Leaf className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-semibold tracking-wide text-emerald-300 uppercase">
              Perfil de Participantes
            </span>
          </div>

          <h2 className="mb-6 text-3xl leading-[0.9] font-black tracking-tight text-white sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
            Quem Transforma a
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400 bg-clip-text text-transparent">
              Avicultura
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed font-light text-white/80">
            Profissionais visionários que lideram a{' '}
            <strong className="font-semibold text-emerald-400">
              revolução sustentável
            </strong>{' '}
            no agronegócio, combinando{' '}
            <strong className="font-semibold text-amber-400">
              ciência veterinária
            </strong>{' '}
            com responsabilidade ambiental.
          </p>
        </motion.div>

        {/* Target Profiles */}
        <div className="mb-24 grid gap-8 lg:grid-cols-3">
          {targetProfiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-amber-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              {/* Main Card */}
              <div className="relative h-full rounded-3xl border border-emerald-500/20 bg-black/70 p-8 backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/40">
                {/* Icon & Badge */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm">
                    <profile.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1">
                    <span className="text-xs font-semibold text-amber-400">
                      {profile.highlight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {profile.title}
                    </h3>
                    <p className="text-sm font-semibold tracking-wide text-emerald-300 uppercase">
                      {profile.subtitle}
                    </p>
                  </div>

                  <p className="leading-relaxed text-white/70">
                    {profile.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 pt-4">
                    {profile.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-sm font-medium text-white/80">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-emerald-400/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-amber-500/10 blur-2xl" />

          <div className="relative rounded-3xl border border-emerald-500/20 bg-black/60 p-12 backdrop-blur-2xl">
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-white">
                Impacto Comprovado em Campo
              </h3>
              <p className="text-lg text-white/70">
                Resultados que transformam negócios e preservam o futuro
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="group text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="mb-2 text-4xl font-black text-emerald-400">
                    {stat.number}
                  </div>
                  <div className="font-medium text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Floating Organic Elements */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { left: 10, top: 20, delay: 0, duration: 10 },
          { left: 85, top: 30, delay: 1.5, duration: 12 },
          { left: 30, top: 70, delay: 2.5, duration: 14 },
          { left: 70, top: 15, delay: 0.8, duration: 11 },
          { left: 15, top: 85, delay: 1.2, duration: 13 },
          { left: 90, top: 60, delay: 2.8, duration: 9 },
          { left: 50, top: 40, delay: 1.8, duration: 12 },
          { left: 25, top: 50, delay: 0.5, duration: 15 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute h-3 w-3 rounded-full bg-emerald-400/10 blur-sm"
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
