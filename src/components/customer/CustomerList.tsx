import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import {deleteCustomer,  getAllCustomers} from "../../service/CustomerService";
import {useNavigate} from "react-router-dom";

const CustomerList = () => {
    const [customerList, setCustomerList] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);
    const navigator = useNavigate();

    useEffect(()=> {
        getAllCustomers().then((response) => {
            console.log("response", response);
            setCustomerList(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [refreshKey])

    const goToAddCustomer = () =>{
        navigator("/customers/add");
    }

    function updateCustomerById(id: number){
        navigator("/customer/update/"+id);
    }

    const deleteCustomerById = (id:number) =>{
        deleteCustomer(id).then((response) => {
           setRefreshKey(refreshKey => refreshKey + 1);
        }).catch((error) =>{
            console.log(error);
        })
    }

    return (
        <div className={'container'}>
            <h2 className={'text-center'}>List of Customers</h2>
            <Button variant="primary" style={{marginBottom: 10}} onClick={goToAddCustomer}>Add New Customer</Button>
            <Table>
                <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Customer Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Contact No</th>
                    <th>Is Active?</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {customerList.map((customer: any, index) =>
                    <tr key={customer.id}>
                        <td>{index + 1}</td>
                        <td>{customer.id}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.username}</td>
                        <td>{customer.email}</td>
                        <td>{customer.contactNo}</td>
                        <td>{customer.active ? "Yes" : "No"}</td>
                        <td><Button variant="success" onClick={() => updateCustomerById(customer.id)}>Edit</Button></td>
                        <td><Button variant="warning" onClick={()=> deleteCustomerById(customer.id)}>Delete</Button></td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
};

export default CustomerList;