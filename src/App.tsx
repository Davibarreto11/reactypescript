import React from 'react'

import { Signin } from './pages/Signin'
// import { SignUp } from './pages/Signup'
import GlobalStyle from './styles/global'

import AuthContext from './context/AuthContext'

const App: React.FC = () => (
  <>
  <AuthContext.Provider value={{ name: 'Davi' }}>
    <Signin />
  </AuthContext.Provider>

   <GlobalStyle />
  </>
)

export default App
