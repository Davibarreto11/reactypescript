import React from 'react'

import Logo from '../../assets/logo.svg'

import { Container, Content, Background } from './styles'

export const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder='Email'/>
        <input type='password' placeholder='Senha'/>

        <button type='submit'>Entrar</button>
      </form>
    </Content>
    <Background />
  </Container>
)
