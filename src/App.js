import React, {useEffect, useState} from 'react';
import './App.css';
import GlobalStats from './components/global';

function App() {
  const [globalStats, setglobalStats] = useState("");

  useEffect(()=>{
    let url = "https://api.covid19api.com/summary";
    fetch(url).then((response)=>response.json().then((data)=>{
      console.log(data);
      setglobalStats(data)
    }))

  }, [])
  return (
    <div className="App">
      
       <GlobalStats global={globalStats}/>
    </div>
  );
}

export default App;
