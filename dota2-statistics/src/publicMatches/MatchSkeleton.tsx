export default function MatchSkeleton()
{
    return(
        <div className="cursor-pointer hover:border-accent duration-75 border-2 border-text rounded-md mb-5 px-2 py-2">
            <div className="mb-1 flex justify-between">
                <h4 className="bg-gray-700 w-20 font-inter h-4"></h4>
                <h4 className="bg-gray-700 w-30 font-inter h-4"></h4>
            </div>
            <div className="mb-2 flex justify-between">
                <h4 className="text-secondary">Average Rank: <span className="bg-gray-700 w-20 h-2"></span></h4>
                <h4 className="text-secondary">Duration: <span className="bg-gray-700 w-20 h-2"></span></h4>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="flex gap-1 flex-wrap justify-center">
                    {
                        Array.from({length : 5}).map((_, index) => {
                            return(
                                <div key={index} className="w-7 h-7 bg-gray-700"></div>
                            )
                        })
                    }
                </div>
                <div className="text-red-400 font-itim text-2xl">VS</div>
                <div className="flex gap-1 flex-wrap justify-center">
                    {
                        Array.from({length : 5}).map((_, index) => {
                            return(
                                <div key={index} className="w-7 h-7 bg-gray-700"></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}