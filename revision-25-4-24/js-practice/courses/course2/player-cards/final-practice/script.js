// team stats
const teamEl = document.getElementById("team");
const sportEl = document.getElementById("sport");
const yearEl = document.getElementById("year");
const headCoachEl = document.getElementById("head-coach");

// btns
const allBtn = document.getElementById("all");
const nicknameBtn = document.getElementById("nickname");
const goalkeeperBtn = document.getElementById("goalkeeper");
const defenderBtn = document.getElementById("defender");
const midfielderBtn = document.getElementById("midfielder");
const forwardBtn = document.getElementById("forward");

const playerCards = document.getElementById("player-cards");

// football team obj ppty
const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: 1986,
    isWorldCupWinner: true,

    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7,
    },

    players: [
        {
            name: "Sergio Almirón",
            position: "Forward",
            number: 1,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Sergio Batista",
            position: "Midfielder",
            number: 2,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Ricardo Bochini",
            position: "Midfielder",
            number: 3,
            isCaptain: false,
            nickname: "El Bocha",
        },
        {
            name: "Claudio Borghi",
            position: "Midfielder",
            number: 4,
            isCaptain: false,
            nickname: "Bichi",
        },
        {
            name: "José Luis Brown",
            position: "Defender",
            number: 5,
            isCaptain: false,
            nickname: "Tata",
        },
        {
            name: "Daniel Passarella",
            position: "Defender",
            number: 6,
            isCaptain: false,
            nickname: "El Gran Capitán",
        },
        {
            name: "Jorge Burruchaga",
            position: "Forward",
            number: 7,
            isCaptain: false,
            nickname: "Burru",
        },
        {
            name: "Néstor Clausen",
            position: "Defender",
            number: 8,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "José Luis Cuciuffo",
            position: "Defender",
            number: 9,
            isCaptain: false,
            nickname: "El Cuchu",
        },
        {
            name: "Diego Maradona",
            position: "Midfielder",
            number: 10,
            isCaptain: true,
            nickname: "El Pibe de Oro",
        },
        {
            name: "Jorge Valdano",
            position: "Forward",
            number: 11,
            isCaptain: false,
            nickname: "The Philosopher of Football",
        },
        {
            name: "Héctor Enrique",
            position: "Midfielder",
            number: 12,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Oscar Garré",
            position: "Defender",
            number: 13,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Ricardo Giusti",
            position: "Midfielder",
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
            position: "Defender",
            number: 16,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Pedro Pasculli",
            position: "Forward",
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
            position: "Defender",
            number: 19,
            isCaptain: false,
            nickname: "El Cabezón",
        },
        {
            name: "Carlos Tapia",
            position: "Midfielder",
            number: 20,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Marcelo Trobbiani",
            position: "Midfielder",
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

Object.freeze(myFavoriteFootballTeam);

const { team, sport, year, players } = myFavoriteFootballTeam;

const { coachName } = myFavoriteFootballTeam.headCoach;

teamEl.textContent = team;
sportEl.textContent = sport;
yearEl.textContent = year;
headCoachEl.textContent = coachName;

const setPlayerCard = (arr = players) => {
    playerCards.innerHTML += arr
        .map(
            ({ name, position, number, isCaptain, nickname }) =>
                `
            <div class="player-card">
                <h2>
                    ${isCaptain ? "Captain" : ""}
                    ${name}
                </h2>
                    
                <p>Position: ${position}</p>
                <p>Number: ${number}</p>
                <p>Nickname: ${nickname}</p>
            </div>
        `
        )
        .join("");
};

// console.log(setPlayerCard(players));

// console.log(playerCards);

// logic

const getBtnValue = (val) => {
    playerCards.innerHTML = "";

    console.log(val);

    switch (val) {
        case "nickname":
            setPlayerCard(players.filter((player) => player.nickname !== null));

            break;

        case "Goalkeeper":
            setPlayerCard(
                players.filter((player) => player.position === "Goalkeeper")
            );

            break;

        case "Defender":
            setPlayerCard(
                players.filter((player) => player.position === "Defender")
            );

            break;

        case "Midfielder":
            setPlayerCard(
                players.filter((player) => player.position === "Midfielder")
            );

            break;

        case "Forward":
            setPlayerCard(
                players.filter((player) => player.position === "Forward")
            );

            break;

        default:
            setPlayerCard(players);
    }
};

allBtn.addEventListener("click", (e) => {
    getBtnValue(e.target.value);
});

nicknameBtn.addEventListener("click", (e) => {
    getBtnValue(e.target.value);
});

goalkeeperBtn.addEventListener("click", (e) => {
    getBtnValue(e.target.value);
});

defenderBtn.addEventListener("click", (e) => {
    getBtnValue(e.target.value);
});

midfielderBtn.addEventListener("click", (e) => {
    getBtnValue(e.target.value);
});

forwardBtn.addEventListener("click", (e) => {
    getBtnValue(e.target.value);
});
