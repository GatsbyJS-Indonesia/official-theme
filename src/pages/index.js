import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Section from '../components/Section'
import Container from '../components/Container'

const Homepage = () => (
  <Layout>
    <SEO title="Beranda" />
    <Section>
      <Container>
        Content!
      </Container>
    </Section>
  </Layout>
)

export default Homepage