'use client'

import { motion } from 'framer-motion'
import { TrendingDown, AlertCircle, Clock, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const criticalProblems = [
  {
    icon: TrendingDown,
    title: 'Hemorragia Silenciosa no Caixa',
    reality: 'R$ 15.000 a R$ 45.000 perdidos mensalmente',
    description:
      'Cada 1% de mortalidade extra representa milhares de reais evaporando. Você pode estar perdendo o equivalente a uma safra inteira sem perceber.',
    symptoms: [
      'Mortalidade acima de 3-5%',
      'Conversão alimentar ruim',
      'Lotes desuniformes',
    ],
    impact: { value: 'R$ 180.000', period: 'ano', color: 'red' },
  },
  {
    icon: AlertCircle,
    title: 'Bomba Relógio Sanitária',
    reality: 'Um surto pode destruir meses de trabalho',
    description:
      'Protocolos falhos são como deixar a porta aberta para ladrões. Quando a doença entra, não para até devastar completamente.',
    symptoms: ['Falta de biossegurança', 'Água não tratada', 'Superlotação'],
    impact: { value: 'R$ 250.000', period: 'surto', color: 'orange' },
  },
  {
    icon: Clock,
    title: 'Decisões Tardias = Prejuízo Certo',
    reality: 'Detectar tarde custa 10x mais caro',
    description:
      'Sem dados e protocolos, você só vê o problema quando já virou catástrofe financeira. É como dirigir de olhos fechados.',
    symptoms: [
      'Sem registros sistemáticos',
      'Reação em vez de prevenção',
      'Descontrole total',
    ],
    impact: { value: 'R$ 100.000', period: 'problema', color: 'yellow' },
  },
]

const realityCheck = {
  totalLoss: 'R$ 530.000',
  timeframe: 'por ano',
  percentage: '40% da sua receita pode estar vazando',
}

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-950/20 via-black to-orange-950/30 py-24 sm:py-32">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#dc2626_0.5px,transparent_0.5px),radial-gradient(circle_at_80%_80%,#ea580c_0.5px,transparent_0.5px)] bg-[length:100px_100px] opacity-[0.03]" />

        {/* Pulsing Red Alert */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: 999999,
          }}
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10"
        />
      </div>

      <Container className="relative">
        {/* Dramatic Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          {/* Alert Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-red-700/50 bg-red-950/30 px-6 py-3 backdrop-blur-sm">
            <AlertCircle className="h-5 w-5 animate-pulse text-red-400" />
            <span className="text-sm font-semibold tracking-wide text-red-300 uppercase">
              Alerta Crítico
            </span>
          </div>

          <h2 className="mb-6 text-3xl leading-[0.9] font-black tracking-tight text-white sm:mb-8 sm:text-4xl md:text-5xl lg:text-7xl">
            O Sangramento que está
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
              Destruindo seu Caixa
            </span>
          </h2>

          <p className="mx-auto mb-6 max-w-3xl text-base leading-relaxed font-light text-white/80 sm:mb-8 sm:text-lg md:text-xl">
            Enquanto você lê isso,{' '}
            <strong className="font-semibold text-red-400">
              milhares de reais estão evaporando
            </strong>{' '}
            da sua propriedade. Cada dia sem ação é dinheiro que nunca mais
            voltará.
          </p>

          {/* Shocking Stats */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: 999999,
              ease: 'easeInOut',
            }}
            className="rounded-2xl border border-red-500/30 bg-red-950/40 p-6 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:gap-6">
              <div>
                <div className="mb-1 text-xl font-black text-red-400 sm:text-2xl md:text-3xl">
                  {realityCheck.totalLoss}
                </div>
                <div className="text-sm font-medium text-white/70">
                  {realityCheck.timeframe}
                </div>
              </div>
              <div>
                <div className="mb-1 text-xl font-black text-orange-400 sm:text-2xl md:text-3xl">
                  40%
                </div>
                <div className="text-sm font-medium text-white/70">
                  Receita Perdida
                </div>
              </div>
              <div>
                <div className="mb-1 text-xl font-black text-yellow-400 sm:text-2xl md:text-3xl">
                  24h
                </div>
                <div className="text-sm font-medium text-white/70">
                  Para Agir
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Critical Problems */}
        <div className="mb-20 space-y-8">
          {criticalProblems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Danger Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              {/* Main Problem Card */}
              <div className="relative rounded-3xl border border-red-500/20 bg-black/80 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-red-400/40">
                {/* Problem Header */}
                <div className="mb-6 flex items-start gap-6">
                  {/* Critical Icon */}
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-400/30 bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm">
                      <problem.icon className="h-8 w-8 text-red-400" />
                    </div>
                    <div className="absolute -top-1 -right-1 h-4 w-4 animate-pulse rounded-full bg-red-500" />
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-black text-white">
                      {problem.title}
                    </h3>
                    <p className="text-lg font-bold text-red-300">
                      {problem.reality}
                    </p>
                  </div>

                  {/* Impact Badge */}
                  <div className="min-w-[120px] rounded-xl border border-red-500/30 bg-red-950/50 px-4 py-3 text-center">
                    <div
                      className={`mb-1 text-2xl font-black ${
                        problem.impact.color === 'red'
                          ? 'text-red-400'
                          : problem.impact.color === 'orange'
                            ? 'text-orange-400'
                            : 'text-yellow-400'
                      }`}
                    >
                      {problem.impact.value}
                    </div>
                    <div className="text-xs font-semibold text-white/60 uppercase">
                      por {problem.impact.period}
                    </div>
                  </div>
                </div>

                {/* Problem Description */}
                <p className="mb-6 text-lg leading-relaxed text-white/80">
                  {problem.description}
                </p>

                {/* Symptoms */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold tracking-wide text-white uppercase opacity-60">
                    Sintomas Críticos:
                  </h4>
                  <div className="grid gap-3 md:grid-cols-3">
                    {problem.symptoms.map((symptom, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-lg bg-red-950/30 px-3 py-2"
                      >
                        <div className="h-2 w-2 rounded-full bg-red-400" />
                        <span className="text-sm font-medium text-white/80">
                          {symptom}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reality Check CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 animate-pulse rounded-3xl bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-2xl" />

          <div className="relative rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-950/60 to-orange-950/60 p-12 text-center backdrop-blur-2xl">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: 999999,
                ease: 'easeInOut',
              }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600"
            >
              <Zap className="h-10 w-10 text-white" />
            </motion.div>

            <h3 className="mb-6 text-4xl font-black text-white">
              <span className="text-red-400">PARE</span> de Perder Dinheiro
            </h3>

            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-white/80">
              Cada segundo de indecisão custa dinheiro real. Enquanto você
              hesita, seus concorrentes já estão{' '}
              <strong className="text-orange-400">10 passos à frente</strong>.
            </p>

            <div className="rounded-2xl border border-red-500/20 bg-black/60 p-6">
              <p className="mb-2 text-2xl font-bold text-red-400">
                {realityCheck.percentage}
              </p>
              <p className="text-white/70">
                Não espere o próximo surto para agir. A prevenção custa 10x
                menos que o tratamento.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Danger Particles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { left: 20, top: 15, delay: 0, duration: 8 },
          { left: 80, top: 25, delay: 2, duration: 10 },
          { left: 10, top: 70, delay: 4, duration: 12 },
          { left: 90, top: 80, delay: 1, duration: 9 },
          { left: 50, top: 40, delay: 3, duration: 11 },
          { left: 70, top: 60, delay: 5, duration: 7 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: 999999,
              ease: 'easeInOut',
            }}
            className="absolute h-1 w-1 rounded-full bg-red-500/40"
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
