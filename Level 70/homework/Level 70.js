// # 1
// const pElement = document.createElement('p');
// pElement.textContent = 'This is a paragraph.';

// document.body.appendChild(pElement);

// # 2
// const h2Element = document.createElement('h2');
// h2Element.textContent = 'Subheading';

// document.body.appendChild(h2Element);

// h2Element.textContent = 'Updated Subheading';

// # 3 
// const divElement = document.createElement('div');
// divElement.textContent = 'This is a div';

// document.body.appendChild(divElement);

// divElement.remove();

// # 4 
// const ulElement = document.createElement('ul');

// const li1 = document.createElement('li');
// li1.textContent = 'Item 1';
// const li2 = document.createElement('li');
// li2.textContent = 'Item 2';
// const li3 = document.createElement('li');
// li3.textContent = 'Item 3';

// ulElement.appendChild(li1);
// ulElement.appendChild(li2);
// ulElement.appendChild(li3);

// document.body.appendChild(ulElement);

// console.log('First child:', ulElement.firstElementChild);
// console.log('Last child:', ulElement.lastElementChild);

// # 5
// const h3Element = document.createElement('h3');
// h3Element.textContent = 'Inserted Heading';

// document.body.insertBefore(h3Element, document.body.firstChild);

// # 6
// const spanElement = document.createElement('span');
// spanElement.textContent = 'This is a span';

// const container = document.getElementById('container');
// if (container) {
//     container.appendChild(spanElement);
    
//     console.log('Parent element:', spanElement.parentElement);
// } else {
//     console.error('Container element with id "container" not found.');
// }