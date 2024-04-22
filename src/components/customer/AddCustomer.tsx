import React from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {addCustomer} from "../../service/CustomerService";
import {useNavigate} from "react-router-dom";

const AddCustomer = () => {
    const [customer, setCustomer] = React.useState({});
    const navigate = useNavigate();

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [contactNo, setContactNo] = React.useState("");
    const [isActive, setIsActive] = React.useState(false);

    function handleLastName(e: any){
        setLastName(e.target.value);
    }

    const onSubmit = (e:any) => {
        e.preventDefault();
        console.log(firstName, lastName, email, username, contactNo, isActive);
        const customer = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            contactNo: contactNo,
            active: isActive
        }
        addCustomer(customer).then((resp) =>{
            console.log(resp);
            navigate("/customers");
        }).catch((error) =>{
            console.log("error", error);
        })

    }

    return (
        <div className={"container"} style={{padding: 5}}>
            <Card style={{padding: 5, marginLeft: 60, marginRight: 60, marginTop: 10, marginBottom: 10}}>
                <Card.Header>
                    <h5 className={'text-center'}>Add Customer</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="Enter First Name"
                                          onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="Enter Last Name" onChange={handleLastName}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" size="sm" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="Enter User Name" onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control type="text"size="sm"  placeholder="Enter Contact No" onChange={e => setContactNo(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="isActive" onClick={e => setIsActive(!isActive)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={onSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddCustomer;