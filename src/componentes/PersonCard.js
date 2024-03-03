import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, haircolor } = this.props;
        return (
            <div>
               <h3> {lastName} {firstName}</h3>
                <p>age: {age}</p>
                <p>Hair Color: {haircolor}</p>
                
            </div>
        );

    }
}

export default PersonCard;