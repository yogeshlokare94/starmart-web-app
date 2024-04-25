import React, {useEffect} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {addCustomer, getCustomerById, updateCustomerById} from "../../service/CustomerService";
import {useNavigate, useParams} from "react-router-dom";

const AddCustomer = () => {
    const [customer, setCustomer] = React.useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [contactNo, setContactNo] = React.useState("");
    const [isActive, setIsActive] = React.useState(false);

    useEffect(()=>{
        getCustomerById(id).then((resp) =>{
            if(resp.data){
                setFirstName(resp.data.firstName);
                setLastName(resp.data.lastName);
                setEmail(resp.data.email);
                setUsername(resp.data.username);
                setContactNo(resp.data.contactNo);
                setIsActive(resp.data.active);
            }
        }).catch((error) =>{
            console.log(error);
        })
    }, [id])

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
        if(id !=null){
            updateCustomerById(id, customer).then((response)=>{
                if(response.data){
                    navigate("/customers");
                }
            }).catch((error) => {
                console.log(error);
            })
        }else{
            addCustomer(customer).then((resp) =>{
                console.log(resp);
                navigate("/customers");
            }).catch((error) =>{
                console.log("error", error);
            })
        }
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
                            <Form.Control type="text" size="sm" placeholder="Enter First Name" value={firstName}
                                          onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="Enter Last Name"  value={lastName} onChange={handleLastName}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" size="sm" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="Enter User Name" value={username} onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control type="text"size="sm"  placeholder="Enter Contact No" value={contactNo} onChange={e => setContactNo(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="isActive" checked={isActive} onClick={e => setIsActive(!isActive)}/>
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