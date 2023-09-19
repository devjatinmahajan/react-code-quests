import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChallengeI from "./pages/ChallengeI";
import ChallengeII from "./pages/Challenge2";
import ChallengeIII from "./pages/Challenge3/Challenge3";
import Layout from "./layout";
import ChallengeIV from "./pages/Challenge4/Scroll";
import ChallengeV from "./pages/challenge-v/challenge-v";
import ChallengeVI from "./pages/challenge-vi/challenge-vi";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge-I" element={<ChallengeI />} />
          <Route path="/challenge-II" element={<ChallengeII />} />
          <Route path="/challenge-III" element={<ChallengeIII />} />
          <Route path="/challenge-IV" element={<ChallengeIV />} />
          <Route path="/challenge-V" element={<ChallengeV />} />
          <Route path="/challenge-VI" element={<ChallengeVI />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
