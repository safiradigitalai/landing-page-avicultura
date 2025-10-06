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
          className="absolute inset-0 bg-left-bottom bg-no-repeat"
          style={{
            backgroundImage: `url('/galinhasnovas.jpeg')`,
            backgroundSize: '80%',
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

      <div className="relative z-10 flex flex-col lg:grid lg:h-screen lg:grid-cols-12">
        {/* Coluna Esquerda - Bullets Informativos */}
        <div className="relative px-6 lg:col-span-4 lg:overflow-hidden lg:pl-6">
          <div className="relative z-10 flex flex-col items-start justify-center py-8 lg:h-full lg:min-h-0 lg:px-6">
            <div className="w-full max-w-lg space-y-6 lg:space-y-8">
              {/* Header Principal - Centralizado e Maior */}
              <div className="space-y-5 text-center">
                <div className="space-y-3">
                  <h1
                    className="text-4xl leading-none font-black tracking-tight text-white lg:text-5xl"
                    style={{
                      textShadow:
                        '0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    Mentoria Completa
                  </h1>
                  <h2
                    className="text-3xl leading-none font-black text-yellow-300 lg:text-4xl"
                    style={{
                      textShadow:
                        '0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    Sanidade que Vira Lucro
                  </h2>
                </div>

                {/* Selos/Badges - Maiores e Centralizados */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  <span className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/15 px-5 py-2 text-sm font-bold tracking-wide text-white uppercase drop-shadow-xl backdrop-blur-sm">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    Online
                  </span>
                  <span className="inline-flex animate-pulse items-center gap-2 rounded-lg border-2 border-yellow-300 bg-yellow-300/20 px-5 py-2 text-sm font-bold tracking-wide text-yellow-300 uppercase drop-shadow-xl backdrop-blur-sm">
                    <svg
                      className="h-4 w-4"
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
                  <span className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/15 px-5 py-2 text-sm font-bold tracking-wide text-white uppercase drop-shadow-xl backdrop-blur-sm">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Acesso Vitalício (1ª turma)
                  </span>
                </div>
              </div>

              {/* Divisor - Centralizado */}
              <div className="mx-auto h-1.5 w-24 rounded-full bg-yellow-300 drop-shadow-lg"></div>

              {/* Exclusivo Primeira Turma */}
              <div className="space-y-4">
                <h3
                  className="text-center text-xl font-black tracking-tight text-white uppercase lg:text-2xl"
                  style={{
                    textShadow:
                      '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)',
                  }}
                >
                  Exclusivo Para a Primeira Turma
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Acesso vitalício às aulas gravadas (apenas para quem
                      entrar na 1ª turma).
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Grupo de network vitalício no WhatsApp com o expert e
                      outros produtores.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Encontros mensais exclusivos, sem custo adicional.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Consultoria individual para os 30 primeiros inscritos.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Planilha exclusiva de controle de produção e sanidade,
                      elaborada pelo expert.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Valor promocional de{' '}
                      <span className="font-bold text-yellow-300">R$ 397</span>{' '}
                      (nas próximas turmas será R$ 897).
                    </p>
                  </div>
                </div>
              </div>

              {/* Divisor */}
              <div className="mx-auto h-1.5 w-24 rounded-full bg-white/40 drop-shadow-lg"></div>

              {/* O que você vai aprender */}
              <div className="space-y-4">
                <h3
                  className="text-center text-xl font-black tracking-tight text-white uppercase lg:text-2xl"
                  style={{
                    textShadow:
                      '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)',
                  }}
                >
                  O que você vai aprender:
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Produção acima de 90% com aves saudáveis e livres de
                      doenças.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Implante um negócio lucrativo na avicultura caipira com
                      baixo investimento e pouca mão de obra.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Reduza perdas com mortalidade, doenças e canibalismo.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Aprenda a produzir suas próprias rações e economize no
                      custo de produção.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed font-medium text-white drop-shadow-md">
                      Estrutura de criação com custo mínimo, dentro das normas
                      técnicas de bem-estar animal.
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
        <div className="flex items-center px-6 py-8 lg:col-span-4 lg:py-0">
          <div className="w-full max-w-lg space-y-5 lg:space-y-6">
            {/* Header Principal */}
            <div className="space-y-4">
              <h2 className="text-2xl leading-tight font-black tracking-tight text-white drop-shadow-lg lg:text-3xl">
                Produza acima de 90% com aves saudáveis e transforme sua criação
                em lucro.
              </h2>

              <p className="text-sm leading-relaxed font-medium text-white/90 drop-shadow-sm lg:text-base">
                Descubra como transformar sua criação em um negócio lucrativo,
                reduzindo perdas e prevenindo doenças com técnicas comprovadas
                de manejo sanitário.
              </p>
            </div>

            {/* Divisor */}
            <div className="h-1 w-16 bg-yellow-300"></div>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-base font-bold tracking-wide text-white uppercase drop-shadow-md lg:text-lg">
                Faça sua pré inscrição no formulário abaixo{' '}
                <span className="text-yellow-300">(vagas limitadas)</span>
              </p>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-5 py-4 font-medium text-white placeholder-white/60 drop-shadow-sm backdrop-blur-sm transition-all focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 focus:outline-none"
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
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-5 py-4 font-medium text-white placeholder-white/60 drop-shadow-sm backdrop-blur-sm transition-all focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-lg bg-yellow-300 px-6 py-4 text-base font-black tracking-wider text-black uppercase drop-shadow-lg transition-all hover:scale-[1.02] hover:bg-yellow-400 lg:text-lg"
                  loading={isSubmitting}
                  disabled={!formData.name || !formData.email}
                >
                  {isSubmitting
                    ? 'PROCESSANDO...'
                    : 'Quero fazer minha pré inscrição agora'}
                </Button>
              </form>

              {/* Texto pós-formulário */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-center text-sm leading-relaxed text-white/80 drop-shadow-sm">
                  Após preencher o formulário, nossa equipe entrará em contato
                  pelo WhatsApp para confirmar sua inscrição.
                </p>
              </div>
            </div>

            {/* Condição Especial */}
            <div className="space-y-3 rounded-lg border-2 border-yellow-300/50 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl text-yellow-300">⚠️</div>
                <div className="space-y-2">
                  <p className="text-base leading-tight font-black text-white drop-shadow-md lg:text-lg">
                    Condição especial somente para a primeira turma:
                  </p>
                  <p className="text-sm leading-relaxed text-white drop-shadow-sm lg:text-base">
                    De{' '}
                    <span className="text-white/60 line-through">R$ 897</span>{' '}
                    por apenas{' '}
                    <span className="text-xl font-black text-yellow-300">
                      R$ 397
                    </span>
                    .
                  </p>
                  <p className="text-sm font-bold tracking-wide text-yellow-300 uppercase drop-shadow-md">
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
