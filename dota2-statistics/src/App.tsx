import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy Loading
const Home = lazy(() => import("./components/Home"))
const Heroes = lazy(() => import("./components/Heroes"))
const HeroDetail = lazy(() => import("./components/HeroDetail"))
const ProMatchDetail = lazy(() => import("./components/ProMatchDetail"))
const PublicMatches = lazy(() => import("./components/PublicMatches"))
const PublicMatchDetail = lazy(() => import("./components/PublicMatchDetail"))
const ProMatches = lazy(() => import("./components/ProMatches"))
const Teams = lazy(() => import("./components/Teams"))
const ProTeamDetail = lazy(() => import("./components/ProTeamDetail"))
const PlayerDetail = lazy(() => import("./components/PlayerDetail"))


export default function App() {
  return (
    <>
    <ErrorBoundary>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/heroes" element={<Heroes />} />
              <Route path="/heroes/:id" element={<HeroDetail />} />
              <Route path="/matches/pro/:id" element={<ProMatchDetail />} />
              <Route path="/public" element={<PublicMatches />} />
              <Route path="/matches/public/:id" element={<PublicMatchDetail />} />
              <Route path="/pro" element={<ProMatches />} />
              <Route path="/team" element={<Teams />} />
              <Route path="/team/:id" element={<ProTeamDetail />} />
              <Route path="player/:id" element={<PlayerDetail />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
    
  )
}