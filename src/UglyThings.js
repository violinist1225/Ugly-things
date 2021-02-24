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
    //deleted inputs from line 15 since get requests don't need a request body
    // retrieveInfo=()=>{
    //     axios.get(this.uglyListVariable)
    //     .then(res => this.setState({uglythingsList: res.data}))
    // }
    getDataRequest =() =>{
        console.log('hello')
            axios.get(this.uglyListVariable)
            .then(res => this.setState({uglythingsList: res.data}))
            .catch(err => console.log(err))
        }
        editButton = (passedThing, stringOne, stringTwo) => {
            let newArr = this.state.uglyThingsList.map(thing => {
                if(passedThing.id === thing.id){
                    // passedThing.topText = stringOne
                    // passedThing.bottomText = stringTwo
                    return passedThing
                } else{
                    return thing //not sure what to return 
                }
            })
            this.setState(prevState => ({...prevState, uglyThingsList: newArr}))

        }
        deleteButton = (thingId) => {
            let newArray = this.state.uglyThingsList.filter(thing => thingId !== thing.id)
            this.setState(prevState => ({...prevState, uglyThingsList: newArray}))   
        }
    render(){
        return(
            <Provider value={{uglythings: this.state.uglyThingsList,
                submission: this.submitData,
                getInfo: this.getDataRequest
            }}
            >
                {this.props.children}
            </Provider>
        )
    }
}
//             In context provider component:
// write the functions for the GET, POST, PUT, DELETE requests (read Ugly Things API information)
// pass down those functions in the context value object
// pass down the uglyThings array in the context value object
export {UglyThingsProvider, Consumer as UglyThingsConsumer}