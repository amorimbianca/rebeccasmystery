# PROMPT — INTRODUÇÃO CINEMATOGRÁFICA COM GSAP DYNAMIC MORPHING
## Projeto: Rebecca's Mystery

Implemente uma experiência de abertura cinematográfica para o site Rebecca's Mystery, utilizando GSAP e o efeito Dynamic Morphing como referência principal.

Referência obrigatória:
https://demos.gsap.com/demo/dynamic-morphing/

**ATENÇÃO: NÃO QUERO UMA ANIMAÇÃO GENÉRICA DE CARREGAMENTO. QUERO UMA ABERTURA VISUALMENTE IMPACTANTE, SOFISTICADA E BEM PRODUZIDA, QUE SEJA A PRIMEIRA EXPERIÊNCIA DO VISITANTE AO ACESSAR O SITE.**

A experiência deve acontecer em duas etapas:

1. Apresentação da logo Rebecca's Mystery.
2. Transição Dynamic Morphing revelando a página inicial.

---

## 1. PRIMEIRA ETAPA — APRESENTAÇÃO DA LOGO

Ao acessar o site, apresentar uma tela de abertura ocupando toda a viewport.

Características:

- Fundo elegante utilizando a paleta oficial do projeto.
- Logo original Rebecca's Mystery centralizada.
- Nome da academia integrado à identidade visual, caso faça parte da logo.
- Composição minimalista e sofisticada.
- Iluminação muito sutil.
- Atmosfera de suspense e mistério.

### Animação da logo

Criar uma sequência de entrada:

1. O fundo aparece suavemente.
2. A logo surge com efeito fade-in.
3. Aplicar um movimento discreto de escala e opacidade.
4. Permitir que a logo permaneça centralizada por um breve instante.
5. Criar uma saída suave que prepare a próxima animação.

A logo deve ser exatamente o arquivo original do projeto.

Não redesenhar, substituir ou inventar uma nova identidade para ela.

---

## 2. SEGUNDA ETAPA — GSAP DYNAMIC MORPHING

Após a apresentação da logo, executar a transição inspirada diretamente na demonstração oficial do GSAP.

Referência:
https://demos.gsap.com/demo/dynamic-morphing/

**Quero reproduzir a linguagem visual do efeito apresentado na demonstração, especialmente as formas SVG orgânicas que se transformam e se movimentam em camadas.**

Implementar:

- Camadas SVG sobrepostas.
- Formas orgânicas com curvas Bézier.
- Transformações dinâmicas dos caminhos SVG.
- Movimentos com diferentes velocidades.
- Atrasos escalonados entre as camadas.
- Transições fluidas e contínuas.
- Efeito de cobertura e revelação da tela.

As formas devem se movimentar organicamente, criando uma espécie de cortina visual que se transforma até revelar o conteúdo do site.

Não utilizar apenas círculos crescendo, zoom de tela ou um simples fade.

**O efeito precisa ter a aparência de uma transformação real de formas SVG, seguindo a referência enviada.**

## 3. IDENTIDADE VISUAL DA ANIMAÇÃO

Utilizar exclusivamente a paleta oficial aprovada da Rebecca's Mystery.

### Cores para o modo claro:

- #F7F0EF
- #F2E7E9
- #C18B9D
- #966477
- #622D45

### Cores para o modo escuro:

- #160F14
- #21151D
- #281A24
- #513044
- #A87589
- #D2A6B4

As cores das formas devem combinar com o tema ativo.

Evitar completamente:
- Pink neon.
- Rosa fluorescente.
- Brilhos excessivos.
- Gradientes muito saturados.
- Efeitos luminosos exagerados.

A animação deve transmitir elegância, mistério e sofisticação.

## 4. REVELAÇÃO DA PÁGINA INICIAL

Quando a transformação terminar, revelar a Hero Section já existente.

A transição precisa apresentar uma continuidade visual.

- Revelar a página através das formas SVG.
- Fazer os elementos principais aparecerem suavemente.
- Permitir que a imagem principal seja revelada durante a transição.
- Evitar que todos os elementos apareçam simultaneamente.
- Finalizar removendo o overlay de animação.
- Garantir que todos os elementos da página estejam funcionais.

A Hero Section não deve ser reconstruída ou modificada nesta tarefa.

Apenas integrar a animação à página atual.

## 5. IMPLEMENTAÇÃO COM GSAP

Utilizar GSAP para controlar toda a sequência.

Preferencialmente:

- GSAP Timeline.
- Animações SVG.
- Curvas Bézier.
- Stagger e delays controlados.
- Easing power2.inOut ou equivalente.
- Controle preciso da sequência de entrada e saída.

Analisar se o projeto já possui GSAP instalado.

Caso não possua, instalar e configurar corretamente conforme a tecnologia utilizada.

Utilizar MorphSVGPlugin somente se realmente necessário e compatível com a implementação. O efeito de referência também pode ser reproduzido com manipulação dinâmica dos caminhos SVG usando GSAP Core.

Não copiar indiscriminadamente o código do CodePen. Implementar uma solução própria, adaptada à estrutura do projeto.

## 6. EXPERIÊNCIA DO USUÁRIO

- A animação deve acontecer apenas na entrada inicial do site.
- Não repetir a introdução durante a navegação entre seções.
- Evitar bloquear a navegação desnecessariamente.
- Implementar uma opção discreta de pular a introdução.
- Não iniciar sons automaticamente.
- Evitar flashes de tela.
- Garantir que a página esteja carregada antes de iniciar a revelação.
- Impedir que o usuário fique preso na tela de abertura.

Utilizar sessionStorage, se apropriado, para controlar a exibição da introdução durante a sessão.

## 7. RESPONSIVIDADE

A experiência deve funcionar em:

- Desktop.
- Notebook.
- Tablet.
- Smartphone.

Adaptar as dimensões das formas SVG para cada resolução.

No mobile:
- Evitar animações pesadas.
- Ajustar a composição da logo.
- Preservar a qualidade da transformação.
- Evitar cortes e distorções.
- Garantir carregamento rápido.

## 8. DESEMPENHO E ACESSIBILIDADE

- Evitar bibliotecas desnecessárias.
- Otimizar os caminhos SVG.
- Evitar vazamentos de memória.
- Limpar corretamente timelines e listeners.
- Respeitar prefers-reduced-motion.
- Criar uma versão simplificada da entrada para usuários que prefiram movimento reduzido.
- Garantir funcionamento nos principais navegadores.

## 9. REGRAS OBRIGATÓRIAS

- Não alterar o layout da página inicial.
- Não modificar textos ou imagens existentes.
- Não substituir a logo original.
- Não alterar a identidade visual.
- Não modificar as funcionalidades do site.
- Não criar uma animação genérica.
- Não utilizar pink neon.
- Não prejudicar a responsividade.
- Não deixar a tela de introdução aparecendo indefinidamente.
- Não considerar a tarefa concluída sem testar a animação funcionando.

## 10. TESTE VISUAL

Após implementar:

1. Executar o site.
2. Observar toda a apresentação da logo.
3. Verificar a transformação dinâmica das formas.
4. Conferir a revelação da Hero Section.
5. Testar novamente após atualizar a página.
6. Verificar o funcionamento nos modos claro e escuro.
7. Testar em desktop e mobile.

Se o resultado for apenas um fade-in, zoom ou transição convencional, a implementação não corresponde ao solicitado.

---

# RESULTADO ESPERADO

Quero que a experiência comece com a logo Rebecca's Mystery centralizada em uma tela elegante.

Após alguns instantes, a logo deve dar lugar a uma transformação dinâmica de formas SVG, com curvas orgânicas que se movimentam em camadas, criando uma transição cinematográfica.

Ao final, essas formas devem revelar a página inicial do site.

A sensação deve ser a de entrar em um universo de mistério, como a abertura de um jogo narrativo profissional.

**A ANIMAÇÃO DA REFERÊNCIA DO GSAP É A BASE VISUAL OBRIGATÓRIA. NÃO SUBSTITUA POR UMA TRANSIÇÃO SIMPLES.**

Quero uma abertura memorável, sofisticada e perfeitamente integrada à identidade da Rebecca's Mystery.