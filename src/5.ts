export {};

interface Person {
    readonly name: string;
    age: number;
    [key: string]: string | number; //인덱스 타입.
}

const p1: Person = {
    name: 'mike',
    birthday: '1997-01-01',
    age: 25,
    // age: '25',
}

interface YearPriceMap {
    [year: number]: number;
    [year: string]: string | number; // 위의 number를 포함해야 한다.
}

const yearMap: YearPriceMap = {};
yearMap[1998] = 1000;
// yearMap[1998] = 'abc'; -> 오류.
yearMap['2000'] = 1234;
yearMap['2000'] = 'mmm';



