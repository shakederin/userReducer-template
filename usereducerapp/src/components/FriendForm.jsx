import { useContext, useRef } from "react";
import userContext from "../context/userContext";
import { Button } from "react-bootstrap";

export default function FriendForm(){
    const {dispatch} = useContext(userContext);
    const nameInput = useRef(null)
    const ageInput = useRef(null)
    return(
        <div>
            <input ref={nameInput} type="text" placeholder="name"/>
            <input ref={ageInput} type="number" placeholder="age"/>
            <Button variant="secondary" onClick={()=>{dispatch({
                type:"ADD_FRIEND",
                 payload:{
                     name:nameInput.current.value,
                     age: Number(ageInput.current.value),
                     queryName:nameInput.current.value
                     }
                }
                )}
                }>Add</Button>
        </div>
    )
}