declare namespace UsersType {
    type State = {name: string, age: number}[]
    interface Action{
        type: string;
        payload: {name: string, age: number, queryName?:srting};
    }
}