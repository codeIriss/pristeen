import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import Servicecart from '../components/Cart/Servicecart';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     img={data.img.childImageSharp.fluid}
     title=" About Pristeen"
     subtitle="How we evolved?"
     heroclass="hero-background"/>
     <InfoBlock heading="About our vision" />
     <Servicecart services={data.Services}/>
     <Dualinfoblock heading="A message from Ceo"/>
  </Layout>
)
export const query = graphql`
{
  
  
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  
}
Services: allContentfulServices{
  edges{
     node{

        id
        title
        price
        category
        description{
           description
         }
          image{
             fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
             }
            }
           }
           }
          }
}`

export default IndexPage
