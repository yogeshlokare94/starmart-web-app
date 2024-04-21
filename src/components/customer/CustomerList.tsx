import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {getAllCustomers} from "../../service/CustomerService";

const CustomerList = () => {
    const [customerList, setCustomerList] = useState([]);

    useEffect(()=> {
        getAllCustomers().then((response) => {
            console.log("response", response);
            setCustomerList(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className={'container'}>
            <h2 className={'text-center'}>List of Customers</h2>
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
                </tr>
                </thead>
                <tbody>
                {customerList.map((customer: any, index) =>
                    <tr key={customer.id}>
                        <td>{index+1}</td>
                        <td>{customer.id}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.username}</td>
                        <td>{customer.email}</td>
                        <td>{customer.contactNo}</td>
                        <td>{customer.active ? "Yes" : "No"}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
};

export default CustomerList;