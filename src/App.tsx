import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader";
import CustomerList from "./components/customer/CustomerList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemsList from "./components/item/ItemsList";
import AddCustomer from "./components/customer/AddCustomer";

function App() {
    return (
        <>
            <BrowserRouter>
                <AppHeader/>
                <Routes>
                    <Route path="/" element={<CustomerList />} />
                    <Route path="/customers" element={<CustomerList />} />
                    <Route path="/items" element={<ItemsList />} />
                    <Route path={"/customers/add"} Component={AddCustomer}/>
                    <Route path={"/customer/update/:id"} element={<AddCustomer/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
