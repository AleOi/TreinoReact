import React from 'react'


const Btn = function (props) {
    function ClickHandler() {
        console.log("Botão apertadp")
    }

    return(
        <button onClick = { ClickHandler }> Click Here</button>


    )

}

export default Btn;