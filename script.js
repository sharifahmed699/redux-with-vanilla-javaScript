const counterEL = document.getElementById("counter");
const incrementEL = document.getElementById("increment");
const decrementEl = document.getElementById("decrement")

const initialState = {
    value: 0
}

function counterReducer(state=initialState,action){
    if(action.type==="increment"){
        return{
            ...state,
            value:state.value+action.payload
        }
    }
    else if(action.type==="decrement"){
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
    store.dispatch({
        type:"increment",
        payload:5
    })
})

decrementEl.addEventListener("click",()=>{
    store.dispatch({
        type:"decrement",
        payload:2
    })
})