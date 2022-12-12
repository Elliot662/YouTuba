import './App.css';
import {useState, useEffect} from "react";
import HomePage from './HomePage';
import Modal from "./list";

function App() {
  const [error, setError] = useState(null)
  const [info, setInfo] = useState("")
  const [userInput, setUserInput] = useState("MrBeast")
  const [show, setShow] = useState(false)
  const [watchLater, setWatchLater] = useState([])

  const theApi = async () => {
    try {
      let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=relevance&q=${userInput}&safeSearch=strict&key=${process.env.REACT_APP_KEY}`)
      if(!response.ok){
        throw new Error(response.statusText)
      }
      let newInfo = await response.json()
      setInfo(newInfo)
    } catch(error){
      setError("did not fetch")
      console.log(error.message)
    }
  }

  const handleWatchLater = (item) => {
    watchLater.find(watchLaterItem => watchLaterItem.id.videoId === item.id.videoId) == undefined ?
    setWatchLater([...watchLater, item]) :
    console.log("video already in watch later")
}

const removeHandler = (index) => {
    let newArr = [...watchLater]
    newArr.splice(index, 1)
    setWatchLater(newArr)
  }

  useEffect(() => {
    theApi()
  }, [])
  if(!info){
    return <h2>loading in progress...</h2>
  }
  if(error){
    return <h2>Their has been an error please refresh the page or try again another time</h2>
  }
  
  return (
    <div className="main">
      <div id='header'>
      <h1 id='title'>YouTuba</h1>
      <input
      id='searchBar' 
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={theApi} className="right">Search</button>
      <button className="watchLater" onClick={() => setShow(true)}>Bookmarked videos</button>
      </div>
      {info.items.map((videos) => (
        <div><HomePage info={videos} handleWatchLater={handleWatchLater}/></div>
      ))}
      <Modal onClose={() => setShow(false)} show={show}>
                <p>These are the videos you bookmarked</p>
                {watchLater.map((item) => {
                    return(
                        <div>
                        <p>{item.snippet.title}</p>
                        <img src={item.snippet.thumbnails.medium.url}/>
                        <button onClick={removeHandler}>Remove</button>
                        </div>
                        )})}
            </Modal>
            <br></br>
            <div className='footer'>
              <p>Copyright © 2022 YouTuba</p>
            </div>
    </div>
  );
}

export default App;
