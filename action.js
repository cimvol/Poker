
const namberEasyElement = document.getElementById("namberEasy");
const levelMeanElement = document.getElementById("levelMean");
const namberMeanElement = document.getElementById("namberMean");
const levelHardElement = document.getElementById("levelHard");
const namberHardElement = document.getElementById("namberHard");
const playBoard = document.getElementById("play-board");
const startButton = document.getElementById("start");
const formChoise = document.getElementById('form');
const topButtonBody = document.querySelector(".top_button_body");
const cardOpenElement = document.getElementById("cardOpen");
const playBoardGame = document.getElementById("play-board-game");
const levelEasyElement = document.getElementById("levelEasy");
const cardBacksideEl = document.querySelectorAll(".card_backside");
const id1El = document.getElementById('id1');
const id2El = document.getElementById('id2');

const cards = [
    {
        id:id1El,
        image: src="./image/рубашка.png",
    },
    {
        id:id2El,
        image: src="./image/рубашка.png",
    }
]

const renderCards = () => {
    const cardsHTML = cards.map((card) => {
        return `<li ${id.id1El}><img  ${image.card_backside}></li>
        <li ${id.id2El}><img  ${image.card_backside}></li>`
    }).join('');
    playBoard.innerHTML = cardsHTML;
};
renderCards();

levelEasyElement.addEventListener('click', () => {
    // записываю новое значение 
    namberEasyElement.innerHTML = 'easy';
   // сохряняю это значение в LS
   localStorage.setItem('nam1', 'easy');
  });

levelMeanElement.addEventListener('click', () => {
     // записываю новое значение 
    namberMeanElement.innerHTML = 'middle';
    // сохряняю это значение в LS
    localStorage.setItem('nam2', 'middle');
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
    namberEasyElement.innerHTML = localStorage.getItem('nam1');    
}

if (localStorage.getItem('nam2')) {
    localStorage.removeItem('nam1');
    namberMeanElement.innerHTML = localStorage.getItem('nam2');
}

if (localStorage.getItem('nam3')) {
    localStorage.removeItem('nam1');
    localStorage.removeItem('nam2');
    namberHardElement.innerHTML = localStorage.getItem('nam3'); 
}

























