# PROMPT — CORREÇÃO URGENTE DA HERO SECTION
## Projeto: Rebecca's Mystery

**A IMPLEMENTAÇÃO ANTERIOR DEFORMOU COMPLETAMENTE A HERO SECTION. É NECESSÁRIO CORRIGIR O LAYOUT E RECUPERAR A ORGANIZAÇÃO VISUAL DO SITE.**

Observe atentamente a captura de tela enviada.

Atualmente, a imagem está enorme, ultrapassando os limites da seção, cobrindo outros elementos e invadindo a área do ticker inferior.

Existem informações escondidas, elementos sobrepostos e falta de alinhamento.

**NÃO CONTINUE FAZENDO AJUSTES EM CIMA DO LAYOUT QUEBRADO. PRIMEIRO ANALISE E CORRIJA A ESTRUTURA.**

---

## 1. RESTAURAR A ORGANIZAÇÃO DA HERO

Reconstruir a composição da Hero Section, mantendo a identidade visual já aprovada.

A estrutura desejada deve ser:

- Cabeçalho na parte superior.
- Hero Section ocupando a área abaixo do cabeçalho.
- Bloco de informações no lado esquerdo.
- Imagem principal no lado direito.
- Elementos decorativos discretos e organizados.
- Ticker inferior separado da Hero Section.

Utilizar CSS Grid ou Flexbox para construir uma composição equilibrada.

A estrutura deve apresentar duas colunas bem definidas, sem sobreposições acidentais.

## 2. IMAGEM PRINCIPAL — SEIS PERSONAGENS

**ESTA É UMA DAS CORREÇÕES MAIS IMPORTANTES.**

A imagem correta é o arquivo enviado anteriormente:

`Retrato Gótico das Seis Alunas(1).png`

Essa imagem apresenta as seis personagens juntas.

A implementação anterior utilizou uma imagem de apenas uma personagem, o que não corresponde ao solicitado.

Corrigir imediatamente.

Requisitos:

- Utilizar exatamente a imagem das seis personagens.
- Não utilizar a fotografia individual que aparece atualmente.
- Não gerar outra imagem.
- Não modificar os rostos.
- Não remover nenhuma personagem.
- Não alterar as características da ilustração.
- Preservar a proporção vertical original.
- Não esticar ou achatar a imagem.
- Não realizar cortes que escondam personagens.

### Apresentação da imagem

A imagem deve ser o grande destaque visual da coluna direita.

- Utilizar uma moldura elegante.
- Manter proporções naturais.
- Definir limites de largura e altura.
- Utilizar `object-fit: contain`.
- Manter toda a ilustração visível.
- Centralizar a imagem dentro de seu container.
- Evitar que a imagem ultrapasse os limites da Hero Section.

A imagem deve parecer parte de uma composição editorial planejada, e não um arquivo gigante colocado sobre a página.

## 3. DIMENSÕES E ALINHAMENTO

Corrigir as dimensões de todos os elementos.

Referências para desktop:

- Hero com altura mínima próxima de 640px.
- Container centralizado com largura máxima entre 1200px e 1320px.
- Duas colunas com proporções equilibradas.
- Bloco textual com largura controlada.
- Imagem com altura máxima aproximada de 520px.
- Espaçamentos consistentes entre os componentes.

Essas dimensões devem ser ajustadas conforme a resolução disponível.

**Nenhum elemento pode ultrapassar a altura ou a largura da Hero de maneira acidental.**

Utilizar:

- `min-height`
- `max-width`
- `max-height`
- `min-width: 0`
- `box-sizing: border-box`
- `align-items: center`

Revisar os posicionamentos absolutos existentes. Remover aqueles que provocam sobreposições indesejadas.

## 4. BLOCO DE TEXTO

O bloco de informações deve ficar no lado esquerdo, centralizado verticalmente em relação à imagem.

Preservar o conteúdo correto:

**Etiqueta:**
Dossiê Escolar • Saint Claire

**Título:**
O SEGREDO DE
SAINT CLAIRE

**Subtítulo:**
O silêncio oculta o destino de Melissa.

**Descrição:**
Rebecca acorda três semanas no passado. Entre boatos anônimos e alianças frágeis, cada escolha pode romper o ciclo antes do desfecho.

**Botão:**
INVESTIGAR O ENIGMA ✦

**Frase complementar:**
(Você tem 3 semanas para intervir)

Não aumentar os textos nem criar novos parágrafos.

Manter a hierarquia tipográfica já estabelecida e garantir espaçamento adequado entre título, descrição e botão.

## 5. ELEMENTOS DECORATIVOS

Reorganizar os elementos flutuantes existentes.

- Não permitir que etiquetas cubram a imagem.
- Não posicionar elementos sobre os rostos das personagens.
- Não deixar textos escondidos atrás da imagem.
- Não utilizar elementos decorativos fora dos limites da seção.
- Reduzir os elementos que estejam competindo visualmente com a ilustração.

Preservar apenas os elementos que realmente contribuem para a composição.

## 6. CORRIGIR O TICKER INFERIOR

O ticker está sendo invadido pela imagem da Hero Section.

Corrigir imediatamente.

- O ticker deve ficar depois da Hero no fluxo normal da página.
- Não permitir que a imagem invada sua área.
- Não utilizar posicionamento absoluto para sobrepor as duas seções.
- Garantir altura e espaçamento adequados.
- Preservar seu funcionamento e animação.

A Hero e o ticker precisam ser duas áreas independentes.

## 7. CABEÇALHO

Preservar o cabeçalho atual.

Não alterar:

- Logotipo.
- Navegação.
- Botão JOGAR.
- Alternância de tema.
- Controle de áudio.
- Outros controles existentes.

Apenas verificar se o cabeçalho está corretamente posicionado e se a Hero começa abaixo dele.

## 8. IDENTIDADE VISUAL

Preservar integralmente a paleta aprovada:

### Modo claro
- #F7F0EF
- #F2E7E9
- #C18B9D
- #966477
- #622D45

### Modo escuro
- #160F14
- #21151D
- #281A24
- #513044
- #A87589
- #D2A6B4

Não voltar ao rosa neon.

Não modificar a tipografia, as cores ou a identidade visual sem necessidade.

## 9. RESPONSIVIDADE

No desktop:
- Texto à esquerda.
- Imagem à direita.
- Alinhamento vertical centralizado.
- Nenhuma sobreposição indesejada.

No tablet:
- Redimensionar as colunas.
- Reorganizar a composição quando necessário.
- Preservar a imagem inteira.

No mobile:
- Empilhar texto e imagem.
- Apresentar o texto primeiro.
- Posicionar a imagem abaixo.
- Ajustar os elementos decorativos.
- Evitar rolagem horizontal.
- Garantir que as seis personagens continuem visíveis.

## 10. IMPLEMENTAÇÃO E VERIFICAÇÃO

Antes de alterar os arquivos:

1. Analisar o código atual da Hero.
2. Identificar os componentes e estilos responsáveis pelos problemas.
3. Localizar a imagem correta das seis personagens.
4. Identificar quais alterações recentes provocaram o layout quebrado.
5. Verificar se existe uma versão anterior funcional que possa ser recuperada.

Caso exista histórico Git ou outra forma segura de recuperar a implementação anterior, utilizá-la apenas para os arquivos necessários.

Não fazer rollback do projeto inteiro.

Depois disso, corrigir a Hero diretamente no código existente.

**Não criar uma página paralela. Não substituir o site por um layout de demonstração.**

## 11. CRITÉRIOS DE APROVAÇÃO

A tarefa só estará concluída quando:

- A imagem correta das seis personagens estiver sendo utilizada.
- Nenhuma personagem estiver cortada.
- A imagem estiver dentro dos limites da Hero.
- O texto estiver alinhado à esquerda.
- A imagem estiver organizada à direita.
- Nenhum elemento estiver escondido.
- O ticker estiver completamente livre.
- O cabeçalho continuar funcionando.
- Os dois temas continuarem funcionando.
- Desktop e mobile estiverem visualmente corretos.

Executar o projeto e conferir o resultado no navegador.

Não considerar a tarefa concluída apenas porque o código compilou.

Se a imagem continuar gigante, se houver sobreposições ou se o ticker continuar sendo coberto, corrigir novamente.

---

# RESULTADO ESPERADO

Quero recuperar uma Hero Section bonita, organizada e profissional.

A composição deve ter texto à esquerda e a ilustração original das seis personagens à direita.

A imagem precisa ter destaque, mas sem dominar desproporcionalmente a tela.

Quero equilíbrio, alinhamento, espaçamento e uma apresentação visual sofisticada.

**NÃO INVENTE UM NOVO DESIGN. NÃO MEXA NO RESTANTE DO SITE. CORRIJA O QUE FOI QUEBRADO E ENTREGUE A HERO SECTION FUNCIONANDO PERFEITAMENTE.**