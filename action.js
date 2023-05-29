
const topButtonBody = document.querySelector(".top_button_body");

const levelEasyElement = document.getElementById("levelEasy");
const namberEasyElement = document.getElementById("namberEasy");
const levelMeanElement = document.getElementById("levelMean");
const namberMeanElement = document.getElementById("namberMean");
const levelHardElement = document.getElementById("levelHard");
const namberHardElement = document.getElementById("namberHard");

const playBoard = document.getElementById("play-board");
const startButton = document.getElementById("start");
const formChoise = document.getElementById('form');


const cardsElement = document.querySelectorAll("card");
const playBoardGame = document.getElementById("play-board-game");



levelEasyElement.addEventListener('click', () => {
    // записываю новое значение 
    namberEasyElement.innerHTML = 'easy';
   // сохряняю это значение в LS
   localStorage.setItem('nam1', 'easy');
  });

levelMeanElement.addEventListener('click', () => {
     // записываю новое значение 
    namberMeanElement.innerHTML = 'mean';
    // сохряняю это значение в LS
    localStorage.setItem('nam2', 'mean');
   });

levelHardElement.addEventListener('click', () => {
      // записываю новое значение 
    namberHardElement.innerHTML = 'hard';
    // сохряняю это значение в LS
    localStorage.setItem('nam3', 'hard');
   });

   // провожу проверку для определения какой уровень выбран
if (localStorage.getItem('nam1')) {
    localStorage.removeItem('nam3');
    //const first = namberEasyElement.innerHTML;
    namberEasyElement.innerHTML = localStorage.getItem('nam1');  
}
if (localStorage.getItem('nam2')) {
    localStorage.removeItem('nam1');
    //const second = namberMeanElement.innerHTML;
    namberMeanElement.innerHTML = localStorage.getItem('nam2');
}
if (localStorage.getItem('nam3')) {
    localStorage.removeItem('nam1');
    localStorage.removeItem('nam2');
    //const third = namberHardElement.innerHTML;
    namberHardElement.innerHTML = localStorage.getItem('nam3'); 
}




