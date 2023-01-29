let InitialState = 0
export default function counter(state = InitialState,action){

   if(action.type === "increment"){
    return InitialState = InitialState + 1
   }
   else if(action.type === "dicrement"){
    return InitialState = InitialState - 1
   }
   return state
  }
