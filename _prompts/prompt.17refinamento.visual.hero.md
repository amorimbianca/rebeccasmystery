# PROMPT — REFINAMENTO VISUAL DA HERO SECTION
## Projeto: Rebecca's Mystery

Quero melhorar significativamente a composição visual da Hero Section atual.

O resultado ainda está visualmente desequilibrado: a imagem das personagens parece pequena e isolada, enquanto o conteúdo textual do lado esquerdo está muito reduzido e deixa uma sensação de vazio.

**QUERO UMA HERO MAIS PREENCHIDA, IMPACTANTE, PROPORCIONAL E COM APARÊNCIA DE UM SITE PROFISSIONAL.**

Não quero reconstruir o restante do site. Trabalhe exclusivamente na Hero Section e nos componentes diretamente relacionados a ela.

---

## 1. NOVA DISTRIBUIÇÃO VISUAL

Manter a estrutura de duas colunas, mas melhorar suas proporções.

### Coluna esquerda
- Aumentar a área disponível para o conteúdo.
- Ampliar a tipografia.
- Melhorar a distribuição dos textos.
- Dar mais presença ao título principal.
- Aumentar o espaçamento entre os elementos.
- Evitar que o conteúdo pareça pequeno diante da tela.

### Coluna direita
- Melhorar a apresentação da imagem das seis personagens.
- Aumentar sua presença visual.
- Utilizar uma moldura mais elegante.
- Eliminar a aparência de card genérico.
- Integrar os elementos decorativos à composição.

As duas colunas devem ter pesos visuais semelhantes.

## 2. MELHORAR A IMAGEM DAS PERSONAGENS

A imagem atual precisa de um tratamento visual melhor.

Utilizar exatamente a ilustração original das seis personagens enviada anteriormente.

Não substituir, gerar outra imagem ou modificar os rostos.

### Nova apresentação:

- Aumentar um pouco as dimensões da imagem.
- Preservar a proporção original de 2:3.
- Trabalhar com largura aproximada de 350px a 370px.
- Altura aproximada de 500px a 540px, respeitando o espaço disponível.
- Manter todas as seis personagens visíveis.
- Utilizar cantos suavemente arredondados.
- Aplicar uma moldura delicada em creme ou rosé.
- Criar uma sombra suave e elegante.
- Evitar bordas brancas excessivamente grossas.
- Não inclinar a imagem.
- Não criar várias molduras sobrepostas.
- Não aplicar zoom que corte personagens.

A imagem precisa parecer uma composição editorial, como um pôster oficial do jogo apresentado dentro do site.

**Quero que a ilustração tenha presença, mas sem ultrapassar os limites da Hero Section.**

## 3. TIPOGRAFIA — COLUNA ESQUERDA

Atualmente os textos parecem pequenos em relação à área disponível.

Aumentar a escala tipográfica de maneira consistente.

Utilizar como referência:

| Elemento | Tamanho desktop |
|---|---:|
| Etiquetas | 13px–14px |
| Título principal | 58px–66px |
| Subtítulo | 22px–24px |
| Descrição | 18px–19px |
| Botão | 14px–15px |
| Frase complementar | 15px–16px |

Utilizar `clamp()` para adaptar os tamanhos às diferentes resoluções.

O título deve ser o principal elemento da coluna esquerda.

Manter as palavras destacadas com a paleta oficial, sem utilizar pink neon.

## 4. MELHORAR A OCUPAÇÃO DO ESPAÇO

Não quero que o bloco textual fique pequeno e perdido no lado esquerdo.

Aumentar sua largura máxima para aproximadamente 540px.

Melhorar a distribuição vertical:

- Etiquetas no topo do bloco.
- Título ocupando uma área visual maior.
- Subtítulo logo abaixo.
- Descrição com linhas mais confortáveis.
- Botão com dimensões proporcionais.
- Frase complementar bem posicionada.

Aumentar os espaçamentos entre os elementos, mas sem criar intervalos exagerados.

Não acrescentar parágrafos desnecessários para preencher espaço.

A solução deve ser visual, utilizando melhor a tipografia e a composição existente.

## 5. ELEMENTOS FLUTUANTES

Revisar os elementos posicionados ao redor da imagem.

Atualmente os pequenos cards parecem estar distribuídos sem uma composição muito definida.

Corrigir:

- Reduzir a quantidade de elementos sobrepostos.
- Evitar que etiquetas cubram os rostos.
- Ajustar os tamanhos dos cards.
- Posicionar os elementos de maneira intencional.
- Manter apenas os indicadores que realmente contribuem para o universo narrativo.

As etiquetas devem complementar a imagem, sem competir com ela.

A estrela decorativa e os demais detalhes devem permanecer discretos.

## 6. ALINHAMENTO E CENTRALIZAÇÃO

O conjunto completo da Hero deve estar centralizado verticalmente dentro da área disponível.

Considerar:
- Altura do cabeçalho.
- Altura da Hero.
- Altura do ticker inferior.

O conteúdo textual e a imagem precisam compartilhar o mesmo eixo de alinhamento visual.

Evitar:
- Textos muito próximos do cabeçalho.
- Imagem deslocada para baixo.
- Colunas desalinhadas.
- Grandes vazios desnecessários.
- Elementos ultrapassando a seção.

## 7. RESPONSIVIDADE

### Desktop
- Texto com maior presença à esquerda.
- Imagem maior e proporcional à direita.
- Colunas equilibradas.
- Hero completamente visível na primeira dobra.

### Tablet
- Ajustar as proporções.
- Reduzir dimensões sem perder legibilidade.
- Preservar toda a imagem.

### Mobile
- Organizar texto e imagem verticalmente.
- Utilizar tipografia adaptável.
- Manter todas as personagens visíveis.
- Remover elementos flutuantes que atrapalhem a leitura.

## 8. PRESERVAR O QUE JÁ ESTÁ APROVADO

Não modificar:

- Cabeçalho.
- Logotipo.
- Menu.
- Botão JOGAR.
- Alternância entre modo claro e escuro.
- Controles de áudio.
- Ticker.
- Textos e narrativa.
- Identidade visual.
- Demais seções do site.

Manter a paleta oficial:

### Modo claro
#F7F0EF
#F2E7E9
#C18B9D
#966477
#622D45

### Modo escuro
#160F14
#21151D
#281A24
#513044
#A87589
#D2A6B4

## 9. TESTE VISUAL OBRIGATÓRIO

Executar o projeto e verificar o resultado nas resoluções:

- 1920 × 1080.
- 1440 × 770.
- 1366 × 768.
- 1024 × 768.
- 390 × 844.

Verificar especialmente a resolução 1440 × 770.

A Hero deve continuar completamente visível, sem cortes ou rolagem horizontal.

Comparar visualmente o resultado antes e depois da implementação.

Se a imagem continuar pequena, se o conteúdo continuar vazio ou se os elementos estiverem desproporcionais, corrigir novamente.

---

# RESULTADO ESPERADO

Quero uma Hero Section com acabamento profissional.

A imagem das seis personagens precisa ter mais presença e uma apresentação visual muito mais bonita.

O bloco textual precisa ocupar melhor o lado esquerdo, com títulos maiores, descrição mais legível e espaçamento bem distribuído.

Quero equilíbrio entre as duas colunas, com uma composição editorial sofisticada e coerente com a identidade da Rebecca's Mystery.

**NÃO QUERO MAIS UM LAYOUT COM UMA IMAGEM PEQUENA DE UM LADO E TEXTOS PERDIDOS DO OUTRO. QUERO UMA COMPOSIÇÃO VISUALMENTE FORTE, HARMONIOSA E BEM PROPORCIONADA.**

Não altere o restante do projeto.

