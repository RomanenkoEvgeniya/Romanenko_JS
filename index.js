window.onload = function() {
	testExercise1();
	testExercise2();
	testExercise3();
};

const testExercise1 = function() {
	const testInput1 = document.querySelector('.test1-input');
    const testSubmit1 = document.querySelector('.test1-submit');
    const testContainer1 = document.querySelector('.test1-container');
    testSubmit1.addEventListener('click', (event) => {
        const result = testInput1.value;
        const resultElement = document.createElement('p');
        let msg = null;
        if(result > 7) {
        	msg = document.createTextNode('Привет');
        	resultElement.appendChild(msg);
        	testContainer1.appendChild(resultElement);
        }
    });
};
const testExercise2 = function() {
	const testInput2 = document.querySelector('.test2-input');
    const testSubmit2 = document.querySelector('.test2-submit');
    const testContainer2 = document.querySelector('.test2-container');
    testSubmit2.addEventListener('click', (event) => {
    	const result = testInput2.value;
    	const resultElement = document.createElement('p');
    	let msg = null;
    	if(result === 'Вячеслав') {
        	msg = document.createTextNode('Привет, Вячеслав');
        } else {
        	msg = document.createTextNode('Нет такого имени');
        }
        resultElement.appendChild(msg);
        testContainer2.appendChild(resultElement);
    });
};
const testExercise3 = function() {
	const testContainer3 = document.querySelector('.test3-container');
    const testGenerateArray = document.querySelector('.test3-generate');
    testGenerateArray.addEventListener('click', (event) => {
    	const generateRandomNubmer = function() {
    		return Math.floor(Math.random() * (100 - 1) + 1);
    	};
    	const randomArray = [generateRandomNubmer(), generateRandomNubmer(), generateRandomNubmer(), generateRandomNubmer()];
    	console.log(randomArray.toString());
    	const findDivByThree = function(arr) {
    		const results = arr.filter(element => element % 3 === 0);
    		if(!results.length) {
    			return '-';
    		}
    		return results.toString();
    	};
    	const resultElement = document.createElement('p');
    	const randomArrayString = document.createTextNode('[' + randomArray.toString() + '] => ' + findDivByThree(randomArray));
    	resultElement.appendChild(randomArrayString);
    	testContainer3.appendChild(resultElement);
    });
}
