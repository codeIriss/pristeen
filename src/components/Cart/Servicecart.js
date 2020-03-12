import React, { Component } from 'react'
import Heading from '../Reuseable/Heading';
import Img from 'gatsby-image'

export default class Servicecart extends Component {
    constructor(props){
        super(props)
        this.state=
        {
            services: props.services.edges,
        }
    }
    render() {
        console.log(this.state.services)
        return (
            <div>
                <h1>I AM FROM PRISTEEN</h1>
            </div>
        )
    }
}
