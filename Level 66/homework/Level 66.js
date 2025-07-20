// # 1
// let prices = [10, 20, 30, 40];
// let increase = parseInt(prompt("Enter the increase amount:"));

// for (let i = 0; i < prices.length; i++) {
//   prices[i] += increase;
// }

// console.log(prices);

// # 2
// function calculateAge() {
//   const birthDateInput = prompt("Enter your birthdate (YYYY-MM-DD):");
//   const birthDate = new Date(birthDateInput);
//   const today = new Date();

//   let years = today.getFullYear() - birthDate.getFullYear();
//   let months = today.getMonth() - birthDate.getMonth();
//   let days = today.getDate() - birthDate.getDate();

//   if (months < 0 || (months === 0 && days < 0)) {
//     years--;
//     months += 12;
//   }
//   if (days < 0) {
//     const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
//     days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
//     months--;
//   }

//   document.body.innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.`;
// }

// # 3
// let count = 0;
// setInterval(() => {
//   console.log(count);
//   count++;
// }, 1000);

// # 4
// function delayedMessage() {
//   const message = prompt("Enter your message:");
//   const delay = parseInt(prompt("Enter delay in milliseconds:"));
//   setTimeout(() => alert(message), delay);
// }

// # 5
// function logGreeting() {
//   setTimeout(() => console.log("Hello! Welcome!"), 2000);
// }

// # 6
// function messageOne() {
//   console.log("First message");
// }

// function messageTwo() {
//   console.log("Second message");
// }

// function messageThree() {
//   console.log("Third message");
// }

// # 7
// setTimeout(messageOne, 1000);
// setTimeout(messageTwo, 2000);
// setTimeout(messageThree, 3000);

// # 8
// function personalizedGreeting() {
//   setInterval(() => {
//     const now = new Date();
//     const hours = now.getHours();
//     let greeting;

//     if (hours < 12) {
//       greeting = "Good Morning";
//     } else if (hours >= 12 && hours < 18) {
//       greeting = "Good Afternoon";
//     } else {
//       greeting = "Good Evening";
//     }

//     console.log(`${greeting}, User!`);
//   }, 1000);
// }