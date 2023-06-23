/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./action.js":
/*!*******************!*\
  !*** ./action.js ***!
  \*******************/
/***/ (() => {

eval("\nconst namberEasyElement = document.getElementById(\"namberEasy\");\nconst levelMeanElement = document.getElementById(\"levelMean\");\nconst namberMeanElement = document.getElementById(\"namberMean\");\nconst levelHardElement = document.getElementById(\"levelHard\");\nconst namberHardElement = document.getElementById(\"namberHard\");\nconst playBoard = document.getElementById(\"play-board\");\nconst startButton = document.getElementById(\"start\");\nconst formChoise = document.getElementById('form');\nconst topButtonBody = document.querySelector(\".top_button_body\");\nconst cardOpenElement = document.getElementById(\"cardOpen\");\nconst playBoardGame = document.getElementById(\"play-board-game\");\nconst levelEasyElement = document.getElementById(\"levelEasy\");\nconst cardBacksideEl = document.querySelectorAll(\".card_backside\");\nconst id1El = document.getElementById('id1');\nconst id2El = document.getElementById('id2');\n\nconst cards = [\n    {\n        id:id1El,\n        image: src=\"./image/рубашка.png\",\n    },\n    {\n        id:id2El,\n        image: src=\"./image/рубашка.png\",\n    }\n]\n\nconst renderCards = () => {\n    const cardsHTML = cards.map((card) => {\n        return `<li ${id.id1El}><img  ${image.card_backside}></li>\n        <li ${id.id2El}><img  ${image.card_backside}></li>`\n    }).join('');\n    playBoard.innerHTML = cardsHTML;\n};\nrenderCards();\n\nlevelEasyElement.addEventListener('click', () => {\n    // записываю новое значение \n    namberEasyElement.innerHTML = 'easy';\n   // сохряняю это значение в LS\n   localStorage.setItem('nam1', 'easy');\n  });\n\nlevelMeanElement.addEventListener('click', () => {\n     // записываю новое значение \n    namberMeanElement.innerHTML = 'middle';\n    // сохряняю это значение в LS\n    localStorage.setItem('nam2', 'middle');\n   });\n\nlevelHardElement.addEventListener('click', () => {\n      // записываю новое значение \n    namberHardElement.innerHTML = 'hard';\n    // сохряняю это значение в LS\n    localStorage.setItem('nam3', 'hard');\n   });\n\n   // провожу проверку для определения какой уровень выбран\nif (localStorage.getItem('nam1')) {\n    localStorage.removeItem('nam3');\n    namberEasyElement.innerHTML = localStorage.getItem('nam1');    \n}\n\nif (localStorage.getItem('nam2')) {\n    localStorage.removeItem('nam1');\n    namberMeanElement.innerHTML = localStorage.getItem('nam2');\n}\n\nif (localStorage.getItem('nam3')) {\n    localStorage.removeItem('nam1');\n    localStorage.removeItem('nam2');\n    namberHardElement.innerHTML = localStorage.getItem('nam3'); \n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://poker/./action.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./action.js"]();
/******/ 	
/******/ })()
;