'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Shield,
  Smartphone,
  BarChart3,
  Palette,
  Code2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { Feature } from '@/types'

const features: Feature[] = [
  {
    id: 'performance',
    title: 'Performance Otimizada',
    description:
      'Landing pages ultra-rápidas com otimização automática de imagens e carregamento instantâneo.',
    icon: 'Zap',
  },
  {
    id: 'security',
    title: 'Segurança Avançada',
    description:
      'Proteção completa com SSL gratuito, backup automático e monitoramento 24/7.',
    icon: 'Shield',
  },
  {
    id: 'responsive',
    title: 'Design Responsivo',
    description:
      'Templates que se adaptam perfeitamente a qualquer dispositivo e tamanho de tela.',
    icon: 'Smartphone',
  },
  {
    id: 'analytics',
    title: 'Analytics Detalhados',
    description:
      'Acompanhe conversões, tráfego e comportamento dos usuários em tempo real.',
    icon: 'BarChart3',
  },
  {
    id: 'customization',
    title: 'Personalização Total',
    description:
      'Editor visual intuitivo para criar designs únicos sem conhecimento técnico.',
    icon: 'Palette',
  },
  {
    id: 'integrations',
    title: 'Integrações Poderosas',
    description:
      'Conecte com suas ferramentas favoritas: CRM, email marketing, analytics e mais.',
    icon: 'Code2',
  },
]

const IconMap = {
  Zap,
  Shield,
  Smartphone,
  BarChart3,
  Palette,
  Code2,
} as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Recursos que fazem a{' '}
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
              diferença
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Tudo o que você precisa para criar landing pages que convertem mais
            visitantes em clientes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = IconMap[feature.icon as keyof typeof IconMap]
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group bg-card relative rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">
                  <div className="bg-primary/10 group-hover:bg-primary/20 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                </div>
                <h3 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
