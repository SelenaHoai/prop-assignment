import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
        console.log(this.props);

        return (
            <p>
                <h1>{this.props.personKey.lastName}, {this.props.personKey.firstName}</h1>
                <p>Age: {this.props.personKey.age}</p>
                <p>Hair Color: {this.props.personKey.hairColor}</p>
            </p>
        )
    }
}

export default PersonCard;