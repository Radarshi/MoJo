import React, { useContext } from "react";

import { Link } from "react-router-dom";
import Slogo from "../assets/sound.png";
import { MusicContext } from "../Context";
import LikedMusic from "./LikedMusic";
import PinnedMusic from "./PinnedMusic";

const Navbar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {
  const musicContext = useContext(MusicContext);
  const likedMusic = musicContext.likedMusic;
  const pinnedMusic = musicContext.pinnedMusic;
  const setResultOffset = musicContext.setResultOffset;
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
        <div className="container-fluid">
          <img src={Slogo} alt="" style={{ width: "40px" }} />
          <Link className="navbar-brand" to="/" onClick="reload">
            <i className="bi bi-music-note-list mx-3"></i> Mo-Jo
          </Link>
          <div>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-secondary btn-sm mx-1"
            >
              Pinned
              <i className="bi bi-pin-angle-fill"></i> {pinnedMusic?.length}
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#likedMusicModal"
              className="btn btn-secondary btn-sm mx-1"
            >
              Liked
              <i className="bi bi-heart-fill"></i> {likedMusic?.length}
            </button>
          </div>

          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              onKeyDown={handleKeyPress}
              className="form-control me-2 w-75"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              disabled={keyword === ""}
              onClick={() => {
                setResultOffset(0);
                fetchMusicData();
              }}
              className="btn  search btn-outline-success"
            >
              {" "}
              Search
            </button>
            <Link className="signIn" to="/signup">
              <button
                type="button"
                className="btn  signup btn-outline-success"
                style={{ width: "80px", marginLeft: "10px" }}
                target="_blank"
              >
                SignUp
              </button>
            </Link>
            <Link className="login" to="/login">
              <button
                type="button"
                className="btn login btn-outline-success"
                style={{ marginLeft: "10px" }}
              >
                LogIn
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className="modal fade modal-xl"
        id="exampleModal"
        tabIndex={1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Pinned Music
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <PinnedMusic />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade modal-xl"
        id="likedMusicModal"
        tabIndex={1}
        aria-labelledby="likedMusicModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="likedMusicModalLabel">
                Liked Music
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <LikedMusic />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
