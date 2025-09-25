'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  PlayCircle,
  FileText,
  Users,
  Infinity,
  Gift,
  Package,
  Crown,
  Star,
  Zap,
  Award,
  Heart,
  Gem,
  Shield
} from 'lucide-react'
import { Container } from '@/components/ui/Container'

const premiumDeliverables = [
  {
    icon: PlayCircle,
    title: 'Curso Executivo Completo',
    subtitle: 'Módulos estruturados cientificamente',
    description: 'Vídeos curtos (5-12min) organizados por módulos para aplicação prática imediata. Metodologia comprovada em +500 propriedades.',
    value: 'R$ 897',
    category: 'premium',
    benefits: ['Metodologia validada', 'Aplicação imediata', 'Resultados garantidos']
  },
  {
    icon: Infinity,
    title: 'Acesso Vitalício Exclusivo',
    subtitle: 'Privilégio único da 1ª turma',
    description: 'Acesso permanente a todas as gravações, conteúdo e atualizações. Assista quantas vezes quiser, quando quiser. Benefício que nunca mais será oferecido.',
    value: 'R$ 1.200',
    category: 'exclusive',
    benefits: ['Sem prazo de validade', 'Todas as atualizações', 'Exclusivo fundadores']
  },
  {
    icon: Users,
    title: 'Comunidade Executiva de Elite',
    subtitle: 'Network de alto nível',
    description: 'Grupo exclusivo com produtores sérios e profissionais do agronegócio. Networking qualificado, troca de experiências e conexões valiosas.',
    value: 'R$ 600',
    category: 'premium',
    benefits: ['Network qualificado', 'Parcerias estratégicas', 'Oportunidades únicas']
  },
  {
    icon: Crown,
    title: 'Kit Profissional Completo',
    subtitle: 'Ferramentas prontas para usar',
    description: 'POPs profissionais, calendários editáveis, checklists validados e planilhas financeiras. Tudo pronto para implementar hoje na sua propriedade.',
    value: 'R$ 1.550',
    category: 'premium',
    benefits: ['Material profissional', 'Implementação imediata', 'Templates validados']
  },
  {
    icon: Star,
    title: 'Biblioteca de Cases & Replays',
    subtitle: 'Conhecimento organizado e acessível',
    description: 'Todas as lives + hotseats categorizados por tema. Base de conhecimento organizada com casos reais resolvidos e soluções comprovadas.',
    value: 'R$ 450',
    category: 'standard',
    benefits: ['Cases reais', 'Soluções validadas', 'Organização por tema']
  },
  {
    icon: Gem,
    title: 'Mentoria VIP Individual',
    subtitle: 'Bônus exclusivo primeiros 50',
    description: 'Call laser de 15 minutos focada no seu problema #1. Roteiro personalizado com soluções específicas para sua propriedade.',
    value: 'R$ 500',
    category: 'exclusive',
    benefits: ['Atenção exclusiva', 'Solução personalizada', 'Apenas 50 vagas']
  }
]

const totalValue = {
  original: 'R$ 5.197',
  current: 'R$ 397',
  savings: 'R$ 4.800',
  discount: '92%'
}

export function WhatYouGetSection() {
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'exclusive':
        return {
          border: 'border-gradient-to-r from-yellow-500/30 to-orange-500/30',
          bg: 'bg-gradient-to-r from-yellow-950/20 to-orange-950/20',
          glow: 'from-yellow-500/20 to-orange-500/20'
        }
      case 'premium':
        return {
          border: 'border-emerald-500/30',
          bg: 'bg-emerald-950/20',
          glow: 'from-emerald-500/20 to-emerald-600/20'
        }
      default:
        return {
          border: 'border-blue-500/20',
          bg: 'bg-blue-950/10',
          glow: 'from-blue-500/10 to-blue-600/10'
        }
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-emerald-950/30 py-24 sm:py-32">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#fbbf24_1px,transparent_1px),radial-gradient(circle_at_70%_60%,#10b981_1px,transparent_1px)] bg-[length:90px_90px]" />
      </div>

      {/* Premium Ambient Light */}
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: 999999,
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 via-transparent to-emerald-500/5"
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
            <Package className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 font-semibold text-sm tracking-wide uppercase">
              Investimento Completo
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight mb-8">
            O que Você
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-yellow-400 bg-clip-text text-transparent">
              Realmente Leva
            </span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light mb-8">
            Não é só um curso. É um <strong className="text-emerald-400 font-semibold">investimento completo</strong> na
            transformação da sua <strong className="text-yellow-400 font-semibold">operação</strong>.
          </p>

          {/* Value Showcase */}
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: 999999,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-r from-yellow-950/40 to-emerald-950/40 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-xl"
          >
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-black text-red-400 mb-1 line-through opacity-70">{totalValue.original}</div>
                <div className="text-white/60 text-sm font-medium">Valor Normal</div>
              </div>
              <div>
                <div className="text-4xl font-black text-emerald-400 mb-1">{totalValue.current}</div>
                <div className="text-white/60 text-sm font-medium">Preço 1ª Turma</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-400 mb-1">{totalValue.savings}</div>
                <div className="text-white/60 text-sm font-medium">Economia Total</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-400 mb-1">{totalValue.discount}</div>
                <div className="text-white/60 text-sm font-medium">Desconto</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Deliverables */}
        <div className="space-y-6 mb-20">
          {premiumDeliverables.map((deliverable, index) => {
            const styles = getCategoryStyle(deliverable.category)
            return (
              <motion.div
                key={deliverable.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Premium Glow */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${styles.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />

                {/* Main Deliverable Card */}
                <div className={`relative bg-black/80 backdrop-blur-2xl border ${styles.border} rounded-3xl p-4 sm:p-6 md:p-8 hover:border-opacity-60 transition-all duration-500`}>
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    {/* Icon & Value */}
                    <div className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center backdrop-blur-sm border border-emerald-400/30">
                        <deliverable.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-400" />
                      </div>
                      <div className={`text-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border ${
                        deliverable.category === 'exclusive' ? 'bg-yellow-500/10 border-yellow-400/30 text-yellow-400' :
                        deliverable.category === 'premium' ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-400' :
                        'bg-blue-500/10 border-blue-400/30 text-blue-400'
                      }`}>
                        <div className="text-sm sm:text-lg font-bold">{deliverable.value}</div>
                        <div className="text-xs opacity-80">valor</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                            {deliverable.title}
                          </h3>
                          <p className={`text-base sm:text-lg font-semibold ${
                            deliverable.category === 'exclusive' ? 'text-yellow-300' :
                            deliverable.category === 'premium' ? 'text-emerald-300' : 'text-blue-300'
                          }`}>
                            {deliverable.subtitle}
                          </p>
                        </div>
                        {deliverable.category === 'exclusive' && (
                          <div className="bg-yellow-500/20 border border-yellow-400/40 rounded-full px-3 py-1">
                            <span className="text-yellow-400 text-xs font-bold uppercase tracking-wide">
                              Exclusivo
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-white/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                        {deliverable.description}
                      </p>

                      {/* Benefits */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                        {deliverable.benefits.map((benefit, i) => (
                          <div key={i} className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                            deliverable.category === 'exclusive' ? 'bg-yellow-950/30' :
                            deliverable.category === 'premium' ? 'bg-emerald-950/30' : 'bg-blue-950/30'
                          }`}>
                            <CheckCircle className={`w-4 h-4 ${
                              deliverable.category === 'exclusive' ? 'text-yellow-400' :
                              deliverable.category === 'premium' ? 'text-emerald-400' : 'text-blue-400'
                            }`} />
                            <span className="text-white/80 text-sm font-medium">{benefit}</span>
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

        {/* Total Investment Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 rounded-3xl blur-2xl animate-pulse" />

          <div className="relative bg-gradient-to-r from-emerald-950/60 to-yellow-950/60 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl p-12 text-center">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: 999999,
                ease: "easeInOut",
              }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-500 to-yellow-500 flex items-center justify-center"
            >
              <Heart className="w-12 h-12 text-white" />
            </motion.div>

            <h3 className="text-4xl font-black text-white mb-6">
              Investimento <span className="text-emerald-400">Transformador</span>
            </h3>

            <div className="bg-black/60 border border-emerald-500/20 rounded-2xl p-8 mb-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-white/70 text-lg mb-4">
                    Mais de <strong className="text-emerald-400">R$ 5.000 em valor</strong> por apenas:
                  </p>
                  <div className="text-6xl font-black text-emerald-400">
                    R$ 397
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    Única vez • Acesso vitalicío • 1ª turma
                  </p>
                </div>
                <div className="text-left">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-emerald-400" />
                      <span className="text-white/80">Garantia de 7 dias</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-emerald-400" />
                      <span className="text-white/80">Acesso vitalicío exclusivo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-emerald-400" />
                      <span className="text-white/80">Status de fundador</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl text-white/80">
              Não é gasto, é <strong className="text-yellow-400">investimento</strong> que se paga no primeiro lote.
            </p>
          </div>
        </motion.div>
      </Container>

      {/* Floating Value Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 5, top: 25, delay: 0, duration: 14 },
          { left: 95, top: 35, delay: 1.2, duration: 16 },
          { left: 15, top: 85, delay: 2.4, duration: 12 },
          { left: 85, top: 15, delay: 0.6, duration: 15 },
          { left: 25, top: 65, delay: 1.8, duration: 13 },
          { left: 75, top: 75, delay: 3, duration: 17 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: 999999,
              ease: "easeInOut",
            }}
            className="absolute w-3 h-3 bg-emerald-400/20 rounded-full blur-sm"
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
