const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = ['hey', 'summer', 'ukulele', '30 Seconds To Mars - Closer To The Edge', 'Prata Vetra_Musiqq - Debesis iekrita tevi', 'Green Day - 21st Century Breakdown', 'Foo Fighters - Learn to Fly', 'Limp Bizkit - Home Sweet Home Bittersweet Symphony'];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;

  audio.onloadeddata = () => { // Use 'onloadeddata' or 'canplaythrough'
    let isPlaying = false; // Sākotnējais stāvoklis

    if (isPlaying) {
        playSong(); // Play only if isPlaying is true (avoids autoplay)
    }
};

audio.onerror = (e) => {
  console.error("Error loading audio:", e);
  // Handle the error, e.g., display an error message to the user
  // or attempt to load the next song.
}

  audio.load();
  updatePlaylist();
}


// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
  isPlaying = true; //Set isPlaying to true
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
  isPlaying = false; // Set isPlaying to false
}

// Add event listeners to your play/pause button
/*playBtn.addEventListener('click', () => {
  if (isPlaying) {
      pauseSong();
  } else {
      playSong();
  }
});*/

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

// Next song
function nextSong() {
  if (isShuffle) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === songIndex); // Lai nodrošinātu, ka dziesma neatkārtojas uzreiz
    songIndex = randomIndex;
  } else {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  }

  loadSong(songs[songIndex]);
  playSong();
  updatePlaylist();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Dziesma beidzas
audio.addEventListener('ended', nextSong);

// Dziesmas laiks (ilgums)
audio.addEventListener('timeupdate',DurTime);

// Atsaucies uz audio un skaļuma regulēšanas elementiem
const volumeControl = document.getElementById("volume");

// Iestata sākotnējo skaļumu
audio.volume = 0.5;

// Klausies uz skaļuma regulēšanas izmaiņām
volumeControl.addEventListener("input", (e) => {
  audio.volume = e.target.value; // Iestata skaļumu atkarībā no slīdņa vērtības
});

alert("Vai esi gatavs klausīties manu mūziku?");

// Playlist saraksts
// const playlist = document.getElementById('playlist');
// const playlistItems = playlist.querySelectorAll('li');

// Kad noklikšķina uz dziesmas
//playlistItems.forEach(item => {
  //item.addEventListener('click', () => {
    // Noņem aktīvās klases no visiem playlist elementiem
    //playlistItems.forEach(i => i.classList.remove('active'));

    // Pievieno "active" klasi izvēlētajai dziesmai
    //item.classList.add('active');

    // Ielādē un atskaņo izvēlēto dziesmu
    //const selectedSong = item.getAttribute('data-song');
    //loadSong(selectedSong);
    //playSong();
  //});
//});

const playlist = document.getElementById('playlist');

// Atjauno aktīvo dziesmu plejlistē
function updateActiveSong() {
  // Noņem aktīvās klases no visiem playlist elementiem
  document.querySelectorAll('.playlist-item').forEach((item) => {
    item.classList.remove('active');
  });

  // Pievieno "active" klasi izvēlētajai dziesmai
  const activeSong = document.getElementById(`song-${songIndex}`);
  if (activeSong) activeSong.classList.add('active');
}

// Pievienojiet klikšķu notikumus atskaņošanas sarakstam
document.querySelectorAll('.playlist-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    // Atzīmē nospiesto dziesmu kā pasreizējo dziesmu
    songIndex = index;

    // Ielādē un atskaņo izvēlēto dziesmu
    loadSong(songs[songIndex]);
    playSong();

    // Atjauno plejlisti
    updateActiveSong();
  });
});

// Modificē nākamās dziesmas funkcijas
function nextSong() {
	songIndex++;
  
	if (songIndex > songs.length - 1) {
	  songIndex = 0;
	}
  
	loadSong(songs[songIndex]);
	playSong();
	updateActiveSong(); // Update playlist
  }

  // Shuffle poga
let isShuffle = false; // Sākotnējais stāvoklis
const shuffleBtn = document.getElementById('shuffle');

// Atjauno aktīvo dziesmu, kad sākas jauna dziesma
audio.addEventListener('ended', () => {
  nextSong();
  updateActiveSong();
});

// Initialize playlist with active song
updateActiveSong();

// TESTI
console.assert(songs.length > 0, 'Dziesmu saraksts ir tukšs!');
loadSong(songs[0]);
console.assert(audio.src.includes('hey.mp3'), 'loadSong nedarbojas pareizi!');
console.assert(audio.volume === 0.5, 'Sākotnējais skaļums nav pareizs!');
console.assert(isShuffle === false, 'Shuffle režīms sākumā nav izslēgts!');
shuffleBtn.click();
console.assert(isShuffle === true, 'Shuffle režīms netika ieslēgts pēc klikšķa!');


// Shuffle poga
shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle; // Pārslēdz shuffle režīmu
  shuffleBtn.classList.toggle('active', isShuffle); // Pievieno/Noņem aktīvās klases stilu
});

function updatePlaylist() {
  const playlistItems = document.querySelectorAll('.playlist-item');
  playlistItems.forEach((item, index) => {
    item.classList.toggle('active', index === songIndex);
  });
}

