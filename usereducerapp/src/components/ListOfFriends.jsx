import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import userContext from "../context/userContext";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

export default function ListOfFriends(){
    const {list} = useContext(userContext);

    const renderList = list.map((friend, i) =>{
       return (<Friend
        key={i}
        name={friend.name}
        age={friend.age}
        queryName ={friend.queryName}
        />)
    })

    return(
        <div>
            <FriendForm />
            <div style={{display: "flex", textAlign: "end", flexDirection: "column"}}>{renderList}</div>
        </div>
    )
}