import React from 'react'

// const Greet = function Greet(){
//     return <h1> Estamos pensando em como cumprimentar direito</h1>
// }

export const Greet = (props) => {
    const {name, heroName} = props;
    return (
        <div>
        <h1>
            Escrever com arrow function { name }

            Nome do herói { heroName }
        </h1>
        Nomes de propriedades { props.children }
    </div>
    )
}
// Preferência por usar functional component

// export  default Greet; Assim não precisa no import se preocupar com o nome