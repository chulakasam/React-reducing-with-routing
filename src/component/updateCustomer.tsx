import {useContext, useState} from "react";
import {Customer} from "../assets/Customer.ts";
import {CustomerContext} from "../store/CustomerProvider.tsx";

export function UpdateCustomer() {
    const [searchEmail, setSearchEmail] = useState('');
    const [foundCustomer, setFoundCustomer] = useState<Customer | null>(null);
    const [newName, setNewName] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newPhone, setNewPhone] = useState('');

    const { customers, dispatch } = useContext(CustomerContext);

    function handleSearch(){
        const customer = customers.find((c) => c.email === searchEmail);
        if (customer) {
            setFoundCustomer(customer);
            setNewName(customer.name); // Pre-fill the current details
            setNewAddress(customer.address);
            setNewPhone(customer.phone);
        } else {
            alert('Customer not found.');
            setFoundCustomer(null);
        }

    }


    function updateCustomer() {
        if (foundCustomer) {
            const updatedCustomer = {
                ...foundCustomer, // Start with the original customer details
                name: newName,    // Update with new values from inputs
                address: newAddress,
                phone: newPhone,
            };

            dispatch({ type: 'UPDATE_CUSTOMER', payload: updatedCustomer });
            alert('Customer updated successfully.');
        } else {
            alert('No customer selected for update.');
        }
    }

    return (
        <>
            <input type="text" placeholder="Enter the search Email" value={searchEmail} onChange={(e) => setSearchEmail(e.target.value)}/>
            <button onClick={handleSearch}>search Customer</button>




            {foundCustomer && (
                <div>
                    <h3>Update Customer:</h3>
                    <p>
                        <strong>Current Name:</strong> {foundCustomer.name}
                        <br/>
                        <strong>Current Address:</strong> {foundCustomer.address}
                        <br/>
                        <strong>Current Phone:</strong> {foundCustomer.phone}
                    </p>
                    <input type="text" placeholder="New Name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                    <input type="text" placeholder="New Address" value={newAddress} onChange={(e) => setNewAddress(e.target.value)}/>
                    <input type="text" placeholder="New Phone" value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/>
                    <button onClick={updateCustomer}>Update Customer</button>
                </div>
            )}


        </>
    )
}