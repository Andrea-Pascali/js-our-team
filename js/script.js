// Dati iniziali del team
const team = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      photo: "./img/male1.png",
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      photo: "./img/female1.png",
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      photo: "./img/male2.png",
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      photo: "./img/female2.png",
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      photo: "./img/male3.png",
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      photo: "./img/female3.png",
    },
  ];
  
  // Generare le card
  function generateCards() {
    const container = document.getElementById("teamContainer");
    container.innerHTML = ""; // Reset del contenitore
  
    // Creazione delle card
    team.forEach((member) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${member.photo}" alt="${member.name}">
        <div class="info">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
          <a href="mailto:${member.email}">${member.email}</a>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Funzione per aggiungere un nuovo membro
  document.getElementById("addMemberForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Recupera i valori del form
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const photo = document.getElementById("photo").value;
  
    // Aggiunge il nuovo membro al team
    team.push({ name, role, email, photo });
  
    // Rigenera le card
    generateCards();
  
    // Resetta il form
    this.reset();
  });
  
  // Genera le card al caricamento della pagina
  generateCards();
  