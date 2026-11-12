import { configureStore } from "@reduxjs/toolkit";
import { counterreducer } from "./counterslice.js";



const store = configureStore({
    reducer:{
        counter : counterreducer
    }
})

export default store



// counter reducer mai hamien  addcoun , reset ,coun , or minus counter teno action iltey hain 
// counter = state name 
// counterreducer jo actual reducer hai hum nai import kiya hai 
// reducer => Is property mein hum batate hain ke Store ke andar kaun-kaun se reducers manage honge.