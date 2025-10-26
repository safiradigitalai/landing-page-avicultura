import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, type RespostaApiLead } from '@/lib/supabase';

/**
 * Valida formato de WhatsApp
 * Aceita formatos: (11) 99999-9999, 11999999999, +5511999999999
 */
function validarWhatsApp(whatsapp: string): boolean {
  // Remove caracteres não numéricos
  const apenasNumeros = whatsapp.replace(/\D/g, '');

  // Valida: deve ter entre 10 e 13 dígitos (com ou sem código do país)
  // 10-11 dígitos: número brasileiro sem código do país
  // 12-13 dígitos: número brasileiro com código do país (55)
  return apenasNumeros.length >= 10 && apenasNumeros.length <= 13;
}

/**
 * Normaliza WhatsApp para formato consistente (apenas números)
 */
function normalizarWhatsApp(whatsapp: string): string {
  return whatsapp.replace(/\D/g, '');
}

/**
 * Valida nome (mínimo 2 caracteres)
 */
function validarNome(nome: string): boolean {
  return nome.trim().length >= 2;
}

/**
 * POST /api/leads
 * Cria um novo lead no Supabase
 */
export async function POST(request: NextRequest) {
  try {
    // Parse do body
    const body = await request.json();
    const { nome, whatsapp } = body;

    // Validações de entrada
    if (!nome || !whatsapp) {
      return NextResponse.json<RespostaApiLead>(
        {
          sucesso: false,
          mensagem: 'Nome e WhatsApp são obrigatórios',
          erro: 'CAMPOS_OBRIGATORIOS',
        },
        { status: 400 }
      );
    }

    // Validar nome
    if (!validarNome(nome)) {
      return NextResponse.json<RespostaApiLead>(
        {
          sucesso: false,
          mensagem: 'Nome deve ter no mínimo 2 caracteres',
          erro: 'NOME_INVALIDO',
        },
        { status: 400 }
      );
    }

    // Validar WhatsApp
    if (!validarWhatsApp(whatsapp)) {
      return NextResponse.json<RespostaApiLead>(
        {
          sucesso: false,
          mensagem: 'WhatsApp inválido. Digite um número válido com DDD',
          erro: 'WHATSAPP_INVALIDO',
        },
        { status: 400 }
      );
    }

    // Normalizar WhatsApp
    const whatsappNormalizado = normalizarWhatsApp(whatsapp);

    // Criar cliente admin do Supabase
    const supabase = supabaseAdmin();

    // Verificar se já existe um lead com este WhatsApp (validação de duplicata)
    const { data: leadExistente, error: erroConsulta } = await supabase
      .from('leads')
      .select('*')
      .eq('whatsapp', whatsappNormalizado)
      .single();

    // Se encontrou um lead existente
    if (leadExistente && !erroConsulta) {
      return NextResponse.json<RespostaApiLead>(
        {
          sucesso: false,
          mensagem: 'Este WhatsApp já está cadastrado. Você já garantiu sua vaga!',
          erro: 'WHATSAPP_DUPLICADO',
        },
        { status: 409 } // 409 Conflict
      );
    }

    // Inserir novo lead
    const { data: novoLead, error: erroInsercao } = await supabase
      .from('leads')
      .insert({
        nome: nome.trim(),
        whatsapp: whatsappNormalizado,
      })
      .select()
      .single();

    // Tratar erro de inserção
    if (erroInsercao) {
      console.error('Erro ao inserir lead no Supabase:', erroInsercao);

      // Se o erro for de violação de unique constraint (duplicata)
      if (erroInsercao.code === '23505') {
        return NextResponse.json<RespostaApiLead>(
          {
            sucesso: false,
            mensagem: 'Este WhatsApp já está cadastrado. Você já garantiu sua vaga!',
            erro: 'WHATSAPP_DUPLICADO',
          },
          { status: 409 }
        );
      }

      // Erro genérico
      return NextResponse.json<RespostaApiLead>(
        {
          sucesso: false,
          mensagem: 'Erro ao processar sua solicitação. Tente novamente.',
          erro: 'ERRO_INTERNO',
        },
        { status: 500 }
      );
    }

    // Sucesso!
    return NextResponse.json<RespostaApiLead>(
      {
        sucesso: true,
        mensagem: 'Lead cadastrado com sucesso! Em breve entraremos em contato.',
        lead: novoLead,
      },
      { status: 201 } // 201 Created
    );
  } catch (erro) {
    console.error('Erro na API de leads:', erro);

    return NextResponse.json<RespostaApiLead>(
      {
        sucesso: false,
        mensagem: 'Erro inesperado ao processar sua solicitação',
        erro: 'ERRO_INESPERADO',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/leads
 * Lista todos os leads (protegido - apenas para admin)
 */
export async function GET() {
  try {
    const supabase = supabaseAdmin();

    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao buscar leads:', error);
      return NextResponse.json(
        { sucesso: false, mensagem: 'Erro ao buscar leads' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { sucesso: true, leads, total: leads?.length || 0 },
      { status: 200 }
    );
  } catch (erro) {
    console.error('Erro na API de leads (GET):', erro);
    return NextResponse.json(
      { sucesso: false, mensagem: 'Erro inesperado' },
      { status: 500 }
    );
  }
}
