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

let userData = {
    // spread(...) helps mks a copy of allSongs
    songs: [...allSongs],

    currentSong: null,
    songCurrentTime: 0,
};

// logic
const playSong = (id) => {
    // select a song either by clicking playbtn or d song
    const song = userData?.songs.find((song) => song.id === id);

    // get d audio src & title
    audio.src = song.src;
    audio.title = song.title;

    // Update audio.currentTime wn dre is no
    // userData?.currentSong and wn dre is
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

// console.log(getCurrentSongIndex());

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

    if (userData?.currentSong === null || currentSongIndex === 0) {
        playSong(userData?.songs[userData?.songs.length - 1].id);
    } else {
        const prevSong = userData?.songs[currentSongIndex - 1];
    }
};

prevBtn.addEventListener("click", playPreviousSong);

const shuffle = () => {};

const deleteSong = (id) => {};

const setPlayerDisplay = () => {};

const highlightCurrentSong = () => {};

const setPlayButtonAccessibleText = () => {};

audio.addEventListener("ended", () => {});

function init() {}
