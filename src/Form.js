import React, {Component}from "react"
import {UglyThingsConsumer} from "./UglyThings"

class Form extends Component{
    state={
        title:"",
        imgUrl:"",
        description: ""
    }
    handleChange=(e)=>{
        const{name, value} = e.target
        this.setState({[name]: value})
    }
    render(){
    return(                    
     <UglyThingsConsumer> 
    {(context)=>(
        <form onSubmit={this.handleSubmit}>
        <input 
        name="title"
        placeholder="TITLE"
        value={this.state.title}
        onChange={this.handleChange}
        />
        <input 
        name="description"
        placeholder="DESCRIPTION"
        value={this.state.description}
        onChange={this.handleChange}
        />
        <input
        name="imgUrl"
        placeholder="IMAGE URL"
        value={this.state.imgUrl}
        onChange={this.handleChange}
        />
        <button onClick={(e)=>{
            e.preventDefault()
            context.submission(this.state)}}> Submit</button>
        {/* put request </button> */}
        {/* Need to add this info to state now (UglyThings component). And get request written in UglyThings, and then  in EachItems*/}
    </form>
    )}
    </UglyThingsConsumer> 
   
    )}
}
export default Form