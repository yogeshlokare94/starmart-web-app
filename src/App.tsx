import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader";
import CustomerList from "./components/customer/CustomerList";

function App() {
    return (
        <>
            <AppHeader/>
            <CustomerList/>
        </>
    );
}

export default App;
