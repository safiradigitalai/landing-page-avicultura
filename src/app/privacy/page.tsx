import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Sanidade Avícola na Prática',
  description:
    'Política de Privacidade e tratamento de dados pessoais conforme LGPD.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 dark:bg-gray-950">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                1. Informações que Coletamos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Coletamos as seguintes informações quando você se inscreve em
                nosso curso:
              </p>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  <strong>Nome completo:</strong> Para personalização do
                  atendimento e certificados
                </li>
                <li>
                  <strong>Número de WhatsApp:</strong> Para comunicação direta
                  sobre o curso e suporte
                </li>
                <li>
                  <strong>Dados de navegação:</strong> Para melhorar nossa
                  plataforma (cookies, IP, dispositivo)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                2. Como Usamos suas Informações
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Utilizamos seus dados pessoais para:
              </p>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>Processar sua inscrição e fornecer acesso ao curso</li>
                <li>Comunicar informações sobre o curso via WhatsApp</li>
                <li>Enviar materiais didáticos e atualizações relevantes</li>
                <li>Oferecer suporte técnico e acompanhamento pedagógico</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                3. Base Legal para Tratamento (LGPD)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Tratamos seus dados com base em:
              </p>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  <strong>Consentimento:</strong> Você autoriza expressamente o
                  tratamento ao se inscrever
                </li>
                <li>
                  <strong>Execução contratual:</strong> Necessário para
                  fornecimento do curso contratado
                </li>
                <li>
                  <strong>Interesse legítimo:</strong> Para melhorias dos
                  serviços e comunicações relevantes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                4. Compartilhamento de Dados
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>Não vendemos nem alugamos</strong> seus dados pessoais.
                Podemos compartilhar informações apenas com:
              </p>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>Processadores de pagamento (para transações seguras)</li>
                <li>Plataformas de ensino (para acesso ao conteúdo)</li>
                <li>
                  Prestadores de serviços essenciais (hospedagem, email,
                  suporte)
                </li>
                <li>Autoridades competentes (quando exigido por lei)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                5. Seus Direitos (LGPD)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Você tem os seguintes direitos sobre seus dados:
              </p>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  <strong>Acesso:</strong> Saber quais dados temos sobre você
                </li>
                <li>
                  <strong>Correção:</strong> Atualizar dados incorretos ou
                  incompletos
                </li>
                <li>
                  <strong>Eliminação:</strong> Solicitar exclusão dos seus dados
                </li>
                <li>
                  <strong>Portabilidade:</strong> Receber seus dados em formato
                  estruturado
                </li>
                <li>
                  <strong>Oposição:</strong> Se opor ao tratamento dos dados
                </li>
                <li>
                  <strong>Revogação:</strong> Retirar o consentimento a qualquer
                  momento
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                6. Segurança dos Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas e organizacionais para proteger
                seus dados:
              </p>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>Criptografia SSL/TLS para transmissão de dados</li>
                <li>Armazenamento seguro em servidores protegidos</li>
                <li>Acesso restrito apenas a funcionários autorizados</li>
                <li>Monitoramento regular de segurança</li>
                <li>Backups seguros e regulares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                7. Retenção de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos seus dados pelo período necessário para:
              </p>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  Fornecimento do curso e suporte (durante a vigência do acesso)
                </li>
                <li>
                  Cumprimento de obrigações legais (conforme legislação
                  aplicável)
                </li>
                <li>Resolução de disputas (prazo legal de 5 anos)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                8. Cookies e Tecnologias Similares
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies para:
              </p>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>Garantir o funcionamento adequado do site</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar o tráfego e melhorar a experiência</li>
                <li>Personalizar conteúdo e ofertas relevantes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                9. Alterações nesta Política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta política ocasionalmente. Mudanças
                significativas serão comunicadas por email ou WhatsApp. A data
                da última atualização sempre aparece no início deste documento.
              </p>
            </section>

            <section>
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                10. Contato
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre
                tratamento de dados:
              </p>
              <div className="rounded-lg bg-green-50 p-6 dark:bg-green-950/20">
                <p className="text-foreground mb-2 font-semibold">
                  Controlador de Dados:
                </p>
                <p className="text-muted-foreground">
                  <strong>Email:</strong> privacidade@sanidadeavicola.com.br
                  <br />
                  <strong>WhatsApp:</strong> (11) 9999-9999
                  <br />
                  <strong>Horário:</strong> Segunda a sexta, 9h às 18h
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Consentimento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao utilizar nosso site e fornecer seus dados, você declara ter
                lido e concordado com esta Política de Privacidade. Você pode
                retirar seu consentimento a qualquer momento através dos canais
                de contato indicados acima.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
