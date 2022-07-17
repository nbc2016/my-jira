// keyof in 只能用在type中
interface Person {
  name: string;
  age: number;
}

function getObj<T>(obj: T, key: keyof T): T[keyof T] {
  return obj[key];
}

getObj<Person>({ name: "lw", age: 123 }, "name");

type Mykey = "get" | "post";

type Myajax = {
  [key in Mykey]?: string;
};

let ajax: Myajax = {
  get: "sa",
  post: "sf",
};

type MyPartial<T> = {
  [key in keyof T]?: T[key];
};

let ajax1: MyPartial<Myajax> = {
  get: "asdf",
};
console.log(ajax1);

export const a = 1;
