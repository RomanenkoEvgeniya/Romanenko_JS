window.onload = function() {
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
    })
};

