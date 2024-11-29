import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base_url from "../../services/base_url";




const fetchEventThunk=createAsyncThunk('events/fetchProductThunk',async()=>{
    const pro = await axios.get(`${base_url}/getevents`)
})


export const getEventApi=async(header)=>{
    return await commonApi(`${base_url}/getevents`,'GET',header,"")
}