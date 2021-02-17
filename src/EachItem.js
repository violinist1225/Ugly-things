import React from "react"
import ConsumerUglyThings from "./UglyThings.js"

function EachItem(){
    return (
        <ConsumerUglyThings>
            {({uglythings}) => ( 
                <img src={uglythings.imgUrl} alt="Error" />
                )
            }   
        </ConsumerUglyThings>
    )

}


export default EachItem 