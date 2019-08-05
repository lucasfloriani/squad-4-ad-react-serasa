import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { getShadow, getSize } from '@theme'
import Container from '@atoms/Container'

const StyledFooter = styled.footer`
  background-color: ${palette('primary', 0)};
  box-shadow: ${getShadow('small')};
  padding: ${getSize('small')};
`
const Wrapper = styled(Container)`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  margin: auto;
`

const Footer = ({ ...props }) => (
  <StyledFooter {...props} >
    <Wrapper>
      Rodapé
    </Wrapper>
  </StyledFooter>
)

export default Footer
