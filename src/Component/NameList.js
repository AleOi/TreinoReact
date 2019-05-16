import React from "react";
import Person from "./Person";

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Foao',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: "Marcos",
            age: 25,
            skill: 'Angular'

        },
        {
            id: 3,
            name: "Laira",
            age: 18,
            skill: 'React'

        } ];
    // Propriedade key é usado pelo react
    const personList = persons.map((element) => <Person key={element.id} person={element}/>)

    return(<div>{personList}</div>)

}

export default NameList;