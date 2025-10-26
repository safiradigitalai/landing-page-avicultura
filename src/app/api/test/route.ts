import { NextResponse } from 'next/server'

/**
 * GET /api/test
 * Endpoint de diagnóstico para verificar configuração
 */
export async function GET() {
  const diagnostico = {
    timestamp: new Date().toISOString(),
    variaveis: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL
        ? '✅ Configurada'
        : '❌ NÃO configurada',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        ? '✅ Configurada'
        : '❌ NÃO configurada',
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY
        ? '✅ Configurada'
        : '❌ NÃO configurada',
    },
    valores: {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL || null,
      anonKeyLength: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0,
      serviceKeyLength: process.env.SUPABASE_SERVICE_ROLE_KEY?.length || 0,
    },
    node_env: process.env.NODE_ENV,
    vercel_env: process.env.VERCEL_ENV || 'local',
  }

  return NextResponse.json(diagnostico, { status: 200 })
}
