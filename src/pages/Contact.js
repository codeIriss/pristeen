import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import Contact from './components/Contact'

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     img={data.img.childImageSharp.fluid}
     title="Contact Us"
     subtitle="Your Clothes tell a story like you do !"
     heroclass="about-background"/>
     <InfoBlock heading="How can we help?" />
      <Contact/>
     
  </Layout>
)
export const query = graphql`
{
  
  
  img: file(relativePath: { eq: "contact.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  
}
}`

export default ContactPage
