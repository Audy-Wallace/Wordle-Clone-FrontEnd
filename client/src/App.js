import "./App.css";
import NavBar from "./components/NavBar";
import { connectSocket } from "./hooks/connectSocket";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";

import Singleplayer from "./views/singleplayer";
import MultiPlayerPage from "./views/MultiPlayerPage";
import MultiPlayerRoom from "./views/MultiPlayerRoom";

import { Helmet } from "react-helmet";
import Leaderboard from "./views/Leaderboard";



// fix
function App() {
  const socket = connectSocket();
  return (
    <div id="root" className="bg-repeat min-h-screen bg-opacity-60 bg-[url('kitchen-pattern.jpg')]">
      <Helmet>
        <script
          type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key="SB-Mid-client-rJQkrPkvx8zujvzn"
        ></script>
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/singleplayer" element={<Singleplayer />} />
        <Route
          path="/multiplayer"
          element={<MultiPlayerPage socket={socket}></MultiPlayerPage>}
        ></Route>
        <Route
          path="/multiplayer/:roomId"
          element={<MultiPlayerRoom socket={socket}></MultiPlayerRoom>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
