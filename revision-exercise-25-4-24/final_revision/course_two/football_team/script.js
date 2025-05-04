/*
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

Object.freeze(myFavoriteFootballTeam);
*/

// Showing d effect of Object.freeze():

// keep a copy of: myFavoriteFootballTeam.players
// const copyPlayers = myFavoriteFootballTeam.players;

// // ===============================
// console.log("1st scenario: ");
// console.log(myFavoriteFootballTeam.players);

// myFavoriteFootballTeam.players = [];
// console.log(myFavoriteFootballTeam.players); // []

// // ===============================
// console.log("2nd scenario: ");
// myFavoriteFootballTeam.players = copyPlayers;

// console.log(myFavoriteFootballTeam.players);
// Object.freeze(myFavoriteFootballTeam);

// myFavoriteFootballTeam.players = [];

// // myFavoriteFootballTeam.players = []; has no
// // effect bcos of d Object.freeze()
// console.log(myFavoriteFootballTeam.players);

// Revision
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
            position: "forward",
            number: 1,
            isCaptain: false,
            nickname: false,
        },

        {
            name: "Sergio Batista",
            position: "midfielder",
            number: 2,
            isCaptain: false,
            nickname: false,
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
            nickname: false,
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
            nickname: false,
        },

        {
            name: "Oscar Garré",
            position: "defender",
            number: 13,
            isCaptain: false,
            nickname: false,
        },

        {
            name: "Ricardo Giusti",
            position: "midfielder",
            number: 14,
            isCaptain: false,
            nickname: false,
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
            nickname: false,
        },

        {
            name: "Pedro Pasculli",
            position: "forward",
            number: 17,
            isCaptain: false,
            nickname: false,
        },

        {
            name: "Nery Pumpido",
            position: "goalkeeper",
            number: 18,
            isCaptain: false,
            nickname: false,
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
            nickname: false,
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
            nickname: false,
        },
    ],
};

Object.freeze(myFavoriteFootballTeam);

// team stats
const teamEl = document.getElementById("team");
const sportEl = document.getElementById("sport");
const yearEl = document.getElementById("year");
const headCoachEl = document.getElementById("head-coach");

const selectPlayerEl = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

const { team, sport, year, players } = myFavoriteFootballTeam;

const { coachName } = myFavoriteFootballTeam.headCoach;

teamEl.textContent = team;
sportEl.textContent = sport;
yearEl.textContent = year;
headCoachEl.textContent = coachName;

const showPlayerCards = (arr = players) => {
    arr.map(
        ({ name, position, number, nickname, isCaptain }) =>
            (playerCards.innerHTML += `
                    <div class="player-card">
                        <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
                        <p>Position: ${position}</p>
                        <p>Number: ${number}</p>
                        <p>${nickname ? "Nickname: " + nickname : ""}
                    </div>
        `)
    ).join(",");
};

selectPlayerEl.addEventListener("change", (e) => {
    playerCards.innerHTML = "";

    // console.log(e.target.value);

    // showPlayerCards();

    switch (e.target.value) {
        case "nickname":
            // const nickName = ;

            showPlayerCards(
                players.filter((player) => player.nickname !== false)
            );

            // console.log(nickName);
            break;

        case "forward":
            showPlayerCards(
                players.filter((player) => player.position === "forward")
            );
            break;

        case "forward":
            showPlayerCards(
                players.filter((player) => player.position === "forward")
            );
            break;

        case "forward":
            showPlayerCards(
                players.filter((player) => player.position === "forward")
            );
            break;

        case "forward":
            showPlayerCards(
                players.filter((player) => player.position === "forward")
            );
            break;

        case "forward":
            showPlayerCards(
                players.filter((player) => player.position === "forward")
            );
            break;

        default:
            showPlayerCards();
    }
});
