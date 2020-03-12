import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import Teamphoto from '../components/About/Teamphoto'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     img={data.img.childImageSharp.fluid}
     title="Pristeen"
     subtitle="Your Clothes tell a story like you do !"
     heroclass="about-background"/>
     <InfoBlock heading="About Us" />
     <Dualinfoblock heading="Team"/>
     <Teamphoto/>
  </Layout>
)
export const query = graphql`
{
  
  
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  
}
}`

export default AboutPage
