export {};

class Person {
    #name: string; // #은 private의 의미이다. 최근에 추가된 표준문법이다.
    constructor(name: string) {
        this.#name = name;
    }

    sayHello() {
        console.log(`안녕하세요. 저는 ${this.#name}입니다.`)
    }
}

const ho:Person = new Person('홍길동');
console.log(ho.sayHello());

class People {
    //생성자 매개변수 앞에 접근제한자를 붙여주면, 멤버변수로 알아서 인식한다.
    constructor(public name: string, public age: number){}
}

const p1 = new People('홍길동', 50);
console.log(p1.name, p1.age);


