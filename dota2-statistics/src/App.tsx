import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom'
import Heroes from "./components/Heroes";
import HeroDetail from "./components/HeroDetail";
import ProMatchDetail from "./components/ProMatchDetail";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/:id" element={<HeroDetail />} />
          <Route path="/matches/pro/:id" element={<ProMatchDetail />} />
      </Routes>
    </>
    
  )
}