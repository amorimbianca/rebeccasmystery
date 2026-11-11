/**
 * Rebecca's Mystery — Sistema de Personagens (Prompt 07 - Textos Objetivos & Dossiês Refinados)
 */

const charactersData = [
  {
    id: "melissa",
    name: "Melissa",
    role: "Protagonista • Aluna da Saint Claire",
    badge: "Viajante Temporal",
    portrait: "assets/images/characters/melissa.jpg",
    shortDesc: "Retorna 3 semanas no tempo após testemunhar o colapso da turma. Seu diário cataloga pistas para romper o pacto de silêncio.",
    registry: "SC-1049-A",
    classroom: "3º Ano B — Ala Leste",
    quote: "“O relógio não nos deu outra chance por capricho. Ele nos deu porque ninguém estava prestando atenção.”",
    observations: [
      "Retornou para 3 semanas antes do acontecimento fatal.",
      "Cataloga pistas, horários e contradições nos depoimentos.",
      "Identificou as falhas no lema 'Meninas apoiam meninas'."
    ],
    status: "Investigação Ativa"
  },
  {
    id: "rebecca",
    name: "Rebecca",
    role: "Figura Central • Enigma da Turma",
    badge: "Centro do Mistério",
    portrait: "assets/images/characters/rebecca.jpg",
    shortDesc: "Alvo de boatos anônimos e do isolamento gradual imposto pela turma. Seu diário e registros guardam a chave do mistério.",
    registry: "SC-1052-B",
    classroom: "3º Ano B — Ala Leste",
    quote: "“A ausência de uma palavra machuca mais do que qualquer acusação explícita.”",
    observations: [
      "Vítima de boatos anônimos espalhados nos corredores.",
      "Isolada gradualmente com o silêncio da maioria das alunas.",
      "A chave para salvar Rebecca depende de agir antes do Dia 21."
    ],
    status: "Arquivo Classificado"
  },
  {
    id: "beatrice",
    name: "Beatrice",
    role: "Representante • Círculo Social",
    badge: "Liderança de Turma",
    portrait: "assets/images/characters/beatrice.jpg",
    shortDesc: "Líder de classe que preza pela reputação da instituição a qualquer custo. Suas ações oscilam entre controle e omissão.",
    registry: "SC-1033-A",
    classroom: "3º Ano B — Ala Leste",
    quote: "“A imagem de Saint Claire depende da nossa harmonia. Tudo precisa permanecer sob controle.”",
    observations: [
      "Ponto de contato entre as alunas e a coordenação.",
      "Evita expor conflitos para preservar a reputação do grupo.",
      "Hesita quando confrontada sobre os bilhetes de armário."
    ],
    status: "Registro Verificado"
  }
];

function initCharacters() {
  const container = document.getElementById("characters-grid");
  if (!container) return;

  container.innerHTML = "";

  charactersData.forEach((char) => {
    const card = document.createElement("article");
    card.className = "ref-char-horizontal-card reveal";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Abrir dossiê de ${char.name}`);

    card.innerHTML = `
      <div class="ref-char-thumb-wrap">
        <img src="${char.portrait}" alt="${char.name}" class="ref-char-thumb-img">
        <span class="ref-char-badge">${char.badge}</span>
      </div>
      <div class="ref-char-info">
        <div class="ref-char-header">
          <h4>${char.name}</h4>
          <span class="ref-char-reg">${char.registry}</span>
        </div>
        <span class="ref-char-role">${char.role}</span>
        <p class="ref-char-desc">${char.shortDesc}</p>
        <div class="ref-char-action">
          <span>Ver Dossiê</span>
          <span class="char-arrow">→</span>
        </div>
      </div>
    `;

    // Eventos de clique e acessibilidade por teclado (Enter / Espaço)
    const openDossier = () => showDossierModal(char);
    card.addEventListener("click", openDossier);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDossier();
      }
    });

    container.appendChild(card);
  });
}

function showDossierModal(char) {
  const modal = document.getElementById("dossier-modal");
  const modalTitle = document.getElementById("modal-dossier-title");
  const modalContent = document.getElementById("modal-dossier-content");

  if (!modal || !modalContent) return;

  modalTitle.textContent = `Dossiê #${char.registry} — ${char.name}`;

  modalContent.innerHTML = `
    <div class="dossier-modal-layout">
      <div class="dossier-modal-side">
        <img src="${char.portrait}" alt="${char.name}" class="dossier-modal-img">
        <div class="dossier-modal-status">
          <span class="status-dot"></span>
          <span>${char.status}</span>
        </div>
      </div>
      <div class="dossier-modal-main">
        <div class="dossier-modal-meta">
          <span class="dossier-tag">${char.role}</span>
          <span class="dossier-loc">${char.classroom}</span>
        </div>
        <p class="dossier-quote">${char.quote}</p>
        <div class="dossier-notes-box">
          <h5>Registros de Observação:</h5>
          <ul>
            ${char.observations.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  // Foco no botão de fechar para acessibilidade
  const closeBtn = document.getElementById("dossier-modal-close");
  if (closeBtn) closeBtn.focus();
}

document.addEventListener("DOMContentLoaded", initCharacters);
