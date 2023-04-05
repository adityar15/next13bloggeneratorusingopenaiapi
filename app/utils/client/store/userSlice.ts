import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "."

type User = {
    id: number
    name: string
    avatar: string
}

type InitialState = {
    user: User | null, 
}

const userInitialState : InitialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        setUser: (state, action : PayloadAction<User>)=>{
            state.user = action.payload
        }  
    } 
})


export const {setUser} = userSlice.actions
export const selectUser = (state : RootState) => state.user.user
export default userSlice.reducer

