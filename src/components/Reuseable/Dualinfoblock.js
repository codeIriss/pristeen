import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container text-white">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

 
                
                        </p>
                    </div>
                    <div className="col-4">
                     <div class="card bg-dark">
                        <img src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/pegging-out-evelina-kremsdorf.jpg" class="card-img-top" alt="image here"/>
                        <div class="card-body text-white">
                        <h5 class="card-title">Just click photo</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" class="btn btn-warning btn-block">{heading}</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
