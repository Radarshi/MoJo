import React, { useContext, useEffect } from "react";
import { MusicContext } from "../Context";
import like from "../assets/like.png";
import pin from "../assets/pin.png";
import "./Card.css";

function Card({ element }) {
  const musicContext = useContext(MusicContext);
  const { likedMusic, setLikedMusic, pinnedMusic, setPinnedMusic } =
    musicContext;

  const handlePin = () => {
    let pinnedMusic = JSON.parse(localStorage.getItem("pinnedMusic")) || [];
    let updatedPinnedMusic = [];
    if (pinnedMusic.some((item) => item.id === element.id)) {
      updatedPinnedMusic = pinnedMusic.filter((item) => item.id !== element.id);
    } else {
      if (pinnedMusic.length >= 4) {
        alert("You can only pin up to 4 songs.");
        return;
      }
      updatedPinnedMusic = [...pinnedMusic, element];
    }
    setPinnedMusic(updatedPinnedMusic);
    localStorage.setItem("pinnedMusic", JSON.stringify(updatedPinnedMusic));
  };

  const handleLike = () => {
    let likedMusic = JSON.parse(localStorage.getItem("likedMusic")) || [];
    let updatedLikedMusic = [];
    if (likedMusic.some((item) => item.id === element.id)) {
      updatedLikedMusic = likedMusic.filter((item) => item.id !== element.id);
    } else {
      updatedLikedMusic = [...likedMusic, element];
    }
    setLikedMusic(updatedLikedMusic);
    localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
  };

  useEffect(() => {
    const localLikedMusic =
      JSON.parse(localStorage.getItem("likedMusic")) || [];
    const localPinnedMusic =
      JSON.parse(localStorage.getItem("pinnedMusic")) || [];
    setLikedMusic(localLikedMusic);
    setPinnedMusic(localPinnedMusic);
  }, [setLikedMusic, setPinnedMusic]);

  return (
    <div key={element.id} className="col-lg-3 col-md-6 py-2">
      <div className="card">
        <div className="ratio ratio-1x1 bg-secondary bg-opacity-25">
          <img
            src={element.album.images[0].url}
            className="card-img-top"
            alt="album cover"
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">
            {element.name}
            <div className="add-options d-flex align-items-start">
              <button onClick={handlePin} className="btn btn-outline-dark mx-1">
                <img
                  src={pin}
                  alt="Pin"
                  className={`pin-me ${
                    pinnedMusic?.some((item) => item.id === element.id)
                      ? "active"
                      : ""
                  }`}
                />
              </button>
              <button onClick={handleLike} className="btn btn-outline-dark">
                <img
                  src={like}
                  alt="Like"
                  className={`like-me ${
                    likedMusic?.some((item) => item.id === element.id)
                      ? "active"
                      : ""
                  }`}
                />
              </button>
            </div>
          </h5>
          <p className="card-text">{element.album.artists[0].name}</p>
          <audio
            src={element.preview_url}
            controls
            className="play w-100"
          ></audio>
        </div>
      </div>
    </div>
  );
}

export default Card;
