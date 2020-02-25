import React, { Component } from 'react'

class Example extends Component {

    constructor(props){
        super(props);


        this.state = {
            name: 'Code Stories',
            description: "Welcome"
        }

    }

    render() {
        return (
            <div>
                  <h1>{this.props.title}</h1> 
                    <p>{this.state.description}</p>     
            </div>
        )
    }
}

export default Example;
