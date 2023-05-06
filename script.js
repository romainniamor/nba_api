import { API_KEY } from "./config.js";

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
        const dropDownMenu = document.querySelector(".dropdown-menu");
        const dropDownItem = document.createElement("a");
        dropDownItem.classList.add("dropdown-item", "btn-warning");
        dropDownItem.textContent = `${element.city} ${element.name}`;
        dropDownMenu.appendChild(dropDownItem);
        // séparation des équipes par conférence
        if (element.conference === "East") {
          const eastConf = document.querySelector(".east-teams");
          const eastTeam = document.createElement("li");
          eastTeam.classList.add("team");
          const logoImg = document.createElement("img");
          logoImg.src = `assets/logo_nba_teams/${element.name}.png`;

          logoImg.classList.add("logo");

          eastTeam.textContent = `${element.city} ${element.name}`;
          eastConf.appendChild(eastTeam);
          eastTeam.appendChild(logoImg);
        } else {
          console.log(element.city, element.name);
          const westConf = document.querySelector(".west-teams");
          const westTeam = document.createElement("li");
          westTeam.classList.add("team");
          const logoImg = document.createElement("img");
          logoImg.src = `assets/logo_nba_teams/${element.name}.png`;

          logoImg.classList.add("logo");

          westTeam.textContent = `${element.city} ${element.name}`;
          westConf.appendChild(westTeam);
          westTeam.appendChild(logoImg);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
  console.log("test");
}

getTeams();
