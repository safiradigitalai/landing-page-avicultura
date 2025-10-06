'use client'

import { useState } from 'react'
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
            clipPath: 'polygon(0% 0%, 45% 0%, 25% 100%, 0% 100%)'
          }}
        >
          {/* Overlay preto para legibilidade - mais forte */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
        </div>

        {/* Lado Verde (Direita) com clip-path diagonal */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800"
          style={{
            clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 25% 100%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 lg:h-screen">
        {/* Coluna Esquerda - Bullets Informativos */}
        <div className="lg:col-span-4 relative lg:overflow-hidden px-6 lg:pl-6">
          <div className="relative z-10 flex flex-col justify-center items-start py-8 lg:h-full lg:px-6 lg:min-h-0">
            <div className="space-y-6 lg:space-y-8 max-w-lg w-full">

              {/* Header Principal - Centralizado e Maior */}
              <div className="space-y-5 text-center">
                <div className="space-y-3">
                  <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)' }}>
                    Mentoria Completa
                  </h1>
                  <h2 className="text-3xl lg:text-4xl font-black text-yellow-300 leading-none" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)' }}>
                    Sanidade que Vira Lucro
                  </h2>
                </div>

                {/* Selos/Badges - Maiores e Centralizados */}
                <div className="flex flex-wrap justify-center items-center gap-3 pt-3">
                  <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-sm border-2 border-white/40 rounded-lg text-white text-sm font-bold uppercase tracking-wide drop-shadow-xl">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    Online
                  </span>
                  <span className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-300/20 backdrop-blur-sm border-2 border-yellow-300 rounded-lg text-yellow-300 text-sm font-bold uppercase tracking-wide drop-shadow-xl animate-pulse">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Vagas Limitadas
                  </span>
                  <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-sm border-2 border-white/40 rounded-lg text-white text-sm font-bold uppercase tracking-wide drop-shadow-xl">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Acesso Vitalício (1ª turma)
                  </span>
                </div>
              </div>

              {/* Divisor - Centralizado */}
              <div className="w-24 h-1.5 bg-yellow-300 mx-auto rounded-full drop-shadow-lg"></div>

              {/* Exclusivo Primeira Turma */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-black text-white text-center uppercase tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)' }}>
                  Exclusivo Para a Primeira Turma
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Acesso vitalício às aulas gravadas (apenas para quem entrar na 1ª turma).
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Grupo de network vitalício no WhatsApp com o expert e outros produtores.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Encontros mensais exclusivos, sem custo adicional.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Consultoria individual para os 30 primeiros inscritos.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Planilha exclusiva de controle de produção e sanidade, elaborada pelo expert.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Valor promocional de <span className="text-yellow-300 font-bold">R$ 397</span> (nas próximas turmas será R$ 897).
                    </p>
                  </div>
                </div>
              </div>

              {/* Divisor */}
              <div className="w-24 h-1.5 bg-white/40 mx-auto rounded-full drop-shadow-lg"></div>

              {/* O que você vai aprender */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-black text-white text-center uppercase tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)' }}>
                  O que você vai aprender:
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Produção acima de 90% com aves saudáveis e livres de doenças.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Implante um negócio lucrativo na avicultura caipira com baixo investimento e pouca mão de obra.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Reduza perdas com mortalidade, doenças e canibalismo.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Aprenda a produzir suas próprias rações e economize no custo de produção.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                      Estrutura de criação com custo mínimo, dentro das normas técnicas de bem-estar animal.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Coluna Central - Avatar do Palestrante */}
        <div className="lg:col-span-4 flex items-center justify-center relative py-8 lg:h-full lg:py-0 lg:items-end">
          <div className="w-full max-w-sm lg:max-w-none mx-auto relative flex items-center lg:items-end lg:h-full lg:overflow-hidden">
            <div className="relative w-full">
              <img
                src="/herogalinha.png"
                alt="Dr. Veterinário Especialista em Avicultura"
                className="w-full h-auto object-contain drop-shadow-2xl h-[450px] lg:h-[90vh] lg:scale-100"
              />
              {/* Border bottom elegante para indicar corte */}
              <div className="absolute left-0 right-0" style={{ bottom: '-4px' }}>
                <div className="mx-auto w-96 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita - Formulário e CTAs */}
        <div className="lg:col-span-4 flex items-center px-6 py-8 lg:py-0">
          <div className="w-full max-w-lg space-y-5 lg:space-y-6">

            {/* Header Principal */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                Produza acima de 90% com aves saudáveis e transforme sua criação em lucro.
              </h2>

              <p className="text-white/90 text-sm lg:text-base font-medium leading-relaxed drop-shadow-sm">
                Descubra como transformar sua criação em um negócio lucrativo, reduzindo perdas e prevenindo doenças com técnicas comprovadas de manejo sanitário.
              </p>
            </div>

            {/* Divisor */}
            <div className="w-16 h-1 bg-yellow-300"></div>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-white font-bold text-base lg:text-lg uppercase tracking-wide drop-shadow-md">
                Faça sua pré inscrição no formulário abaixo <span className="text-yellow-300">(vagas limitadas)</span>
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
                    className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 font-medium focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20 transition-all drop-shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Digite seu número de WhatsApp"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                    className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 font-medium focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20 transition-all drop-shadow-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-black py-4 px-6 text-base lg:text-lg uppercase tracking-wider rounded-lg transition-all drop-shadow-lg hover:scale-[1.02]"
                  loading={isSubmitting}
                  disabled={!formData.name || !formData.email}
                >
                  {isSubmitting ? 'PROCESSANDO...' : 'Quero fazer minha pré inscrição agora'}
                </Button>
              </form>

              {/* Texto pós-formulário */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="text-white/80 text-sm text-center leading-relaxed drop-shadow-sm">
                  Após preencher o formulário, nossa equipe entrará em contato pelo WhatsApp para confirmar sua inscrição.
                </p>
              </div>
            </div>

            {/* Condição Especial */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border-2 border-yellow-300/50 rounded-lg p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-yellow-300 text-2xl">⚠️</div>
                <div className="space-y-2">
                  <p className="text-white font-black text-base lg:text-lg leading-tight drop-shadow-md">
                    Condição especial somente para a primeira turma:
                  </p>
                  <p className="text-white text-sm lg:text-base leading-relaxed drop-shadow-sm">
                    De <span className="line-through text-white/60">R$ 897</span> por apenas <span className="text-yellow-300 font-black text-xl">R$ 397</span>.
                  </p>
                  <p className="text-yellow-300 font-bold text-sm uppercase tracking-wide drop-shadow-md">
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