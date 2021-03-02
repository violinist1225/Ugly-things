import React from "react" 
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class UglyThingsProvider extends React.Component{
    constructor(){
        super()
    this.state={
         uglyThingsList: []
    }
    this.uglyListVariable = "https://api.vschool.io/MayaPurcell/thing"
}
    submitData=(inputs)=>{
        axios.post(this.uglyListVariable, inputs)
        .then(res => {
            this.setState(prevState =>{
                return {
                    uglyThingsList: [...prevState.uglyThingsList, res.data]
                }
            }
                )
        }
            
            )
        .catch(err => console.log(err))
        }
    

    edit =(passedThing, newEdits) =>{
        axios.put(`https://api.vschool.io/MayaPurcell/thing/${passedThing._id}`, newEdits)
    let newArr = this.state.uglyThingsList.map(thing => {
        if(passedThing._id === thing._id){
            thing.title = newEdits.title
            thing.description = newEdits.description 
            console.log(thing)
            return thing 
            } else{
               return thing 
            }
    })
    console.log(newArr)
    this.setState(prevState => ({...prevState, uglyThingsList: newArr}))
}

    
    getDataRequest =() =>{
        console.log('hello')
            axios.get(this.uglyListVariable)
            .then(res => this.setState({uglythingsList: res.data}))
            .catch(err => console.log(err))
        }
       

        deleteB = (thingId) => {
            console.log("deleteButton")
            console.log(thingId)
            axios.delete(`https://api.vschool.io/MayaPurcell/thing/${thingId}`)
            let newArray = this.state.uglyThingsList.filter(thing => thingId !== thing._id)
            this.setState(prevState => ({...prevState, uglyThingsList: newArray}))   
        }

    render(){
        return(
            <Provider value={{uglythings: this.state.uglyThingsList,
                submission: this.submitData,
                getInfo: this.getDataRequest,
                deleteB: this.deleteB,
                edit: this.edit
            }}
            >
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingsProvider, Consumer as UglyThingsConsumer}

// getDataRequest method in UglyThings Component , needs to be appropriately passed into 
// MappedUglyThings Component. Unsure 


// editB = (passedThing, title, description) => {
//     console.log("EDIT BUTTON IS WORKING")
//     axios.put(`url${id}`, newArr)
//      let newArr = this.state.uglyThingsList.map(thing => {
//          if(passedThing.id === thing.id){
//              // passedThing.title = title
//              // passedThing.description = description 
//              return (
//                  <Form2  
//                  idOne= {passedThing.id}
//                  passedThing = {passedThing}
//                  />
//              )
//              }
//      })
//      this.setState(prevState => ({...prevState, uglyThingsList: newArr}))

//  }