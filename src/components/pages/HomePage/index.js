import React from 'react'
import Container from '@atoms/Container'
import Grid from '@atoms/Grid'
import Footer from '@organisms/Footer'
import Header from '@organisms/Header'
import FullPageTemplate from '@templates/FullPageTemplate'

const HomePage = () => (
  <FullPageTemplate header={<Header />} footer={<Footer />}>
    <Container align="center">
      <Grid>
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default HomePage
