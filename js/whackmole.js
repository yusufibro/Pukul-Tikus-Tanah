const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const scoreBoard = document.querySelector('.score');

let tanahSebelumnya;
let selesai;
let score;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
      randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
  }
  
  function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 1000);
    tRandom.classList.add('muncul');
  
    setTimeout(() => {
      tRandom.classList.remove('muncul');
      if (!selesai) {
        munculkanTikus();
      }
    }, wRandom);
  }

function mulai() {
    selesai = false;
    score = 0;
    scoreBoard.textContent = score;
    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul(){
    score++;
    this.parentNode.classList.remove('muncul');
    scoreBoard.textContent = score;
}

tikus.forEach(t =>{
    t.addEventListener('click', pukul);
});