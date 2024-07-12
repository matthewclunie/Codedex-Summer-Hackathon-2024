import { useState } from "react";
import stoop from "../assets/stoop.jpg";
import stoopKid from "../assets/stoop_kid.png";
import youreInvited from "../assets/youre_invited.png";
import { useEffect } from "react";

function Game({ setInvite, setScore, score, audioRef, setMusic }) {
  const [position, setPosition] = useState({ bottom: 100, left: 350 });
  const [playGame, setPlayGame] = useState(false);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let interval = null;
    if (seconds > 0 && playGame) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    if (!seconds) {
      clearInterval(interval);
      setInvite(true);
    }

    return () => clearInterval(interval);
  }, [seconds, playGame]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleImageClick = () => {
    const randomBottom = getRandomInt(50, 300);
    const randomLeft = getRandomInt(300, 500);
    setPosition({ bottom: randomBottom, left: randomLeft });
    setScore(score + 1);
  };

  return (
    <div
      className={`card ${
        playGame ? "" : "h-[500px] flex items-center justify-center"
      }`}
    >
      {playGame ? (
        <>
          <div className="mb-8">
            <h1 className="text-3xl">
              The Stoop Kid wont leave his stoop! Click him to get him outta
              there.
            </h1>
            <h2 className="text-2xl">Score: {score}</h2>
            <h2 className="text-2xl">Time left: {seconds} seconds</h2>
          </div>
          <div className="relative flex items-center justify-center">
            <img src={stoop} className="w-2/3 rounded-3xl h-2/3" />
            <img
              src={stoopKid}
              className="absolute h-2/3"
              style={{
                left: `${position.left}px`,
                bottom: `${position.bottom}px`,
              }}
              onClick={handleImageClick}
            />
          </div>
        </>
      ) : (
        <div>
          <img src={youreInvited} className="pb-12 animate-growShrink" />
          <button
            className="px-6 py-3 text-3xl font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            onClick={() => {
              audioRef.current.volume = 0.1;
              audioRef.current.play();
              setMusic(true);
              setPlayGame(true);
            }}
          >
            Click to Play!
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
