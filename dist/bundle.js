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

eval("\nconst levelEasyElement = document.getElementById(\"levelEasy\");\nconst namberEasyElement = document.getElementById(\"namberEasy\");\nconst levelMeanElement = document.getElementById(\"levelMean\");\nconst namberMeanElement = document.getElementById(\"namberMean\");\nconst levelHardElement = document.getElementById(\"levelHard\");\nconst namberHardElement = document.getElementById(\"namberHard\");\n\n\nlevelEasyElement.addEventListener('click', () => {\n    // записываю новое значение \n    namberEasyElement.innerHTML = 'easy';\n   // сохряняю это значение в LS\n   localStorage.setItem('nam1', 'easy');\n  });\n\nlevelMeanElement.addEventListener('click', () => {\n     // записываю новое значение \n    namberMeanElement.innerHTML = 'mean';\n    // сохряняю это значение в LS\n    localStorage.setItem('nam2', 'mean');\n   });\n\nlevelHardElement.addEventListener('click', () => {\n      // записываю новое значение \n    namberHardElement.innerHTML = 'hard';\n    // сохряняю это значение в LS\n    localStorage.setItem('nam3', 'hard');\n   });\n\n   // провожу проверку для определения какой уровень выбран\nif (localStorage.getItem('nam1')) {\n    localStorage.removeItem('nam3');\n    //let first = namberEasyElement.innerHTML;\n    namberEasyElement.innerHTML = localStorage.getItem('nam1');  \n}\nif (localStorage.getItem('nam2')) {\n    localStorage.removeItem('nam1');\n    //let second = namberMeanElement.innerHTML;\n    namberMeanElement.innerHTML = localStorage.getItem('nam2');\n}\nif (localStorage.getItem('nam3')) {\n    localStorage.removeItem('nam1');\n    localStorage.removeItem('nam2');\n    //let third = namberHardElement.innerHTML;\n    namberHardElement.innerHTML = localStorage.getItem('nam3'); \n}\n\n\n//# sourceURL=webpack://poker/./action.js?");

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