// # 1
// function Person(name, age, profession) {
//     this.name = name;
//     this.age = age;
//     this.profession = profession;
    
//     this.introduce = function() {
//         console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
//     };
// }

// const person1 = new Person("Luka Giorgadze", 30, "Software Engineer");
// person1.introduce();

// # 2
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
    

//     this.getSummary = function() {
//         return `${this.title} by ${this.author}, published in ${this.year}`;
//     };
// }

// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// const book2 = new Book("1984", "George Orwell", 1949);
// const book3 = new Book("Pride and Prejudice", "Jane Austen", 1813);

// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book3.getSummary());

// # 3
// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
    
//     this.changePassword = function(newPassword) {
//         this.password = newPassword;
//     };
    
//     this.getDetails = function() {
//         return `Username: ${this.username}, Email: ${this.email}`;
//     };
// }

// const user1 = new User("john_doe", "john@example.com", "oldPass123");

// console.log(user1.getDetails());

// user1.changePassword("newPass456");

// console.log(user1.getDetails());

// console.log("New password (for verification):", user1.password);