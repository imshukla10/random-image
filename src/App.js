import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const URL = 'https://api.slingacademy.com/v1/sample-data/photos/';
  const [data,setData] = useState([]);

  useEffect(()=>{
    getData();
  },[])
    

  async function getData(){
    const value = Math.ceil(Math.random()*10);
    const data = await fetch(URL+String(value)).then(res=>res.json()).then(data=>data);
    // console.log(data);
    setData(data.photo);
  }

  return (
    <div className="App">
      <img src={data.url} alt='image'/>
      <p>{data.title}</p>
      <button onClick={getData}>Next</button>
    </div>
  );
}

export default App;
