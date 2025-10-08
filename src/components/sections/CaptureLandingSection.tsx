'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function CaptureLandingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      window.location.href = '/success'
    }, 2000)
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 lg:relative lg:overflow-hidden"
      style={{
        minHeight: '-webkit-fill-available',
      }}
    >
      {/* Background Desktop - Diagonal Split */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Lado Esquerdo com Background de Galinhas P&B */}
        <div
          className="absolute inset-0 bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url('/galinhasnovas.jpeg')`,
            backgroundSize: '120%',
            filter: 'grayscale(100%) contrast(1.2) brightness(0.9)',
            clipPath: 'polygon(0% 0%, 45% 0%, 25% 100%, 0% 100%)',
          }}
        >
          {/* Overlay preto para legibilidade - mais forte */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
        </div>

        {/* Lado Verde (Direita) com clip-path diagonal */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800"
          style={{
            clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 25% 100%)',
          }}
        ></div>
      </div>

      {/* LAYOUT MOBILE */}
      <div className="relative z-10 lg:hidden">
        {/* Hero Mobile - Título + Foto lado a lado */}
        <div className="flex items-center gap-3 px-6 pt-8 pb-0">
          {/* Copy impactante à esquerda */}
          <div className="flex flex-1 flex-col justify-center space-y-3">
            {/* Badge superior */}
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-yellow-400/20 px-3 py-1 backdrop-blur-sm">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400"></div>
              <span className="text-[10px] font-bold tracking-wider text-yellow-300 uppercase">
                Vagas Limitadas
              </span>
            </div>

            {/* Título principal */}
            <div className="space-y-1.5">
              <h1
                className="text-[11px] font-bold tracking-widest text-yellow-300/90 uppercase"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                Curso Online
              </h1>
              <h2
                className="text-[22px] leading-[1.05] font-black text-white"
                style={{
                  textShadow:
                    '0 3px 12px rgba(0,0,0,0.6), 0 6px 24px rgba(0,0,0,0.4)',
                }}
              >
                Transforme
                <br />
                <span className="text-yellow-300">Galinhas</span>
                <br />
                em Renda
                <br />
                <span className="text-yellow-300">Real</span>
              </h2>
            </div>

            {/* Linha divisória */}
            <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-transparent"></div>

            {/* Subtítulo */}
            <p className="text-[11px] leading-tight font-semibold text-white/90 drop-shadow-md">
              Do planejamento à{' '}
              <span className="text-yellow-300">lucratividade real</span> na
              avicultura caipira
            </p>

            {/* Mini stats */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[11px] font-bold text-white/90">
                  10k+ alunos
                </span>
              </div>
              <div className="h-3.5 w-px bg-white/30"></div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[11px] font-bold text-white/90">
                  Desde 2012
                </span>
              </div>
            </div>
          </div>

          {/* Foto à direita - Maior e posicionada para baixo */}
          <div className="relative w-[60%] flex-shrink-0 self-end">
            <Image
              src="/herogalinha.png"
              alt="Expert em Avicultura"
              width={400}
              height={400}
              priority
              className="h-auto w-full object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* BADGES DE CREDENCIAIS - Blocos bonitos */}
        <div className="px-6 pb-4">
          <div className="flex flex-col gap-2.5">
            {/* Badge 1 */}
            <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs leading-tight font-bold text-white">
                  + de 10 mil produtores atendidos
                </p>
                <p className="text-[10px] leading-tight text-white/70">
                  Desde 2012 no campo da avicultura caipira
                </p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs leading-tight font-bold text-white">
                  + de 500 projetos implantados
                </p>
                <p className="text-[10px] leading-tight text-white/70">
                  Transformando granjas em negócios lucrativos
                </p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs leading-tight font-bold text-white">
                  Dupla formação e mestrado
                </p>
                <p className="text-[10px] leading-tight text-white/70">
                  Zootecnista, Veterinário e Mestre
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTÃO DE URGÊNCIA */}
        <div className="px-6 pb-6">
          <button
            onClick={() => {
              const formElement = document.getElementById(
                'form-inscricao-mobile'
              )
              formElement?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }}
            className="w-full rounded-lg bg-yellow-400 px-5 py-4 text-sm font-black tracking-wider text-black uppercase drop-shadow-lg transition-all hover:scale-[1.02] hover:bg-yellow-500"
          >
            Garantir Minha Vaga Agora
          </button>
        </div>

        {/* Seção "O que você vai aprender" - MOBILE */}
        <div className="px-6 pb-6">
          <h3
            className="mb-3 text-base font-black tracking-tight text-white uppercase"
            style={{
              textShadow:
                '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            O que você vai aprender:
          </h3>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                Como alcançar até 90% de produtividade, mantendo suas aves
                saudáveis e livres de doenças.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                O método certo para transformar sua criação em um negócio
                lucrativo, com baixo investimento e pouca mão de obra.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                Estratégias práticas para reduzir perdas por mortalidade,
                doenças e canibalismo.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                Como produzir suas próprias rações e economizar no custo da
                alimentação.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                O passo a passo para estruturar uma criação eficiente e dentro
                das normas de bem-estar animal.
              </p>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="px-6 pb-4">
          <div className="h-1 w-20 rounded-full bg-white/40 drop-shadow-lg"></div>
        </div>

        {/* Exclusivo Primeira Turma - MOBILE */}
        <div className="px-6 pb-6">
          <h3
            className="mb-3 text-base font-black tracking-tight text-white uppercase"
            style={{
              textShadow:
                '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            Exclusivo Para a{' '}
            <span className="text-yellow-300">Primeira Turma</span>
          </h3>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                Acesso vitalício às aulas gravadas (somente para quem entrar na{' '}
                <span className="font-bold text-yellow-300">1ª turma</span>).
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                Grupo de network vitalício no WhatsApp com o expert e outros
                produtores.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                Encontros mensais exclusivos, sem custo adicional.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                Sorteio de 10 consultorias individuais entre os primeiros
                inscritos.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                Planilha exclusiva de controle de produção e sanidade, elaborada
                pelo expert.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md">
                Valor promocional de{' '}
                <span className="font-bold text-yellow-300">R$ 497</span> (nas
                próximas turmas será R$ 997).
              </p>
            </div>
          </div>
        </div>

        {/* FORMULÁRIO MOBILE - ID PARA ÂNCORA */}
        <div id="form-inscricao-mobile" className="px-6 pb-8">
          {/* Título e descrição do formulário */}
          <div className="mb-4">
            <div className="relative mb-3">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/20 to-transparent blur-sm"></div>
              <h3 className="relative rounded-r-lg border-l-4 border-yellow-400 bg-gradient-to-r from-black/30 to-transparent py-2 pl-4 text-base leading-tight font-black tracking-tight text-white drop-shadow-lg backdrop-blur-sm">
                Construa um negócio de galinhas caipiras que dá resultado e gera
                renda de verdade.
              </h3>
            </div>

            <p className="mb-3 text-sm leading-relaxed font-medium text-white/95 drop-shadow-md">
              Descubra o passo a passo para transformar sua criação em um
              negócio lucrativo — do planejamento ao manejo — com baixo
              investimento, sanidade garantida e resultados consistentes.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-normal text-white drop-shadow-md">
              Faça sua pré-inscrição no formulário abaixo{' '}
              <span className="font-bold text-yellow-300">
                (vagas limitadas)
              </span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-medium text-white placeholder-white/60 drop-shadow-sm backdrop-blur-sm transition-all focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Digite seu número de WhatsApp"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                  className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-medium text-white placeholder-white/60 drop-shadow-sm backdrop-blur-sm transition-all focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-lg bg-yellow-400 px-5 py-3.5 text-sm font-black tracking-wider text-black uppercase drop-shadow-lg transition-all hover:scale-[1.02] hover:bg-yellow-500"
                loading={isSubmitting}
              >
                {isSubmitting
                  ? 'PROCESSANDO...'
                  : 'Quero fazer minha pré inscrição agora'}
              </Button>
            </form>

            <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <p className="text-center text-xs leading-relaxed text-white/80 drop-shadow-sm">
                Após preencher o formulário, nossa equipe entrará em contato
                pelo WhatsApp para confirmar sua inscrição.
              </p>
            </div>
          </div>

          {/* Condição Especial */}
          <div className="mt-4 space-y-2 rounded-lg border-2 border-yellow-300/50 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-3.5 backdrop-blur-sm">
            <div className="flex items-start gap-2.5">
              <div className="flex-shrink-0 text-xl text-yellow-300">⚠️</div>
              <div className="space-y-1.5">
                <p className="text-sm leading-tight font-black text-white drop-shadow-md">
                  Condição especial somente para a{' '}
                  <span className="text-yellow-300">primeira turma</span>:
                </p>
                <p className="text-xs leading-relaxed text-white drop-shadow-sm">
                  De <span className="text-white/60 line-through">R$ 997</span>{' '}
                  por apenas{' '}
                  <span className="text-lg font-black text-yellow-300">
                    R$ 497
                  </span>{' '}
                  ou até{' '}
                  <span className="font-bold text-yellow-300">
                    12x de R$ 51,45
                  </span>
                  .
                </p>
                <p className="text-xs font-bold tracking-wide text-yellow-300 uppercase drop-shadow-md">
                  Essa condição nunca mais será repetida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LAYOUT DESKTOP */}
      <div className="relative z-10 hidden lg:grid lg:h-screen lg:grid-cols-12">
        {/* Coluna Esquerda - Bullets Informativos */}
        <div className="relative px-6 lg:col-span-4 lg:overflow-hidden lg:pl-6">
          <div className="relative z-10 flex flex-col items-start justify-center py-8 lg:h-full lg:min-h-0 lg:px-4 xl:px-6">
            <div className="w-full max-w-lg space-y-4 lg:space-y-5">
              {/* Header Principal - Alinhado à Esquerda */}
              <div className="space-y-3 text-left">
                <div className="space-y-1.5">
                  <h1
                    className="text-lg leading-tight font-bold tracking-tight text-white lg:text-xl"
                    style={{
                      textShadow:
                        '0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    Curso Completo
                  </h1>
                  <h2
                    className="text-2xl leading-tight font-black text-white lg:text-3xl xl:text-4xl"
                    style={{
                      textShadow:
                        '0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    Ganhando <span className="text-yellow-300">Dinheiro</span>{' '}
                    com{' '}
                    <span className="text-yellow-300">Galinhas Caipiras</span>
                  </h2>
                </div>

                {/* Selos/Badges - Alinhados à Esquerda */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/40 bg-white/15 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase drop-shadow-lg backdrop-blur-sm">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    Online
                  </span>
                  <span className="inline-flex animate-pulse items-center gap-1.5 rounded-md border border-yellow-300 bg-yellow-300/20 px-3 py-1 text-xs font-bold tracking-wide text-yellow-300 uppercase drop-shadow-lg backdrop-blur-sm">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Vagas Limitadas
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/40 bg-white/15 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase drop-shadow-lg backdrop-blur-sm">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Acesso Vitalício (1ª turma)
                  </span>
                </div>
              </div>

              {/* Divisor */}
              <div className="h-1 w-20 rounded-full bg-yellow-300 drop-shadow-lg"></div>

              {/* O que você vai aprender */}
              <div className="space-y-2.5">
                <h3
                  className="text-left text-base font-black tracking-tight text-white uppercase lg:text-lg"
                  style={{
                    textShadow:
                      '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)',
                  }}
                >
                  O que você vai aprender:
                </h3>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Garantir produção acima de 90% com aves saudáveis e livres
                      de doenças.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Implantar um negócio lucrativo na avicultura caipira com
                      baixo investimento e pouca mão de obra.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Reduzir perdas por mortalidade, doenças e canibalismo.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Produzir suas próprias rações e economizar no custo de
                      produção.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Estruturar uma criação eficiente e sustentável, dentro das
                      normas de bem-estar animal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divisor */}
              <div className="h-1 w-20 rounded-full bg-white/40 drop-shadow-lg"></div>

              {/* Exclusivo Primeira Turma */}
              <div className="space-y-2.5">
                <h3
                  className="text-left text-base font-black tracking-tight text-white uppercase lg:text-lg"
                  style={{
                    textShadow:
                      '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)',
                  }}
                >
                  Exclusivo Para a{' '}
                  <span className="text-yellow-300">Primeira Turma</span>
                </h3>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Acesso vitalício às aulas gravadas (somente para quem
                      entrar na{' '}
                      <span className="font-bold text-yellow-300">
                        1ª turma
                      </span>
                      ).
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Grupo de network vitalício no WhatsApp com o expert e
                      outros produtores.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Encontros mensais exclusivos, sem custo adicional.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Sorteio de 10 consultorias individuais entre os primeiros
                      inscritos.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Planilha exclusiva de controle de produção e sanidade,
                      elaborada pelo expert.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed font-normal text-white/95 drop-shadow-md lg:text-sm">
                      Valor promocional de{' '}
                      <span className="font-bold text-yellow-300">R$ 497</span>{' '}
                      (nas próximas turmas será R$ 997).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Central - Avatar do Palestrante */}
        <div className="relative flex items-center justify-center py-8 lg:col-span-4 lg:h-full lg:items-end lg:py-0">
          <div className="relative mx-auto flex w-full max-w-sm items-center lg:h-full lg:max-w-none lg:items-end lg:overflow-hidden">
            <div className="relative w-full">
              <Image
                src="/herogalinha.png"
                alt="Dr. Veterinário Especialista em Avicultura"
                width={800}
                height={900}
                priority
                className="h-[450px] w-full object-contain drop-shadow-2xl lg:h-[90vh] lg:scale-100"
              />
              {/* Border bottom elegante para indicar corte */}
              <div
                className="absolute right-0 left-0"
                style={{ bottom: '-4px' }}
              >
                <div className="mx-auto h-1 w-96 bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita - Formulário e CTAs */}
        <div className="flex items-center px-6 py-8 lg:col-span-4 lg:px-4 lg:py-0 xl:px-6">
          <div className="w-full max-w-lg space-y-4">
            {/* Header Principal */}
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/20 to-transparent blur-sm"></div>
                <h2 className="relative rounded-r-lg border-l-4 border-yellow-400 bg-gradient-to-r from-black/30 to-transparent py-2 pl-4 text-xl leading-tight font-black tracking-tight text-white drop-shadow-lg backdrop-blur-sm lg:text-2xl xl:text-3xl">
                  Construa um negócio de galinhas caipiras que dá resultado e
                  gera renda de verdade.
                </h2>
              </div>

              <p className="text-sm leading-relaxed font-medium text-white/95 drop-shadow-md lg:text-base">
                Descubra o passo a passo para transformar sua criação em um
                negócio lucrativo — do planejamento ao manejo — com baixo
                investimento, sanidade garantida e resultados consistentes.
              </p>
            </div>

            {/* Divisor */}
            <div className="h-0.5 w-12 bg-yellow-300"></div>

            {/* Call to Action */}
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-normal text-white drop-shadow-md lg:text-sm">
                Faça sua pré-inscrição no formulário abaixo{' '}
                <span className="font-bold text-yellow-300">
                  (vagas limitadas)
                </span>
              </p>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-2.5">
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-medium text-white placeholder-white/60 drop-shadow-sm backdrop-blur-sm transition-all focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Digite seu número de WhatsApp"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-medium text-white placeholder-white/60 drop-shadow-sm backdrop-blur-sm transition-all focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-lg bg-yellow-400 px-5 py-3.5 text-sm font-black tracking-wider text-black uppercase drop-shadow-lg transition-all hover:scale-[1.02] hover:bg-yellow-500 lg:text-base"
                  loading={isSubmitting}
                >
                  {isSubmitting
                    ? 'PROCESSANDO...'
                    : 'Quero fazer minha pré inscrição agora'}
                </Button>
              </form>

              {/* Texto pós-formulário */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                <p className="text-center text-xs leading-relaxed text-white/80 drop-shadow-sm lg:text-sm">
                  Após preencher o formulário, nossa equipe entrará em contato
                  pelo WhatsApp para confirmar sua inscrição.
                </p>
              </div>
            </div>

            {/* Condição Especial */}
            <div className="space-y-2 rounded-lg border-2 border-yellow-300/50 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-3.5 backdrop-blur-sm">
              <div className="flex items-start gap-2.5">
                <div className="flex-shrink-0 text-xl text-yellow-300">⚠️</div>
                <div className="space-y-1.5">
                  <p className="text-sm leading-tight font-black text-white drop-shadow-md lg:text-base">
                    Condição especial somente para a{' '}
                    <span className="text-yellow-300">primeira turma</span>:
                  </p>
                  <p className="text-xs leading-relaxed text-white drop-shadow-sm lg:text-sm">
                    De{' '}
                    <span className="text-white/60 line-through">R$ 997</span>{' '}
                    por apenas{' '}
                    <span className="text-lg font-black text-yellow-300">
                      R$ 497
                    </span>{' '}
                    ou até{' '}
                    <span className="font-bold text-yellow-300">
                      12x de R$ 51,45
                    </span>
                    .
                  </p>
                  <p className="text-xs font-bold tracking-wide text-yellow-300 uppercase drop-shadow-md">
                    Essa condição nunca mais será repetida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
