'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Users, Award, ChevronRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.consent) return

    setIsSubmitting(true)
    // TODO: Implementar integração com backend
    setTimeout(() => {
      setIsSubmitting(false)
      // TODO: Redirecionar para página de pós-envio
      alert('Pré-inscrição recebida! Te chamaremos no WhatsApp.')
    }, 2000)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Main Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-emerald-950/30" />

        {/* Organic Pattern - Field/Nature Inspired */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#10b981_1px,transparent_1px),radial-gradient(circle_at_75%_75%,#f59e0b_1px,transparent_1px)] bg-[length:60px_60px]" />
        </div>

        {/* Subtle Light Rays - Sun/Dawn Effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="absolute top-0 right-0 h-full w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/5 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Organic Elements */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 12,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="absolute top-1/3 right-1/4 h-80 w-80 opacity-5"
        >
          <div className="absolute inset-0 rounded-full border border-emerald-400/20" />
          <div className="absolute inset-4 rounded-full border border-emerald-300/15" />
          <div className="absolute inset-8 rounded-full border border-amber-400/10" />
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="flex min-h-screen items-center">
          <div className="grid w-full items-center gap-8 pt-32 pb-20 md:gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column - Editorial Content */}
            <div className="space-y-8 sm:space-y-12">
              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/15 to-amber-500/15 blur-lg" />
                <div className="relative rounded-2xl border border-emerald-500/20 bg-black/70 p-4 backdrop-blur-xl sm:p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 sm:h-12 sm:w-12">
                      <Award className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white sm:text-lg">
                        Protocolo Validado
                      </h3>
                      <p className="text-xs text-emerald-300 sm:text-sm">
                        Por especialistas veterinários
                      </p>
                    </div>
                  </div>

                  {/* Results Display */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="mb-1 text-xl font-black text-emerald-400 sm:text-2xl md:text-3xl">
                        75%
                      </div>
                      <div className="text-xs font-medium text-white/70 sm:text-sm">
                        Redução
                      </div>
                      <div className="text-xs text-white/50">Mortalidade</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 text-xl font-black text-amber-400 sm:text-2xl md:text-3xl">
                        40%
                      </div>
                      <div className="text-xs font-medium text-white/70 sm:text-sm">
                        Aumento
                      </div>
                      <div className="text-xs text-white/50">Lucratividade</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 text-xl font-black text-blue-400 sm:text-2xl md:text-3xl">
                        500+
                      </div>
                      <div className="text-xs font-medium text-white/70 sm:text-sm">
                        Fazendas
                      </div>
                      <div className="text-xs text-white/50">Atendidas</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Editorial Title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                className="space-y-8"
              >
                <h1 className="relative">
                  {/* Sophisticated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/8 to-amber-500/8 blur-3xl" />

                  <div className="relative text-3xl leading-[0.85] font-black tracking-tight sm:text-4xl md:text-6xl lg:text-8xl">
                    <div className="mb-4 text-white">
                      Transforme sua
                      <br />
                      <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400 bg-clip-text text-transparent">
                        Avicultura
                      </span>
                    </div>
                  </div>
                </h1>

                {/* Professional Subtitle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-500/3 to-transparent" />
                  <p className="relative max-w-2xl text-base leading-relaxed font-light text-white/85 sm:text-lg md:text-xl lg:text-2xl">
                    Sistema completo de{' '}
                    <strong className="font-semibold text-emerald-400">
                      manejo sanitário
                    </strong>{' '}
                    que eleva a produtividade através de{' '}
                    <strong className="font-semibold text-amber-400">
                      metodologia científica
                    </strong>
                    comprovada em campo.
                  </p>

                  <div className="mt-8 flex items-center gap-8 text-white/60">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-sm font-medium">
                        Protocolo Veterinário
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="text-sm font-medium">
                        Resultados Validados
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-400" />
                      <span className="text-sm font-medium">
                        Suporte Especializado
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Editorial CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
              >
                <div className="group relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 opacity-60 blur transition duration-500 group-hover:opacity-90" />
                  <Button
                    size="xl"
                    className="relative w-full border-0 bg-black px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-black/90 sm:w-auto sm:px-12 sm:py-6 sm:text-lg"
                  >
                    <span className="flex items-center gap-3">
                      Quero Participar
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </motion.div>
                    </span>
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="xl"
                  className="w-full border border-white/20 px-6 py-4 font-semibold text-white/70 transition-all duration-500 hover:border-emerald-400/50 hover:text-emerald-400 sm:w-auto sm:px-8 sm:py-6"
                >
                  Ver Detalhes
                </Button>
              </motion.div>
            </div>

            {/* Right Column - Professional Interface */}
            <div className="relative">
              {/* Elegant Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="relative"
              >
                {/* Sophisticated Glow */}
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-transparent to-amber-500/15 blur-xl" />

                {/* Subtle Corner Accents */}
                <div className="absolute -inset-1">
                  <div className="absolute top-0 left-0 h-12 w-12">
                    <div className="absolute top-0 left-0 h-px w-6 bg-gradient-to-r from-emerald-400/40 to-transparent" />
                    <div className="absolute top-0 left-0 h-6 w-px bg-gradient-to-b from-emerald-400/40 to-transparent" />
                  </div>
                  <div className="absolute top-0 right-0 h-12 w-12">
                    <div className="absolute top-0 right-0 h-px w-6 bg-gradient-to-l from-emerald-400/40 to-transparent" />
                    <div className="absolute top-0 right-0 h-6 w-px bg-gradient-to-b from-emerald-400/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 h-12 w-12">
                    <div className="absolute bottom-0 left-0 h-px w-6 bg-gradient-to-r from-emerald-400/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 h-6 w-px bg-gradient-to-t from-emerald-400/40 to-transparent" />
                  </div>
                  <div className="absolute right-0 bottom-0 h-12 w-12">
                    <div className="absolute right-0 bottom-0 h-px w-6 bg-gradient-to-l from-emerald-400/40 to-transparent" />
                    <div className="absolute right-0 bottom-0 h-6 w-px bg-gradient-to-t from-emerald-400/40 to-transparent" />
                  </div>
                </div>

                {/* Main Professional Panel */}
                <div className="relative rounded-2xl border border-emerald-500/20 bg-black/85 p-4 backdrop-blur-2xl sm:p-6 md:p-8">
                  {/* Professional Header */}
                  <div className="mb-6 text-center sm:mb-8">
                    <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-2xl shadow-emerald-500/25 sm:mb-6 sm:h-16 sm:w-16">
                      <Phone className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/10 to-transparent" />
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-white sm:text-xl md:text-2xl">
                      Pré-inscrição Exclusiva
                    </h3>
                    <p className="text-sm font-medium text-emerald-300/80">
                      Primeira Turma - Vagas Limitadas
                    </p>
                  </div>

                  {/* Professional Pricing */}
                  <div className="mb-6 rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 to-emerald-900/20 p-4 sm:mb-8 sm:p-6">
                    <div className="text-center">
                      <div className="mb-2 text-sm font-medium text-white/50 line-through">
                        Valor Regular: R$ 1.497
                      </div>
                      <div className="mb-2 text-3xl font-black text-emerald-400 sm:text-4xl md:text-5xl">
                        R$ 497
                      </div>
                      <div className="text-sm font-semibold tracking-wide text-amber-400 uppercase">
                        Primeira Turma
                      </div>
                      <div className="mt-4 text-xs text-white/60">
                        Parcelamento disponível • Garantia de 30 dias
                      </div>
                    </div>
                  </div>

                  {/* Professional Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Nome completo"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                          className="w-full rounded-xl border border-emerald-500/30 bg-black/50 px-3 py-3 text-sm font-medium text-white transition-all duration-300 placeholder:text-emerald-400/60 focus:border-emerald-400 focus:bg-black/70 focus:ring-0 focus:outline-none sm:px-4 sm:py-4 sm:text-base"
                        />
                      </div>

                      <div className="relative">
                        <input
                          type="tel"
                          placeholder="WhatsApp (11) 99999-9999"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          required
                          className="w-full rounded-xl border border-emerald-500/30 bg-black/50 px-3 py-3 text-sm font-medium text-white transition-all duration-300 placeholder:text-emerald-400/60 focus:border-emerald-400 focus:bg-black/70 focus:ring-0 focus:outline-none sm:px-4 sm:py-4 sm:text-base"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            consent: e.target.checked,
                          }))
                        }
                        required
                        className="mt-1.5 h-4 w-4 rounded border-emerald-500/30 bg-black text-emerald-400 focus:ring-emerald-500"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm leading-relaxed font-medium text-white/70"
                      >
                        Autorizo contato por WhatsApp conforme{' '}
                        <a
                          href="/privacy"
                          className="text-emerald-400 underline transition-colors hover:text-emerald-300"
                        >
                          Política de Privacidade
                        </a>
                      </label>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Button
                        type="submit"
                        size="xl"
                        className="w-full border-0 bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 text-base font-bold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:from-emerald-500 hover:to-emerald-400 hover:shadow-emerald-400/30 sm:py-6 sm:text-lg"
                        loading={isSubmitting}
                        disabled={
                          !formData.name || !formData.phone || !formData.consent
                        }
                      >
                        {isSubmitting ? 'Enviando...' : 'Garantir Minha Vaga'}
                      </Button>
                    </motion.div>
                  </form>

                  {/* Trust Indicators */}
                  <div className="mt-8 border-t border-emerald-500/15 pt-6">
                    <div className="flex items-center justify-center gap-6 text-xs font-medium text-white/60">
                      <div className="flex items-center gap-2">
                        <Shield className="h-3 w-3 text-emerald-400" />
                        <span>100% Seguro</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-amber-400" />
                        <span>Vagas Limitadas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-blue-400" />
                        <span>Certificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Subtle Ambient Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        {[
          { left: 15, top: 25, delay: 0, duration: 12 },
          { left: 75, top: 15, delay: 1, duration: 14 },
          { left: 25, top: 65, delay: 2, duration: 16 },
          { left: 85, top: 75, delay: 0.5, duration: 13 },
          { left: 45, top: 35, delay: 1.5, duration: 15 },
          { left: 65, top: 85, delay: 2.5, duration: 11 },
          { left: 5, top: 55, delay: 3, duration: 17 },
          { left: 95, top: 45, delay: 0.8, duration: 14 },
          { left: 35, top: 10, delay: 1.8, duration: 12 },
          { left: 55, top: 95, delay: 2.2, duration: 16 },
          { left: 20, top: 80, delay: 3.5, duration: 13 },
          { left: 80, top: 20, delay: 1.2, duration: 15 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute h-2 w-2 rounded-full bg-emerald-400/20 blur-sm"
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
