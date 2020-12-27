export{};

type IsStringType<T> = T extends string ? 'some' : 'thing';

type T01 = IsStringType<string>; //some타입이 된다.
type T02 = IsStringType<number>; //thing타입이 된다.
type T03 = IsStringType<string | number>;
type T04 = IsStringType<string> | IsStringType<number>;

type T10 = number | string | never; // never는 타입에서 제거된다.
type Exclude<T,U> = T extends U ? never : T;
type T11 = Exclude<1 | 3 | 5 | 7 , 1 | 5 | 9>; //3 | 7
type T12 = Exclude<string | number | (() => void), Function>;

type Extract<T,U> = T extends U ? T : never;
type T13 = Extract<1 | 3 | 5 | 7, | 1 | 5 | 9>; // 1 | 5

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type T21 = ReturnType<() => string>;
function f1(s: string): number {
    return s.length;
}
type T22 = ReturnType<typeof f1>;

type Unpacked<T> = T extends (infer U) [] ? U
: T extends (...args: any[]) => infer U ? U
: T extends Promise<infer U> ? U
: T;

type T30 = Unpacked<string>;
type T31 = Unpacked<string[]>;
type T32 = Unpacked<() => string>;
type T33 = Unpacked<Promise<string>>;
type T34 = Unpacked<Promise<string>[]>;
type T35 = Unpacked<Unpacked<Promise<String>[]>>;

//-------유틸리티-----//
type StringPropertyNames<T> = { 
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T]

interface Person {
    name: string;
    age: number;
    nation: string;
}

type T40 = StringPropertyNames<Person>; //Person의 string타입만 획득.

type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
type T41 = StringProperties<Person>; //Person의 string타입만 갖고 있는 타입생성.

type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>; 
type T51 = Omit<Person, 'nation' | 'age'>; //Person에서 nation과 age를 제외

type Overwrite<T,U> = { [P in Exclude<keyof T, keyof U>] : T[P]} & U;
type T61 = Overwrite<Person, {age:string, nation: number}>;

const v1 = 123;
let v3: typeof v1 = 123;
console.log(typeof v1);
console.log(typeof v3);


