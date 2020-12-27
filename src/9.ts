/**
 * 함수 타입 A가 함수 타입 B로 할당 가능하기 위한 조건.
 * 
 * 1. A의 매개변수가 B의 매개변수보다 적어야한다.
 * 2. 같은 위치의 매개변수에 대해 B의 매개변수가 A의 매개변수로 할당 가능해야 한다.
 * 3. A의 반환값은 B의 반환값으로 할당 가능해야 한다.
 */

type F1 = (a:number, b:string) => string;
type F2 = (a:number, b:number | string) => string;
type F3 = (a:number) => string;
type F4 = (a:number) => number | string;

let f1: F1 = (a,b) => `${a} ${b.length}`;
let f2: F2 = (a,b) => `${a} ${b}`;
let f3: F3 = a => `${a}`;
let f4: F4 = a => (a < 10 ? a : 'too big');

f1 = f3;
// f3 = f1;

f1 = f2;
// f2 = f1;

f4 = f3;
// f3 = f4;