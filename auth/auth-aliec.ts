import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux-toolkit/store'

// Define a type for the slice state
interface AutState {
  isLogin:boolean;
  isLoading:boolean;
  profile: any|null
}

// Define the initial state using that type
const initialState: AutState = {
    isLogin:false,
    isLoading:false,
    profile:null
}

export const autSlice = createSlice({
  name: 'aut',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsLogin(state, action:PayloadAction<any|null>){
        state.isLogin = action.payload;
    },
    setIsLoading(state, action:PayloadAction<any|null>){
        state.isLoading = action.payload;
    },
    setProfile(state, action:PayloadAction<any|null>){
        state.profile = action.payload;
    }
  },
})

export const { setIsLogin, setIsLoading, setProfile } = autSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuthState = (state: RootState) => state.authstate;
export default autSlice.reducer