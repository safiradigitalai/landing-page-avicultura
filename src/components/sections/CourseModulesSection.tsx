'use client'

import { motion } from 'framer-motion'
import {
  Stethoscope,
  Shield,
  Calendar,
  BarChart3,
  Target,
  FileText,
  Printer,
  TableProperties,
  BookOpen,
  Award,
  CheckCircle
} from 'lucide-react'
import { Container } from '@/components/ui/Container'

const courseModules = [
  {
    number: 'M1',
    title: 'Fundamentos de Sanidade & Leitura de Sinais',
    subtitle: 'Base científica para decisões assertivas',
    description: 'Doenças comuns (respiratórias, entéricas, parasitárias) e o fluxo estratégico "ver → suspeitar → agir" que separa amadores de profissionais.',
    keyTopics: ['Diagnóstico visual avançado', 'Sinais precoces de problemas', 'Protocolos de ação imediata'],
    impact: 'Redução de 30-50% no tempo de resposta',
    icon: Stethoscope,
    duration: '2 horas intensivas'
  },
  {
    number: 'M2',
    title: 'Biossegurança que Funciona na Prática',
    subtitle: 'Protocolos que realmente protegem',
    description: 'Água/ração, cama e ventilação, quarentena e limpeza de equipamentos com POPs validados em campo que você pode implementar hoje.',
    keyTopics: ['POPs personalizáveis', 'Controle de qualidade da água', 'Gestão eficiente de visitas'],
    impact: 'Até 70% menos surtos sanitários',
    icon: Shield,
    duration: '2,5 horas + material prático'
  },
  {
    number: 'M3',
    title: 'Calendário Sanitário Estratégico',
    subtitle: 'Timing perfeito = resultados máximos',
    description: 'Protocolos por fase, erros comuns que custam caro e ajustes precisos por clima/lotação. Calendário editável que se adapta à sua realidade.',
    keyTopics: ['Cronogramas otimizados', 'Adaptação climática', 'Controle de custos'],
    impact: 'Economia de 25-40% em medicamentos',
    icon: Calendar,
    duration: '2 horas + planilhas'
  },
  {
    number: 'M4',
    title: 'Auditoria que Transforma Sanidade em R$',
    subtitle: 'KPIs que mostram o verdadeiro impacto',
    description: 'Indicadores precisos, como reduzir mortalidade de forma sustentável e traduzir cada ação sanitária em lucro mensurável.',
    keyTopics: ['Métricas financeiras', 'ROI de protocolos', 'Análise preditiva'],
    impact: 'Aumento médio de 15-25% na margem',
    icon: BarChart3,
    duration: '2,5 horas + ferramentas'
  },
  {
    number: 'M5',
    title: 'Cases Reais & Correção de Rota',
    subtitle: 'Aprendizado com situações reais',
    description: 'Estudos de caso reais, checklists de inspeção e processo de melhoria contínua que mantém sua operação sempre evoluindo.',
    keyTopics: ['Análise de casos críticos', 'Checklists validados', 'Melhoria contínua'],
    impact: 'Sistema de gestão permanente',
    icon: Target,
    duration: '2 horas + templates'
  },
]

const professionalDeliverables = [
  {
    icon: Printer,
    title: 'POPs Profissionais Prontos',
    description: 'Procedimentos padronizados validados para água, cama, visitas e limpeza',
    value: 'R$ 500 de valor'
  },
  {
    icon: Calendar,
    title: 'Sistema de Calendário Editável',
    description: 'Planilhas e PDFs personalizáveis com cronogramas otimizados',
    value: 'R$ 300 de valor'
  },
  {
    icon: FileText,
    title: 'Kit Completo de Checklists',
    description: 'Listas de verificação profissionais para auditoria e inspeção',
    value: 'R$ 400 de valor'
  },
  {
    icon: TableProperties,
    title: 'Calculadora Financeira Avançada',
    description: 'Ferramenta de impacto: perdas evitáveis → ROI mensal',
    value: 'R$ 350 de valor'
  },
]


export function CourseModulesSection() {
  return (
    <section id="course-modules" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-blue-950/40 py-24 sm:py-32">
      {/* Scientific Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,#3b82f6_1px,transparent_1px),radial-gradient(circle_at_75%_25%,#10b981_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>

      {/* Ambient Knowledge Light */}
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5"
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
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold text-sm tracking-wide uppercase">
              Metodologia Científica
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight mb-6 sm:mb-8">
            Conhecimento que
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent">
              Transforma Resultados
            </span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
            5 módulos estruturados com <strong className="text-blue-400 font-semibold">metodologia científica</strong> para
            implementar manejo sanitário de <strong className="text-emerald-400 font-semibold">nível mundial</strong>.
          </p>
        </motion.div>

        {/* Course Modules */}
        <div className="space-y-8 mb-24">
          {courseModules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Module Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Main Module Card */}
              <div className="relative bg-black/80 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-4 sm:p-6 md:p-8 hover:border-blue-400/40 transition-all duration-500">
                {/* Module Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
                  {/* Module Icon & Number - Mobile Stack, Desktop Inline */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                      <module.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-6xl font-black text-blue-400/30">
                      {module.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                          {module.title}
                        </h3>
                        <p className="text-blue-300 text-base sm:text-lg font-semibold">
                          {module.subtitle}
                        </p>
                      </div>
                      <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-center self-start">
                        <div className="text-emerald-400 text-xs sm:text-sm font-bold whitespace-nowrap">
                          {module.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                      {module.description}
                    </p>

                    {/* Key Topics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4">
                      {module.keyTopics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2 bg-blue-950/30 rounded-lg px-3 py-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="text-white/80 text-sm font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>

                    {/* Impact Badge */}
                    <div className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 rounded-xl px-4 py-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300 text-sm font-semibold">
                        {module.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-3xl blur-2xl" />

          <div className="relative bg-black/60 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Kit Profissional Completo
              </h3>
              <p className="text-white/70 text-lg mb-6">
                Ferramentas prontas para implementar hoje na sua propriedade
              </p>
              <div className="text-2xl font-bold text-emerald-400">
                Valor total: R$ 1.550 em ferramentas
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {professionalDeliverables.map((deliverable, index) => (
                <motion.div
                  key={deliverable.title}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    delay: index * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-center group bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <deliverable.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">
                    {deliverable.title}
                  </h4>
                  <p className="text-white/70 text-sm mb-3 leading-relaxed">
                    {deliverable.description}
                  </p>
                  <div className="text-emerald-400 text-sm font-semibold">
                    {deliverable.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Floating Knowledge Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 12, top: 18, delay: 0, duration: 11 },
          { left: 88, top: 25, delay: 1.8, duration: 13 },
          { left: 25, top: 75, delay: 2.2, duration: 15 },
          { left: 75, top: 12, delay: 0.6, duration: 12 },
          { left: 18, top: 88, delay: 1.4, duration: 14 },
          { left: 92, top: 65, delay: 2.9, duration: 10 },
          { left: 45, top: 35, delay: 1.1, duration: 13 },
          { left: 32, top: 55, delay: 0.3, duration: 16 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full blur-sm"
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
