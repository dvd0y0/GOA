// #1
const myDiv = document.getElementById('myDiv');
myDiv.classList.add('highlight');
myDiv.classList.remove('highlight');
const toggleButton = document.getElementById('toggleButton');
const targetDiv = document.getElementById('targetDiv');
toggleButton.addEventListener('click', () => {
    targetDiv.classList.toggle('active');
});
const checkParagraph = document.getElementById('checkParagraph');
console.log(checkParagraph.classList.contains('important'));
const replaceDiv = document.getElementById('replaceDiv');
replaceDiv.classList.replace('red', 'blue');
const itemDiv = document.getElementById('itemDiv');
console.log(itemDiv.classList.item(1));

// #2
const myUl = document.getElementById('myUl');
const newLi = document.createElement('li');
newLi.textContent = 'New Item';
myUl.appendChild(newLi);
myUl.removeChild(myUl.firstElementChild);
myUl.children[1].textContent = 'Updated Item';

// #3
const myParagraph = document.getElementById('myParagraph');
myParagraph.textContent = 'New text content!';

// #5
const myList = document.getElementById('myList');
const newListItem = document.createElement('li');
newListItem.textContent = 'New list item';
myList.appendChild(newListItem);

// #6
const removableList = document.getElementById('removableList');
removableList.removeChild(removableList.children[1]);

// #10
const colorButton = document.getElementById('colorButton');
const colorDiv = document.getElementById('colorDiv');
colorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorDiv.style.backgroundColor = randomColor;
});