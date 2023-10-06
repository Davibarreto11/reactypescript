import React from 'react'

import { Toast } from './Toast'

import { type ToastMessage } from '../../hooks/Toast'
import { Container } from './styles'

interface ToastContainerProps {
  messages: ToastMessage[]
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast
        key={message.id}
        message={message}
         />
      ))}
    </Container>
  )
}
