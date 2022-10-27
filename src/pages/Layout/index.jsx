import React from 'react'
import styled from 'styled-components'
import LoginPage from '..'
import Header from './Header'

function Layout() {
  return (
    <Root>
      <Header/>
      <LoginPage/>
    </Root>
  )
}

export default Layout


const Root = styled.div`
  max-width: 1530px;
  width: 100%;
  margin: 20px auto;
`;