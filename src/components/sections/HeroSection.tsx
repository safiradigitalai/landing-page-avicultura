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
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute top-0 right-0 w-full h-full"
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
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute right-1/4 top-1/3 w-80 h-80 opacity-5"
        >
          <div className="absolute inset-0 rounded-full border border-emerald-400/20" />
          <div className="absolute inset-4 rounded-full border border-emerald-300/15" />
          <div className="absolute inset-8 rounded-full border border-amber-400/10" />
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="flex min-h-screen items-center">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center w-full pt-32 pb-20">

            {/* Left Column - Editorial Content */}
            <div className="space-y-8 sm:space-y-12">

              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/15 to-amber-500/15 rounded-2xl blur-lg" />
                <div className="relative bg-black/70 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg">Protocolo Validado</h3>
                      <p className="text-emerald-300 text-xs sm:text-sm">Por especialistas veterinários</p>
                    </div>
                  </div>

                  {/* Results Display */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="text-emerald-400 text-xl sm:text-2xl md:text-3xl font-black mb-1">75%</div>
                      <div className="text-white/70 text-xs sm:text-sm font-medium">Redução</div>
                      <div className="text-white/50 text-xs">Mortalidade</div>
                    </div>
                    <div className="text-center">
                      <div className="text-amber-400 text-xl sm:text-2xl md:text-3xl font-black mb-1">40%</div>
                      <div className="text-white/70 text-xs sm:text-sm font-medium">Aumento</div>
                      <div className="text-white/50 text-xs">Lucratividade</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 text-xl sm:text-2xl md:text-3xl font-black mb-1">500+</div>
                      <div className="text-white/70 text-xs sm:text-sm font-medium">Fazendas</div>
                      <div className="text-white/50 text-xs">Atendidas</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Editorial Title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="space-y-8"
              >
                <h1 className="relative">
                  {/* Sophisticated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/8 to-amber-500/8 blur-3xl" />

                  <div className="relative text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tight">
                    <div className="text-white mb-4">
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/3 to-transparent rounded-2xl" />
                  <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-2xl font-light">
                    Sistema completo de <strong className="text-emerald-400 font-semibold">manejo sanitário</strong> que
                    eleva a produtividade através de <strong className="text-amber-400 font-semibold">metodologia científica</strong>
                    comprovada em campo.
                  </p>

                  <div className="mt-8 flex items-center gap-8 text-white/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-sm font-medium">Protocolo Veterinário</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-sm font-medium">Resultados Validados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-sm font-medium">Suporte Especializado</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Editorial CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500" />
                  <Button
                    size="xl"
                    className="relative bg-black border-0 text-white font-bold py-4 px-6 sm:py-6 sm:px-12 text-base sm:text-lg hover:bg-black/90 transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-3">
                      Quero Participar
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="xl"
                  className="text-white/70 border border-white/20 hover:border-emerald-400/50 hover:text-emerald-400 font-semibold py-4 px-6 sm:py-6 sm:px-8 transition-all duration-500 w-full sm:w-auto"
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
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/15 via-transparent to-amber-500/15 rounded-3xl blur-xl" />

                {/* Subtle Corner Accents */}
                <div className="absolute -inset-1">
                  <div className="absolute top-0 left-0 w-12 h-12">
                    <div className="absolute top-0 left-0 w-6 h-px bg-gradient-to-r from-emerald-400/40 to-transparent" />
                    <div className="absolute top-0 left-0 w-px h-6 bg-gradient-to-b from-emerald-400/40 to-transparent" />
                  </div>
                  <div className="absolute top-0 right-0 w-12 h-12">
                    <div className="absolute top-0 right-0 w-6 h-px bg-gradient-to-l from-emerald-400/40 to-transparent" />
                    <div className="absolute top-0 right-0 w-px h-6 bg-gradient-to-b from-emerald-400/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-12 h-12">
                    <div className="absolute bottom-0 left-0 w-6 h-px bg-gradient-to-r from-emerald-400/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-px h-6 bg-gradient-to-t from-emerald-400/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12">
                    <div className="absolute bottom-0 right-0 w-6 h-px bg-gradient-to-l from-emerald-400/40 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-px h-6 bg-gradient-to-t from-emerald-400/40 to-transparent" />
                  </div>
                </div>

                {/* Main Professional Panel */}
                <div className="relative bg-black/85 backdrop-blur-2xl border border-emerald-500/20 rounded-2xl p-4 sm:p-6 md:p-8">
                  {/* Professional Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center relative shadow-2xl shadow-emerald-500/25">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent rounded-2xl" />
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                      Pré-inscrição Exclusiva
                    </h3>
                    <p className="text-emerald-300/80 text-sm font-medium">
                      Primeira Turma - Vagas Limitadas
                    </p>
                  </div>

                  {/* Professional Pricing */}
                  <div className="bg-gradient-to-r from-emerald-950/40 to-emerald-900/20 border border-emerald-500/30 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                    <div className="text-center">
                      <div className="text-white/50 text-sm font-medium line-through mb-2">
                        Valor Regular: R$ 1.497
                      </div>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-400 mb-2">
                        R$ 497
                      </div>
                      <div className="text-amber-400 font-semibold text-sm uppercase tracking-wide">
                        Primeira Turma
                      </div>
                      <div className="mt-4 text-white/60 text-xs">
                        Parcelamento disponível • Garantia de 30 dias
                      </div>
                    </div>
                  </div>

                  {/* Professional Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Nome completo"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          required
                          className="w-full bg-black/50 border border-emerald-500/30 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-sm sm:text-base text-white font-medium placeholder:text-emerald-400/60 focus:border-emerald-400 focus:ring-0 focus:outline-none focus:bg-black/70 transition-all duration-300"
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
                          className="w-full bg-black/50 border border-emerald-500/30 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-sm sm:text-base text-white font-medium placeholder:text-emerald-400/60 focus:border-emerald-400 focus:ring-0 focus:outline-none focus:bg-black/70 transition-all duration-300"
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
                      <label htmlFor="consent" className="text-white/70 text-sm font-medium leading-relaxed">
                        Autorizo contato por WhatsApp conforme{' '}
                        <a
                          href="/privacy"
                          className="text-emerald-400 hover:text-emerald-300 transition-colors underline"
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
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-4 sm:py-6 text-base sm:text-lg border-0 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all duration-300"
                        loading={isSubmitting}
                        disabled={!formData.name || !formData.phone || !formData.consent}
                      >
                        {isSubmitting ? 'Enviando...' : 'Garantir Minha Vaga'}
                      </Button>
                    </motion.div>
                  </form>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-6 border-t border-emerald-500/15">
                    <div className="flex items-center justify-center gap-6 text-white/60 text-xs font-medium">
                      <div className="flex items-center gap-2">
                        <Shield className="w-3 h-3 text-emerald-400" />
                        <span>100% Seguro</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3 text-amber-400" />
                        <span>Vagas Limitadas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-3 h-3 text-blue-400" />
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
      <div className="absolute inset-0 pointer-events-none opacity-40">
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
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full blur-sm"
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
