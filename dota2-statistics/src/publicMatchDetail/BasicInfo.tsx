import { usePublicMatchContext } from "../components/PublicMatchDetail"

export default function BasicInfo()
{
    const data = usePublicMatchContext()
    const date = new Date(data.start_time * 1000)


    return (
        <div className="w-[90%] mx-auto pt-9">
            <div className="flex justify-between lg:justify-start">
                <h3 className="text-xl font-inter text-text">{data.radiant_win? "Radiant Victory" : "Dire Victory"}</h3>
                <h3 className="text-accent">{date.getDate()}/ {date.getMonth() + 1}/ {date.getFullYear()}</h3>
            </div>  
            <p className="mt-3 text-secondary">Duration : <span className="text-text">{String(Math.floor(data.duration / 60)).padStart(2, "0")} : {String(data.duration % 60).padStart(2, "0")}</span></p>
            <div className="flex justify-between items-center mt-5">
                <div className="flex items-center gap-5">
                    <h2 className="text-green-400">Radiant</h2>
                    <span className="text-xl text-text font-itim">{data.radiant_score}</span>
                </div>
                <div className="text-2xl text-text font-itim">VS</div>
                <div className="flex items-center gap-5">
                    <span className="text-xl text-text font-itim">{data.dire_score}</span>
                    <h2 className="text-red-500">Dire</h2>
                </div>
            </div>     
        </div>
    )
}