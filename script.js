const API_KEY = "";

async function getTeams() {
  const url = "https://free-nba.p.rapidapi.com/teams?page=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    //dropdown maj avec l'ensemble des teams nba
    if (data.data && data.data.length > 0) {
      data.data.forEach((element) => {
        // séparation des équipes par division
        if (element.division === "Northwest") {
          const northwest = document.querySelector(".northwest");
          const northWestTeam = document.createElement("li");
          northWestTeam.classList.add("team");
          const logoImg = document.createElement("img");
          logoImg.src = `assets/logo_nba_teams/${element.name}.png`;

          logoImg.classList.add("logo");

          northWestTeam.textContent = `${element.city} ${element.name}`;
          northwest.appendChild(northWestTeam);
          northWestTeam.appendChild(logoImg);
        } else if (element.division === "Pacific") {
          const pacific = document.querySelector(".pacific");
          const pacificTeam = document.createElement("li");
          pacificTeam.classList.add("team");
          const logoImg = document.createElement("img");
          logoImg.src = `assets/logo_nba_teams/${element.name}.png`;

          logoImg.classList.add("logo");

          pacificTeam.textContent = `${element.city} ${element.name}`;
          pacific.appendChild(pacificTeam);
          pacificTeam.appendChild(logoImg);
        } else if (element.division === "Southwest") {
          const southWest = document.querySelector(".southwest");
          const southWestTeam = document.createElement("li");
          southWestTeam.classList.add("team");
          const logoImg = document.createElement("img");
          logoImg.src = `assets/logo_nba_teams/${element.name}.png`;

          logoImg.classList.add("logo");

          southWestTeam.textContent = `${element.city} ${element.name}`;
          southWest.appendChild(southWestTeam);
          southWestTeam.appendChild(logoImg);
        } else if (element.division === "Southwest") {
          const southWest = document.querySelector(".southwest");
          const southWestTeam = document.createElement("li");
          southWestTeam.classList.add("team");
          const logoImg = document.createElement("img");
          logoImg.src = `assets/logo_nba_teams/${element.name}.png`;

          logoImg.classList.add("logo");

          southWestTeam.textContent = `${element.city} ${element.name}`;
          southWest.appendChild(southWestTeam);
          southWestTeam.appendChild(logoImg);
        } else if (element.division === "Central") {
          const central = document.querySelector(".central");
          const centralTeam = document.createElement("li");
          centralTeam.classList.add("team");
          const logoImg = document.createElement("img");
          logoImg.src = `assets/logo_nba_teams/${element.name}.png`;

          logoImg.classList.add("logo");

          centralTeam.textContent = `${element.city} ${element.name}`;
          central.appendChild(centralTeam);
          centralTeam.appendChild(logoImg);
        } else if (element.division === "Atlantic") {
          const atlantic = document.querySelector(".atlantic");
          const atlanticTeam = document.createElement("li");
          atlanticTeam.classList.add("team");
          const logoImg = document.createElement("img");
          logoImg.src = `assets/logo_nba_teams/${element.name}.png`;

          logoImg.classList.add("logo");

          atlanticTeam.textContent = `${element.city} ${element.name}`;
          atlantic.appendChild(atlanticTeam);
          atlanticTeam.appendChild(logoImg);
        } else if (element.division === "Southeast") {
          const southEast = document.querySelector(".southeast");
          const southEastTeam = document.createElement("li");
          southEastTeam.classList.add("team");
          const logoImg = document.createElement("img");
          logoImg.src = `assets/logo_nba_teams/${element.name}.png`;

          logoImg.classList.add("logo");

          southEastTeam.textContent = `${element.city} ${element.name}`;
          southEast.appendChild(southEastTeam);
          southEastTeam.appendChild(logoImg);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
  addPlayer();
}

getTeams();
addPlayer();
getPlayers();

function addPlayer() {
  const teams = document.querySelectorAll(".team");
  teams.forEach((team) => {
    team.addEventListener("click", () => {
      const teamName = team.textContent.trim();
      alert(`Vous avez cliqué sur l'équipe : ${teamName}`);
    });
  });
}

async function getPlayers() {
  const url = "https://free-nba.p.rapidapi.com/players?page=16";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (data.data && data.data.length > 0) {
      data.data.forEach((element) => {
        if (element.team.city === "Charlotte") {
          console.log(element.first_name, element.last_name);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
}
