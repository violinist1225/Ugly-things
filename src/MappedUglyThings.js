import React from "react"
import {UglyContext} from "./UglyThings.js"
import Form2 from "./Form2"
import "./styles.css"

function MappedUglyThings(){
   
    return (
        <UglyContext.Consumer>
            {
            ({uglyThingsList, deleteB, editB}) => {
                console.log(uglyThingsList)

                return uglyThingsList.map(uglything => { 
                    return (
                        <div key={uglything._id}>
                            <h1 class="titleOne">{uglything.title}</h1>
                            <img src={`${uglything.imgUrl}`} />
                            <h1 class="titleOne">{uglything.description}</h1>
                            <button onClick ={() =>editB(uglything._id)}>Edit</button> 
                            <Form2 
                            uglyThing = {uglything}  
                            
                            />
                            <button onClick ={()=>deleteB(uglything._id)}> Delete</button>
                        </div>
                    )
                })
            }}   
        </UglyContext.Consumer>
    )
}
export default MappedUglyThings
