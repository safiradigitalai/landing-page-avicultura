'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  Stethoscope,
  CheckCircle,
  Shield,
  Award,
  Users,
  BookOpen,
  Target,
  Zap,
  AlertTriangle,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { NavigationItem } from '@/types'

const navigationItems: NavigationItem[] = [
  { label: 'Para Quem', href: '#target-audience', icon: Target },
  { label: 'O Problema', href: '#problem', icon: AlertTriangle },
  { label: 'Módulos', href: '#course-modules', icon: BookOpen },
  { label: 'Como Funciona', href: '#how-it-works', icon: Zap },
  { label: 'Especialista', href: '#expert', icon: Award },
  { label: 'Oferta', href: '#offer', icon: Users },
  { label: 'FAQ', href: '#faq', icon: Shield },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Premium Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/80 backdrop-blur-2xl" />

      {/* Subtle Border Glow */}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { left: 15, delay: 0, duration: 12 },
          { left: 35, delay: 2, duration: 15 },
          { left: 65, delay: 1, duration: 18 },
          { left: 85, delay: 3, duration: 14 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -8, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: 999999,
              ease: 'easeInOut',
            }}
            className="absolute top-4 h-1 w-1 rounded-full bg-emerald-400/40 blur-sm"
            style={{ left: `${particle.left}%` }}
          />
        ))}
      </div>

      <Container className="relative">
        <nav className="flex items-center justify-between py-6">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              {/* Logo Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-md" />

              {/* Main Logo */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>

              {/* Professional Badge */}
              <div className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-yellow-500 to-yellow-600">
                <Award className="h-2.5 w-2.5 text-white" />
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="text-xl font-black tracking-tight text-white">
                Avicultura Expert
              </div>
              <div className="text-xs font-semibold tracking-wide text-emerald-400">
                Curso Profissional de Sanidade Avícola
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Simplified */}
          <div className="hidden items-center space-x-8 xl:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium whitespace-nowrap text-white/80 transition-colors hover:text-emerald-400"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="#offer"
              className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3 font-semibold whitespace-nowrap text-white shadow-xl transition-all duration-300 hover:from-emerald-500 hover:to-emerald-600"
            >
              <CheckCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Garantir Vaga</span>
              <span className="sm:hidden">Inscrever</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-xl border border-white/10 bg-black/40 p-2 text-white backdrop-blur-xl xl:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl xl:hidden"
          >
            <Container>
              <div className="space-y-4 py-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 py-3 text-base font-medium text-white/80 transition-colors hover:text-emerald-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && (
                      <item.icon className="h-5 w-5 text-emerald-400" />
                    )}
                    {item.label}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="border-t border-white/10 pt-4">
                  <Link
                    href="#offer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/20 bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4 font-bold text-white shadow-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CheckCircle className="h-5 w-5" />
                    Garantir Minha Vaga
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
