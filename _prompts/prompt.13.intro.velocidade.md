# PROMPT — AJUSTE DE COR E VELOCIDADE DA INTRO
## Projeto: Rebecca's Mystery

A introdução atual precisa de duas correções importantes: fidelidade à cor original da logo e velocidade da animação.

**NÃO QUERO REFAZER A INTRODUÇÃO. QUERO CORRIGIR A IMPLEMENTAÇÃO EXISTENTE.**

## 1. COR ORIGINAL DA LOGO

A cor utilizada atualmente na animação não corresponde à imagem original da logo RM.

Utilize a própria imagem anexada como referência absoluta de cor.

- Identificar a tonalidade diretamente na imagem original.
- Utilizar o rosa rosé presente no monograma.
- Como referência inicial, utilizar aproximadamente `#B67C9B`.
- Preservar a textura original da logo.
- Não clarear, escurecer ou alterar a saturação.
- Não aplicar filtros, overlays ou transparências que modifiquem a tonalidade.
- Não utilizar rosa neon, pink, lilás ou magenta.

**Os caminhos SVG desenhados precisam apresentar a mesma tonalidade rosa da logo original.**

A imagem PNG original deve aparecer ao final sem nenhuma alteração de cor.

## 2. CORREÇÃO DO FUNDO

Na implementação atual, existe uma diferença visual entre o fundo da imagem da logo e o fundo da tela de introdução, fazendo aparecer um quadrado atrás do monograma.

Corrigir esse problema.

- Eliminar a aparência de imagem quadrada.
- Preservar a textura da logo.
- Integrar visualmente a imagem ao fundo.
- Caso seja necessário, criar uma versão com fundo transparente, removendo apenas o fundo original e preservando integralmente os pixels coloridos da logo.
- Não recortar ou modificar os detalhes ornamentais.

O resultado deve parecer uma logo integrada diretamente à tela.

## 3. ACELERAR A ANIMAÇÃO

A introdução atual está muito lenta.

Quero uma animação mais rápida, fluida e elegante, sem pausas prolongadas.

Estabelecer a seguinte duração:

| Etapa | Duração |
|---|---:|
| Entrada do fundo | 0,15 s |
| Desenho dos ornamentos | 0,55 s |
| Desenho do monograma RM | 0,75 s |
| Revelação da logo original | 0,35 s |
| Pequena pausa | 0,30 s |
| Transição para o site | 0,45 s |

**Duração total aproximada: 2,55 segundos.**

Não adicionar tempos de espera extras entre as etapas.

## 4. ANIMAÇÃO DRAW SVG

Manter o GSAP DrawSVGPlugin como tecnologia principal.

- Acelerar o desenho dos caminhos SVG.
- Reduzir os intervalos entre os elementos.
- Utilizar stagger curto e controlado.
- Coordenar os movimentos dos ornamentos e do monograma.
- Manter curvas suaves.
- Evitar movimentos travados.
- Fazer os elementos aparecerem em uma sequência contínua.

O desenho deve acontecer de maneira natural, mas sem se arrastar.

## 5. TRANSIÇÃO FINAL

Quando o desenho estiver completo:

- Revelar imediatamente a logo PNG original.
- Preservar sua cor e textura.
- Manter a logo centralizada.
- Fazer uma pausa breve.
- Executar uma transição rápida e elegante para a página inicial.

Não manter a logo parada por vários segundos.

## 6. REGRAS OBRIGATÓRIAS

- Não reconstruir o site.
- Não modificar a identidade visual.
- Não alterar o desenho da logo.
- Não trocar o rosa original por outra tonalidade.
- Não utilizar pink neon.
- Não adicionar efeitos desnecessários.
- Não remover o DrawSVG.
- Não aumentar a duração da introdução.
- Não deixar o fundo da imagem visivelmente quadrado.
- Preservar o botão PULAR INTRO.
- Testar a animação em desktop e mobile.

## RESULTADO ESPERADO

Quero uma introdução de aproximadamente 2,5 segundos.

O monograma RM deve ser desenhado rapidamente, com traços fluidos e na tonalidade exata do rosa da logo original.

Ao finalizar, a logo original deve aparecer com sua textura preservada e a transição para o site deve acontecer imediatamente.

**MENOS TEMPO, MAIS FLUIDEZ E A COR ORIGINAL DA MINHA LOGO. NÃO INVENTE OUTRA TONALIDADE.**