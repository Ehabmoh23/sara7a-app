import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getMessages = createAsyncThunk ("message/getMessages",async function(){
  let {data} = await axios.get("https://sara7aiti.onrender.com/api/v1/message") 
  return data;
});

let initialState = {messages:[]};
let messageSlice = createSlice({
  name:"message",
  initialState ,
  reducers :{},
  extraReducers : (builder)=>{
    builder.addCase("fullfilled",(state , action)=>{
      state.messages = action.payload;
    })
  }
})
export let messageReducer = messageSlice.reducer;