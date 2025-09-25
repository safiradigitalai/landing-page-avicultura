'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Phone,
  Gift,
  AlertTriangle,
  Crown,
  Shield,
  Timer,
  Target,
  Flame,
  Lock,
  MessageSquare,
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
    minutes: 32,
  },
}

const exclusiveBenefits = [
  {
    icon: Crown,
    title: 'Preço de Fundador Irrepetível',
    subtitle: 'R$ 397 (de R$ 897) - Economia de R$ 500',
    value: 'R$ 500 OFF',
    urgency: 'NUNCA MAIS será oferecido esse preço',
    category: 'price',
    highlight: true,
  },
  {
    icon: Users,
    title: 'Primeiros 20: Status Platinum',
    subtitle: 'Prioridade absoluta nos hotseats + badge especial',
    value: 'VIP Access',
    urgency: 'Apenas 7 vagas restantes',
    category: 'vip',
    highlight: true,
  },
  {
    icon: Phone,
    title: 'Primeiros 50: Mentoria Individual',
    subtitle: 'Call exclusiva de 15min focada no seu problema crítico',
    value: 'R$ 500',
    urgency: 'Restam 27 vagas',
    category: 'mentoring',
    highlight: false,
  },
  {
    icon: Gift,
    title: 'Acesso Vitalício Garantido',
    subtitle: 'Privilégio exclusivo que NUNCA mais será oferecido',
    value: 'Sem prazo',
    urgency: 'Apenas 1ª turma',
    category: 'lifetime',
    highlight: true,
  },
]

const socialProof = [
  'Carlos M. - Granja 15.000 aves: "Economia de R$ 8.000 no primeiro lote"',
  'Maria S. - Cooperativa: "Mortalidade caiu de 7% para 2,5% em 3 meses"',
  'João P. - Avicultor: "ROI de 400% aplicando os protocolos"',
  'Ana L. - Técnica: "Finalmente um curso que funciona na prática"',
]

const riskReversals = [
  {
    icon: Shield,
    title: 'Garantia Total de 7 Dias',
    description:
      'Se após a primeira live você não estiver 100% satisfeito, devolvemos todo o investimento. Sem perguntas, sem burocracia.',
  },
  {
    icon: Target,
    title: 'Compromisso de Resultados',
    description:
      'Se você aplicar os protocolos e não ver melhoria em 60 dias, oferecemos consultoria individual gratuita até resolver.',
  },
  {
    icon: Crown,
    title: 'Acesso Vitalício Garantido',
    description:
      'Mesmo se o preço subir para R$ 1.500+ nas próximas turmas, você nunca perderá seu acesso. É seu para sempre.',
  },
]

export function OfferSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(urgencyFactors.timeLeft)
  const [spotsLeft, setSpotsLeft] = useState(
    urgencyFactors.totalSpots - urgencyFactors.spotsTaken
  )

  // Simulação de countdown real
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
      if (Math.random() < 0.1) {
        // 10% de chance a cada intervalo
        setSpotsLeft((prev) => Math.max(15, prev - 1)) // Não deixa cair abaixo de 15
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
          text: 'text-red-400',
        }
      case 'vip':
        return {
          bg: 'bg-gradient-to-r from-yellow-950/40 to-yellow-900/40',
          border: 'border-yellow-500/40',
          glow: 'from-yellow-500/30 to-yellow-600/30',
          text: 'text-yellow-400',
        }
      case 'lifetime':
        return {
          bg: 'bg-gradient-to-r from-purple-950/40 to-purple-900/40',
          border: 'border-purple-500/40',
          glow: 'from-purple-500/30 to-purple-600/30',
          text: 'text-purple-400',
        }
      default:
        return {
          bg: 'bg-gradient-to-r from-emerald-950/40 to-emerald-900/40',
          border: 'border-emerald-500/40',
          glow: 'from-emerald-500/30 to-emerald-600/30',
          text: 'text-emerald-400',
        }
    }
  }

  return (
    <section
      id="offer"
      className="relative overflow-hidden bg-gradient-to-br from-red-950/30 via-black to-yellow-950/20 py-24 sm:py-32"
    >
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
          ease: 'easeInOut',
          repeat: 999999,
        }}
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-red-500/10 via-transparent to-yellow-500/10"
      />

      <Container className="relative">
        {/* Urgent Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Urgency Alert */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: 999999,
              ease: 'easeInOut',
            }}
            className="mb-8 inline-flex items-center gap-3 rounded-xl border border-red-600/50 bg-red-950/50 px-6 py-4 backdrop-blur-sm"
          >
            <AlertTriangle className="h-6 w-6 animate-pulse text-red-400" />
            <span className="text-base font-bold tracking-wide text-red-300 uppercase">
              Últimas {spotsLeft} Vagas - Oferta Expira em {timeLeft.days}d{' '}
              {timeLeft.hours}h {timeLeft.minutes}m
            </span>
          </motion.div>

          <h2 className="mb-8 text-5xl leading-[0.9] font-black tracking-tight text-white lg:text-7xl">
            Última Chance para
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 bg-clip-text text-transparent">
              Preço de Fundador
            </span>
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed font-light text-white/80">
            Após as 100 vagas, o preço volta para{' '}
            <strong className="font-semibold text-red-400">R$ 1.497</strong>.
            Esta é sua única oportunidade de entrar com{' '}
            <strong className="font-semibold text-yellow-400">
              condições especiais
            </strong>
            .
          </p>

          {/* Live Counter */}
          <div className="rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-950/60 to-yellow-950/60 p-8 backdrop-blur-xl">
            <div className="grid gap-6 text-center md:grid-cols-4">
              <div>
                <div className="mb-2 text-4xl font-black text-red-400">
                  {spotsLeft}
                </div>
                <div className="text-sm font-medium text-white/70">
                  Vagas Restantes
                </div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-black text-yellow-400">
                  {timeLeft.days}
                </div>
                <div className="text-sm font-medium text-white/70">Dias</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-black text-yellow-400">
                  {timeLeft.hours}
                </div>
                <div className="text-sm font-medium text-white/70">Horas</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-black text-yellow-400">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm font-medium text-white/70">Minutos</div>
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
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-4 animate-pulse rounded-3xl bg-gradient-to-r from-red-500/20 to-yellow-500/20 blur-2xl" />

          <div className="relative rounded-3xl border border-red-500/30 bg-black/90 p-8 backdrop-blur-2xl lg:p-12">
            {/* Price Shock */}
            <div className="mb-12 text-center">
              <div className="mb-6">
                <div className="mb-2 text-6xl font-black text-red-400 lg:text-8xl">
                  R$ 397
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-white/50 line-through">
                    R$ 1.497
                  </span>
                  <div className="rounded-full bg-red-500 px-4 py-2 font-bold text-white">
                    73% OFF
                  </div>
                </div>
                <p className="mt-4 text-xl font-bold text-yellow-400">
                  Economia de R$ 1.100 - NUNCA mais será oferecido
                </p>
              </div>
            </div>

            {/* Exclusive Benefits */}
            <div className="mb-12 space-y-4">
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
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${styles.glow} rounded-2xl opacity-50 blur transition duration-300 group-hover:opacity-75`}
                      />
                    )}

                    <div
                      className={`relative ${styles.bg} border ${styles.border} rounded-2xl p-6 transition-all duration-300`}
                    >
                      <div className="flex items-center gap-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-yellow-500/20">
                          <benefit.icon className={`h-8 w-8 ${styles.text}`} />
                        </div>

                        <div className="flex-1">
                          <div className="mb-2 flex items-start justify-between">
                            <h3 className="text-xl font-bold text-white">
                              {benefit.title}
                            </h3>
                            <div
                              className={`rounded-full border px-3 py-1 ${styles.border} ${styles.text} text-sm font-bold`}
                            >
                              {benefit.value}
                            </div>
                          </div>

                          <p className="mb-2 text-white/80">
                            {benefit.subtitle}
                          </p>
                          <div
                            className={`flex items-center gap-2 text-sm font-bold ${styles.text}`}
                          >
                            <AlertTriangle className="h-4 w-4" />
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
            <div className="mb-12 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/40 to-blue-950/40 p-8">
              <div className="mb-6 flex items-center justify-center gap-3">
                <MessageSquare className="h-6 w-6 text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">
                  O que estão falando
                </h3>
                <MessageSquare className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {socialProof.map((proof, index) => (
                  <div key={index} className="rounded-xl bg-black/40 p-4">
                    <p className="text-sm text-white/80 italic">
                      &ldquo;{proof}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Reversals */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {riskReversals.map((guarantee, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-500/20 bg-blue-950/30 p-6 text-center"
                >
                  <guarantee.icon className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                  <h4 className="mb-2 font-bold text-white">
                    {guarantee.title}
                  </h4>
                  <p className="text-sm text-white/70">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Optimized Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-6 text-center">
                <div className="mb-2 flex items-center justify-center gap-3">
                  <Flame className="h-8 w-8 text-red-400" />
                  <h3 className="text-3xl font-bold text-white">
                    Garanta Sua Vaga AGORA
                  </h3>
                  <Flame className="h-8 w-8 text-red-400" />
                </div>
                <p className="font-semibold text-red-400">
                  Preencha abaixo e receba acesso imediato à comunidade VIP
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="mb-2 block font-semibold text-white">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    className="w-full rounded-xl border-2 border-gray-600 bg-black/60 px-4 py-4 text-white placeholder-gray-400 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-white">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    required
                    className="w-full rounded-xl border-2 border-gray-600 bg-black/60 px-4 py-4 text-white placeholder-gray-400 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-final"
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      consent: e.target.checked,
                    }))
                  }
                  required
                  className="mt-1 h-5 w-5 rounded border-2 border-gray-600 bg-black/60 text-red-500 focus:ring-red-500"
                />
                <label
                  htmlFor="consent-final"
                  className="text-sm text-white/80"
                >
                  Concordo em receber informações por WhatsApp e email. Política
                  de{' '}
                  <a
                    href="/privacy"
                    className="font-semibold text-red-400 hover:underline"
                  >
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
                  className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-700 py-6 text-lg font-black text-white shadow-2xl transition-all duration-300 hover:from-red-700 hover:to-red-800 sm:py-8 sm:text-xl md:text-2xl"
                  loading={isSubmitting}
                  disabled={
                    !formData.name || !formData.phone || !formData.consent
                  }
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Processando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <Flame className="h-6 w-6 sm:h-8 sm:w-8" />
                      <span className="hidden sm:inline">
                        QUERO MINHA VAGA DE FUNDADOR - R$ 397
                      </span>
                      <span className="sm:hidden">GARANTIR VAGA - R$ 397</span>
                      <Lock className="h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>

            <div className="mt-8 text-center">
              <div className="grid gap-4 text-sm md:grid-cols-3">
                <div className="flex items-center justify-center gap-2 text-emerald-400">
                  <Shield className="h-4 w-4" />
                  <span>Processamento 100% Seguro</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                  <Timer className="h-4 w-4" />
                  <span>Acesso Liberado em 5 Minutos</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-red-400">
                  <Lock className="h-4 w-4" />
                  <span>Dados Protegidos (SSL)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Floating Urgency Elements */}
      <div className="pointer-events-none absolute inset-0">
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
              ease: 'easeInOut',
            }}
            className="absolute h-2 w-2 rounded-full bg-red-500/60 blur-sm"
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
