import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom'
import Heroes from "./components/Heroes";
import HeroDetail from "./components/HeroDetail";
import ProMatchDetail from "./components/ProMatchDetail";
import PublicMatches from "./components/PublicMatches";
import PublicMatchDetail from "./components/PublicMatchDetail";
import ProMatches from "./components/ProMatches";
import Teams from "./components/Teams";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/:id" element={<HeroDetail />} />
          <Route path="/matches/pro/:id" element={<ProMatchDetail />} />
          <Route path="/public" element={<PublicMatches />} />
          <Route path="/matches/public/:id" element={<PublicMatchDetail />} />
          <Route path="/pro" element={<ProMatches />} />
          <Route path="/team" element={<Teams />} />
      </Routes>
    </>
    
  )
}