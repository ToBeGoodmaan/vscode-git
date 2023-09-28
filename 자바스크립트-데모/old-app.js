//document.body.children[1].children[0].href = 'https://google.com';

 //console.dir(document);
 //alert();
 //window.alert();

 let anchorElement = document.getElementById('external-link');
 anchorElement.href = 'https://google.com';

 anchoerElement = document.querySelector('p a');
 anchorElement.href = 'https://academind.com';

 // 요소를 추가하려면 ADD AN ELEMENT
 // 1. 새로운 요소부터 만들어야 한다.

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent = 'This leads to Google!';

 /* 2. DOM에 넣어줘야 하기 때문에 새로운 요소를 가지고 있어야 하는
부모요소부터 접근을 해야한다. */

let firstParagraph = document.querySelector('p');

// 3. 부모 요소 컨텐츠에 새로운 요소를 삽입해 줘야 한다.


firstParagraph.append(newAnchorElement);

// 요소를 빼는 단계

// 빼야 할 요소를 선택하고

let firsth1Element = document.querySelector('h1');

// 그 요소를 삭제한다.

firsth1Element.remove();
// firsth1Element.parentElement.removeChild(firsth1Element);


// 요소 이동 

firstParagraph.parentElement.append(firstParagraph);

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';