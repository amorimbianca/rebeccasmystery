# PROMPT — INTRO CINEMATOGRÁFICA COM GSAP DRAWSVG
## Projeto: Rebecca's Mystery

Desenvolva uma introdução cinematográfica para o site Rebecca's Mystery utilizando GSAP DrawSVGPlugin.

### REFERÊNCIA OBRIGATÓRIA
https://demos.gsap.com/demo/draw-a-path/

Utilize também a imagem da logo RM anexada como elemento principal da animação.

**IMPORTANTE: A LOGO ANEXADA DEVE SER A PROTAGONISTA DA INTRODUÇÃO. NÃO CRIE OUTRA LOGO, NÃO SUBSTITUA O MONOGRAMA E NÃO INVENTE UMA ANIMAÇÃO DIFERENTE DA SOLICITADA.**

Quero uma experiência elegante, delicada e cinematográfica, como se a identidade visual da Rebecca's Mystery estivesse sendo desenhada diante dos olhos do visitante.

---

## 1. TELA DE ABERTURA

Criar uma tela de introdução ocupando 100% da largura e altura da tela.

Características:
- Fundo vinho profundo: #160F14.
- Logo RM centralizada.
- Composição minimalista.
- Sem menus, cards ou elementos desnecessários.
- Atmosfera misteriosa e sofisticada.

A introdução deve apresentar uma experiência visual limpa, dando destaque absoluto à logo.

## 2. VETORIZAÇÃO DA LOGO

Analisar cuidadosamente a imagem original anexada.

Criar uma versão SVG fiel ao desenho original, preservando:

- Monograma R e M.
- Arco ornamental superior.
- Arco ornamental inferior.
- Estrela central superior.
- Estrelas laterais.
- Elementos decorativos inferiores.
- Curvas, proporções e detalhes característicos.

Separar os elementos em caminhos SVG individuais sempre que necessário.

Não simplificar excessivamente os traços.
Não modificar o desenho original.
Não substituir a tipografia ornamental por fontes genéricas.

A versão SVG será utilizada para a animação.

A imagem PNG original deverá ser preservada para a revelação final, mantendo sua textura e aparência.

## 3. ANIMAÇÃO — GSAP DRAWSVG

Implementar a animação utilizando GSAP DrawSVGPlugin.

A referência visual deve ser o efeito oficial Draw a Path.

Quero que os elementos da logo sejam desenhados progressivamente, como se uma caneta estivesse criando o símbolo.

### Sequência de desenho

**Primeiro momento:**
- A tela escura aparece suavemente.
- Começar o desenho pelo arco ornamental superior.
- As linhas devem surgir progressivamente.
- Utilizar movimentos fluidos e contínuos.

**Segundo momento:**
- Desenhar a estrela central superior.
- Revelar as estrelas laterais.
- Animar os detalhes ornamentais.
- Introduzir o arco inferior.

**Terceiro momento:**
- Iniciar o desenho dos contornos do monograma RM.
- Fazer o R surgir com uma animação elegante.
- Em seguida, desenhar o M.
- Preservar os detalhes e as curvas originais das letras.
- Utilizar pequenos intervalos entre os desenhos.

**Quarto momento:**
- Finalizar todos os caminhos SVG.
- Fazer a logo original aparecer gradualmente.
- Preservar exatamente a textura rosa suave da imagem.
- Fazer os traços vetoriais desaparecerem discretamente, deixando a logo original em evidência.

A animação deve parecer um desenho contínuo e cuidadosamente coreografado.

## 4. CARACTERÍSTICAS DA ANIMAÇÃO

Utilizar:

- GSAP Timeline.
- DrawSVGPlugin.
- Animações progressivas de stroke.
- Stagger entre caminhos SVG.
- Easing suave.
- Opacity e scale em momentos específicos.
- Sincronização entre os elementos.

Priorizar movimentos naturais e elegantes.

Não utilizar:
- Efeitos neon.
- Glitch.
- Explosões.
- Partículas aleatórias.
- Zoom exagerado.
- Formas geométricas que não pertencem à logo.
- Transições genéricas de carregamento.

Não quero uma animação exagerada. Quero sofisticação.

## 5. REVELAÇÃO DA LOGO ORIGINAL

Ao terminar o desenho dos caminhos:

- Revelar a imagem PNG original.
- Fazer a transição de forma suave.
- Preservar a coloração e textura originais.
- Garantir que os contornos vetoriais estejam perfeitamente alinhados à imagem.
- Evitar duplicação visual dos traços.
- Não deixar a imagem com aparência de um quadrado sobre o fundo.

Caso a imagem possua fundo incorporado, preparar uma composição que integre esse fundo à tela de abertura sem criar bordas visíveis ou diferenças de tonalidade.

A logo final deve ser fiel ao arquivo enviado.

## 6. SAÍDA DA INTRODUÇÃO

Depois que a logo estiver completamente formada:

- Mantê-la centralizada por aproximadamente 1 segundo.
- Fazer uma redução de escala muito sutil.
- Criar uma transição suave de saída.
- Revelar a página inicial do site.

A transição deve ser elegante, sem cortes bruscos.

Não reconstruir a Hero Section.
Não alterar o layout existente.
Apenas revelar o site depois da introdução.

## 7. IDENTIDADE VISUAL

Seguir rigorosamente a paleta oficial:

- #160F14
- #21151D
- #281A24
- #513044
- #A87589
- #D2A6B4

O rosa deve permanecer suave, próximo ao rosa antigo e ao rosé.

Não utilizar pink neon, rosa fluorescente ou iluminação excessiva.

## 8. IMPLEMENTAÇÃO TÉCNICA

Antes de implementar:

1. Analisar a estrutura atual do projeto.
2. Verificar a tecnologia utilizada.
3. Identificar a localização da imagem original.
4. Verificar se GSAP já está instalado.
5. Preparar os caminhos SVG da logo.

Utilizar GSAP e registrar corretamente o DrawSVGPlugin.

Consultar a documentação oficial:
https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/

Utilizar uma timeline organizada para controlar toda a sequência.

Não aplicar DrawSVG diretamente na imagem PNG. O efeito precisa atuar nos caminhos SVG vetorizados.

Garantir limpeza das animações e dos event listeners ao desmontar os componentes.

## 9. EXPERIÊNCIA E DESEMPENHO

- Executar a introdução apenas na entrada inicial da sessão.
- Não repetir a animação ao navegar entre páginas.
- Implementar uma opção discreta de pular introdução.
- Evitar carregamento infinito.
- Garantir funcionamento em desktop e mobile.
- Respeitar prefers-reduced-motion.
- Não iniciar áudio automaticamente.
- Preservar o modo claro ou escuro escolhido pelo visitante após a introdução.

A abertura pode utilizar o fundo vinho profundo nos dois temas, revelando posteriormente o tema selecionado.

## 10. TESTE FINAL

Executar o site e verificar visualmente:

- Se a logo está centralizada.
- Se os caminhos estão sendo desenhados progressivamente.
- Se as estrelas e os elementos ornamentais aparecem corretamente.
- Se o R e o M preservam suas proporções.
- Se a imagem original aparece ao final.
- Se não existem desalinhamentos entre SVG e PNG.
- Se a transição para a página inicial funciona.
- Se a experiência funciona em telas menores.

Não finalizar apenas porque o código compila.

A animação precisa estar realmente funcionando e visualmente aprovada.

---

# RESULTADO ESPERADO

Quero que o visitante entre no site e encontre uma tela completamente escura, em vinho profundo.

No centro, os elementos ornamentais da logo começam a ser desenhados delicadamente.

Primeiro os arcos, depois as estrelas e, por último, o monograma RM.

Os traços devem surgir progressivamente, como uma assinatura sendo desenhada à mão.

Quando o desenho estiver completo, a logo original aparece com sua textura rosa suave, permanecendo centralizada por um breve instante.

Em seguida, a introdução desaparece elegantemente e revela a página inicial da Rebecca's Mystery.

**A LOGO É A PROTAGONISTA. QUERO UMA ANIMAÇÃO DE DESENHO REAL, UTILIZANDO GSAP DRAWSVG, E NÃO UMA SIMPLES APARIÇÃO DE IMAGEM.**

O resultado deve parecer uma abertura de identidade visual criada por um estúdio profissional de motion design.