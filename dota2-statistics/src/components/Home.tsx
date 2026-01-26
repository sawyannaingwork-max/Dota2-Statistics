import { useEffect } from "react";
import Content from "../home/Content";

export default function Home() 
{
    useEffect(() => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }, [])
    return(
        <Content />
    )
}