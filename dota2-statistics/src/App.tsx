import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom'
import Heroes from "./components/Heroes";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />
      </Routes>
    </>
    
  )
}