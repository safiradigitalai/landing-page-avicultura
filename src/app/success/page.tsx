import { Metadata } from 'next'
import { CheckCircle, MessageCircle, Clock, Gift } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Pré-inscrição Confirmada | Sanidade Avícola na Prática',
  description: 'Sua pré-inscrição foi confirmada! Em breve entraremos em contato via WhatsApp.',
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-gray-950">
      <Container>
        <div className="pt-16 pb-24">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              🎉 Pré-inscrição{' '}
              <span className="from-green-600 to-green-500 bg-gradient-to-r bg-clip-text text-transparent">
                confirmada!
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Sua vaga na primeira turma está reservada.
              Agora é só aguardar nosso contato!
            </p>

            {/* Status Cards */}
            <div className="space-y-6 mb-12">
              <div className="bg-white dark:bg-gray-900 rounded-xl border p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full">
                      <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">
                      Próximo passo: Contato no WhatsApp
                    </h3>
                    <p className="text-muted-foreground">
                      Em até 24h você receberá uma mensagem com instruções sobre pagamento e acesso
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl border p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">
                      Prazo da oferta especial
                    </h3>
                    <p className="text-muted-foreground">
                      R$ 397 (de R$ 897) válido até [DATA] ou até completar 100 pré-inscritos
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-xl border p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                      <Gift className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">
                      Bônus garantidos para você
                    </h3>
                    <p className="text-muted-foreground">
                      ✓ Acesso vitalício exclusivo da 1ª turma<br />
                      ✓ Call individual (se você estiver entre os 50 primeiros)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                O que acontece agora?
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm font-bold">1</span>
                  <p className="text-muted-foreground">
                    <strong>Em até 24h:</strong> Mensagem no seu WhatsApp com link de pagamento seguro
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm font-bold">2</span>
                  <p className="text-muted-foreground">
                    <strong>Após pagamento:</strong> Acesso imediato à plataforma e grupo da comunidade
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm font-bold">3</span>
                  <p className="text-muted-foreground">
                    <strong>Data da 1ª live:</strong> Você será notificado com antecedência
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Dúvidas? Entre em contato: <strong>(11) 9999-9999</strong>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}