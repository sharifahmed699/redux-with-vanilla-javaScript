const counterEL = document.getElementById("counter");
const incrementEL = document.getElementById("increment");
const decrementEl = document.getElementById("decrement")

//action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creators
const increment = (value)=>{
    return {
        type:INCREMENT,
        payload:value
    }
}
const decrement = (value)=>{
    return {
        type:DECREMENT,
        payload:value
    }
}

const initialState = {
    value: 0
}

function counterReducer(state=initialState,action){
    if(action.type===INCREMENT){
        return{
            ...state,
            value:state.value+action.payload
        }
    }
    else if(action.type===DECREMENT){
        return{
            ...state,
            value:state.value-action.payload
        }
    }
    else{
        return state
    }
}

const store = Redux.createStore(counterReducer)


const render=()=>{
    const state= store.getState()
    counterEL.innerHTML=state.value.toString()
}
store.subscribe(render)
render()


incrementEL.addEventListener("click",()=>{
    store.dispatch(increment(5))
})

decrementEl.addEventListener("click",()=>{
    store.dispatch(decrement(2))
})