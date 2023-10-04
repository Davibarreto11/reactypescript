import React from 'react'
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'

import Logo from '../../assets/logo.svg'

import { Container, Content, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export const SignUp: React.FC = () => {
  const handleSubmit = (data: object): void => {
    console.log(data)
  }

  return (
    <Container>
    <Background />

    <Content>
      <img src={Logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>

        <Input name='name' icon={FiUser} placeholder='Nome' />
        <Input name='email' icon={FiMail} placeholder='E-mail' />
        <Input name='password' icon={FiLock} placeholder='Senha' />

        <Button type='submit'>Cadastrar</Button>
      </Form>

      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
  )
}
