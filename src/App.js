// import { useState, useEffect } from 'react';
import './App.css';
import videoo from './videos/Sculpture.mp4'

function App() {
  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     const result = await fetch("https://orangevalleycaa.org/api/videos")
  //     .then(r=>r.json())
  //     setData(result);
  //   };
  //   fetchData();
  // }, [])

  return (
    <div className="App">
      <header>
        <h1>Art Videos</h1>
      </header>
      <div>
        <video src={videoo} controls height={200} />
      </div>
      {/* {data.map(video=>(
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls  src={video.video_url}/>
        </div>
      ))} */}
    </div>
  );
}

export default App;
