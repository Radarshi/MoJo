import React, { useContext, useEffect } from "react";
import { MusicContext } from "../Context";
import Card from "./Card";

function PinnedMusic() {
  const musicContext = useContext(MusicContext);
  const pinnedMusic = musicContext.pinnedMusic;
  const setpinnedMusic = musicContext.setPinnedMusic;

  useEffect(() => {
    window.scrollTo(0, 0);
    const localPinnedMusic = JSON.parse(localStorage.getItem("pinnedMusic"));
    setpinnedMusic(localPinnedMusic);
  }, [setpinnedMusic]);

  return (
    <div>
      <div className="container">
        {pinnedMusic.length === 0 ? (
          <div className="row ">
            <div className="col ">
              <h3 className="py-5 text-center ">
                You don't have any pinned music yet!
              </h3>
              <div className="text-center ">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width={36}
  height={36}
  fill="currentColor"
  className="bi bi-emoji-frown"
  viewBox="0 0 16 16"
>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
</svg>
{" "}
              </div>
            </div>
          </div>
        ) : (
          <div className="row ">
            {pinnedMusic.map((element) => {
              return <Card key={element.id} element={element} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default PinnedMusic;