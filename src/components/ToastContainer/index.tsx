import React from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { Container, Toast } from './styles'

export const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription type='info'>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possivel fazer login na aplicação</p>

          <button type='button'>
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      <Toast hasDescription={false} type='sucess'>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>

          <button type='button'>
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      <Toast hasDescription type='error'>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possivel fazer login na aplicação</p>

          <button type='button'>
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  )
}
