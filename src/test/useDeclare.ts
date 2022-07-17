//tsconfig 配置了inclue 会自动查找当前目录下的d.ts文件
// interface type都是全局的在src下的文件都能使用 避免变量环境污染 用namespace
const one: Api.One = {
  name: "sdfdsf",
};
const test: MyTest = {
  name: "lw",
  age: 213,
};

const test1: MyTest1 = {
  name: "lw",
  age: 213,
};
export const a = 1;
