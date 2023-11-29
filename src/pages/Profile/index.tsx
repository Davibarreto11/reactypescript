import React, { useCallback, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FiLock, FiMail, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi'

import { Form } from '@unform/web'
import { type FormHandles } from '@unform/core'

import { useToast } from '../../hooks/Toast'
import { useAuth } from '../../hooks/Auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, AvatarInput, Content } from './styles'

export const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = useCallback(() => {}, [])
  return (
    <Container>
      <header>
        <div>
          <Link to='/dashboard'>
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form ref={formRef} initialData={{ name: user.name, email: user.email }} onSubmit={() => (handleSubmit)}>
          <AvatarInput>
            <img src='https://avatars.githubusercontent.com/u/102602408?v=4' alt={user.name} />
            <button type='button'>
              <FiCamera />
            </button>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <Input name='name' icon={FiUser} placeholder='Nome'/>
          <Input name='email' icon={FiMail} placeholder='E-mail'/>

          <Input containerStyle={{ marginTop: 24 }} name='old_password' icon={FiLock} type='password' placeholder='Senha Atual'/>
          <Input name='password' icon={FiLock} type='password' placeholder='Nova senha'/>
          <Input name='password_confirmation' icon={FiLock} type='password' placeholder='Confirmar senha'/>

          <Button type='submit'>Confirmar mundanças</Button>
        </Form>
      </Content>
    </Container>
  )
}
