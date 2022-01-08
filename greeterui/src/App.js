import logo from './logo.svg';
import './App.css';
import {greetContract} from './Blockchain.js';
import {useEffect, useState, useRef} from 'react';

function App() {
  const [val, setVal] = useState('');
  let text = useRef('');
  useEffect(() => {
    setVal(String(greetContract.getGreet()));
  }, [])

  const handleSend = (() => {
    //greetContract.setGreet(String("431234"));
    let obj = {
      from: '0x61E8E195F03632B366dcDA1b8f3744a08394d931',
      // gasPrice: 400, 
      // gas: 3,
      // value: 0
    }
    greetContract.setGreet.sendTransaction(text.current.value,obj, function(err, result){
      if(!err){
        setVal(String(greetContract.getGreet()));
      }else{
        console.log(err);
      }
    });
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <input ref={text}  type="text"/>
      <button type="button" onClick={handleSend}>send</button>
      <h2>{val}</h2>
    </div>
  );
}

export default App;
