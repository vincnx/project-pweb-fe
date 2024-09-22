import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  id: string
  username: string
}

const initialState: UserState = {
  id: '',
  username: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username
      state.id = action.payload.id
    },
    logout: (state) => {
      state.username = ''
      state.id = ''
    }
    // setUsername: (state, action: PayloadAction<string>) => {
    //   state.username = action.payload
    // }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer