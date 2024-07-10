/*
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
        id: 10,
        title: "Olori oko",
        artist: "Infinity",
        duration: "5:56",
        src: "../music-player-app/music/Olori oko.mp3",
    },

    {
        id: 11,
        title: "Ogoo ogo",
        artist: "Dunsin Oyekan & Elijah Sunday",
        duration: "10:53",
        src: "../music-player-app/music/ogo.mp3",
    },
];

const playlistSongs = document.getElementById("playlist-songs");

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
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

// very impt
const audio = new Audio();

// make a copy of the allSongs so as not to directly modify it
const userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

// d lesser item get sorted 1st
const sortSongs = () => {
    userData?.songs.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        return 0;
    });

    return userData?.songs;
};

const renderSongs = (array) => {
    const songsHTML = array
        .map((song) => {
            return `
                <li id='song-${song.id}' class='playlist-song'>
                    <button 
                        class='playlist-song-info'
                        onclick="playSong(${song.id})"
                    >
                        <span class="playlist-song-title">
                            ${song.title}
                        </span>

                        <span class="playlist-song-artist">
                            ${song.artist}
                        </span>

                        <span class="playlist-song-duration">
                            ${song.duration}
                        </span>
                    </button>

                    <button
                        class="playlist-song-replay playlist-song-info"
                        arial-label="Replay ${song.title}"
                        onclick="replaySong(${song.id})"
                    >
                        <svg
                            width="24"
                            height="19"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h48v48H0z" fill="none" />
                            <path
                                d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"
                            />
                        </svg>
                    </button>

                    <button 
                        class="playlist-song-delete"
                        arial-label="Delete ${song.title}"
                        onclick="deleteSong(${song.id})"
                    >
                        <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 16 16" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
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
        .join("");

    playlistSongs.innerHTML = songsHTML;
};

renderSongs(sortSongs());

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);

    audio.src = song.src;
    audio.title = song.title;

    if (
        userData?.currentSong === null || // 1st click of a (same) song
        userData?.currentSong.id !== song.id // 1st click of a totally diff song
    ) {
        audio.currentTime = 0;
        // console.log("Hello button clicked 1");
    } else {
        audio.currentTime = userData?.songCurrentTime; // 2nd/3rd/4th... clicks of d same song
        // console.log("Hello button clicked 1++");
    }

    // console.log(userData?.currentSong);
    userData.currentSong = song;
    // console.log(userData?.currentSong);

    playButton.classList.add("playing");

    highlightCurrentSong();
    setPlayerDisplay();

    setPlayButtonAccessibleText();

    audio.play();
};

playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        playSong(userData?.currentSong.id);
    }
});

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime;

    playButton.classList.remove("playing");

    audio.pause();
};

pauseButton.addEventListener("click", pauseSong);

const getCurrentSongIndex = () => userData.songs.indexOf(userData?.currentSong);

const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const nextSong = userData?.songs[currentSongIndex + 1];

        playSong(nextSong.id);
    }
};

nextButton.addEventListener("click", playNextSong);

const playPreviousSong = () => {
    if (userData?.currentSong === null) {
        return;
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const previousSong = userData?.songs[currentSongIndex - 1];

        playSong(previousSong.id);
    }
};

previousButton.addEventListener("click", playPreviousSong);

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight = document.getElementById(
        `song-${userData?.currentSong?.id}`
    );

    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current");
    });

    if (songToHighlight) {
        return songToHighlight.setAttribute("aria-current", true);
    }
};

const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title");
    const songArtist = document.getElementById("player-song-artist");
    const songDuration = document.getElementById("player-song-duration");

    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;
    const currentDuration = userData?.currentSong?.duration;

    playingSong.textContent = currentTitle ? currentTitle : "";
    songArtist.textContent = currentArtist ? currentArtist : "";
    songDuration.textContent = currentDuration ? currentDuration : "";
};

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData.songs[0];

    playButton.setAttribute(
        "aria-label",
        song?.title ? `Play ${song.title}` : "Play"
    );

    // console.log(playButton.getAttribute("aria-label"));
};

setPlayButtonAccessibleText();

const shuffle = () => {
    // const shuffledSongs = userData?.songs.sort(() => Math.random() - 0.5);
    userData?.songs.sort(() => Math.random() - 0.5);

    userData.currentSong = null;
    userData.songCurrentTime = 0;

    // renderSongs(shuffledSongs);
    renderSongs(userData?.songs);

    pauseSong();
    setPlayerDisplay();

    setPlayButtonAccessibleText();
};

shuffleButton.addEventListener("click", shuffle);

const replayAllSongs = () => {
    if (userData?.currentSong) {
        audio.addEventListener("ended", () => {
            const currentSongIndex = getCurrentSongIndex();

            if (currentSongIndex === -1) {
                let currentSongIndex = 0;
                playSong(userData?.songs[currentSongIndex]?.id);

                highlightCurrentSong();
                setPlayButtonAccessibleText();
            }
        });
    } else {
        alert("Play a song of your choice before replay");
    }
};

replayButton.addEventListener("click", replayAllSongs);

const replaySong = (id) => {
    if (userData?.currentSong) {
        const replaySong = userData?.songs.find((song) => song.id === id);

        audio.addEventListener("ended", () => {
            highlightCurrentSong();
            setPlayButtonAccessibleText();

            playSong(replaySong.id);
        });
    } else {
        alert("Play a song of your choice before replay");
    }
};

const deleteSong = (id) => {
    userData.songs = userData?.songs.filter((song) => song.id !== id);

    renderSongs(userData.songs);
    highlightCurrentSong();

    setPlayButtonAccessibleText();

    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.currentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";

        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);

        resetButton.addEventListener("click", () => {
            userData.songs = [...allSongs];

            renderSongs(sortSongs());

            setPlayButtonAccessibleText();

            resetButton.remove();
        });
    }
};


audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists =
        userData?.songs.length - 1 > currentSongIndex ? true : false;

    if (nextSongExists) {
        playNextSong();
    } else {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
        highlightCurrentSong();

        setPlayButtonAccessibleText();
    }
});

function init() {
    highlightCurrentSong();
}

init();
*/
