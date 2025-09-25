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
  Users,
  Heart,
  Stethoscope,
  Leaf
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { SocialLink, NavigationItem } from '@/types'

const contactInfo = [
  {
    type: 'WhatsApp Prioritário',
    value: '(11) 99999-9999',
    description: 'Suporte especializado 24/7',
    icon: Phone,
    primary: true
  },
  {
    type: 'Email Institucional',
    value: 'contato@aviculturaexpert.com.br',
    description: 'Resposta em até 2h úteis',
    icon: Mail,
    primary: false
  },
  {
    type: 'Sede Administrativa',
    value: 'São Paulo - SP',
    description: 'Atendimento presencial agendado',
    icon: MapPin,
    primary: false
  }
]

const courseNavigation = [
  { label: 'Público-Alvo', href: '#target-audience' },
  { label: 'Módulos do Curso', href: '#course-modules' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Investimento', href: '#offer' },
  { label: 'Perguntas Frequentes', href: '#faq' }
]

const legalNavigation = [
  { label: 'Política de Privacidade', href: '/privacy' },
  { label: 'Termos de Uso', href: '/terms' },
  { label: 'Política de Reembolso', href: '/refund' },
  { label: 'Código de Ética', href: '/ethics' }
]

const trustIndicators = [
  {
    icon: Shield,
    title: 'Dados Protegidos',
    description: 'SSL 256-bit + LGPD'
  },
  {
    icon: Award,
    title: 'Dr. Certificado',
    description: 'CRMV Ativo SP-12345'
  },
  {
    icon: CheckCircle,
    title: 'Garantia Real',
    description: '7 dias sem burocracia'
  },
  {
    icon: Clock,
    title: 'Suporte Rápido',
    description: 'Resposta em 2h úteis'
  }
]

const companyInfo = {
  name: 'Avicultura Expert',
  fullName: 'Avicultura Expert Educação Profissional Ltda.',
  cnpj: '12.345.678/0001-99',
  crmv: 'CRMV-SP 12345',
  founded: '2018',
  mission: 'Transformar conhecimento veterinário em resultados financeiros sustentáveis para produtores rurais comprometidos com a excelência em sanidade avícola.'
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
          ease: "easeInOut",
          repeat: 999999,
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-indigo-500/5"
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
            <div className="bg-black/60 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {trustIndicators.map((indicator, index) => (
                  <div key={indicator.title} className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mx-auto mb-3">
                      <indicator.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {indicator.title}
                    </h4>
                    <p className="text-white/60 text-xs">
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {companyInfo.name}
                    </h3>
                    <p className="text-emerald-400 text-sm font-semibold">
                      Curso Profissional de Sanidade Avícola
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <p className="text-white/80 leading-relaxed mb-8">
                {companyInfo.mission}
              </p>

              {/* Company Credentials */}
              <div className="bg-black/40 border border-emerald-500/20 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  Credenciais Profissionais
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="text-white/70">
                    <strong className="text-white">CNPJ:</strong> {companyInfo.cnpj}
                  </div>
                  <div className="text-white/70">
                    <strong className="text-white">CRMV:</strong> {companyInfo.crmv}
                  </div>
                  <div className="text-white/70">
                    <strong className="text-white">Fundação:</strong> {companyInfo.founded}
                  </div>
                  <div className="text-white/70">
                    <strong className="text-white">Alunos:</strong> 800+ formados
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
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-emerald-400" />
                Navegação do Curso
              </h4>
              <nav className="space-y-3">
                {courseNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-white/70 hover:text-emerald-400 transition-colors text-sm font-medium hover:translate-x-1 transition-transform duration-200"
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
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                Suporte Especializado
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={contact.type} className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    contact.primary
                      ? 'bg-emerald-500/10 border-emerald-400/30 hover:border-emerald-400/50'
                      : 'bg-black/40 border-white/10 hover:border-white/20'
                  }`}>
                    <div className="flex items-start gap-3">
                      <contact.icon className={`w-5 h-5 mt-0.5 ${
                        contact.primary ? 'text-emerald-400' : 'text-white/60'
                      }`} />
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {contact.type}
                        </p>
                        <p className={`font-bold ${
                          contact.primary ? 'text-emerald-400 text-lg' : 'text-white'
                        }`}>
                          {contact.value}
                        </p>
                        <p className="text-white/60 text-xs">
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
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Copyright & Company */}
              <div className="text-center lg:text-left">
                <p className="text-white/80 text-sm mb-2">
                  © {currentYear} {companyInfo.fullName}
                </p>
                <p className="text-white/60 text-xs">
                  Todos os direitos reservados. Material protegido por direitos autorais.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                {legalNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/70 hover:text-emerald-400 text-xs font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Final Trust Message */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-6 py-3">
                <Heart className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">
                  Comprometidos com sua transformação profissional
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Floating Trust Elements */}
      <div className="absolute inset-0 pointer-events-none">
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
    </footer>
  )
}
