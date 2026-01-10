import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </>
    
  )
}