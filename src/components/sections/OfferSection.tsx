'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  Clock,
  Users,
  Phone,
  Zap,
  TrendingUp,
  Gift,
  AlertTriangle,
  Crown,
  Star,
  Shield,
  Timer,
  Target,
  Flame,
  Lock,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const urgencyFactors = {
  totalSpots: 100,
  spotsTaken: 73, // Simulação dinâmica
  deadline: '15 de Janeiro, 2025',
  timeLeft: {
    days: 8,
    hours: 14,
    minutes: 32
  }
}

const exclusiveBenefits = [
  {
    icon: Crown,
    title: 'Preço de Fundador Irrepetível',
    subtitle: 'R$ 397 (de R$ 897) - Economia de R$ 500',
    value: 'R$ 500 OFF',
    urgency: 'NUNCA MAIS será oferecido esse preço',
    category: 'price',
    highlight: true
  },
  {
    icon: Users,
    title: 'Primeiros 20: Status Platinum',
    subtitle: 'Prioridade absoluta nos hotseats + badge especial',
    value: 'VIP Access',
    urgency: 'Apenas 7 vagas restantes',
    category: 'vip',
    highlight: true
  },
  {
    icon: Phone,
    title: 'Primeiros 50: Mentoria Individual',
    subtitle: 'Call exclusiva de 15min focada no seu problema crítico',
    value: 'R$ 500',
    urgency: 'Restam 27 vagas',
    category: 'mentoring',
    highlight: false
  },
  {
    icon: Gift,
    title: 'Acesso Vitalício Garantido',
    subtitle: 'Privilégio exclusivo que NUNCA mais será oferecido',
    value: 'Sem prazo',
    urgency: 'Apenas 1ª turma',
    category: 'lifetime',
    highlight: true
  }
]

const socialProof = [
  'Carlos M. - Granja 15.000 aves: "Economia de R$ 8.000 no primeiro lote"',
  'Maria S. - Cooperativa: "Mortalidade caiu de 7% para 2,5% em 3 meses"',
  'João P. - Avicultor: "ROI de 400% aplicando os protocolos"',
  'Ana L. - Técnica: "Finalmente um curso que funciona na prática"'
]

const riskReversals = [
  {
    icon: Shield,
    title: 'Garantia Total de 7 Dias',
    description: 'Se após a primeira live você não estiver 100% satisfeito, devolvemos todo o investimento. Sem perguntas, sem burocracia.'
  },
  {
    icon: Target,
    title: 'Compromisso de Resultados',
    description: 'Se você aplicar os protocolos e não ver melhoria em 60 dias, oferecemos consultoria individual gratuita até resolver.'
  },
  {
    icon: Crown,
    title: 'Acesso Vitalício Garantido',
    description: 'Mesmo se o preço subir para R$ 1.500+ nas próximas turmas, você nunca perderá seu acesso. É seu para sempre.'
  }
]

export function OfferSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', consent: false })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(urgencyFactors.timeLeft)
  const [spotsLeft, setSpotsLeft] = useState(urgencyFactors.totalSpots - urgencyFactors.spotsTaken)

  // Simulação de countdown real
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000) // Atualiza a cada minuto

    return () => clearInterval(timer)
  }, [])

  // Simulação de vagas sendo preenchidas
  useEffect(() => {
    const spotsTimer = setInterval(() => {
      if (Math.random() < 0.1) { // 10% de chance a cada intervalo
        setSpotsLeft(prev => Math.max(15, prev - 1)) // Não deixa cair abaixo de 15
      }
    }, 120000) // A cada 2 minutos

    return () => clearInterval(spotsTimer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.consent) return

    setIsSubmitting(true)
    // TODO: Implementar integração com backend
    setTimeout(() => {
      setIsSubmitting(false)
      // TODO: Redirecionar para página de sucesso
      window.location.href = '/success'
    }, 2000)
  }

  const getBenefitStyle = (category: string) => {
    switch (category) {
      case 'price':
        return {
          bg: 'bg-gradient-to-r from-red-950/40 to-red-900/40',
          border: 'border-red-500/40',
          glow: 'from-red-500/30 to-red-600/30',
          text: 'text-red-400'
        }
      case 'vip':
        return {
          bg: 'bg-gradient-to-r from-yellow-950/40 to-yellow-900/40',
          border: 'border-yellow-500/40',
          glow: 'from-yellow-500/30 to-yellow-600/30',
          text: 'text-yellow-400'
        }
      case 'lifetime':
        return {
          bg: 'bg-gradient-to-r from-purple-950/40 to-purple-900/40',
          border: 'border-purple-500/40',
          glow: 'from-purple-500/30 to-purple-600/30',
          text: 'text-purple-400'
        }
      default:
        return {
          bg: 'bg-gradient-to-r from-emerald-950/40 to-emerald-900/40',
          border: 'border-emerald-500/40',
          glow: 'from-emerald-500/30 to-emerald-600/30',
          text: 'text-emerald-400'
        }
    }
  }

  return (
    <section id="offer" className="relative overflow-hidden bg-gradient-to-br from-red-950/30 via-black to-yellow-950/20 py-24 sm:py-32">
      {/* Urgency Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#dc2626_1px,transparent_1px),radial-gradient(circle_at_70%_30%,#fbbf24_1px,transparent_1px)] bg-[length:80px_80px]" />
      </div>

      {/* Pulsing Urgency Light */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: 999999,
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 via-transparent to-yellow-500/10"
      />

      <Container className="relative">
        {/* Urgent Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Urgency Alert */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: 999999,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-3 bg-red-950/50 border border-red-600/50 backdrop-blur-sm rounded-xl px-6 py-4 mb-8"
          >
            <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
            <span className="text-red-300 font-bold text-base tracking-wide uppercase">
              Últimas {spotsLeft} Vagas - Oferta Expira em {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-8">
            Última Chance para
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 bg-clip-text text-transparent">
              Preço de Fundador
            </span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light mb-8">
            Após as 100 vagas, o preço volta para <strong className="text-red-400 font-semibold">R$ 1.497</strong>.
            Esta é sua única oportunidade de entrar com <strong className="text-yellow-400 font-semibold">condições especiais</strong>.
          </p>

          {/* Live Counter */}
          <div className="bg-gradient-to-r from-red-950/60 to-yellow-950/60 border border-red-500/30 rounded-2xl p-8 backdrop-blur-xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-black text-red-400 mb-2">{spotsLeft}</div>
                <div className="text-white/70 text-sm font-medium">Vagas Restantes</div>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">{timeLeft.days}</div>
                <div className="text-white/70 text-sm font-medium">Dias</div>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">{timeLeft.hours}</div>
                <div className="text-white/70 text-sm font-medium">Horas</div>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">{timeLeft.minutes}</div>
                <div className="text-white/70 text-sm font-medium">Minutos</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-3xl blur-2xl animate-pulse" />

          <div className="relative bg-black/90 backdrop-blur-2xl border border-red-500/30 rounded-3xl p-8 lg:p-12">

            {/* Price Shock */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <div className="text-6xl lg:text-8xl font-black text-red-400 mb-2">
                  R$ 397
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-white/50 line-through">R$ 1.497</span>
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                    73% OFF
                  </div>
                </div>
                <p className="text-yellow-400 font-bold text-xl mt-4">
                  Economia de R$ 1.100 - NUNCA mais será oferecido
                </p>
              </div>
            </div>

            {/* Exclusive Benefits */}
            <div className="space-y-4 mb-12">
              {exclusiveBenefits.map((benefit, index) => {
                const styles = getBenefitStyle(benefit.category)
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative`}
                  >
                    {benefit.highlight && (
                      <div className={`absolute -inset-1 bg-gradient-to-r ${styles.glow} rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300`} />
                    )}

                    <div className={`relative ${styles.bg} border ${styles.border} rounded-2xl p-6 transition-all duration-300`}>
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-yellow-500/20 flex items-center justify-center">
                          <benefit.icon className={`w-8 h-8 ${styles.text}`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">
                              {benefit.title}
                            </h3>
                            <div className={`px-3 py-1 rounded-full border ${styles.border} ${styles.text} text-sm font-bold`}>
                              {benefit.value}
                            </div>
                          </div>

                          <p className="text-white/80 mb-2">{benefit.subtitle}</p>
                          <div className={`flex items-center gap-2 text-sm font-bold ${styles.text}`}>
                            <AlertTriangle className="w-4 h-4" />
                            <span>{benefit.urgency}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-emerald-950/40 to-blue-950/40 border border-emerald-500/20 rounded-2xl p-8 mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">
                  O que estão falando
                </h3>
                <MessageSquare className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {socialProof.map((proof, index) => (
                  <div key={index} className="bg-black/40 rounded-xl p-4">
                    <p className="text-white/80 text-sm italic">
                      "{proof}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Reversals */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {riskReversals.map((guarantee, index) => (
                <div key={index} className="bg-blue-950/30 border border-blue-500/20 rounded-2xl p-6 text-center">
                  <guarantee.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-white font-bold mb-2">{guarantee.title}</h4>
                  <p className="text-white/70 text-sm">{guarantee.description}</p>
                </div>
              ))}
            </div>

            {/* Optimized Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Flame className="w-8 h-8 text-red-400" />
                  <h3 className="text-3xl font-bold text-white">
                    Garanta Sua Vaga AGORA
                  </h3>
                  <Flame className="w-8 h-8 text-red-400" />
                </div>
                <p className="text-red-400 font-semibold">
                  Preencha abaixo e receba acesso imediato à comunidade VIP
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-600 bg-black/60 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">WhatsApp com DDD *</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-600 bg-black/60 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-final"
                  checked={formData.consent}
                  onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                  required
                  className="mt-1 h-5 w-5 text-red-500 border-2 border-gray-600 rounded focus:ring-red-500 bg-black/60"
                />
                <label htmlFor="consent-final" className="text-white/80 text-sm">
                  Concordo em receber informações por WhatsApp e email. Política de{' '}
                  <a href="/privacy" className="text-red-400 hover:underline font-semibold">
                    Privacidade
                  </a>
                </label>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="xl"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-lg sm:text-xl md:text-2xl py-6 sm:py-8 rounded-2xl transition-all duration-300 shadow-2xl"
                  loading={isSubmitting}
                  disabled={!formData.name || !formData.phone || !formData.consent}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <Flame className="w-6 h-6 sm:w-8 sm:h-8" />
                      <span className="hidden sm:inline">QUERO MINHA VAGA DE FUNDADOR - R$ 397</span>
                      <span className="sm:hidden">GARANTIR VAGA - R$ 397</span>
                      <Lock className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>

            <div className="text-center mt-8">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2 text-emerald-400">
                  <Shield className="w-4 h-4" />
                  <span>Processamento 100% Seguro</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                  <Timer className="w-4 h-4" />
                  <span>Acesso Liberado em 5 Minutos</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-red-400">
                  <Lock className="w-4 h-4" />
                  <span>Dados Protegidos (SSL)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Floating Urgency Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 5, top: 20, delay: 0, duration: 8 },
          { left: 95, top: 30, delay: 1, duration: 10 },
          { left: 10, top: 80, delay: 2, duration: 12 },
          { left: 90, top: 70, delay: 0.5, duration: 9 },
          { left: 50, top: 10, delay: 1.5, duration: 11 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: 999999,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-red-500/60 rounded-full blur-sm"
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