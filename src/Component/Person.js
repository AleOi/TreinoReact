
import React from 'react'

const Person = function (person){
    console.log(person)
    return(
        <h2>
            Eu sou {person.name} e tenho {person.age} e sei {person.skill}
        </h2>

    )
}

export default Person
