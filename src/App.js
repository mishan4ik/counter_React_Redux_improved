import './App.css';
import React from "react"
import {connect} from 'react-redux'

function App(props) {

let plu = () => {

  props.Plus(props.counter)

}
let min = () => {

  props.Minus(props.counter)

}
  return (
    <div className="App">
      <div>

        <h2>{props.coutStore}</h2>
      </div>
      <button onClick={plu}>plus</button>
      <button onClick={min}>minus</button>
    </div>
  );
}

export default connect(

  state=>({

    coutStore:state.counter

  }),

  dispatch=>({

    Plus:(plus)=>{

      dispatch({type:"increment",payload:plus})

    },
    Minus:(minus)=>{
      dispatch({type:"dicrement",payload:minus})
    }
    
  })

)(App);
