import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            age:0,
            haircolor:"",
      };
    }
    render() {
        const { firstName, lastName, age, haircolor } = this.props;
        return (
            <div>
               <h3> {lastName} {firstName}</h3>
                <p>age: {age}</p>
                <p>Hair Color: {haircolor}</p>
                <button onClick={ this.sumaEdad()}>Brithday Button {firstName}</button>
            </div>
        );

    }
    sumaEdad = (dato) => {
        console.log(dato);
        dato++;
        this.age=dato;
        console.log(dato);
       
    }
}




export default PersonCard;