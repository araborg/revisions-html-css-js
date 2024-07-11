// btns
const previousBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const replayBtn = document.getElementById("replay");

// player info
const songTitle = document.getElementById("player-song-title");
const songArtist = document.getElementById("player-song-artist");
const songDuration = document.getElementById("player-song-duration");

const playlistSongs = document.getElementById("playlist-songs");

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

    {
        id: 5,
        title: "Praise The Lord",
        artist: "Nathan Bassey",
        duration: "12:13",
        src: "../../../../../Hallelujah-Praise-The-Lord.mp3",
    },
];

const userData = {
    songs: [...allSongs],
    prevSong: null,
    currentTime: 0,
    songPaused: false,
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
            return `
                <li class="playlist-song" id="song-${song.id}">
                    <button class="playlist-song-info" onclick=playSong(${song.id})>
                        <span class="playlist-song-title">${song.title}</span>
                        <span class="playlist-song-artist">${song.artist}</span>
                        <div class="playlist-song-duration">${song.duration}</div>
                    </button>

                    <button class="playlist-replay-btn" onclick=replayASong(${song.id})>
                        <svg width="24" height="19" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h48v48H0z" fill="none" />
                            <path d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"/>
                        </svg>
                    </button>

                    <button class="playlist-delete-btn" onclick=deleteSong(${song.id})>
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
        
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                    </button>
                    
                </li>
        `;
        })
        .join("");

    // playlistSongs.innerHTML += eachSong;
    playlistSongs.innerHTML = eachSong;
};

displaySong(sortSong(userData?.songs));

const playSong = (id) => {
    // 1. select d song
    const song = userData?.songs.find((song) => song.id === id);

    // 2. update audio ppties with selected song ppties
    audio.title = song.title;
    audio.src = song.src;

    // 3. using conditions, mk d audio.currentTime either 0 or chosenSong.currentTime
    if (userData?.prevSong === null || userData?.prevSong?.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData?.currentTime;
    }

    // 4. update userData.prevSong (ds is impt bcos it determine wt condition works in d if statemt)
    userData.prevSong = song;

    // 7. add a class to d play btn
    playBtn.classList.add("playing");

    // 6. other fxns
    updateDisplay();
    highlightCurrentSong();

    // setSongDuration(song);
    setSongDuration();

    // setPlayButtonAccessibleText();

    // 5. play song
    audio.play();
};

playBtn.addEventListener("click", () => {
    if (userData?.prevSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        playSong(userData?.prevSong?.id);
    }
});

const songIndex = () => userData?.songs.indexOf(userData?.prevSong);

const playNextSong = () => {
    const allSongsLength = userData?.songs.length;

    if (userData?.prevSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        const songIn = songIndex();
        const nextSongIndex = songIn + 1;

        // wt if d song gets to the end of d list
        if (nextSongIndex !== allSongsLength) {
            playSong(userData?.songs[nextSongIndex]?.id);
        } else {
            // ds tks care of next song wn next btn is pressed on d last song
            playSong(userData?.songs[0].id);
        }
    }
};

nextBtn.addEventListener("click", playNextSong);

const updateDisplay = () => {
    const songIn = songIndex();
    const curSong = userData?.songs[songIn];

    songTitle.innerText = curSong.title;
    songArtist.innerText = curSong.artist;
    songDuration.innerText = curSong.duration;
};

const playPrevSong = () => {
    const curSongIndex = songIndex();

    const preSong = userData?.songs[curSongIndex - 1];

    if (userData?.prevSong === null) {
        return;
    } else if (userData?.prevSong === userData?.songs[0]) {
        const lastSongIndex = userData.songs.length;
        playSong(userData.songs[lastSongIndex - 1].id);
    } else {
        playSong(preSong.id);
    }
};

previousBtn.addEventListener("click", playPrevSong);

const pauseSong = () => {
    if (userData?.prevSong === null) {
        return;
    } else {
        userData.currentTime = audio.currentTime;

        playBtn.classList.remove("playing");
        audio.pause();
    }
};

const pauseSongHelperFunction = () => {
    userData.songPaused = true;
    pauseSong();
    setSongDuration();
};

pauseBtn.addEventListener("click", pauseSongHelperFunction);

const shuffle = () => {
    const shuffleSong = userData?.songs.sort(() => Math.random() - 0.5);

    playlistSongs.innerHTML = "";
    displaySong(shuffleSong);
};

shuffleBtn.addEventListener("click", shuffle);

const replayASong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);

    audio.addEventListener("ended", () => playSong(song.id));
};

const replayAllSongs = () => {
    if (userData?.prevSong) {
        audio.addEventListener("ended", () => {
            const currentSongIndex = songIndex();

            if (currentSongIndex === -1) {
                const currentSongIndex = 0;
                playSong(userData?.songs[currentSongIndex]?.id);

                // highlightCurrentSong();
                // setPlayButtonAccessibleText();
            }
        });
    } else {
        alert("Play a song of your choice before replay");
    }
};

replayBtn.addEventListener("click", replayAllSongs);

const deleteSong = (id) => {
    if (userData?.prevSong?.id === id) {
        userData.prevSong = null;
        userData.currentTime = 0;

        pauseSong();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);

    displaySong(userData.songs);

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reload All Songs");
        // const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset Playlist";

        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);

        resetButton.addEventListener("click", () => {
            userData.songs = [...allSongs];
            // userData.currentTime = 0;
            // userData.prevSong = null;

            displaySong(sortSong(userData?.songs));
            resetButton.remove();
        });
    }
};

// Ensures next songs r played
audio.addEventListener("ended", () => {
    const currentSongIn = songIndex();

    const nextSongExists =
        userData?.songs.length - 1 > currentSongIn ? true : false;

    if (nextSongExists) {
        playNextSong();
    } else {
        userData.prevSong = null;
        userData.currentTime = 0;

        pauseSong();
    }
});

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");

    const songToHighlight = document.getElementById(
        `song-${userData?.prevSong.id}`
    );

    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current");
    });

    if (songToHighlight) {
        return songToHighlight.setAttribute("aria-current", true);
    }
};

const setPlayButtonAccessibleText = () => {
    const song = userData?.prevSong || userData.songs[0];

    playBtn.setAttribute(
        "aria-label",
        song?.title ? `Play ${song.title}` : `Play`
    );
};

// const setSongDuration = (song) => {
const setSongDuration = () => {
    const song = userData?.prevSong;

    let hour = 0,
        min = 0,
        sec = 0,
        time;

    let countdown = song.duration.split(":");
    // countdown = countdown.split(":");

    if (countdown.length > 2) {
        [hour, min, sec] = countdown;
        console.log(hour);
    } else {
        [min, sec] = countdown;
    }

    hour = hour * 60 * 60;
    min = min * 60;
    sec = Number(sec);

    time = hour + min + sec;

    const tick = function () {
        const min = String(Math.trunc(time / 60));
        min.length > 1 ? min.padStart(2, 0) : min.padStart(1, 0);

        const sec = String(Math.trunc(time % 60)).padStart(2, 0);

        songDuration.textContent = `${min}:${sec}`;

        if (time === -1 || userData?.prevSong?.id !== song.id) {
            clearInterval(timer);
            songDuration.textContent = `${countdown[0]}:${countdown[1]}`;
        }

        time--;
    };

    tick();

    let timer = setInterval(tick, 1000);

    /*
        if (userData.songPaused) {
            songDuration.textContent = audio.currentTime;
            clearInterval(timer);
            time = 0;
            time = audio.currentTime;
            timer = `${0}.padStart(2, 0):${0}.padStart(2, 0)`;
        }

        console.log(time);
    */
    return timer;
};
