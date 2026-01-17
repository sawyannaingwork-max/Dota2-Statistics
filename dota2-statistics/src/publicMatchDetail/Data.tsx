import { usePublicMatchContext } from "../components/PublicMatchDetail"
import Table from "./Table"

export default function Data()
{
    const data = usePublicMatchContext()

    const radiant = data.players.slice(0, data.players.length / 2)
    const dire = data.players.slice(data.players.length / 2)
    
    return(
        <div className="w-[90%] mx-auto mt-9">
            <div>
                <h2 className="text-green-400 text-2xl">Radiant</h2>
                <Table 
                    players = {radiant}
                />
            </div>

            <div className="mt-9">
                <h2 className="text-red-400 text-2xl">Dire</h2>
                <Table 
                    players = {dire}
                />
            </div>
        </div>
    )
}