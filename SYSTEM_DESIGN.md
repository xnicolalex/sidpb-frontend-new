# SIDPB Design System

**Projeto:** SIDPB — Sistema de Informação de Doenças Parasitárias do Brasil

**Versão:** 1.0

---

# Filosofia

SIDPB não é um dashboard corporativo nem uma landing page de marketing.

É uma plataforma científica brasileira destinada à pesquisa, exploração e visualização geográfica de informações sobre doenças parasitárias.

O design deve transmitir:

- credibilidade científica;
- clareza;
- simplicidade;
- neutralidade;
- confiabilidade institucional.

O usuário deve sentir que está utilizando uma ferramenta oficial desenvolvida para pesquisadores, estudantes e profissionais da saúde.

---

# Referências

O projeto utiliza como inspiração:

- PubMed
- SciELO Search
- NCBI
- Fiocruz
- gov.br

Essas referências servem apenas como guia de usabilidade e organização da informação.

O SIDPB deve possuir identidade visual própria.

---

# Princípios

## Informação antes da decoração

Todo elemento visual deve existir para melhorar a compreensão da informação.

Não utilizar elementos puramente decorativos.

---

## Busca como protagonista

A pesquisa é a principal funcionalidade da plataforma.

A Landing Page deve deixar isso evidente.

---

## O mapa é o centro da experiência

Após a pesquisa, o mapa passa a ser o elemento principal da interface.

Todas as demais informações complementam a exploração geográfica.

---

## Consistência

Componentes semelhantes devem sempre possuir o mesmo comportamento visual.

Não criar exceções.

---

# Paleta de cores

## Primary

#1B5E20

Verde institucional.

Utilizado em:

- botões principais
- links ativos
- estados de foco
- elementos importantes

---

## Secondary

#2E7D32

---

## Accent

#43A047

---

## Background

#FAFBFA

---

## Surface

#FFFFFF

---

## Border

#D8E0D8

---

## Texto Principal

#1F2937

---

## Texto Secundário

#4B5563

---

## Texto Desabilitado

#9CA3AF

---

# Tipografia

Fonte oficial

Inter

---

## H1

48px

Weight 600

---

## H2

36px

Weight 600

---

## H3

28px

Weight 600

---

## H4

22px

Weight 600

---

## Body

16px

Weight 400

---

## Small

14px

Weight 400

---

## Caption

12px

Weight 400

---

# Grid

Base de espaçamento:

8px

Utilizar preferencialmente múltiplos de:

4

8

16

24

32

40

48

64

80

96

Evitar valores arbitrários.

---

# Bordas

O sistema utiliza cantos retos.

Border Radius padrão:

2px

Máximo permitido:

4px

Não utilizar:

- rounded-xl
- rounded-2xl
- rounded-full

---

# Sombras

Utilizar apenas quando necessário.

Padrão:

0 1px 3px rgba(0,0,0,.06)

Evitar sombras fortes.

---

# Botões

## Primary

Fundo verde.

Texto branco.

---

## Secondary

Branco.

Borda verde.

Texto verde.

---

## Ghost

Sem fundo.

Texto verde.

---

# Campos de entrada

Brancos.

Borda fina.

Foco verde.

Sem sombras.

Sem animações exageradas.

---

# Cards

Cards possuem apenas a função de organizar conteúdo.

Não utilizar:

- gradientes
- grandes sombras
- bordas arredondadas

---

# Navbar

Branca.

Linha inferior.

Altura fixa.

Sempre minimalista.

---

# Footer

Institucional.

Informações organizadas.

Poucos elementos.

---

# Ícones

Biblioteca oficial:

Lucide

Tamanho padrão:

18px

24px

Nunca misturar bibliotecas diferentes.

---

# Estados

Todo componente deve possuir:

Hover

Focus

Disabled

Loading

Success

Error

---

# Animações

Utilizar apenas transições sutis.

Tempo recomendado:

150–200ms

Evitar animações chamativas.

---

# Responsividade

Desktop First.

Tablet.

Mobile.

Nenhuma informação importante deve desaparecer.

Apenas reorganizar os elementos.

---

# Landing Page

Estrutura obrigatória:

Header

↓

Hero

↓

Barra de Pesquisa

↓

Sugestões de Pesquisa

↓

Busca Avançada

↓

Sobre o SIDPB

↓

Recursos

↓

Instituições Parceiras

↓

Footer

---

# Dashboard

Estrutura obrigatória:

Header

↓

Pesquisa

↓

Filtros

↓

Mapa

↓

Painel de Informações

O mapa é sempre o elemento principal.

---

# Componentes reutilizáveis

Todos os componentes devem ser reutilizáveis.

Evitar componentes específicos para apenas uma página quando possível.

---

# Linguagem

Todo o texto visível ao usuário deve estar em português brasileiro.

Mensagens devem ser claras, objetivas e institucionais.

---

# Objetivo Final

O SIDPB deve transmitir a sensação de uma plataforma científica nacional, moderna, confiável e intuitiva, permitindo que pesquisadores e profissionais da saúde encontrem informações epidemiológicas com rapidez e explorem sua distribuição geográfica de maneira simples.

# O que NÃO somos

O SIDPB não deve parecer:

- uma landing page de startup;
- um dashboard financeiro;
- um sistema de BI corporativo;
- uma loja virtual;
- um aplicativo mobile adaptado para desktop;
- um template genérico de Tailwind;
- uma cópia do PubMed, SciELO ou NCBI.

A interface deve ser discreta.

A informação deve ser protagonista.

Sempre que houver dúvida entre adicionar um elemento visual ou removê-lo, prefira removê-lo.