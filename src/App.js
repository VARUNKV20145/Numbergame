
import {useRef, useState} from "react";
import './App.css';

function App() {
    const [Num,setNum]=useState();
    const [result,setResult]=useState("")
    const InputRef=useRef(null)
    async function handleclick() {
        setNum(InputRef.current.value);
        const number={"num":+Num}
        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(number)
        };
        let res = await fetch("http://127.0.0.1:8000/user", options);
        if (res.status==200){
            setResult("Hurray you Won the game");
        }
        else{
            setResult("Oops try another value");
        }
    }
  return (
    <div className="window">
        <h1>Guess a number and try your luck</h1>
        <form className="form">

<input ref={InputRef} type="text" placeholder="Guess a number" required={true}/>
<input type="button" onClick={handleclick} className="button" value="Guess"/>
        <label className="result">{result}</label>
        </form>

    </div>
  );
}

export default App;
