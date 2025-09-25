'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Award,
  CheckCircle,
  Clock,
  Heart,
  Stethoscope,
  Leaf,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'

const contactInfo = [
  {
    type: 'WhatsApp Prioritário',
    value: '(11) 99999-9999',
    description: 'Suporte especializado 24/7',
    icon: Phone,
    primary: true,
  },
  {
    type: 'Email Institucional',
    value: 'contato@aviculturaexpert.com.br',
    description: 'Resposta em até 2h úteis',
    icon: Mail,
    primary: false,
  },
  {
    type: 'Sede Administrativa',
    value: 'São Paulo - SP',
    description: 'Atendimento presencial agendado',
    icon: MapPin,
    primary: false,
  },
]

const courseNavigation = [
  { label: 'Público-Alvo', href: '#target-audience' },
  { label: 'Módulos do Curso', href: '#course-modules' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Investimento', href: '#offer' },
  { label: 'Perguntas Frequentes', href: '#faq' },
]

const legalNavigation = [
  { label: 'Política de Privacidade', href: '/privacy' },
  { label: 'Termos de Uso', href: '/terms' },
  { label: 'Política de Reembolso', href: '/refund' },
  { label: 'Código de Ética', href: '/ethics' },
]

const trustIndicators = [
  {
    icon: Shield,
    title: 'Dados Protegidos',
    description: 'SSL 256-bit + LGPD',
  },
  {
    icon: Award,
    title: 'Dr. Certificado',
    description: 'CRMV Ativo SP-12345',
  },
  {
    icon: CheckCircle,
    title: 'Garantia Real',
    description: '7 dias sem burocracia',
  },
  {
    icon: Clock,
    title: 'Suporte Rápido',
    description: 'Resposta em 2h úteis',
  },
]

const companyInfo = {
  name: 'Avicultura Expert',
  fullName: 'Avicultura Expert Educação Profissional Ltda.',
  cnpj: '12.345.678/0001-99',
  crmv: 'CRMV-SP 12345',
  founded: '2018',
  mission:
    'Transformar conhecimento veterinário em resultados financeiros sustentáveis para produtores rurais comprometidos com a excelência em sanidade avícola.',
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-emerald-950/30">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,#10b981_1px,transparent_1px),radial-gradient(circle_at_75%_25%,#6366f1_1px,transparent_1px)] bg-[length:100px_100px]" />
      </div>

      {/* Subtle Brand Light */}
      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: 999999,
        }}
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-emerald-500/5 via-transparent to-indigo-500/5"
      />

      <Container className="relative">
        <div className="py-20">
          {/* Trust Indicators Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="rounded-3xl border border-emerald-500/20 bg-black/60 p-8 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                {trustIndicators.map((indicator) => (
                  <div key={indicator.title} className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20">
                      <indicator.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h4 className="mb-1 text-sm font-semibold text-white">
                      {indicator.title}
                    </h4>
                    <p className="text-xs text-white/60">
                      {indicator.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Brand & Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Brand Header */}
              <div className="mb-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {companyInfo.name}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-400">
                      Curso Profissional de Sanidade Avícola
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <p className="mb-8 leading-relaxed text-white/80">
                {companyInfo.mission}
              </p>

              {/* Company Credentials */}
              <div className="rounded-2xl border border-emerald-500/20 bg-black/40 p-6">
                <h4 className="mb-4 flex items-center gap-2 font-bold text-white">
                  <Award className="h-5 w-5 text-emerald-400" />
                  Credenciais Profissionais
                </h4>
                <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                  <div className="text-white/70">
                    <strong className="text-white">CNPJ:</strong>{' '}
                    {companyInfo.cnpj}
                  </div>
                  <div className="text-white/70">
                    <strong className="text-white">CRMV:</strong>{' '}
                    {companyInfo.crmv}
                  </div>
                  <div className="text-white/70">
                    <strong className="text-white">Fundação:</strong>{' '}
                    {companyInfo.founded}
                  </div>
                  <div className="text-white/70">
                    <strong className="text-white">Alunos:</strong> 800+
                    formados
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Course Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                <Leaf className="h-5 w-5 text-emerald-400" />
                Navegação do Curso
              </h4>
              <nav className="space-y-3">
                {courseNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm font-medium text-white/70 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact & Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                <Phone className="h-5 w-5 text-emerald-400" />
                Suporte Especializado
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <div
                    key={contact.type}
                    className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-105 ${
                      contact.primary
                        ? 'border-emerald-400/30 bg-emerald-500/10 hover:border-emerald-400/50'
                        : 'border-white/10 bg-black/40 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <contact.icon
                        className={`mt-0.5 h-5 w-5 ${
                          contact.primary ? 'text-emerald-400' : 'text-white/60'
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {contact.type}
                        </p>
                        <p
                          className={`font-bold ${
                            contact.primary
                              ? 'text-lg text-emerald-400'
                              : 'text-white'
                          }`}
                        >
                          {contact.value}
                        </p>
                        <p className="text-xs text-white/60">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Legal Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Copyright & Company */}
              <div className="text-center lg:text-left">
                <p className="mb-2 text-sm text-white/80">
                  © {currentYear} {companyInfo.fullName}
                </p>
                <p className="text-xs text-white/60">
                  Todos os direitos reservados. Material protegido por direitos
                  autorais.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6 lg:justify-end">
                {legalNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xs font-medium text-white/70 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Final Trust Message */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-6 py-3">
                <Heart className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">
                  Comprometidos com sua transformação profissional
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Floating Trust Elements */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { left: 5, top: 20, delay: 0, duration: 14 },
          { left: 95, top: 30, delay: 2, duration: 16 },
          { left: 10, top: 80, delay: 1, duration: 18 },
          { left: 90, top: 70, delay: 3, duration: 12 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: 999999,
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
    </footer>
  )
}
