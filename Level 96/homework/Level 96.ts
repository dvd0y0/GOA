interface User {
  id: number;
  username: string;
  email: string;
  isAdmin?: boolean;
}

function registerUser(user: User): void {
  console.log(`მომხმარებელი ${user.username} წარმატებით დარეგისტრირდა`);
}

const exampleUser: User = {
  id: 1,
  username: "dvd",
  email: "dvd@example.com",
};

registerUser(exampleUser);
