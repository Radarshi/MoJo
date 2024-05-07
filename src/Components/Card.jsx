import React, { useContext, useEffect } from "react";
import { MusicContext } from "../Context";
import like from '../assets/like.png';
import Pin from '../assets/pin.png';
import './Card.css';

function Card({ element }) {
  const musicContext = useContext(MusicContext);
  const likedMusic = musicContext.likedMusic;
  const setlikedMusic = musicContext.setLikedMusic;
  const pinnedMusic = musicContext.pinnedMusic;
  const setpinnedMusic = musicContext.setPinnedMusic;

  const handlePin = () => {
    let pinnedMusic = localStorage.getItem("pinnedMusic");
    pinnedMusic = JSON.parse(pinnedMusic);
    let updatedPinnedMusic = [];
    if (pinnedMusic.some((item) => item.id === element.id)) {
      updatedPinnedMusic = pinnedMusic.filter((item) => item.id !== element.id);
      setpinnedMusic(updatedPinnedMusic);
      localStorage.setItem("pinnedMusic", JSON.stringify(updatedPinnedMusic));
    } else {
      if (pinnedMusic.length >= 4) {
      }
      updatedPinnedMusic = pinnedMusic;
      updatedPinnedMusic.push(element);
      setpinnedMusic(updatedPinnedMusic);
      localStorage.setItem("pinnedMusic", JSON.stringify(updatedPinnedMusic));
    }
  };

  const handleLike = () => {
    let likedMusic = localStorage.getItem("likedMusic");
    likedMusic = JSON.parse(likedMusic);
    let updatedLikedMusic = [];
    if (likedMusic.some((item) => item.id === element.id)) {
      updatedLikedMusic = likedMusic.filter((item) => item.id !== element.id);
      setlikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    } else {
      updatedLikedMusic = likedMusic;
      updatedLikedMusic.push(element);
      setlikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    }
  };

  useEffect(() => {
    const localLikedMusic = JSON.parse(localStorage.getItem("likedMusic"));
    setlikedMusic(localLikedMusic);
  }, [setlikedMusic]);

  return (
    <div key={element.id} className="col-lg-3 col-md-6 py-2">
      <div className="card">
        <div className="ratio ratio-1x1 bg-secondary bg-opacity-25">
          <img
            src={element.album.images[0].url}
            className="card-img-top"
            alt="..."
          />
        </div>

        <div className="card-body">
          <h5 className="card-title ">
            {element.name}
            <div className="add-options d-flex align-items-start">
              {pinnedMusic.some((item) => item.id === element.id) ? (
                <button
                  onClick={handlePin}
                  className="btn btn-outline-dark mx-1">
                  <img src={Pin} alt="" className="pin-me"/>
                </button>
              ) : (
                <button
                  onClick={handlePin}
                  className="btn btn-outline-dark mx-1" >
                  <img src={Pin} alt="" className="pin-me"/>
                </button>
              )}
              {likedMusic.some((item) => item.id === element.id) ? (
                <button onClick={handleLike} className="btn btn-outline-dark">
                  <img src={like} alt=""  className="like-me"/>
                </button>
              ) : (
                <button onClick={handleLike} className="btn btn-outline-dark">
                  <img src={like} alt="" className="like-me"/>
                </button>
              )}
            </div>
          </h5>
          <p className="card-text">{element.album.artists[0].name}</p>
          <audio src={element.preview_url} controls className=" play w-100"></audio>
        </div>
      </div>
    </div>
  );
}

export default Card;