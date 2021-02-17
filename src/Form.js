import React, {Component}from "react"
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
    handleSubmit=(e)=>{
        this.setState(prevState => ({
            //Unsure here
        } )
        )}
    render(){
    return(
    <Form onSubmit={this.handleSubmit}>
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
        <button onClick={this.handleSubmit}> Submit</button>
        {/* put request </button> */}
    </Form>
    )}
}
export default Form