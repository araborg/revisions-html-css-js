const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");

const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");

const playerCards = document.getElementById("player-cards");
const searchBtn = document.getElementById("search");

const userInput = document.getElementById("user-input");

const myFavoriteFootballTeam = {
    // obj ppty
    team: "Argentina",
    sport: "Football",
    year: 1986,

    // boolean
    isWorldCupWinner: true,

    // obj
    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7,
    },

    // arr of obj
    players: [
        {
            name: "Sergio Almirón",
            position: "forward",
            number: 1,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "Sergio Batista",
            position: "midfielder",
            number: 2,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "Ricardo Bochini",
            position: "midfielder",
            number: 3,
            isCaptain: false,
            nickname: "El Bocha",
        },

        {
            name: "Claudio Borghi",
            position: "midfielder",
            number: 4,
            isCaptain: false,
            nickname: "Bichi",
        },

        {
            name: "José Luis Brown",
            position: "defender",
            number: 5,
            isCaptain: false,
            nickname: "Tata",
        },

        {
            name: "Daniel Passarella",
            position: "defender",
            number: 6,
            isCaptain: false,
            nickname: "El Gran Capitán",
        },

        {
            name: "Jorge Burruchaga",
            position: "forward",
            number: 7,
            isCaptain: false,
            nickname: "Burru",
        },

        {
            name: "Néstor Clausen",
            position: "defender",
            number: 8,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "José Luis Cuciuffo",
            position: "defender",
            number: 9,
            isCaptain: false,
            nickname: "El Cuchu",
        },

        {
            name: "Diego Maradona",
            position: "midfielder",
            number: 10,
            isCaptain: true,
            nickname: "El Pibe de Oro",
        },

        {
            name: "Jorge Valdano",
            position: "forward",
            number: 11,
            isCaptain: false,
            nickname: "The Philosopher of Football",
        },

        {
            name: "Héctor Enrique",
            position: "midfielder",
            number: 12,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "Oscar Garré",
            position: "defender",
            number: 13,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "Ricardo Giusti",
            position: "midfielder",
            number: 14,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "Luis Islas",
            position: "goalkeeper",
            number: 15,
            isCaptain: false,
            nickname: "El loco",
        },

        {
            name: "Julio Olarticoechea",
            position: "defender",
            number: 16,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "Pedro Pasculli",
            position: "forward",
            number: 17,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "Nery Pumpido",
            position: "goalkeeper",
            number: 18,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "Oscar Ruggeri",
            position: "defender",
            number: 19,
            isCaptain: false,
            nickname: "El Cabezón",
        },

        {
            name: "Carlos Tapia",
            position: "midfielder",
            number: 20,
            isCaptain: false,
            nickname: null,
        },

        {
            name: "Marcelo Trobbiani",
            position: "midfielder",
            number: 21,
            isCaptain: false,
            nickname: "Calesita",
        },

        {
            name: "Héctor Zelada",
            position: "goalkeeper",
            number: 22,
            isCaptain: false,
            nickname: null,
        },
    ],
};

// Mk d obj immutable:
Object.freeze(myFavoriteFootballTeam);

// obj destructuring:
const { sport, team, year, players } = myFavoriteFootballTeam;

const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

// Logic:
const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr
        ?.map(
            ({ name, position, number, isCaptain, nickname }) =>
                `
                    <div class="player-card">
                        <h2>
                            ${isCaptain ? "(Captain)" : ""} 
                            ${name}
                        </h2>

                        <p>Position: ${position}</p>

                        <p>Number: ${number}</p>

                        <p>
                            Nickname: ${nickname !== null ? nickname : "N/A"}
                        </p>
                    </div>
                `
        )
        .join("");
};

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputValue = userInput.value.toLowerCase();

    const selectedPlayer = players.map((player) => {
        if (player.name.toLowerCase().includes(inputValue)) {
            const choosenPlayer = players.filter((player) =>
                player.name.toLowerCase().includes(inputValue)
            );

            playerCards.innerHTML = "";

            setPlayerCards(choosenPlayer);
        } else {
            return;
        }
    });
});
