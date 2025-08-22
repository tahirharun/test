import Rejester from "../Rejester"
import DynamicStyledComponent from "./DynamicStyleComponents"
import ThemedComponent from "./ThemedComponets"
import UserForm from "./UserForm"

function App(){
  return(
    <>
    <ThemedComponent />
    <DynamicStyledComponent />
     <UserForm/>
     <Rejester />
    </>
  )
}
export default App