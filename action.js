// нашел кнопку сложности 1
const levelElement1 = document.getElementById("level1");
// нахожу элемент цифры, который хочу подстветить при нажатии
const namberLevelElement = document.getElementById("namberLevel");
// оживляю кнопку, навешиваю на нее обработчик события клика
levelElement1.addEventListener('click', () => {
namberLevelElement.innerHTML = "easy";
localStorage.setItem('key', 'easy');
});
window.localStorage.getItem('key');