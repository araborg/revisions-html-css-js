const playlistSongs = document.getElementById("playlist-songs");

const previousButton = document.getElementById("previous");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const shuffleButton = document.getElementById("shuffle");
const replayButton = document.getElementById("replay");

const allSongs = [
    {
        id: 0,
        title: "Hello World",
        artist: "Rafael",
        duration: "0:23",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/hello-world.mp3",
    },

    {
        id: 1,
        title: "In the Zone",
        artist: "Rafael",
        duration: "0:11",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/in-the-zone.mp3",
    },

    {
        id: 2,
        title: "Camper Cat",
        artist: "Rafael",
        duration: "0:21",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/camper-cat.mp3",
    },

    {
        id: 3,
        title: "Electronic",
        artist: "Rafael",
        duration: "0:15",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/electronic.mp3",
    },

    {
        id: 4,
        title: "Sailing Away",
        artist: "Rafael",
        duration: "0:22",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/sailing-away.mp3",
    },
];

const audio = new Audio();

let userData = {
    songs: [...allSongs],
    currentSong: null,
    currentTime: 0,
};

const sortSongs = (songs) => {
    songs.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        if (a.title === b.title) {
            return 0;
        }
    });

    return songs;
};

const renderSongs = (array) => {
    const songHTML = array
        .map((song) => {
            return `
                <li class='playlist-song ${song.id}' onclick = playSong(${song.id}) >
                    <div class="playlist-song-info">
                        <span class="song-title">${song.title}</span>
                        <span class="song-artist">${song.artist}</span>
                        <span class="song-duration">${song.duration}</span>
                    </div>

                    <button class="song-replay">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h48v48H0z" fill="none" />
                            <path
                                d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"
                            />
                        </svg>
                    </button>

                    <button class="song-delete">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="8" cy="8" r="8" fill="#4d4d62" />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </li>
            `;
        })
        .join(" ");

    playlistSongs.innerHTML = songHTML;
};

renderSongs(sortSongs(userData.songs));

const playSong = (id) => {
    const songEl = userData.songs.find((song) => song.id === id);

    audio.src = songEl.src;
    audio.title = songEl.title;

    if (
        userData.currentSong === null ||
        userData.currentSong.id !== songEl.id
    ) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData.currentTime;
    }

    userData.currentSong = songEl;

    playButton.classList.add("playing");

    // helper fxns
    setPlayerDisplay();

    audio.play();
};

playButton.addEventListener("click", () => {
    if (!userData.currentSong) {
        playSong(userData.songs[0].id);
    } else {
        playSong(userData?.currentSong.id);
    }
});

const getCurrentSongIndex = () => userData.songs.indexOf(userData.currentSong);

const pauseSong = () => {
    userData.currentTime = audio.currentTime;
    playButton.classList.remove("playing");

    audio.pause();
};

pauseButton.addEventListener("click", pauseSong);

const playNextSong = () => {
    const songIndex = getCurrentSongIndex();
    const nextSongIndex = songIndex + 1;
    const nextSong = userData?.songs[nextSongIndex];

    // console.log(userData.currentSong, nextSong, nextSongIndex);

    /*
    // const newSongIndex = userData?.songs[songIndex + 1];
    // console.log(newSongIndex);
    // console.log(userData.songs[newSongIndex]);
    */

    if (!userData.currentSong) {
        playSong(userData?.songs[0].id);
    } else {
        console.log(nextSongIndex === userData.length);
        // if (nextSongIndex > userData?.songs.length - 1) {
        //     playSong(userData?.songs[0].id);
        // }
        // playSong(nextSong?.id);
    }
};

nextButton.addEventListener("click", playNextSong);

console.log(userData?.songs.length);

const setPlayerDisplay = () => {
    const songIndex = getCurrentSongIndex();

    const song = userData?.songs[songIndex];
    // console.log(song);
};

// const playPreviousSong

// const shuffle

// const deleteSong

// const highlightCurrentSong

// const setPlayButtonAccessibleText

// const replayAllSongs

// const replaySong
