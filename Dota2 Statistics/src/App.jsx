import { Routes, Route } from "react-router-dom"

import Header from "./components/Header";
import Home from "./components/Home";
import Heroes from "./components/Heroes";
import HeroDetail from "./heroes/HeroDetail";
import PublicMatches from "./components/PublicMatches";
import ProMatchDetail from "./matchdetail/ProMatchDetail";

export default function App()
{
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/heroes">
                    <Route index element={<Heroes />} />
                    <Route path=":id" element={<HeroDetail />} />
                </Route>
                <Route path="/public" element={<PublicMatches />} />
                <Route path="/matches/pro/:id" element={<ProMatchDetail />} />
            </Routes>
        </>
    )
}