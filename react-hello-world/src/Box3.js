import React from "react"
import Box4 from "./Box4"
const Box3 = (props) => {
    return <div className={props.className}>
        <Box4 className="box4"/>
        <Box4 className="box4"/>
    </div>
}

export default Box3;