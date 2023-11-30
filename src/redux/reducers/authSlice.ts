import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

export interface AuthState {
  connected: boolean
  accessToken: string
  email: string
}

const initialState: AuthState = {
  connected: false,
  accessToken: '',
  email: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.connected = true
      state.accessToken = action.payload
      state.email = jwtDecode<{ email: string }>(action.payload).email
    },
    logout: (state) => {
      state.connected = false
      state.accessToken = ''
      state.email = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
