-- =====================================================
-- SCRIPT SQL PARA CONFIGURAÇÃO DA TABELA DE LEADS
-- Curso Veterinário Aviário
-- =====================================================

-- Criar tabela de leads
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  whatsapp VARCHAR(20) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Comentários descritivos na tabela
COMMENT ON TABLE leads IS 'Tabela para armazenar leads capturados da landing page do curso veterinário aviário';
COMMENT ON COLUMN leads.id IS 'Identificador único do lead (UUID)';
COMMENT ON COLUMN leads.nome IS 'Nome completo do lead';
COMMENT ON COLUMN leads.whatsapp IS 'Número de WhatsApp do lead (com DDD)';
COMMENT ON COLUMN leads.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN leads.updated_at IS 'Data e hora da última atualização';

-- Criar índice único para evitar WhatsApp duplicado
CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_whatsapp_unique
ON leads(whatsapp);

-- Criar índice para otimizar buscas por data de criação
CREATE INDEX IF NOT EXISTS idx_leads_created_at
ON leads(created_at DESC);

-- Criar índice para buscas por nome (case-insensitive)
CREATE INDEX IF NOT EXISTS idx_leads_nome
ON leads(LOWER(nome));

-- Função para atualizar automaticamente o campo updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at automaticamente
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- POLÍTICAS DE SEGURANÇA (RLS - Row Level Security)
-- =====================================================

-- Habilitar Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política: Permitir INSERT anônimo (captura de leads via formulário público)
CREATE POLICY "Permitir insert anônimo de leads"
ON leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Política: Permitir SELECT apenas para usuários autenticados (admin)
CREATE POLICY "Permitir select de leads para usuários autenticados"
ON leads
FOR SELECT
TO authenticated
USING (true);

-- Política: Permitir UPDATE apenas para usuários autenticados
CREATE POLICY "Permitir update de leads para usuários autenticados"
ON leads
FOR UPDATE
TO authenticated
USING (true);

-- Política: Permitir DELETE apenas para usuários autenticados
CREATE POLICY "Permitir delete de leads para usuários autenticados"
ON leads
FOR DELETE
TO authenticated
USING (true);

-- =====================================================
-- VIEW PARA ESTATÍSTICAS (OPCIONAL)
-- =====================================================

CREATE OR REPLACE VIEW leads_stats AS
SELECT
  COUNT(*) AS total_leads,
  COUNT(DISTINCT DATE(created_at)) AS dias_com_capturas,
  DATE(created_at) AS data_captura,
  COUNT(*) AS leads_do_dia
FROM leads
GROUP BY DATE(created_at)
ORDER BY data_captura DESC;

-- Comentário na view
COMMENT ON VIEW leads_stats IS 'Estatísticas de captura de leads por dia';

-- =====================================================
-- INSTRUÇÕES DE USO
-- =====================================================

/*
COMO EXECUTAR ESTE SCRIPT NO SUPABASE:

1. Acesse o Supabase Dashboard: https://qhzjjmmehmtaqjlrligb.supabase.co
2. Vá para a seção "SQL Editor" no menu lateral
3. Clique em "New Query"
4. Cole todo o conteúdo deste arquivo
5. Clique em "Run" ou pressione Ctrl+Enter

VERIFICAR SE FOI CRIADO CORRETAMENTE:

1. Vá para "Table Editor" no menu lateral
2. Verifique se a tabela "leads" aparece na lista
3. Clique na tabela para ver sua estrutura
4. Vá para "Database" > "Policies" para ver as políticas RLS

TESTAR INSERÇÃO MANUAL:

INSERT INTO leads (nome, whatsapp)
VALUES ('Teste Lead', '11999999999');

VERIFICAR DUPLICATAS (deve dar erro):

INSERT INTO leads (nome, whatsapp)
VALUES ('Outro Nome', '11999999999');
-- Erro esperado: duplicate key value violates unique constraint "idx_leads_whatsapp_unique"

CONSULTAR TODOS OS LEADS:

SELECT * FROM leads ORDER BY created_at DESC;

CONSULTAR ESTATÍSTICAS:

SELECT * FROM leads_stats;
*/
