import React from 'react'
import styled from '@emotion/styled'

const AlertaError = styled.div`
    width: 100%;
    padding: 10px;
    background-color:#B7322C;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    border-radius: 4px;
`;
const Error = ({children}) => {
  return (
    <AlertaError>{children}</AlertaError>
  )
}

export default Error