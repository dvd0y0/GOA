interface User {
  name: string;
  age: number;
  ownPiano: boolean;
}

const user: User = {
  name: "დავითი",
  age: 30,
  ownPiano: true,
};

console.log(user);

function combineArgs(
  arg1: string,
  arg2: number,
  arg3: boolean,
): [string, number, boolean] {
  return [arg1, arg2, arg3];
}
