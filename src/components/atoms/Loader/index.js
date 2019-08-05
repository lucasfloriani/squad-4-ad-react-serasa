import React from 'react'
import styled from 'styled-components'
import { PulseLoader } from 'react-spinners'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
`

const Loader = ({ color, ...props }) => {
  return (
    <Wrapper>
      <PulseLoader {...props} color="#3f4448" />
    </Wrapper>
  )
}

export default Loader
