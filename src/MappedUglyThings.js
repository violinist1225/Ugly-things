import React from "react"
import {UglyThingsConsumer} from "./UglyThings.js"

function MappedUglyThings(){
    return (
        <UglyThingsConsumer>
            {({uglythings}) => {
                console.log(uglythings)
                return(
                    uglythings.map(
                        (uglything) => {
                            /*you could make the following div into its own component if that makes things easier to read / makes more sense */
                            <div>
                                <h1>{uglything.title}</h1>
                                <img src={`${uglything.imgUrl}`} />
                                <h1>{uglything.description}</h1>
                            </div>
                        }
                    )
           ) }}   
        </UglyThingsConsumer>
    )
}
export default MappedUglyThings