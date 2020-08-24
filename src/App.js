import React from 'react'

import { Container } from './style/mainStyle'

import './index.css'

import Menu from './components/menu'
import FirsTContainer from './containers/firstContainer'
import Partners from './containers/partiners'
import SecondContainer from './containers/secondContainer'
import ThirdContainer from './containers/thirdContainer'
import ForthContainer from './containers/forthContainer'
import Gradiente from './containers/gradientContainer'
import FindAway from './containers/findAway'
import Depoiment from './containers/depoiments'
import FormSection from './containers/formSectin'
import Footer from './containers/footer'

function App() {
  return (
    <Container>
      <Menu></Menu>
      <FirsTContainer />
      <Partners />
      <SecondContainer />
      <ThirdContainer />
      <ForthContainer />
      <Gradiente />
      <FindAway />
      <Depoiment />
      <FormSection />
      <Footer />
    </Container>
  )
}

export default App
