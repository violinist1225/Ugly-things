import React from "react"
import {UglyThingsConsumer} from "./UglyThings.js"
import Form2 from "./Form2"

function MappedUglyThings(){
   
    return (
        <UglyThingsConsumer>
            {
            ({uglythings, deleteB, editB}) => {

                console.log(uglythings)

                const uglyThingsList = uglythings.map(uglything => { 
                    return (
                        <div key={uglything._id}>
                            <h1>{uglything.title}</h1>
                            <img src={`${uglything.imgUrl}`} />
                            <h1>{uglything.description}</h1>
                            <button onClick ={() =>editB(uglything._id)}>Edit</button> 
                            <Form2 
                            uglyThing = {uglything}  
                            
                            />
                            <button onClick ={()=>deleteB(uglything._id)}> Delete</button>
                        </div>
                    )
                })
                
                return uglyThingsList
            }}   
        </UglyThingsConsumer>
    )
}
export default MappedUglyThings
