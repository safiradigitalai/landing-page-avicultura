import { createClient } from '@supabase/supabase-js'

// Validar variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  throw new Error(
    'NEXT_PUBLIC_SUPABASE_URL não está definida nas variáveis de ambiente'
  )
}

if (!supabaseAnonKey) {
  throw new Error(
    'NEXT_PUBLIC_SUPABASE_ANON_KEY não está definida nas variáveis de ambiente'
  )
}

/**
 * Cliente Supabase para uso no lado do cliente (browser)
 * Utiliza a chave anônima (ANON_KEY) que é segura para exposição pública
 *
 * Use este cliente em componentes React e Client Components
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Não precisamos de sessão para captura de leads
  },
})

/**
 * Cliente Supabase para uso no lado do servidor (API Routes, Server Components)
 * Utiliza a chave de service role que tem privilégios administrativos
 *
 * ATENÇÃO: Este cliente NÃO deve ser exposto ao cliente/browser
 * Use apenas em API routes e Server Components
 */
export const supabaseAdmin = () => {
  if (!supabaseServiceRoleKey) {
    throw new Error(
      'SUPABASE_SERVICE_ROLE_KEY não está definida nas variáveis de ambiente'
    )
  }

  return createClient(supabaseUrl!, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

/**
 * Tipos TypeScript para a tabela de leads
 */
export type Lead = {
  id: string
  nome: string
  whatsapp: string
  created_at: string
  updated_at: string
}

export type NovoLead = Omit<Lead, 'id' | 'created_at' | 'updated_at'>

/**
 * Tipo de resposta da API de leads
 */
export type RespostaApiLead = {
  sucesso: boolean
  mensagem: string
  lead?: Lead
  erro?: string
}
