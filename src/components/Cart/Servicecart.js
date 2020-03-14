import React, { Component } from 'react'
import Heading from '../Reuseable/Heading';
import Img from 'gatsby-image'

export default class Servicecart extends Component {
    constructor(props){
        super(props)
        this.state=
        {
            services: props.services.edges,
            myservices: props.services.edges,
        }
    }
    render() {
        // console.log(this.state.services)
        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="Our Services"/>
                    <div className="row">
                         {
                             this.state.myservices.map(({node}) =>{
                                  return(
                                      <div 
                                      key={node.id}
                                      className="col-11 col-md-6 d-flex my-3  mx-auto"
                                      >
                                         <Img fixed={node.image.fixed }/>
                                         <div className="flex-grow-1 px-3">
                                             <div className="flex justify-content-between">
                                                 <h6 className="mb-0">{node.title}</h6>
                                                 <h6 className="mb-0 text-success">${node.price}</h6>

                                             </div>
                                             <p className="text-muted">
                                                 <small>{node.description.description}</small>
                                             </p>
                                             <button 
                                                   data-item-id={node.id}
                                                   data-item-name={node.title}
                                                   data-item-price={node.price}
                                                   data-item-url=""
                                                   data-item-image={node.image.fixed.src}
                                                   className="btn btn-warning snipcart-add-item ">
                                             order now
                                             </button>
                                         </div>
                                      </div>
                                  )
                             })
                         }
                    </div>
                </div>
            </section>
        )
    }
}
