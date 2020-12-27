export {};

type T0 = {[K in 'prop1' | 'prop2'] : boolean}

const p : T0 = {
    prop1: true,
    prop2: false
};

interface Person {
    name: string;
    age: number;
}

//모든 속성을 boolean으로 변경해주는 mapped type;
type MakeBoolean<T> = {[P in keyof T] ?: boolean};

const pMap: MakeBoolean<Person> = {};
pMap.age = true;
pMap.name = undefined;

type Readonly<T> = {readonly [P in keyof T] : T[P]};
type Partial<T> = {[P in keyof T] ?: T[P]};

type T2 = Partial<Person>;
type T3 = Readonly<Person>;

type Pick<T, K extends keyof T> = {[P in K]: T[P]};

interface Person2 {
    name: string;
    age: number;
    language: string;
}
type T4 = Pick<Person2, 'age' | 'language'>;

type Record<K extends string, T> = {[P in K] : T};
type T5 = Record<'p1' | 'p2', Person2>;
type T6 = Record<'p1' | 'p2' | 'p3', number  >;