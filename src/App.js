import React, {useEffect, useState} from 'react';
import './App.css';
import GlobalStats from './components/global';
import CountriesStats from './components/countriesStats';

function App() {
  const [globalStats, setglobalStats] = useState("");
  const [countriesStats, setcountriesStats] = useState("");

  useEffect(()=>{
    let url = "https://api.covid19api.com/summary";
    fetch(url).then((response)=>response.json().then((data)=>{
      console.log(data);
      setglobalStats(data.Global);
      setcountriesStats(data.Countries)
    }))

  }, [])
  return (
    <div className="App">
      
       <GlobalStats global={globalStats}/>
       <CountriesStats countries={countriesStats}/>
    </div>
  );
}

export default App;
