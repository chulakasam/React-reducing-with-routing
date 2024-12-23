import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../assets/Customer.ts";

export function AddCustomer(){
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { customers, dispatch } = useContext(CustomerContext);



    function handleAddCustomer(){
        const new_customer=new Customer(name,address,phone,email)
        dispatch({type: 'ADD_CUSTOMER',payload:new_customer})
    }

    
    return (
        <>
            <input type="text" placeholder="enter the name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="enter the adddress" value={address}
                   onChange={(e) => setAddress(e.target.value)}/>
            <input type="text" placeholder="enter the phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <input type="text" placeholder="enter the email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={handleAddCustomer}>submit</button>

            <div>
                <h2>Customer List</h2>
                {customers.length > 0 ? (
                    <ul>
                        {customers.map((customer, index) => (
                            <li key={index}>
                                <p>Name: {customer.name}</p>
                                <p>Address: {customer.address}</p>
                                <p>Phone: {customer.phone}</p>
                                <p>Email: {customer.email}</p>
                                <hr/>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No customers added yet.</p>
                )}
            </div>
        </>
    )
}