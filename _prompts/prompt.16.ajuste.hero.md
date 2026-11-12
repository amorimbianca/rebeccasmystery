# PROMPT — AJUSTE FINAL DE PROPORÇÃO E ALINHAMENTO DA HERO
## Projeto: Rebecca's Mystery

Quero corrigir definitivamente a Hero Section do site Rebecca's Mystery.

**A implementação atual ainda não está visualmente aprovada. A imagem está desproporcional e a composição precisa ser melhor distribuída dentro da tela.**

Não quero um novo redesign. Quero recuperar uma composição equilibrada, elegante e profissional, preservando a identidade visual que já aprovamos.

---

## 1. OBJETIVO PRINCIPAL

A Hero Section precisa aparecer COMPLETA na primeira tela do site, sem que o usuário precise rolar para visualizar seu conteúdo principal.

Considerar na composição:
- Cabeçalho.
- Hero Section completa.
- Imagem principal.
- Botões e informações.
- Ticker inferior.

Em telas desktop, a composição inteira deve caber na altura disponível da viewport.

Utilizar como referência a resolução de 1440 × 770px.

Não deixar a próxima seção invadir visualmente a primeira dobra.

## 2. PROPORÇÃO DA HERO

Organizar a Hero em duas colunas:

**COLUNA ESQUERDA — CONTEÚDO**
- Etiquetas informativas.
- Título principal.
- Subtítulo.
- Descrição.
- Botão de investigação.
- Frase complementar.

**COLUNA DIREITA — IMAGEM**
- Ilustração das seis personagens.
- Moldura elegante.
- Elementos informativos discretos.

As duas colunas devem apresentar equilíbrio visual e alinhamento vertical centralizado.

Não concentrar o conteúdo no topo da página.

Não deixar grandes espaços vazios entre as colunas.

## 3. CORREÇÃO DA IMAGEM

A imagem das seis personagens deve ser mantida exatamente como está no arquivo original.

O problema atual é sua proporção em relação à Hero.

Corrigir:

- Diminuir o tamanho excessivo da imagem.
- Preservar sua proporção vertical original de 2:3.
- Não esticar ou achatar.
- Não cortar nenhuma personagem.
- Não aumentar artificialmente a imagem com transform: scale().
- Não permitir que ultrapasse os limites da seção.
- Centralizar a imagem dentro da coluna direita.

Utilizar como referência:

- Largura aproximada: 300px a 340px.
- Altura máxima: 460px.
- Proporção: 2:3.
- object-fit: contain.

Os valores devem se adaptar à altura disponível da tela.

A imagem precisa ter presença e destaque, mas não pode dominar toda a composição.

### Moldura

- Utilizar bordas discretas.
- Cantos suavemente arredondados.
- Sombras leves.
- Fundo neutro e integrado à paleta.
- Não criar molduras gigantes ou múltiplos painéis sobrepostos.

A imagem deve parecer uma peça editorial integrada ao layout.

## 4. ELEMENTOS FLUTUANTES

Os elementos informativos que acompanham a imagem devem ser reorganizados.

Manter apenas os elementos que realmente contribuem para a apresentação.

- Reduzir o tamanho das etiquetas.
- Posicionar sem cobrir os rostos.
- Não esconder informações importantes da ilustração.
- Não deixar elementos ultrapassarem a viewport.
- Evitar sobreposição excessiva.
- Não criar cartões gigantes.

Os elementos decorativos devem complementar a fotografia, e não competir com ela.

## 5. POSICIONAMENTO VERTICAL

Esse é um dos pontos mais importantes.

Atualmente, a Hero não está distribuída adequadamente na altura da tela.

Corrigir para que:

- O conteúdo textual fique centralizado verticalmente.
- A imagem acompanhe o alinhamento do texto.
- O título não fique próximo demais do cabeçalho.
- O botão permaneça visível.
- A frase complementar não fique espremida.
- O ticker fique completamente abaixo da Hero.

Considerar a altura real do cabeçalho e do ticker.

Utilizar uma estrutura semelhante a:

```css
.hero {
  min-height: calc(
    100svh - var(--header-height) - var(--ticker-height)
  );

  display: flex;
  align-items: center;
}
```

Ajustar a implementação às classes e à arquitetura já existentes.

Não utilizar alturas fixas que cortem o conteúdo.

## 6. TICKER INFERIOR

Preservar o ticker atual.

Ele deve aparecer imediatamente depois da Hero, sem sobreposições.

- Manter sua animação.
- Preservar sua identidade visual.
- Não permitir que a imagem invada sua área.
- Não posicionar o ticker sobre o conteúdo.

A primeira tela deve mostrar o cabeçalho, a Hero e o ticker de maneira organizada.

## 7. TIPOGRAFIA E CONTEÚDO

Preservar os textos atuais.

Não aumentar os títulos.

Não criar novos parágrafos.

Manter o bloco de texto com largura controlada para evitar linhas excessivamente longas.

Garantir espaçamento consistente entre:

- Etiquetas.
- Título.
- Subtítulo.
- Descrição.
- Botão.
- Frase complementar.

Não reduzir excessivamente as fontes para fazer tudo caber.

O objetivo é corrigir a distribuição dos elementos, não prejudicar a leitura.

## 8. RESPONSIVIDADE

### Desktop
- Hero completa na primeira dobra.
- Texto à esquerda.
- Imagem à direita.
- Alinhamento centralizado.
- Ticker na parte inferior.

### Tablet
- Redimensionar as colunas.
- Ajustar imagem e espaçamentos.
- Preservar toda a ilustração.

### Mobile
- Organizar o conteúdo verticalmente.
- Texto primeiro.
- Imagem abaixo.
- Remover ou reposicionar elementos flutuantes.
- Permitir rolagem natural da página.

Não forçar a composição de desktop em telas pequenas.

## 9. REGRAS OBRIGATÓRIAS

- Não reconstruir o site inteiro.
- Não alterar o cabeçalho.
- Não modificar a paleta oficial.
- Não substituir a imagem das seis personagens.
- Não alterar os textos.
- Não remover funcionalidades.
- Não modificar outras seções.
- Não adicionar novos elementos desnecessários.
- Não utilizar posicionamentos que provoquem sobreposição.
- Não cortar a imagem.
- Não comprometer a responsividade.

Trabalhar somente na Hero Section e nos estilos diretamente relacionados a ela.

## 10. VERIFICAÇÃO VISUAL OBRIGATÓRIA

Depois de implementar, executar o site e testar:

- 1440 × 770px.
- 1366 × 768px.
- 1920 × 1080px.
- 1024 × 768px.
- 390 × 844px.

Verificar especialmente a primeira dobra.

**A tarefa só estará concluída quando a Hero inteira estiver visível na primeira tela desktop, com a imagem proporcional e o ticker corretamente posicionado.**

Se a imagem estiver muito grande, se o texto estiver desalinhado ou se parte da Hero estiver cortada, corrigir novamente.

---

# RESULTADO ESPERADO

Quero recuperar a composição visual elegante que tínhamos antes.

Uma Hero com:

- Texto organizado à esquerda.
- Imagem das seis personagens à direita.
- Proporções equilibradas.
- Conteúdo centralizado verticalmente.
- Espaçamento bem distribuído.
- Ticker inferior alinhado.
- Cabeçalho preservado.

**A imagem deve ser bonita e ter destaque, mas precisa respeitar o espaço da composição. Quero a Hero inteira na primeira tela, sem cortes, sem exageros e sem elementos sobrepostos.**

Não invente outro layout. Corrija as proporções e entregue o resultado visualmente pronto.