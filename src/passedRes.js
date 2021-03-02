import React from "react"


function PassedRes(){
const newEdits = {
    title: this.state.title,
    description: this.state.description
}
   axios.put(`https://api.vschool.io/MayaPurcell/thing/${thingId}`, newEdits)
    .then(res =>
         this.setState(prevState => ({
             ...prevState.uglyThingsList, newObj
         }
    )
)
    this.setState(prevState => ({...prevState, uglyThingsList: newArr}))
)
} 


export default PassedRes 