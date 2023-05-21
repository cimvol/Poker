let LS = localStorage;

// нашел в интерфейсе кнопку сложности 1
const levelEasyElement = document.getElementById("levelEasy");
// нахожу цифру, которую хочу изменять при нажатии
const namberEasyElement = document.getElementById("namberEasy");
// оживляю кнопку, навешиваю на нее обработчик события клика
levelEasyElement.addEventListener('click', () => {
    // записываю новое значение 
    namberEasyElement.innerHTML = 'easy';
// сохряняю это значение в LS
 LS.setItem('nam1', JSON.stringify('easy'));
});

// нашел в интерфейсе кнопку сложности 2
const levelMeanElement = document.getElementById("levelMean");
// нахожу цифру, которую хочу изменить при нажатии
const namberMeanElement = document.getElementById("namberMean");
// оживляю кнопку, навешиваю на нее обработчик клика
levelMeanElement.addEventListener('click', () => {
     // записываю новое значение 
    namberMeanElement.innerHTML = 'mean';
    // сохряняю это значение в LS
    LS.setItem('nam2', JSON.stringify('mean'));
   });

// нашел в интерфейсе кнопку сложности 3
const levelHardElement = document.getElementById("levelHard");
// нахожу цифру, которую хочу изменить при нажатии
const namberHardElement = document.getElementById("namberHard");
// оживляю кнопку, навешиваю на нее обработчик клика
levelHardElement.addEventListener('click', () => {
      // записываю новое значение 
    namberHardElement.innerHTML = 'hard';
    // сохряняю это значение в LS
    LS.setItem('nam3', JSON.stringify('hard'));
   });


   // провожу проверку для определения какой уровень выбран
if (LS.getItem('nam1')) {
    namberEasyElement.innerHTML = LS.getItem('nam1'); 
    LS.removeItem('nam2');
    LS.removeItem('nam3');
}
if (LS.getItem('nam2')) {
    LS.removeItem('nam1');
    namberMeanElement.innerHTML = LS.getItem('nam2'); 
    LS.removeItem('nam3');
 
}
if (LS.getItem('nam3')) {
    LS.removeItem('nam1');
    LS.removeItem('nam2');
    namberHardElement.innerHTML = LS.getItem('nam3'); 
}