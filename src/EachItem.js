import React from "react"
import {UglyContext} from "./UglyThings.js"

function EachItem(){
    return (
        <UglyContext.Consumer>
            {({uglythings}) => ( 
                <img src={uglythings.imgUrl} alt="Error" />
                )
            }   
        </UglyContext.Consumer>
    )

}


export default EachItem 