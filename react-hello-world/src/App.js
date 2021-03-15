import React from "react";
import Box from "./Box"

const App = () => {
    return (
        <Box className="box1">
            <Box className="box2">
                <Box className="box3">
                    <Box className="box4" />
                    <Box className="box4" />
                </Box>
            </Box>
        </Box>
    )
}

export default App