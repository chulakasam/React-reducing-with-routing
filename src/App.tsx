import './App.css'
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {AddCustomer} from "./component/addCustomer.tsx";

function App() {


  return (
    <>
    <CustomerProvider>
        <AddCustomer></AddCustomer>
    </CustomerProvider>
    </>
  )
}

export default App
