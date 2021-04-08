import React, {useEffect, useContext} from "react"
import Form from "./Form"
import MappedUglyThings from "./MappedUglyThings"
import { UglyContext } from "./UglyThings"

function App() {
  let context = useContext(UglyContext)
  useEffect(() => {
    context.getInfo()
  }, [])
  
  return (
    <div className="App">
        <Form/>
        <MappedUglyThings />

    </div>
  );
}

export default App;

