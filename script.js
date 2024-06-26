let counter = 0;

const btn1 = document.getElementById('btn1');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
	counter++;
	btn1.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
	counter--;
	btn1.innerHTML = counter;
});

// To reset the counter to zero
resetBtn.addEventListener('click', reset);
// 
function reset() {
	counter = 0;
	btn1.innerHTML = counter;
}