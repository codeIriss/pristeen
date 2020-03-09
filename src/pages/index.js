import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     img={data.img.childImageSharp.fluid}
     title="Pristeen"
     subtitle="Your Clothes tell a story like you do !"
     heroclass="hero-background"/>
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
}`

export default IndexPage
