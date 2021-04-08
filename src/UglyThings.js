import React from "react" 
import axios from "axios"
const UglyContext = React.createContext()
//This is supposed to be named UglyThingsContext

//api is not getting anything from getDataRequest. Not getting list of ugly things. Everything from Api is getting rendered. I shoudl only be able to see all the items.

//Ultimate: renders everything in API correctly. render any updates made
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
            .then(res => this.setState({uglyThingsList: res.data}))
            .catch(err => console.log(err))
        }
        //make sure getDataRequest renders list
       

        deleteB = (thingId) => {
            console.log("deleteButton")
            console.log(thingId)
            axios.delete(`https://api.vschool.io/MayaPurcell/thing/${thingId}`)
                .then(res => {
                    console.log(res.data)
                    let newArray = this.state.uglyThingsList.filter(thing => thingId !== thing._id)
                    this.setState(prevState => ({...prevState, uglyThingsList: newArray}))
                })
               
        }

    render(){
        return(
            <UglyContext.Provider value={{uglyThingsList: this.state.uglyThingsList,
                submission: this.submitData,
                getInfo: this.getDataRequest,
                deleteB: this.deleteB,
                editB: this.edit
            }}
            >
                {this.props.children}
            </UglyContext.Provider>
        )
    }
}

export {UglyThingsProvider, UglyContext}

