'use client'

import { motion } from 'framer-motion'
import { TrendingDown, AlertCircle, Clock, DollarSign, Zap, Target } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const criticalProblems = [
  {
    icon: TrendingDown,
    title: 'Hemorragia Silenciosa no Caixa',
    reality: 'R$ 15.000 a R$ 45.000 perdidos mensalmente',
    description: 'Cada 1% de mortalidade extra representa milhares de reais evaporando. Você pode estar perdendo o equivalente a uma safra inteira sem perceber.',
    symptoms: ['Mortalidade acima de 3-5%', 'Conversão alimentar ruim', 'Lotes desuniformes'],
    impact: { value: 'R$ 180.000', period: 'ano', color: 'red' }
  },
  {
    icon: AlertCircle,
    title: 'Bomba Relógio Sanitária',
    reality: 'Um surto pode destruir meses de trabalho',
    description: 'Protocolos falhos são como deixar a porta aberta para ladrões. Quando a doença entra, não para até devastar completamente.',
    symptoms: ['Falta de biossegurança', 'Água não tratada', 'Superlotação'],
    impact: { value: 'R$ 250.000', period: 'surto', color: 'orange' }
  },
  {
    icon: Clock,
    title: 'Decisões Tardias = Prejuízo Certo',
    reality: 'Detectar tarde custa 10x mais caro',
    description: 'Sem dados e protocolos, você só vê o problema quando já virou catástrofe financeira. É como dirigir de olhos fechados.',
    symptoms: ['Sem registros sistemáticos', 'Reação em vez de prevenção', 'Descontrole total'],
    impact: { value: 'R$ 100.000', period: 'problema', color: 'yellow' }
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
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10"
        />
      </div>

      <Container className="relative">
        {/* Dramatic Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Alert Badge */}
          <div className="inline-flex items-center gap-3 bg-red-950/30 border border-red-700/50 backdrop-blur-sm rounded-xl px-6 py-3 mb-8">
            <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-red-300 font-semibold text-sm tracking-wide uppercase">
              Alerta Crítico
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6 sm:mb-8">
            O Sangramento que está
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
              Destruindo seu Caixa
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light mb-6 sm:mb-8">
            Enquanto você lê isso, <strong className="text-red-400 font-semibold">milhares de reais estão evaporando</strong> da sua propriedade.
            Cada dia sem ação é dinheiro que nunca mais voltará.
          </p>

          {/* Shocking Stats */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-red-950/40 border border-red-500/30 rounded-2xl p-6 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-red-400 mb-1">{realityCheck.totalLoss}</div>
                <div className="text-white/70 text-sm font-medium">{realityCheck.timeframe}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-orange-400 mb-1">40%</div>
                <div className="text-white/70 text-sm font-medium">Receita Perdida</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-yellow-400 mb-1">24h</div>
                <div className="text-white/70 text-sm font-medium">Para Agir</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Critical Problems */}
        <div className="space-y-8 mb-20">
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
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Main Problem Card */}
              <div className="relative bg-black/80 backdrop-blur-2xl border border-red-500/20 rounded-3xl p-8 hover:border-red-400/40 transition-all duration-500">

                {/* Problem Header */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Critical Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center backdrop-blur-sm border border-red-400/30">
                      <problem.icon className="w-8 h-8 text-red-400" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-red-300 text-lg font-bold">
                      {problem.reality}
                    </p>
                  </div>

                  {/* Impact Badge */}
                  <div className="bg-red-950/50 border border-red-500/30 rounded-xl px-4 py-3 text-center min-w-[120px]">
                    <div className={`text-2xl font-black mb-1 ${
                      problem.impact.color === 'red' ? 'text-red-400' :
                      problem.impact.color === 'orange' ? 'text-orange-400' : 'text-yellow-400'
                    }`}>
                      {problem.impact.value}
                    </div>
                    <div className="text-white/60 text-xs font-semibold uppercase">
                      por {problem.impact.period}
                    </div>
                  </div>
                </div>

                {/* Problem Description */}
                <p className="text-white/80 leading-relaxed mb-6 text-lg">
                  {problem.description}
                </p>

                {/* Symptoms */}
                <div className="space-y-3">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide opacity-60">
                    Sintomas Críticos:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {problem.symptoms.map((symptom, i) => (
                      <div key={i} className="flex items-center gap-2 bg-red-950/30 rounded-lg px-3 py-2">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="text-white/80 text-sm font-medium">{symptom}</span>
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
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl animate-pulse" />

          <div className="relative bg-gradient-to-r from-red-950/60 to-orange-950/60 backdrop-blur-2xl border border-red-500/30 rounded-3xl p-12 text-center">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-4xl font-black text-white mb-6">
              <span className="text-red-400">PARE</span> de Perder Dinheiro
            </h3>

            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Cada segundo de indecisão custa dinheiro real. Enquanto você hesita,
              seus concorrentes já estão <strong className="text-orange-400">10 passos à frente</strong>.
            </p>

            <div className="bg-black/60 border border-red-500/20 rounded-2xl p-6">
              <p className="text-2xl font-bold text-red-400 mb-2">
                {realityCheck.percentage}
              </p>
              <p className="text-white/70">
                Não espere o próximo surto para agir. A prevenção custa 10x menos que o tratamento.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Danger Particles */}
      <div className="absolute inset-0 pointer-events-none">
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
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-red-500/40 rounded-full"
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
