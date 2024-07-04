// btns
const previousBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const replayBtn = document.getElementById("replay");

const playlistSongs = document.getElementById("playlist-songs");

const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
    },
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
    },
    {
        id: 3,
        title: "Cruising for a Musing",
        artist: "Quincy Larson",
        duration: "3:34",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
    },
    {
        id: 4,
        title: "Never Not Favored",
        artist: "Quincy Larson",
        duration: "3:35",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
    },
    {
        id: 5,
        title: "From the Ground Up",
        artist: "Quincy Larson",
        duration: "3:12",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
    },
    {
        id: 6,
        title: "Walking on Air",
        artist: "Quincy Larson",
        duration: "3:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
    },
    {
        id: 7,
        title: "Can't Stop Me. Can't Even Slow Me Down.",
        artist: "Quincy Larson",
        duration: "3:52",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
        id: 8,
        title: "The Surest Way Out is Through",
        artist: "Quincy Larson",
        duration: "3:10",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
    },
    {
        id: 9,
        title: "Chasing That Feeling",
        artist: "Quincy Larson",
        duration: "2:43",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
    },

    {
        id: 9,
        title: "Hallelujah Praise The Lord",
        artist: "Nathan Bassey",
        duration: "12:13",
        src: "../../../../../../../../../Music/Nathaniel_Bassey_-_Hallelujah_Praise_The_Lord_CeeNaija.com_.mp3",
    },
];

const songsObj = {
    songs: [...allSongs],
    selectedSong: null,
    songDuration: 0,
};

const audio = new Audio();

const sortSong = (songs) => {
    songs.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }

        if (a.title < b.title) {
            return -1;
        }

        if (a.title === b.title) {
            return 0;
        }
    });

    return songs;
};

const displaySong = (songs) => {
    const eachSong = songs
        .map((song) => {
            // console.log(song);
            return `
                <li class="playlist-song">
                    <span class="playlist-song-info" onclick=playSong(${song.id})>
                        <span class="playlist-song-title">${song.title}</span>
                        <span class="playlist-song-artist">${song.artist}</span>
                        <div class="playlist-song-duration">${song.duration}</div>
                    </span>

                    <button class="playlist-replay-btn">
                        <svg width="24" height="19" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h48v48H0z" fill="none" />
                            <path d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"/>
                        </svg>
                    </button>

                    <button class="playlist-delete-btn">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
        
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                    </button>
                    
                </li>

        `;
        })
        .join("");

    playlistSongs.innerHTML += eachSong;
};

displaySong(sortSong(songsObj?.songs));

const playSong = (id) => {
    // to play a song:
    // 1. select d song
    // if there is no song playing already play d 1st song
    // 2. using conditions, mk d audio.currentTime either 0 or chosenSong.currentTime
    // 3. mk audio.scr equal d chosen song src

    let chosenSong = songsObj?.songs.find((song) => song.id === id);

    if (songsObj?.selectedSong === null || songsObj) {
        // chosenSong = songsObj?.songs[0];
        console.log("null");
    } else {
        console.log("not null");
    }

    console.log(chosenSong);
    audio.src = chosenSong.src;

    audio.play();
};

playBtn.addEventListener("click", playSong);
