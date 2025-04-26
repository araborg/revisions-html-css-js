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
];

// btns
const prevBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");

// songs container
const playlistSongs = document.getElementById("playlist-songs");

// ths needed
const audio = new Audio();

// ths gotten from audio so far:
// audio.src
// audio.title
// audio.currentTime
// audio.play()

// This helps to handle the current song's information,
// currentSong, and its playback time, songCurrentTime.
let userData = {
    // spread(...) helps mks a copy of allSongs
    songs: [...allSongs],

    currentSong: null,
    songCurrentTime: 0,
};

// logic
const renderSongs = (array) => {
    // d array here for now is: userData?.songs

    const songHTML = array
        .map((song) => {
            // here we have 2 btns: one for playing a particular
            // song and the other to delete a particular song.
            // Both r inside a list item.
            return `
                <li 
                    id="song-${song.id}" 
                    class="playlist-song"
                >
                    <button 
                        class="playlist-song-info" 
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
                    </button>

                    <button
                        class="playlist-song-delete"
                        onclick="deleteSong(${song.id})"
                        aria-label="Delete ${song.title}"
                    >
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                            
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                    </button>

                </li>
            `;
        })
        .join("");

    // playlistSongs: d container for d songs
    playlistSongs.innerHTML = songHTML;
};

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

renderSongs(sortSongs());

const highlightCurrentSong = () => {
    // select all songs
    const playlistSongElements = document.querySelectorAll(".playlist-song");

    // select d particular song to be highlighted
    const songToHighlight = document.getElementById(
        `song-${userData?.currentSong?.id}`
    );

    // remove d feature common to all d songs
    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current");
    });

    // if dre is a song to be highlighted, add ds
    // feature to d song
    if (songToHighlight) {
        songToHighlight.setAttribute("aria-current", true);
    }
};

const playSong = (id) => {
    // select a song either by clicking playbtn or d song
    const song = userData?.songs.find((song) => song.id === id);

    // get d audio src & title
    audio.src = song.src;
    audio.title = song.title;

    // Update audio.currentTime wn dre is no
    // userData?.currentSong, currentSong.id and song.id
    // r nt d same and wn dre is userData?.currentSong
    if (
        // in case dre is no current song at all
        userData?.currentSong === null ||
        // in case a song is pause and anoda song is
        // played and not d paused song.
        userData?.currentSong.id !== song.id
    ) {
        audio.currentTime = 0;
    } else {
        // wn same song is played after being paused
        audio.currentTime = userData?.songCurrentTime;
    }

    // audio.currentTime helps hold d song current time
    // so wn it is paused, d song can go back to where
    // it stops.
    userData.currentSong = song;
    playBtn.classList.add("playing");

    highlightCurrentSong();
    setPlayerDisplay();

    // set play title attribute on Play btn
    setPlayButtonAccessibleText();

    audio.play();
};

playBtn.addEventListener("click", () => {
    if (userData?.currentSong === null) {
        // if dre is no currentSong, play d song at index: 0
        playSong(userData?.songs[0].id);
    } else {
        // else play current song
        playSong(userData?.currentSong.id);
    }
});

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime;

    playBtn.classList.remove("playing");

    audio.pause();
};

pauseBtn.addEventListener("click", pauseSong);

const getCurrentSongIndex = () =>
    userData?.songs.indexOf(userData?.currentSong);

const playNextSong = () => {
    if (
        userData?.currentSong === null ||
        getCurrentSongIndex() === userData?.songs.length - 1
    ) {
        playSong(userData?.songs[0].id);
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const nextSong = userData?.songs[currentSongIndex + 1];

        playSong(nextSong.id);
    }
};

nextBtn.addEventListener("click", playNextSong);

const playPreviousSong = () => {
    const currentSongIndex = getCurrentSongIndex();

    if (
        userData?.currentSong === null ||
        //
        currentSongIndex === 0
    ) {
        playSong(userData?.songs[userData?.songs.length - 1].id);
    } else {
        const prevSong = userData?.songs[currentSongIndex - 1];

        playSong(prevSong.id);
    }
};

prevBtn.addEventListener("click", playPreviousSong);

const shuffle = () => {
    // ds is a fxn
    const shuffleLogic = () => Math.random() - 0.5;

    // passing a fxn reference, shuffleLogic rada than
    // calling it
    userData?.songs.sort(shuffleLogic);

    // return sm features to d initial state
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    // use userData?.songs instead of sortSongs() bcos
    // shuffle is d opp of sort.
    renderSongs(userData?.songs);
    pauseSong();

    setPlayerDisplay();

    // set play title attribute on Play btn
    setPlayButtonAccessibleText();

};

shuffleBtn.addEventListener("click", shuffle);

// Wt is d diff btw:
// renderSongs(sortSongs()) and
// userData?.songs.sort(shuffleLogic);

const deleteSong = (id) => {
    // deleting a playing song
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    // temporary modificatn of d userData.songs
    // let songs dt have diff ids apart from given
    // id go via
    userData.songs = userData?.songs.filter((song) => song.id !== id);

    renderSongs(userData?.songs);
    highlightCurrentSong();

    // set play title attribute on Play btn
    setPlayButtonAccessibleText();


    // if all songs were deleted, show a reset btn
    // d purpose of ds btn is to renden all d songs.
    if (userData?.songs.length === 0) {
        // create button and text
        const resetBtn = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        // add attributes to d btn
        resetBtn.id = "reset";
        resetBtn.ariaLabel = "Reset playlist";

        // add d text to d btn and d btn to
        // playlistSongs container: <ul id="playlist-songs"></ul>
        resetBtn.appendChild(resetText);
        playlistSongs.appendChild(resetBtn);

        // add an event listener to d btn
        resetBtn.addEventListener("click", () => {
            // console.log(userData.songs); // []

            // y ds? bcos userDat.songs is no an empty arr
            userData.songs = [...allSongs];

            renderSongs(sortSongs());

            // set play title attribute on Play btn
            setPlayButtonAccessibleText();


            // remove d resetBtn
            resetBtn.remove()
        });
    }
};

const setPlayerDisplay = () => {
    // select songTitle, songArtist elemts
    const songTitle = document.getElementById("player-song-title");
    const songArtist = document.getElementById("player-song-artist");

    // select currentTitle, currentArtist
    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;

    // update songTitle, songArtist elemts
    songTitle.textContent = currentTitle ? currentTitle : "";
    songArtist.textContent = currentArtist ? currentArtist : "";
};

// ds affects only d playBtn by setting d songTitle 
// on its aria-label
const setPlayButtonAccessibleText = () => {
    // const song = userData?.currentSong || userData?.songs[0];

    // playButton.setAttribute(
    //     "aria-label",
    //     song?.title ? `Play ${song.title}` : "Play"
    // );

    const song = userData?.currentSong || userData?.songs[0];
    const songTitle = song?.title ? `Play ${song.title}` : "Play";

    playButton.setAttribute("aria-label", songTitle);
};

setPlayButtonAccessibleText();

    
// d player shd be able to play d next song
audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();

    // is there a next song?
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

    if (nextSongExists) {
        playNextSong();
    } else {
        // if dre is no next song, return 
        // userData.currentSong & userData.songCurrentTime
        // to dre initial values
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();

        highlightCurrentSong();

        // set play title attribute on Play btn
        setPlayButtonAccessibleText();
    }
});

function init() {
    // y ds fxn?
    highlightCurrentSong();
}

init();






//  Revision:
*/

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
];

const audio = new Audio();

// btns
const prevBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
// const deleteBtn = document.querySelector(".playlist-song-delete");
// console.log(deleteBtn);

const playlistSongs = document.getElementById("playlist-songs");

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

const renderSongs = (array) => {
    const songHTML = array
        .map(
            (song) => `

            <li id="song-${song.id}" class="playlist-song">
                <button
                    class="playlist-song-info"
                    onclick="playSong(${song.id})"
                >
                    <span class="playlist-song-title">${song.title}</span>
                    <span class="playlist-song-artist">${song.artist}</span>
                    <span class="playlist-song-duration">${song.duration}</span>
                </button>

                <button
                    class="playlist-song-delete"
                    aria-label="Delete ${song.title}"
                    onclick="deleteSong(${song.id})"
                >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                        
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                </button>
            </li>
        `
        )
        .join("");

    playlistSongs.innerHTML = songHTML;
};

const sortSongs = () => {
    userData?.songs.sort((a, b) => {
        if (a.title > b.title) return 1;

        if (a.title < b.title) return -1;

        return 0;
    });

    return userData?.songs;
};

renderSongs(sortSongs());

const highlightCurrentSong = () => {
    // select all the songs
    const playlists = document.querySelectorAll(".playlist-song");

    const songToHighlight = document.getElementById(
        `song-${userData?.currentSong?.id}`
    );

    playlists.forEach((playlist) => {
        playlist.removeAttribute("aria-current");
    });

    if (songToHighlight) {
        songToHighlight.setAttribute("aria-current", true);
    }
};

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);

    audio.src = song?.src;
    audio.title = song.title;

    if (
        userData?.currentSong === null ||
        userData?.currentSong?.id !== song.id
    ) {
        audio.currentTime = 0;
    } else {
        // if d user click again a particular song after it was paused
        audio.currentTime = userData?.songCurrentTime;
    }

    userData.currentSong = song;

    highlightCurrentSong();

    playBtn.classList.add("playing");

    audio.play();
};

playBtn.addEventListener("click", () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        playSong(userData?.currentSong?.id);
    }
});

const pauseSong = () => {
    // console.log(userData?.currentSong?.id);

    if (userData?.currentSong?.id) {
        userData.songCurrentTime = audio.currentTime;

        playBtn.classList.remove("playing");

        audio.pause();
    } else {
        // alert("No song to pause");
        // return;
    }
};

pauseBtn.addEventListener("click", pauseSong);

const getCurrentSongIndex = () =>
    userData?.songs.indexOf(userData?.currentSong);

const playNextSong = () => {
    const currentSongIndex = getCurrentSongIndex();

    const nextSong = userData?.songs[currentSongIndex + 1];

    if (nextSong?.id === undefined) {
        playSong(userData?.songs[0].id);
    } else {
        playSong(nextSong?.id);
    }
};

nextBtn.addEventListener("click", playNextSong);

const playPreviousSong = () => {
    const currentSongIndex = getCurrentSongIndex();

    const prevSong = userData?.songs[currentSongIndex - 1];

    if (!prevSong?.song) {
        playSong(userData?.songs[userData?.songs.length - 1].id);
    }

    playSong(prevSong.id);
};

prevBtn.addEventListener("click", playPreviousSong);

const shuffle = () => {
    const shuffleLogic = () => Math.random() - 0.5;
    userData?.songs.sort(shuffleLogic);

    // userData.currentSong = null;
    // userData.songCurrentTime = 0;
    // pauseSong();

    renderSongs(userData?.songs);

    highlightCurrentSong();
};

shuffleBtn.addEventListener("click", shuffle);

// ds does nt need addEventListener bcos of d onclick fxn
const deleteSong = (id) => {
    // if there is a playing song
    if (userData?.currentSong) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
    }

    // find d songs remaining and update userData.songs
    userData.songs = userData?.songs.filter((song) => song.id !== id);
    // console.log(remainingSongs);

    renderSongs(userData?.songs);

    if (!userData.songs.length) {
        const resetBtn = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetBtn.id = "reset";
        resetBtn.type = "submit";
        resetBtn.ariaLabel = "reset btn";

        resetBtn.appendChild(resetText);
        playlistSongs.appendChild(resetBtn);

        // add addEventListener
        resetBtn.addEventListener("click", () => {
            userData.songs = [...allSongs];

            userData.currentSong = null;
            userData.songCurrentTime = 0;

            renderSongs(sortSongs());

            resetBtn.remove();
        });
    }
};

const setPlayButtonAccessibleText = () => {};

const setPlayerDisplay = () => {};

// mk d next song play at d end of the current song
