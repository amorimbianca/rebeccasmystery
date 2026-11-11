# Rebecca’s Mystery — Site Oficial

Site oficial, moderno, cinematográfico e totalmente responsivo do jogo narrativo indie **Rebecca’s Mystery**, ambientado na fictícia e tradicional Academia Saint Claire, com foco na temática: **“O impacto do bullying nas relações sociais”**.

---

## 🎨 Identidade Visual e Paleta Oficial

| Cor / Papel | Hexadecimal | Conceito e Aplicação |
| :--- | :--- | :--- |
| **Bordô Profundo** | `#1a0612` | Cor primária oficial. Mistério, profundidade e elegância gótica contemporânea. |
| **Rosé Antigo** | `#b77b9b` | Cor secundária oficial. Contraste, sofisticação, assinaturas de marca e acentos. |
| **Bordô Noturno** | `#0E030A` / `#14040E` | Backgrounds profundos e rodapé cinematográfico. |
| **Superfície Editorial Clara** | `#FAF5F7` | Contraste intencional na seção de conscientização para quebra de monotonia. |
| **Branco Rosado** | `#FAF5F7` | Tipografia principal de alta legibilidade em áreas escuras. |

---

## 📱 Matriz de Responsividade Testada e Homologada (Etapa 06)

O site foi estruturado com media queries estratégicas e tipografia fluida com `clamp()`, eliminando qualquer rolagem horizontal indesejada (`overflow-x: hidden`) e garantindo áreas de toque acessíveis (mínimo de 44px a 48px):

| Dispositivo / Categoria | Resolução de Referência | Adaptação Visual |
| :--- | :--- | :--- |
| **Desktop Grande** | 1920px | Composição com largura máxima de 1280px, proporções preservadas e sem estiramentos. |
| **Desktop Padrão** | 1440px | Layout editorial original com parallax suave e cards sobrepostos. |
| **Notebooks** | 1366px / 1200px | Ajuste nos gaps e proporções da composição sem perdas de escala. |
| **Tablets Horizontais** | 1024px | Grid de 2 colunas para cards e pilares, citação do sobre integrada ao fluxo natural. |
| **Tablets Verticais** | 768px | Menu mobile ativado, empilhamento vertical inteligente dos elementos flutuantes. |
| **Smartphones Grandes** | 430px (iPhone Pro Max / Galaxy Ultra) | Botões com largura total adaptada, textos em escala fluida e títulos otimizados. |
| **Smartphones Padrão** | 390px (iPhone 14/15/16) | Espaçamentos ajustados, canais de apoio empilhados e modais 100% navegáveis por toque. |
| **Smartphones Compactos** | 360px (Android compactos) | Padding lateral seguro de 16px, preservação das quebras de linha e zero cortes. |

---

## 📂 Estrutura de Arquivos

```
Rebecca's Misterys/
├── index.html                   # Página principal com preloader cinematográfico e layout responsivo
├── README.md                    # Documentação do projeto para a equipe
└── assets/
    ├── css/
    │   ├── variables.css        # Variáveis CSS (paleta oficial, tokens de espaçamento e raios)
    │   └── style.css            # Estilos completos, animações 60fps e responsividade fluida
    ├── js/
    │   ├── audio.js             # Sintetizador procedural Web Audio API de atmosfera sonora
    │   ├── characters.js        # Banco de dados e renderizador dos dossiês de alunas
    │   └── main.js              # Preloader, navegação suave, scroll spy, modais, acessibilidade e parallax
    └── images/
        ├── saint_claire_hero.jpg    # Fachada externa da Academia Saint Claire (Hero)
        ├── school_hallway.jpg       # Corredor com armários da escola
        ├── investigation_desk.jpg   # Mesa de investigação temporal e diário
        ├── play_visual.jpg          # Biblioteca gótica para a seção de Jogar
        └── characters/
            ├── melissa.jpg          # Retrato da protagonista Melissa
            ├── rebecca.jpg          # Retrato da figura central Rebecca
            └── beatrice.jpg         # Retrato da aluna Beatrice
```

---

## ♿ Acessibilidade e Inclusão (WCAG)
- Suporte total a `prefers-reduced-motion` no CSS e botão de alternância manual para conforto visual.
- Navegação completa por teclado com indicador visual de foco (`:focus-visible`).
- Gerenciamento de foco (`focus trap`) com tecla `Escape` em todos os modais.
- Áreas de clique/toque de no mínimo 44x44px em botões, ícones e menus mobile.
