import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  id: string
  username: string
  role: string
}

const initialState: UserState = {
  id: '',
  username: '',
  role: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username
      state.id = action.payload.id
      state.role = action.payload.role
    },
    logout: (state) => {
      state.username = ''
      state.id = ''
      state.role = ''
    }
    // setUsername: (state, action: PayloadAction<string>) => {
    //   state.username = action.payload
    // }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer