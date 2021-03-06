import chalk from "chalk";
import { PRIORITY_LOW } from "constants";
import { Priority, PRIORITY_NAME_MAP, PRIORITY_STYLE_MAP } from "./type";

export default class Todo {
    static nextId: number = 1;
    constructor(
        private title:string, 
        private priority: Priority, 
        public id: number = Todo.nextId,
    ){
        Todo.nextId++;
    }

    toString() {
        // return `${this.id}) 제목: ${this.title} (우선순위: ${this.priority})`;
        return chalk`{blue.bold ${this.id})} 제목 {bold ${this.title}} (우선순위: {${PRIORITY_STYLE_MAP[this.priority]} ${PRIORITY_NAME_MAP[this.priority]}})`;
    }
}
