-- =====================================================
-- FIX: POLÍTICAS RLS PARA API DE LEADS
-- Execute este script no Supabase SQL Editor
-- =====================================================

-- Remover políticas antigas (se existirem)
DROP POLICY IF EXISTS "Permitir insert anônimo de leads" ON leads;
DROP POLICY IF EXISTS "Permitir select de leads para usuários autenticados" ON leads;
DROP POLICY IF EXISTS "Permitir update de leads para usuários autenticados" ON leads;
DROP POLICY IF EXISTS "Permitir delete de leads para usuários autenticados" ON leads;

-- =====================================================
-- NOVA CONFIGURAÇÃO - MAIS PERMISSIVA PARA API
-- =====================================================

-- Política: Permitir INSERT para todos (público)
-- A validação é feita na API, então podemos permitir INSERT público
CREATE POLICY "Permitir insert público de leads"
ON leads
FOR INSERT
TO public
WITH CHECK (true);

-- Política: Permitir SELECT para todos
-- Isso permite que a API (service_role) possa verificar duplicatas
CREATE POLICY "Permitir select público de leads"
ON leads
FOR SELECT
TO public
USING (true);

-- Política: Permitir UPDATE apenas para usuários autenticados (admin)
CREATE POLICY "Permitir update de leads para autenticados"
ON leads
FOR UPDATE
TO authenticated
USING (true);

-- Política: Permitir DELETE apenas para usuários autenticados (admin)
CREATE POLICY "Permitir delete de leads para autenticados"
ON leads
FOR DELETE
TO authenticated
USING (true);

-- =====================================================
-- VERIFICAÇÃO
-- =====================================================

-- Listar todas as políticas da tabela leads
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'leads';

-- =====================================================
-- INSTRUÇÕES
-- =====================================================

/*
Este script corrige as políticas RLS para permitir que a API funcione corretamente.

MUDANÇAS:
1. INSERT agora é público (validação é feita na API)
2. SELECT agora é público (necessário para verificar duplicatas)
3. UPDATE e DELETE permanecem restritos a usuários autenticados

SEGURANÇA:
- A API valida todos os dados antes de inserir
- A SERVICE_ROLE_KEY bypass o RLS de qualquer forma
- As operações críticas (UPDATE/DELETE) permanecem protegidas

ALTERNATIVA (MAIS RESTRITIVA):
Se você quiser manter mais restrito, pode usar apenas para service_role:

DROP POLICY IF EXISTS "Permitir insert público de leads" ON leads;
DROP POLICY IF EXISTS "Permitir select público de leads" ON leads;

CREATE POLICY "Permitir insert service_role"
ON leads
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Permitir select service_role"
ON leads
FOR SELECT
TO service_role
USING (true);

Mas isso é redundante, pois service_role já bypassa RLS.
*/
