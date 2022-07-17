//正常不需要用到declare
// declare module xxx {} 是用来做一些第三方库没有支持ts的，通过declare module，让我们在代码中可以import进来，从而使用它
// https://mp.weixin.qq.com/s/L09DH0-GqDBW8a_wSmuGBQ
declare namespace Api {
  interface One {
    name: string;
  }

  interface Two {
    age: number;
  }
}

declare interface MyTest {
  name: string;
  age: number;
}

declare type MyTest1 = {
  name: string;
  age: number;
};

//这种属于第三方声明文件 要上传到@types 在本地d.ts这些没有用
declare let jQuery: (selector: string) => any;
