
let buttons = document.getElementsByTagName('button');
let input = '';

for (let i = 0; i < buttons.length; ++i) {
	buttons[i].onclick = function() {

		if (buttons[i].textContent !== '='   &&
				buttons[i].textContent !== 'del' &&
				buttons[i].textContent !== '<') {

			input += buttons[i].innerHTML;
			document.getElementById('input-number').textContent = input;
		
		} else if (buttons[i].textContent === '=') {
			
			document.getElementById('output-number').textContent = eval(input);
			input = '';

		} else if (buttons[i].textContent === 'del') {

			document.getElementById('input-number').textContent = '0';
			document.getElementById('output-number').textContent = '';
			input = '';

		}	else if (buttons[i].textContent === '<' && input.length !== 0) {

			// document.getElementById('input-number').textContent = input.substring(0, input.length - 1);
			input = input.slice(0, -1);
			document.getElementById('input-number').textContent = input;
			
		}	else if (buttons[i].textContent === '%') {



		}

		
	};
}