import { Routes, Route } from "react-router-dom"

import Header from "./components/Header";
import Home from "./components/Home";
import Heroes from "./components/Heroes";
import HeroDetail from "./heroes/HeroDetail";

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
            </Routes>
        </>
    )
}