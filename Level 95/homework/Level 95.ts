interface User {
  id: number;
  username: string;
  email: string;
  bio: string;
  role: "admin" | "user";
}

function updateUser(user: User): void {
  console.log(`User ${user.username} is an ${user.role}`);
}

const exampleUser: User = {
  id: 1,
  username: "dvd",
  email: "dvd@example.com",
  role: "admin",
};

updateUser(exampleUser);
