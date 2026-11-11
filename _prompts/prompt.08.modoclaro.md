# PROMPT — IMPLEMENTAÇÃO DE MODO CLARO E MODO ESCURO
## Projeto: Rebecca's Mystery

Implemente um sistema completo de alternância entre modo claro (Light Mode) e modo escuro (Dark Mode) em todo o site Rebecca's Mystery.

**IMPORTANTE: Não quero apenas um botão decorativo que troca a cor do fundo. Quero dois temas completos, com identidades visuais bem construídas, aplicados em todas as páginas e componentes do projeto.**

## 1. BOTÃO DE ALTERNÂNCIA

Adicionar um botão de alternância de tema no cabeçalho do site.

- Utilizar ícone de sol para representar o modo claro.
- Utilizar ícone de lua para representar o modo escuro.
- Criar uma transição suave ao alternar os temas.
- Adicionar feedback visual ao passar o mouse.
- Garantir que o botão funcione por clique e teclado.
- Apresentar um indicador acessível do tema selecionado.
- Manter o botão visível e organizado em todas as resoluções.

O controle deve combinar com a identidade visual da Rebecca's Mystery, sem parecer um botão genérico.

## 2. MODO CLARO — LIGHT MODE

O modo claro deve ser o tema padrão da identidade visual.

Utilizar:
- Fundo em tons de creme e branco quente.
- Bordô e vinho para títulos e textos principais.
- Rosa antigo e rosé para destaques.
- Rosa vibrante em elementos de interação.
- Painéis claros e superfícies com contraste adequado.
- Sombras suaves e elegantes.

A aparência deve ser delicada, sofisticada e editorial, mantendo a atmosfera de mistério.

## 3. MODO ESCURO — DARK MODE

Criar uma versão escura completa, sem simplesmente inverter as cores do modo claro.

Utilizar:
- Preto profundo e vinho quase preto nos fundos principais.
- Bordô escuro em superfícies secundárias.
- Rosé e rosa antigo nos detalhes.
- Rosa mais vibrante para botões e elementos de destaque.
- Textos em branco suave e tons claros.
- Bordas discretas e sombras adequadas ao tema.

O modo escuro deve transmitir uma atmosfera mais intensa, misteriosa e cinematográfica, combinando com o universo da Academia Saint Claire.

Evitar fundos totalmente pretos em todas as seções. Trabalhar com diferentes tonalidades para criar profundidade.

## 4. ADAPTAÇÃO DE TODOS OS COMPONENTES

A alternância deve afetar o site inteiro.

Revisar e adaptar:

- Cabeçalho e menu de navegação.
- Hero section.
- Títulos e parágrafos.
- Botões e links.
- Cards e painéis.
- Seções de apresentação.
- Imagens e molduras.
- Elementos decorativos.
- Formulários.
- Modais e menus.
- Rodapé.
- Componentes interativos.

Nenhum componente deve ficar com cores inadequadas após a troca de tema.

Preservar a legibilidade, o contraste e a identidade visual nos dois modos.

## 5. IMAGENS E ELEMENTOS DECORATIVOS

Verificar como cada imagem e elemento gráfico se comporta nos dois temas.

- Preservar as imagens originais.
- Evitar filtros que alterem artificialmente as fotografias.
- Adaptar fundos, bordas e molduras quando necessário.
- Garantir que elementos decorativos continuem visíveis.
- Evitar que ícones desapareçam por falta de contraste.
- Ajustar sombras para cada tema.

Não aplicar filtros globais para transformar imagens claras em escuras.

## 6. FUNCIONAMENTO E PERSISTÊNCIA

Implementar um sistema funcional de gerenciamento de tema.

- Utilizar uma variável de estado global ou contexto compartilhado.
- Utilizar CSS Variables para centralizar as cores.
- Permitir alternância instantânea entre os temas.
- Salvar a preferência do usuário no localStorage.
- Manter o tema escolhido ao atualizar ou navegar entre páginas.
- Evitar que o site volte ao tema padrão a cada carregamento.
- Evitar uma mudança brusca de cores durante a inicialização.
- Considerar a preferência de tema do sistema operacional na primeira visita, quando ainda não houver uma escolha salva.

A escolha manual do usuário deve ter prioridade sobre a preferência automática do sistema.

## 7. ANIMAÇÕES E TRANSIÇÕES

Criar uma transição visual agradável entre os temas.

- Transição suave de cores de fundo.
- Transição de textos e bordas.
- Mudanças discretas de iluminação.
- Animação sutil no ícone de lua e sol.
- Evitar piscadas ou flashes durante a troca.
- Não utilizar animações exageradas.

As transições devem ser rápidas e não prejudicar a navegação.

Respeitar a configuração `prefers-reduced-motion`.

## 8. RESPONSIVIDADE

Garantir que o botão de alternância funcione em computadores, tablets e smartphones.

- Manter o controle acessível no menu mobile.
- Evitar sobreposição com outros botões.
- Preservar o tamanho adequado para interação por toque.
- Garantir que o tema selecionado seja mantido em todas as resoluções.

## 9. ORGANIZAÇÃO DO CÓDIGO

- Criar tokens de cores para os dois temas.
- Evitar repetir cores diretamente em vários componentes.
- Centralizar as configurações visuais.
- Manter o código organizado e reutilizável.
- Integrar a implementação à estrutura atual.
- Não criar um sistema separado e desconectado do site.

## 10. TESTES OBRIGATÓRIOS

Após implementar:

1. Testar a alternância entre os dois temas.
2. Navegar por todas as páginas.
3. Atualizar o navegador e verificar se a preferência foi mantida.
4. Verificar botões, menus, cards e formulários.
5. Testar as versões desktop e mobile.
6. Conferir se todos os textos continuam legíveis.
7. Verificar se não existem elementos invisíveis ou com contraste inadequado.

Corrigir todos os problemas encontrados.

---

# RESULTADO ESPERADO

Quero que Rebecca's Mystery tenha dois temas completos e visualmente bem trabalhados.

**MODO CLARO:** delicado, sofisticado, editorial e com tons claros, rosé e bordô.

**MODO ESCURO:** misterioso, cinematográfico, intenso e com tons profundos de vinho, preto e rosa.

A troca entre os temas deve ser funcional, elegante e instantânea, mantendo a escolha do usuário durante toda a navegação.

**Não quero apenas trocar o fundo branco por preto. Quero duas experiências visuais diferentes, mas que claramente pertençam à mesma identidade da Rebecca's Mystery.**