//函数比较特殊 可以看f1不用传两个参数，也可以传更多的参数，函数的约束只是约束传参的类型
type MyFn = (name: string, age: number) => number;

const f1: MyFn = () => {
  return 1;
};

function deBounce<T extends Function>(callback: T, delay: number): Function {
  let timer: any;
  return (...args: any[]) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

deBounce<MyFn>(() => 1, 2000);

interface Person {
  name: string;
  say(): void;
}

const p: Person = {
  name: "lw",
  say() {},
};

export const a = 1;
