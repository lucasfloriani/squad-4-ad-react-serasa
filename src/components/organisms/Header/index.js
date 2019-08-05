import React from 'react'
import styled from 'styled-components'
import { getShadow, media } from '@theme'
import Block from '@atoms/Block'

const Wrapper = styled(Block)`
  box-shadow: ${getShadow('small')};
  display: flex;
  justify-content: center;

  ${media.lessThan('small')`
    padding: 0.5rem;
  `}
`

const InnerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`

const Header = () => (
  <Wrapper>
    <InnerWrapper>
      Teste
    </InnerWrapper>
  </Wrapper>
)

export default Header
