import  React, {useState} from "react";

const App = (props) =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const isFeedbackNotGiven = props.isFeedbackNotGiven;

  const goodIncrease = () =>{
     setGood(good + 1)
}
  const neutralIncrease = () =>{
    setNeutral(neutral + 1)
}
  
  const badIncrease = () =>{
    setBad(bad + 1)
}


if(isFeedbackNotGiven && good === 0 && bad === 0 && neutral=== 0){
  return(
    <div>
      <h1>Give Feedback</h1>
      <button onClick={goodIncrease}>Good</button>
      <button onClick={neutralIncrease}>Neutral</button>
      <button onClick={badIncrease}>Bad</button>
      <h1>Statistics</h1>
      <p>No Feedback Given</p>
    </div>
  ) 
}
  return(
    <div>
      <h1>Give Feedback</h1>
      <button onClick={goodIncrease}>Good</button>
      <button onClick={neutralIncrease}>Neutral</button>
      <button onClick={badIncrease}>Bad</button>
      {/* <Statistics/> */}
      <h1>Statistics</h1>
      <div>
        <p>Good - {good}</p>
        
      </div>
      <div>
        <p>Neutral - {neutral}</p>
      </div>
      <div>
        <p>Bad - {bad}</p>
      </div>
      <div>
        <p>All - {good + bad + neutral}</p>
      </div>
      <div>
        <p>Average - [{good + bad + neutral}/3] </p>
      </div>
      </div>
    

  )
}
export default App;

// The below is the content for the index.js file
// ReactDOM.render(
//     <App isFeedbackNotGiven={true}/>,
//     document.getElementById('root')
//   );