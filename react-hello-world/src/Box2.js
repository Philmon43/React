import React from "react"
import Box3 from "./Box3"

const Box2 = (props) => {
    return <div className={props.className}>
        <Box3 className="box3"/>
    </div>
}

export default Box2;