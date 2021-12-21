import { useContext, useRef, useState } from "react";
import userContext from "../context/userContext";
import { Modal, Button, Form } from "react-bootstrap";

export default function Friend(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateNameInput = useRef(null)
    const updateAgeInput = useRef(null)
    const {dispatch} = useContext(userContext);
   
    return(

        <div>{props.name} | {props.age}
            <Button style={{margin: 5 }} variant="primary" onClick={()=>{
                dispatch({type: "REMOVE_FRIEND", payload:{name: props.name, age: props.age}})
                }
            }>
                Remove
            </Button>

            <Button variant="primary" onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={updateNameInput} type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Age</Form.Label>
                            <Form.Control ref={updateAgeInput} type="number" placeholder="Age" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    handleClose()
                    dispatch({
                        type: "UPDATE_FRIEND",
                        payload:{
                            name: updateNameInput.current.value,
                            age: updateAgeInput.current.value,
                            queryName: props.name
                            }})
                }}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}



