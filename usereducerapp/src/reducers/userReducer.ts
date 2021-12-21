import { db } from "../DB"
export default function userReducer(state: UsersType.State, actions: UsersType.Action){
    switch (actions.type) {
        case "INITIAL_STATE":
            return [...db]
        case "ADD_FRIEND":
            return [...state, {name: actions.payload.name, age: actions.payload.age}];
        case "REMOVE_FRIEND":
            const newArr = state.filter((user)=> user.name !== actions.payload.name)
            return newArr;
        case "UPDATE_FRIEND":
            const updateArr = state.map((user)=>{
                if(user.name === actions.payload.queryName){
                    return actions.payload;
                }
                return user;
            })
            return updateArr;
        default:    
        return state
    }
}