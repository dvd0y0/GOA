// 3. getElementById-ის გამოყენება ელემენტის მანიპულირება მისი ID-ით
const header = document.getElementById('mainHeader'); // ვპოულობთ ელემენტს id="mainHeader"-ით
header.innerText = 'Modified Header using getElementById'; // ვცვლით ელემენტის ტექსტს

// 4. getElementsByClassName-ის გამოყენება ელემენტების მანიპულირება ერთი და იგივე კლასით
const textBlocks = document.getElementsByClassName('textBlock'); // ვპოულობთ ყველა ელემენტს კლასით textBlock
for (let i = 0; i < textBlocks.length; i++) {
  textBlocks[i].classList.add('highlight'); // ვამატებთ highlight კლასს (ყვითელი ფონი)
  textBlocks[i].innerText = `Modified paragraph ${i + 1} using getElementsByClassName`; // ვცვლით ტექსტს
}

// 5. getElementsByTagName-ის გამოყენება ყველა გარკვეული ტეგის ელემენტის მანიპულირება
const divs = document.getElementsByTagName('div'); // ვპოულობთ ყველა <div> ელემენტს
for (let i = 0; i < divs.length; i++) {
  divs[i].innerText = `Modified div ${i + 1} using getElementsByTagName`; // ვცვლით ტექსტს
}

// 6. innerHTML-ის გამოყენება ელემენტის HTML შიგთავსის შეცვლა
const contentArea = document.getElementById('contentArea'); // ვპოულობთ ელემენტს id="contentArea"-ით
contentArea.innerHTML = '<p>New content with <i>italic text</i> added via innerHTML.</p>'; // ვცვლით HTML შიგთავსს

// 7. innerText-ის გამოყენება ელემენტის ტექსტური შიგთავსის შეცვლა
const newParagraph = document.createElement('p'); // ვქმნით ახალ <p> ელემენტს
newParagraph.innerText = 'This text was added using innerText, HTML tags are not parsed.'; // ვაყენებთ ტექსტს
contentArea.appendChild(newParagraph); // ვამატებთ ახალ პარაგრაფს contentArea-ში

// 8. style თვისების გამოყენება ელემენტის CSS სტილის შეცვლა
header.style.color = 'red'; // ვცვლით ფერს წითლად
header.style.fontSize = '24px'; // ვაყენებთ შრიფტის ზომას 24px
header.classList.add('styled'); // ვამატებთ styled კლასს