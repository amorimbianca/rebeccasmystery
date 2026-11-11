# PROMPT — RESPONSIVIDADE E ADAPTAÇÃO DE TELAS
## Projeto: Rebecca's Mystery

Desenvolva e implemente uma responsividade completa para o site Rebecca's Mystery, garantindo uma experiência visual sofisticada, moderna e funcional em diferentes dispositivos e resoluções.

O objetivo é fazer com que o site mantenha sua qualidade estética, identidade visual e experiência cinematográfica independentemente do tamanho da tela.

**IMPORTANTE:** Antes de iniciar, analise toda a estrutura do projeto, os componentes, as páginas, os estilos e as animações já implementadas. Trabalhe sobre a estrutura existente, sem reconstruir desnecessariamente o que já está funcionando.

---

## 1. OBJETIVO DA RESPONSIVIDADE

O site deve apresentar uma experiência profissional em:

- Computadores e monitores grandes.
- Notebooks.
- Tablets.
- Smartphones Android.
- iPhones.

A adaptação não deve consistir apenas em diminuir os elementos. É necessário reorganizar o layout de forma inteligente, preservando a hierarquia visual e a experiência de navegação.

A versão desktop deve continuar com sua composição original, enquanto as versões menores devem receber adaptações específicas.

## 2. DESKTOP E NOTEBOOK

Garantir uma experiência visual bem distribuída em diferentes tamanhos de monitores.

- Evitar conteúdos excessivamente esticados.
- Trabalhar com larguras máximas para organizar o conteúdo.
- Manter alinhamentos e proporções consistentes.
- Adaptar espaçamentos conforme a resolução.
- Garantir que imagens e elementos visuais ocupem o espaço adequado.
- Preservar a composição das seções.
- Evitar elementos sobrepostos ou desalinhados.

A versão desktop deve continuar sendo visualmente impactante, sem alterações desnecessárias no design aprovado.

## 3. TABLETS

Adaptar a estrutura para telas intermediárias.

- Reorganizar grids e colunas quando necessário.
- Ajustar margens e espaçamentos.
- Redimensionar títulos e textos.
- Adaptar menus e elementos de navegação.
- Reposicionar imagens e elementos decorativos.
- Garantir que cards mantenham proporções adequadas.
- Ajustar animações para o funcionamento em telas touch.

A versão para tablet não deve parecer uma versão desktop espremida.

## 4. SMARTPHONES E MOBILE

Desenvolver uma experiência mobile cuidadosamente planejada.

### Navegação
- Criar um menu mobile funcional e visualmente sofisticado.
- Implementar menu expansível ou lateral, conforme a estrutura existente.
- Garantir abertura e fechamento suaves.
- Permitir navegação intuitiva por toque.
- Manter todos os links e páginas acessíveis.

### Layout
- Reorganizar seções verticalmente quando necessário.
- Ajustar a disposição dos componentes.
- Adaptar cards para uma apresentação mobile.
- Corrigir espaçamentos e alinhamentos.
- Evitar elementos cortados ou sobrepostos.
- Eliminar rolagem horizontal indesejada.

### Tipografia
- Redimensionar títulos e subtítulos.
- Ajustar quebras de linha.
- Garantir boa legibilidade.
- Utilizar clamp() para tamanhos fluidos quando apropriado.
- Evitar textos muito pequenos ou títulos desproporcionais.

### Botões e interações
- Garantir áreas de toque confortáveis.
- Ajustar dimensões dos botões.
- Manter espaçamento adequado entre elementos clicáveis.
- Garantir que todas as funcionalidades estejam disponíveis sem depender de hover.

## 5. IMAGENS E ELEMENTOS VISUAIS

As imagens possuem papel importante na identidade visual da Rebecca's Mystery.

Garantir que:

- As imagens mantenham suas proporções originais.
- Não existam distorções ou cortes inadequados.
- Os elementos de destaque continuem bem posicionados.
- Imagens de fundo sejam adaptadas para cada resolução.
- O posicionamento de objetos importantes seja preservado.
- O logotipo permaneça legível.
- Elementos decorativos não interfiram no conteúdo.

Utilizar object-fit, object-position e background-position conforme a necessidade de cada elemento.

Não substituir imagens ou modificar sua identidade visual para facilitar a adaptação.

## 6. IDENTIDADE VISUAL

A responsividade deve preservar integralmente a identidade da Rebecca's Mystery.

Manter:

- Paleta de cores em bordô, vinho escuro, preto, rosa antigo e rosé.
- Tipografia e hierarquia visual estabelecidas.
- Estética de suspense e investigação.
- Composição visual cinematográfica.
- Efeitos de iluminação, profundidade e transparência.
- Estilo visual dos cards, botões e componentes.

**Não simplificar excessivamente a versão mobile.** O site precisa continuar sofisticado e visualmente marcante, mesmo em telas pequenas.

## 7. ANIMAÇÕES E RESPONSIVIDADE

Adaptar as animações desenvolvidas no projeto para cada dispositivo.

- Preservar as animações que funcionam bem em telas menores.
- Ajustar movimentos muito intensos.
- Evitar efeitos que prejudiquem o desempenho mobile.
- Não utilizar hover como única forma de interação.
- Garantir que elementos animados não ultrapassem os limites da tela.
- Adaptar efeitos de parallax quando necessário.
- Respeitar prefers-reduced-motion.

As animações devem continuar fazendo parte da experiência, sem comprometer a usabilidade.

## 8. DESEMPENHO E ACESSIBILIDADE

- Evitar carregamento desnecessário de imagens muito grandes.
- Utilizar imagens otimizadas para diferentes resoluções quando possível.
- Evitar mudanças inesperadas de layout durante o carregamento.
- Garantir contraste adequado entre textos e fundos.
- Preservar a navegação por teclado.
- Utilizar HTML semântico.
- Manter indicadores de foco visíveis.
- Garantir que formulários e campos sejam utilizáveis em dispositivos móveis.
- Evitar dependências e recursos desnecessários.

## 9. BREAKPOINTS E TESTES

Testar o site nas seguintes resoluções:

| Dispositivo | Resolução de referência |
|---|---|
| Desktop grande | 1920px |
| Desktop | 1440px |
| Notebook | 1366px |
| Tablet horizontal | 1024px |
| Tablet vertical | 768px |
| Smartphone grande | 430px |
| Smartphone padrão | 390px |
| Smartphone compacto | 360px |

Utilizar media queries com breakpoints estratégicos, considerando também as características reais de cada componente.

Não desenvolver a responsividade pensando exclusivamente nessas resoluções. O site precisa funcionar também em larguras intermediárias.

## 10. VERIFICAÇÃO E CORREÇÃO

Após a implementação, realizar uma revisão completa em todas as páginas.

Verificar:

- Seções com elementos desalinhados.
- Textos cortados ou sobrepostos.
- Imagens distorcidas.
- Cards com dimensões inadequadas.
- Botões fora da área visível.
- Menus que não funcionam.
- Espaçamentos inconsistentes.
- Rolagem horizontal indesejada.
- Animações com problemas em dispositivos touch.
- Problemas de navegação e interação.

Corrigir todos os problemas encontrados antes de finalizar.

## 11. REGRAS OBRIGATÓRIAS

- Não alterar desnecessariamente o layout desktop.
- Não modificar a identidade visual do projeto.
- Não remover conteúdos importantes.
- Não substituir imagens ou logotipos.
- Não comprometer funcionalidades existentes.
- Não utilizar adaptações genéricas.
- Não esconder elementos importantes apenas para facilitar a responsividade.
- Não prejudicar as animações já implementadas.
- Não criar versões desconectadas entre si.
- Manter o código organizado, limpo e reutilizável.
- Evitar duplicação desnecessária de componentes.
- Testar todas as páginas em diferentes resoluções.

## RESULTADO ESPERADO

Transformar a Rebecca's Mystery em um site totalmente responsivo, com acabamento profissional em computadores, notebooks, tablets e smartphones.

A experiência mobile deve ser tão bem trabalhada quanto a desktop, mantendo a atmosfera misteriosa, a identidade visual e a qualidade estética do projeto.

**Quero um site que pareça ter sido planejado para cada dispositivo, e não simplesmente reduzido para caber em uma tela menor. Cada detalhe deve continuar transmitindo a qualidade de um projeto profissional.**