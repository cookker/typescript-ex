import Todo from "./Todo";

export enum Priority{
    High,
    Medium,
    Low,
}

export interface AppState {
    todos: Todo[];
}

export const PRIORITY_NAME_MAP : { [key in Priority]: string }= {
    [Priority.High] :'높음',
    [Priority.Medium] :'중간',
    [Priority.Low] :'낮음',
}

export const PRIORITY_STYLE_MAP : { [key in Priority]: string }= {
    [Priority.High] :'red.bold',
    [Priority.Medium] :'grey.bold',
    [Priority.Low] :'yellow.bold',
}

//식별 가능한 유니온타입으로 만들기 위해서 추가.
export interface ActionNewTodo {
    type: 'newTodo';
    title: any; //원래 string인데 오류나서 바꿈.
    priority: Priority;
}

export interface ActionDeleteTodo {
    type: 'deleteTodo';
    id: number;
}

export type Action = ActionNewTodo | ActionDeleteTodo;