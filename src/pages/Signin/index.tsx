import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import Logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Content, Background } from './styles'

export const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name='email' icon={FiMail} placeholder='Email'/>
        <Input name='password' icon={FiLock} type='password' placeholder='Senha'/>

        <Button type='submit'>Entrar</Button>

        <a href="">Esqueci minha senha</a>
      </form>

      <a href="">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
)
