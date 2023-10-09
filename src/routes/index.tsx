import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Signin } from '../pages/Signin'
import { SignUp } from '../pages/Signup'

const Router: React.FC = () => (
  <Routes>
    <Route path='' element={<Signin />} />
    <Route path='/signup' element={<SignUp />} />
  </Routes>
)

export default Router
