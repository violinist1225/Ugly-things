import React from "react"
import ConsumerUglyThings from "./UglyThings.js"
function MappedUglyThings(){
    return (
        <ConsumerUglyThings>
            {({uglythings}) => {
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
            }}   
        </ConsumerUglyThings>
    )
}
export default MappedUglyThings