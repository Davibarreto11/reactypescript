import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface AuthState {
  token: string
  user: object
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextState {
  user: object
  signIn: (credentials: SignInCredentials) => Promise<void>
}

interface AuthProviderState {
  children: any
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

export const AuthProvider: React.FC<AuthProviderState> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Gobarber:token')
    const user = localStorage.getItem('@Gobarber:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('sessions', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@Gobarber:token', token)
    localStorage.setItem('@Gobarber:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('UseAuth must be used within an AuthProvider')
  }

  return context
}
