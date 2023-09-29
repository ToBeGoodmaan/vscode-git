const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters === 0) //remainingCharacters라는 상수가 0자여서 true '참'일 경우 / 상수 값이 0보다 커서 false '거짓'일 경우 
    //else if 조건문을 검증.
    {
        remainingCharsElement.classList.add('error'); //'warning'이라는 클라스의 css 스타일을 작동하도록 시켜라
        productNameInputElement.classList.add('error'); // 'warning'이라는 클라스의 css스타일을 작동하도록 시켜라.
    } else if (remainingCharacters <= 10) {
        remainingCharsElement.classList.add('warning'); 
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNameInputElement.classList.remove('error');
    } else {
        remainingCharsElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('input',updateRemainingCharacters );