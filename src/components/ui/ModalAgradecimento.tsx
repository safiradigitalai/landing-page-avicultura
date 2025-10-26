'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ModalAgradecimentoProps {
  aberto: boolean;
  aoFechar: () => void;
  nome?: string;
}

/**
 * Modal de agradecimento após captura de lead
 * Design glass-morphism seguindo padrões da landing page
 */
export function ModalAgradecimento({ aberto, aoFechar, nome }: ModalAgradecimentoProps) {
  return (
    <AnimatePresence>
      {aberto && (
        <>
          {/* Backdrop com blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={aoFechar}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-md rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão de fechar */}
              <button
                onClick={aoFechar}
                className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Ícone de sucesso com animação */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
              >
                <CheckCircle2 className="h-12 w-12 text-green-600" strokeWidth={2.5} />
              </motion.div>

              {/* Título */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-3 text-center text-2xl font-bold text-gray-900"
              >
                {nome ? `Parabéns, ${nome.split(' ')[0]}!` : 'Parabéns!'}
              </motion.h2>

              {/* Mensagem */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6 text-center text-gray-600"
              >
                Sua vaga foi <strong className="text-green-600">garantida com sucesso</strong>!
                <br />
                <br />
                Em breve entraremos em contato pelo WhatsApp para enviar todos os detalhes do
                curso e dar boas-vindas à primeira turma do{' '}
                <strong>Curso Veterinário Aviário</strong>.
              </motion.p>

              {/* Informações adicionais */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6 rounded-xl border border-amber-200 bg-amber-50/50 p-4"
              >
                <p className="mb-3 text-sm font-semibold text-amber-900">Próximos passos:</p>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600"></span>
                    <span>Adicione nosso número nos seus contatos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600"></span>
                    <span>Fique de olho no WhatsApp nas próximas horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600"></span>
                    <span>Prepare-se para transformar sua criação!</span>
                  </li>
                </ul>
              </motion.div>

              {/* Botão de ação */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button onClick={aoFechar} size="lg" className="w-full">
                  Entendido!
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
