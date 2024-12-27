import './App.css'
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {AddCustomer} from "./component/addCustomer.tsx";
import {DeleteCustomer} from "./component/deleteCustomer.tsx";

function App() {


  return (
    <>
    <CustomerProvider>
        <AddCustomer></AddCustomer>
        <DeleteCustomer></DeleteCustomer>
    </CustomerProvider>
    </>
  )
}

export default App
