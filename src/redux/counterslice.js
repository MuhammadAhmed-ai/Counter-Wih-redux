import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "Counter",
    initialState: {
        CounterValue : 0,
    },
    reducers :{
        addCounter(state , action){
            state.CounterValue = ++state.CounterValue
            console.log("state is" , state)
            console.log("Action is" , action)

        },
        minusCounter(state){
            if(state.CounterValue > 0){
                state.CounterValue = --state.CounterValue
            }
        },
        resetCounter(state) {
            state.CounterValue = 0
        }
    }
})


const {actions , reducer} = counterSlice
console.log(reducer)
console.log(actions)
export const counterreducer = reducer
export const {addCounter , minusCounter , resetCounter} = actions


