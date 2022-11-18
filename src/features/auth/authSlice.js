import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../services/LocalStorageService";

const initialState = {
    access_token:null,
    user:null,
}

export const authSlice = createSlice({
    name:"auth_token",
    initialState,
    reducers:{
        setUserToken:(state,action) => {
            state.access_token = action.payload.access_token
            
        },
        unSetUserToken:(state,action) => {
            state.access_token = action.payload.access_token
            
        },
        setUserSession:(state,action) => {
            state.user = action.payload.user
        },
        unSetUserSession:(state,action) => {
            state.user = action.payload.user
        }
    }
})
export const {setUserToken,unSetUserToken,setUserSession,unSetUserSession} = authSlice.actions
export default authSlice.reducer