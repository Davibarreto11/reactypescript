import React, { useCallback, useRef } from 'react'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import { type FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { useAuth } from '../../hooks/Auth'
import { useToast } from '../../hooks/Toast'
import getValidationErrors from '../../util/getValidationErrors'

import Logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Content, Background } from './styles'

interface SignInFormData {
  email: string
  password: string
}

export const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { user, signIn } = useAuth()
  const { addToast } = useToast()

  console.log(user)

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await signIn({
        email: data.email,
        password: data.password
      })
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao tentar login, cheque seus dados'
      })
    }
  }, [signIn, addToast])
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
