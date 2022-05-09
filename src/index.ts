// // console.log("index");
// //const rusArrDown =  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
// //const rusArrUp =    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
// //const engArrDown1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter", "Shift", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
// //const engArrUp = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'], ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'], ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'], ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift'], ['Ctrl', 'Win', 'Alt', 'Space', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl']]

// import {log} from './form'
// log()
// import './style.css'
// const letterObj = {
// 	ru: {
// 			ArrDown:  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
// 			ArrUp: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
// 		},
// 	eng: {
// 		ArrDown: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace','Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del','CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter", "Shift", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
// 		ArrUp: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del','CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
// 	}
// }
// const ruArrDown = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'], [ 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift'], ['Ctrl', 'Win', 'Alt', 'Space', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl']]
// const engArrDown = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter"], ["Shift", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'], ['Ctrl', 'Win', 'Alt', 'Space', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl']]
// let flagHight = false;
// let flagLang = false
// let arr =[]
// window.addEventListener('load', () => {
// 	//arr = getArr()
// 	createRowBtns(engArrDown)
// 	const keyboard = document.querySelector('.keyboard')
// 	const spans = document.querySelectorAll('span')
// 	spans.forEach(span => {

// 		//console.log(span.parentNode)
// 		span.addEventListener('mousedown', (event)=> {
// 			span.classList.add('active')
// 			span.addEventListener('mouseup', (event)=> {
// 				span.classList.remove('active')
// 			})
// 		})
// 	})

//   keyboard.addEventListener('click', (event) => {
 
//     })
	
// 	console.log(keyboard)
// })

// /*Combo btn */
// document.addEventListener('keydown', function(event) {

// 	//Ctrl + Alt
// 	if(event.ctrlKey && event.altKey) { //  && flagLang == false
// 		event.preventDefault();
// 		changeLang()
// 	}else if(event.ctrlKey && event.altKey) { // && flagLang == true
// 		// console.log('flag', flag)
// 		changeLang()
// 		console.log('flagLang', flagLang)
// 		// console.log('flag', flag)
// 		// console.log('flagLang', flagLang)
		
// 	}  
// 	//shift
// 	if(event.shiftKey) {
// 		event.preventDefault();
// 		changeHight()
// 	}else if(event.shiftKey) {
// 		event.preventDefault();
// 		changeHight()
// 	}  
// })
// /****************************************************** */
// // if 'shift', change hight
// function changeHight() {
// 	if(flagLang == false) { // eng
// 		if(flagHight == false) { // lower
// 			arr = letterObj.eng.ArrUp	
// 			flagHight = true									// arr = [].concat.apply([], letterObj.eng.ArrDown);
// 		} else { // upper
// 			arr = letterObj.eng.ArrDown
// 			flagHight = false
// 		} 
// 		chengeSymbol(arr)
// 	}
// 	else	if(flagLang == true) { // rus
// 		if(flagHight == false) { // lower
// 			arr = letterObj.ru.ArrUp	
// 			flagHight = true										// arr = [].concat.apply([], letterObj.eng.ArrDown);
// 		} else { // upper
// 			arr = letterObj.ru.ArrDown
// 			flagHight = false
// 		} 
// 		chengeSymbol(arr)
// 	}
// 	//return arr
// 										// Object.keys(letterObj).forEach(function(key) {
// 										// 	console.log(key, ':', this[key].length);
// 										// }, letterObj);
// 										//let newArr = [].concat.apply([], letterObj.engArrDown);
// }
// //if ctrl + alt, change lang
// function changeLang() {
// 	if(flagHight == false) { // lower
// 		if(flagLang == false) { // eng
// 			arr = letterObj.ru.ArrDown
// 			flagLang = true
// 		} else { // ru
// 			arr = letterObj.eng.ArrDown
// 			flagLang = false
// 		} 
// 		chengeSymbol(arr)
// 	}
// 	if(flagHight == true) { //upper
// 		if(flagLang == false) { // eng
// 			arr = letterObj.eng.ArrUp
// 			flagLang = true
// 		} else { // ru
// 			arr = letterObj.ru.ArrUp
// 			flagLang = false
// 		} 
// 		chengeSymbol(arr)
// 	}
// 	//return arr
// }

// /*Chenge Symbol on keyboard*/
// function chengeSymbol(arr = letterObj.ru.ArrDown) {
// 	//let newArr = arr.join(' ,').split(',')
// 	const btnSpan = document.querySelectorAll('span')
// 	for(let j = 0; j < btnSpan.length; j++) {
// 		btnSpan[j].innerHTML = arr[j]
// 	}
// }//норм

// /*Create block */

// function createBlock() {
// 	const block = document.createElement('div')
// 	block.classList.add('container')
// 	document.querySelector('body').append(block)
	
// 	const title = document.createElement('div')
// 	title.classList.add('title')
// 	title.innerHTML = 'RSS keyboard'
// 	block.appendChild(title)
	
// 	const textAr =document.createElement('textarea')
// 	textAr.classList.add('textarea')
// 	textAr.setAttribute('id', 'area')
// 	textAr.focus()
// 	block.appendChild(textAr)
// 	//block.onclick = (event)=>console.log(event)
	
// 	const board = document.createElement('div')
// 	board.classList.add('keyboard')
// 	return block.appendChild(board)
// }



// /*............................................... */

// /*Create 5 blocks with cards */
// function createRowBtns(arr = engArrDown) {

// 	let btn;
// 	let board = createBlock()
// 	for(let j = 0; j <= 4; j++) {
// 		let row_btns = document.createElement('div')
// 		row_btns.classList.add('row')
		
// 		for (let i = 0; i < arr[j].length; i++) {
// 			btn = document.createElement('div');

// 			// add classes
// 			if(arr[j][i] == 'Space'){
// 				btn.classList.add('btn-key', 'xxl')
// 			} else if(arr[j][i].length > 4 && arr[j][i].split('').includes('&') == false){
// 				btn.classList.add('btn-key', 'xl')
// 			} else {
// 				btn.classList.add('btn-key')
// 			}

// 			//add id
// 			if(arr[j][i].length > 2 && arr[j][i] != 'Space') {
// 				if (arr[j][i].split('').includes('&')){
// 					btn.setAttribute('id', 'arrow')
// 				}else	{
// 					btn.setAttribute('id', `${arr[j][i]}`)
// 				}
// 				btn.classList.add('bgd')
// 			}
			
// 			// add innerHTML to span
// 			let span = document.createElement('span');
// 			span.innerHTML = `${arr[j][i]}`

// 			btn.appendChild(span)
// 			row_btns.appendChild(btn)
// 			//return btn
// 		}
// 		board.appendChild(row_btns)
// 	}
// 	return board
// }//норм


/******************** */

// function backspace(text) {
//     let arr = text.toString().split('');
//     arr.pop();
//     return arr.join('');
//   }
// if(btn.firstChild.innerHTML == 'Enter') {
//         textar.textContent += \n;
//       } else if (btn.firstChild.innerHTML == 'Tab') {
//         textar.textContent += '    ';
//       } else if (btn.firstChild.innerHTML == 'Alt'  btn.firstChild.innerHTML == 'Del'   btn.firstChild.innerHTML == 'Ctrl'  btn.firstChild.innerHTML == 'Win'  btn.firstChild.innerHTML == 'Shift' || btn.firstChild.innerHTML == 'CapsLock') {
//         let text = textar.textContent;
//         textar.textContent = text;
//       } else if (btn.firstChild.innerHTML == 'Backspace') {
//         textar.textContent = backspace(textar.textContent);
//       } else {
//         textar.textContent += btn.firstChild.innerHTML;

//       }
// const textar = document.querySelector('.text-area');