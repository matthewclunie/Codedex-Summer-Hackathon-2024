import Game from "./components/Game";
import { useState, useRef } from "react";
import "./App.css";
import Invite from "./components/Invite";
import { Volume2, VolumeX } from "lucide-react";

function App() {
  const [invite, setInvite] = useState(false);
  const [score, setScore] = useState(0);
  const [music, setMusic] = useState(false);
  const audioUrl = "/src/assets/ArnoldTheme.mp3";
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (music) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.1;
    }
    setMusic(!music);
  };

  return (
    <>
      <div className="absolute right-6 top-6">
        <audio ref={audioRef} src={audioUrl} />
        {music ? (
          <Volume2 size={40} onClick={() => togglePlay()} />
        ) : (
          <VolumeX size={40} onClick={() => togglePlay()} />
        )}
      </div>
      <div>
        {invite ? (
          <Invite score={score} />
        ) : (
          <Game
            setInvite={setInvite}
            setScore={setScore}
            score={score}
            audioRef={audioRef}
            setMusic={setMusic}
          />
        )}
      </div>
    </>
  );
}

export default App;
