import React, { useCallback, useRef } from 'react'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import { type FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import getValidationErrors from '../../util/getValidationErrors'

import Logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Content, Background } from './styles'

export const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err: any) {
      console.log(err)
      const errors = getValidationErrors(err)

      formRef.current?.setErrors(errors)
    }
  }, [])
  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name='email' icon={FiMail} placeholder='Email'/>
          <Input name='password' icon={FiLock} type='password' placeholder='Senha'/>

          <Button type='submit'>Entrar</Button>

          <a href="">Esqueci minha senha</a>
        </Form>

        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}
