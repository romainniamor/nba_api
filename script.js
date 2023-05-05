console.log("test");

const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", getTeams);

async function getTeams() {
  const url = "https://free-nba.p.rapidapi.com/teams?page=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "eece1f6e8dmshb6f99d74cd7bbc0p187ce4jsn1037a6190ce8",
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
        // separation des équipes par conference
        //si Est
        if (element.conference === "East") {
          console.log(element.city, element.name);
          const eastConf = document.querySelector(".east-teams");
          const eastTeam = document.createElement("li");
          eastTeam.classList.add("team");
          eastTeam.textContent = `${element.city} ${element.name}`;
          eastConf.appendChild(eastTeam);
        }
        //si west
        else {
          const westConf = document.querySelector(".west-teams");
          const westTeam = document.createElement("li");
          westTeam.classList.add("team");
          westTeam.textContent = `${element.city} ${element.name}`;
          westConf.appendChild(westTeam);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
}

getTeams();
