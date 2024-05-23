import React, { useEffect } from "react";
import github from "../assets/github-mark.png";
import hill1Img from "../assets/hill1.png";
import hill2Img from "../assets/hill2.png";
import hill3Img from "../assets/hill3.png";
import hill4Img from "../assets/hill4.png";
import hill5Img from "../assets/hill5.png";
import leafImg from "../assets/leaf.png";
import plantImg from "../assets/plant.png";
import treeImg from "../assets/tree.png";
import "./Home.css";

function Home() {
  useEffect(() => {
    const text = document.getElementById("text");
    const leaf = document.getElementById("leaf");
    const hill1 = document.getElementById("hill1");
    const hill4 = document.getElementById("hill4");
    const hill5 = document.getElementById("hill5");
    const hill2 = document.getElementById("hill2");
    const hill3 = document.getElementById("hill3");
    const plant = document.getElementById("plant");

    const handleScroll = () => {
      let value = window.scrollY;

      // Update the position of the elements
      leaf.style.top = -value * 1.5 + "px";
      leaf.style.left = value * 1.5 + "px";
      hill5.style.left = value * 1.5 + "px";
      hill4.style.left = -value * 1.5 + "px";
      hill1.style.left = -value * 1.5 + "px";
      hill2.style.left = value * 1.5 + "px";
      hill3.style.left = value * 1.5 + "px";
      plant.style.left = value * 1.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="first relative h-screen overflow-x-hidden bg-green-500">
        <img
          src={hill1Img}
          alt=""
          id="hill1"
          className="absolute top-0 left-0 w-full h-auto"
        />
        <img
          src={hill2Img}
          alt=""
          id="hill2"
          className="absolute top-0 left-0 w-full h-auto"
        />
        <img
          src={hill3Img}
          alt=""
          id="hill3"
          className="absolute top-0 left-0 w-full h-auto"
        />
        <img
          src={hill4Img}
          alt=""
          id="hill4"
          className="absolute top-0 left-0 w-full h-auto"
        />
        <img
          src={hill5Img}
          alt=""
          id="hill5"
          className="absolute top-0 left-0 w-full h-auto"
        />
        <img
          src={treeImg}
          alt=""
          id="tree"
          className="absolute top-0 left-0 w-full h-auto"
        />
        <img
          src={leafImg}
          alt=""
          id="leaf"
          className="absolute top-0 left-0 w-full h-auto"
        />
        <img
          src={plantImg}
          alt=""
          id="plant"
          className="absolute top-0 left-0 w-full h-auto"
        />
      </section>
      <section className="second z-90">
        <h2>Wanna know more about Mojo?</h2>
        <p>
          "Mojo" signifies a magical charm or spell, something that brings good
          luck and evokes positive feelings. Our app embodies this concept by
          offering you a touch of musical magic in brief, but impactful, bursts.
          With Mojo, you can quickly find your groove, uplift your spirits, and
          connect with the world of music in a way that's both enchanting and
          efficient. <br />
          Mojo is a revolutionary music app designed to deliver the essence of
          music in just 30 seconds. Whether you're looking for a quick musical
          escape, discovering new tracks, or setting the perfect mood, Mojo
          brings the power of music to your fingertips with short, captivating
          sound clips.
          <br />
          Quick Discovery (30 seconds): Instantly explore new music across
          genres. Dive into curated playlists with a tap. <br />
          Mood Matching (30 seconds):
          <br />
          Select clips based on your current mood. Personalized recommendations
          to fit your feelings. Social Sharing (30 seconds):
          <br />
          Share your favorite clips with friends. Discover what your friends are
          listening to. Snippet Creation (30 seconds):
          <br />
          Create and customize your own 30-second clips. Mix and match parts of
          your favorite songs. Seamless Navigation (30 seconds):
          <br />
          User-friendly interface for quick access. Effortlessly switch between
          different features. Instant Playlists (30 seconds):
          <br />
          Generate instant playlists based on your preferences. Perfect for
          on-the-go listening. Trending Now (30 seconds):
          <br />
          Stay updated with the latest hits and viral tracks. Explore trending
          music clips instantly.
          <br />
          <br />
          Why Mojo?
          <br />
          Mojo is perfect for music lovers who want to experience the magic of
          music without spending too much time searching for the right tracks.
          Whether you're on a quick break, commuting, or just need a musical
          pick-me-up, Mojo delivers the perfect sound snippets to elevate your
          day. Discover, share, and create your musical mojo with ease!
        </p>
      </section>
      <section className="footer">
        <h1 style={{ color: "white" }}>Feel the Music, Find Your Mojo</h1>
        <hr style={{ color: "white" }} />
        <div className="git">
          <a
            href="https://github.com/Radarshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" style={{ width: "60px" }} />
          </a>
        </div>
        <p className="know">Know me more</p>
        <a
          href="https://www.termsandconditionsgenerator.com/live.php?token=Oaj491GQ2Jv0roQfSuiFI1D9LEQKr5gj"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "12px", textDecoration: "none" }}
        >
          Terms and conditions
        </a>
        <br />
        <a
          href="https://www.youtube.com/watch?v=DmH6YPWhaDY"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "12px", textDecoration: "none" }}
        >
          Copyright
        </a>
      </section>
    </>
  );
}

export default Home;
