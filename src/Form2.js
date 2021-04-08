import React, {Component}from "react"
import {UglyContext} from "./UglyThings"

class Form2 extends Component{
    state={
        title:"",
        description: ""
    }
    handleChange=(e)=>{
        const{name, value} = e.target
        this.setState({[name]: value})
    }         
    
    render(){
        const newObj= {
            title: this.state.title,
            description: this.state.description 
        }
        console.log(this.props.uglyThing)
    return(                    
     <UglyContext.Consumer> 
    {(context)=>(
        <form>
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
        <button onClick={(e)=>{
            e.preventDefault()
            context.editB(this.props.uglyThing, newObj)    
        }}
        > Submit 
        </button>
        </form>
    )}
    </UglyContext.Consumer> 
   
    )}
}
export default Form2



