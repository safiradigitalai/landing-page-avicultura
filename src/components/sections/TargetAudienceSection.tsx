'use client'

import { motion } from 'framer-motion'
import { TreePine, Sprout, Leaf, Users, Award, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const targetProfiles = [
  {
    icon: TreePine,
    title: 'Produtores Sustentáveis',
    subtitle: 'Avicultura Responsável',
    description: 'Proprietários rurais comprometidos com práticas sustentáveis que buscam maximizar a produtividade enquanto preservam o meio ambiente.',
    benefits: ['Redução de 75% na mortalidade', 'ROI sustentável comprovado', 'Certificação ambiental'],
    highlight: 'Foco na sustentabilidade'
  },
  {
    icon: Sprout,
    title: 'Técnicos Especializados',
    subtitle: 'Expertise Avançada',
    description: 'Profissionais técnicos e veterinários que lideram programas de sanidade em cooperativas e empresas do agronegócio.',
    benefits: ['Metodologia científica', 'Protocolos validados', 'Network especializado'],
    highlight: 'Conhecimento técnico'
  },
  {
    icon: Leaf,
    title: 'Novos Empreendedores',
    subtitle: 'Inovação Rural',
    description: 'Empreendedores e estudantes que desejam ingressar na avicultura com base científica e práticas inovadoras.',
    benefits: ['Mentoria especializada', 'Suporte inicial completo', 'Cases de sucesso'],
    highlight: 'Futuro do agronegócio'
  },
]

const impactStats = [
  { number: '500+', label: 'Propriedades Atendidas', icon: Users },
  { number: '15 Anos', label: 'Experiência Comprovada', icon: Award },
  { number: '40%', label: 'Aumento Médio de Lucro', icon: TrendingUp },
]

export function TargetAudienceSection() {
  return (
    <section id="target-audience" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-emerald-950/40 py-24 sm:py-32">
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
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-amber-500/5"
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
          <div className="inline-flex items-center gap-3 bg-emerald-950/30 border border-emerald-700/40 backdrop-blur-sm rounded-xl px-6 py-3 mb-8">
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 font-semibold text-sm tracking-wide uppercase">
              Perfil de Participantes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight mb-6 sm:mb-8">
            Quem Transforma a
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400 bg-clip-text text-transparent">
              Avicultura
            </span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
            Profissionais visionários que lideram a <strong className="text-emerald-400 font-semibold">revolução sustentável</strong> no
            agronegócio, combinando <strong className="text-amber-400 font-semibold">ciência veterinária</strong> com responsabilidade ambiental.
          </p>
        </motion.div>

        {/* Target Profiles */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Main Card */}
              <div className="relative bg-black/70 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 h-full hover:border-emerald-400/40 transition-all duration-500">

                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center backdrop-blur-sm border border-emerald-400/30">
                    <profile.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="bg-amber-500/10 border border-amber-400/20 rounded-full px-3 py-1">
                    <span className="text-amber-400 text-xs font-semibold">
                      {profile.highlight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {profile.title}
                    </h3>
                    <p className="text-emerald-300 text-sm font-semibold uppercase tracking-wide">
                      {profile.subtitle}
                    </p>
                  </div>

                  <p className="text-white/70 leading-relaxed">
                    {profile.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 pt-4">
                    {profile.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-white/80 text-sm font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-emerald-400/30 transition-all duration-500" />
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
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 rounded-3xl blur-2xl" />

          <div className="relative bg-black/60 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Impacto Comprovado em Campo
              </h3>
              <p className="text-white/70 text-lg">
                Resultados que transformam negócios e preservam o futuro
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
                    ease: "easeInOut",
                  }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="text-4xl font-black text-emerald-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Floating Organic Elements */}
      <div className="absolute inset-0 pointer-events-none">
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
              ease: "easeInOut",
            }}
            className="absolute w-3 h-3 bg-emerald-400/10 rounded-full blur-sm"
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
