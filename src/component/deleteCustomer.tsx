import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";

export function DeleteCustomer() {


    const [deleteEmail, setDeleteEmail] = useState('');
    const { customers, dispatch } = useContext(CustomerContext);

    function handleDelete() {
        if (deleteEmail) {
            dispatch({type:"REMOVE_CUSTOMER",payload:deleteEmail})
            setDeleteEmail(''); // Clear the delete email input
        } else {
            alert('Please enter an email to delete.');
        }

    }

    return(
        <>
            <input type="text" placeholder="Enter email" value={deleteEmail} onChange={(e) => setDeleteEmail(e.target.value)}/>
            <button onClick={handleDelete}>Delete Customer</button>
        </>
    )
}