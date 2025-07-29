import { useContext, useEffect, useState } from 'react';
import "../App.css";
import { MusicContext } from "../Context.jsx";
import Card from "./Card.jsx";
import './Default.css';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';



function Default() {
    const [keyword, setKeyword] = useState("");
    const [message, setMessage] = useState("");
    const [tracks, setTracks] = useState([]);
    const [token, setToken] = useState(null);
  
    const musicContext = useContext(MusicContext);
    const isLoading = musicContext.isLoading;
    const setIsLoading = musicContext.setIsLoading;
    const setLikedMusic = musicContext.setLikedMusic;
    const setpinnedMusic = musicContext.setPinnedMusic;
    const resultOffset = musicContext.resultOffset;
    const setResultOffset = musicContext.setResultOffset;
    const no_code_api = import.meta.env.VITE_API_KEY;
  
    const fetchMusicData = async () => {
      setTracks([]);
      window.scrollTo(0, 0);
      setIsLoading(true);
      try {
        const response = await fetch(
      `https://v1.nocodeapi.com/radarshi/spotify/${no_code_api}/search?q=${keyword}&type=track&offset=${resultOffset}`
    );
  
        if (!response.ok) {
          throw new Error("Failed to fetch music data");
        }
  
        const jsonData = await response.json();
        console.log(jsonData);
        
  
        setTracks(jsonData.tracks.items);
      } catch (error) {
        setMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        setResultOffset(0);
        fetchMusicData();
      }
    };
  
    useEffect(() => {
      const fetchToken = async () => {
        try {
          const response = await fetch("/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials&client_id=a77073181b7d48eb90003e3bb94ff88a&client_secret=68790982a0554d1a83427e061e371507",
          });
  
          if (!response.ok) {
            throw new Error("Failed to fetch token");
          }
  
          const jsonData = await response.json();
          setToken(jsonData.access_token);
        } catch (error) {
          setMessage(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchToken();
      setLikedMusic(JSON.parse(localStorage.getItem("likedMusic")));
      setpinnedMusic(JSON.parse(localStorage.getItem("pinnedMusic")));
    }, [setIsLoading, setLikedMusic, setpinnedMusic]);
  return (
    <>
    <Navbar
     keyword={keyword}
     setKeyword={setKeyword}
     handleKeyPress={handleKeyPress}
     fetchMusicData={fetchMusicData}
    ></Navbar>
    <div className="container-chu">
        <div className={`row ${isLoading ? "" : "d-none"}`}>
          <div className="col-12 py-5 text-center">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        {tracks?.length > 0 && <div className="flex justify-center items-center py-5">
         <h2 className='text-white text-3xl text-center'>Your Search Results</h2>
        </div>}
        <div className="row">
          {tracks?.map((element) => {
            return <Card key={element.id} element={element} />;
          })}
        </div>
        <div className="row"  hidden={tracks?.length === 0}>
          <div className="col">
            <button
              onClick={() => {
                setResultOffset((previous) => previous - 20);
                fetchMusicData();
              }}
              className="btn btn-outline-success w-100"
              disabled={resultOffset === 0}
            >
              Previous Next Page: {resultOffset / 20}
            </button>
          </div>
          <div className="col">
            <button
              onClick={() => {
                setResultOffset((previous) => previous + 20);
                fetchMusicData();
              }}
              className="btn btn-outline-success w-100"
            >
              Next Page: {resultOffset / 20 + 2}
            </button>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <h4 className="text-center text-danger py-2">{message}</h4>
          </div>
        </div>
        <Home></Home>
      </div></>
  )
}

export default Default