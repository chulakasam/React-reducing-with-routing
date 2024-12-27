import './App.css'
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {AddCustomer} from "./component/addCustomer.tsx";
import {DeleteCustomer} from "./component/deleteCustomer.tsx";
import {UpdateCustomer} from "./component/updateCustomer.tsx";

function App() {


  return (
    <>
    <CustomerProvider>
        <AddCustomer></AddCustomer>
        <DeleteCustomer></DeleteCustomer>
        <UpdateCustomer></UpdateCustomer>
    </CustomerProvider>
    </>
  )
}

export default App
