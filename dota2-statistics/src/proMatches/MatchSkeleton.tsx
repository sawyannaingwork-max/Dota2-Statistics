export default function MatchSkeleton()
{
    return (
        <div className="cursor-pointer duration-150 hover:border-accent  mb-5 w-[90%] mx-auto border-2 border-text rounded-sm px-2 py-2">
            <h1 className="text-xl bg-gray-700 w-40 h-4 font-inter mb-2"></h1>
            <div className="flex justify-between items-center mb-3">
                <h3 className="bg-gray-700 w-30 h-4 font-inter">
                    
                    &nbsp; 
                </h3>
                <h3 className="bg-gray-700 w-25 h-4 font-inter">
                    
                </h3>
                
            </div>
            <div className="flex justify-center gap-5  items-center">
                <div className="flex gap-4 items-center">
                    <h3 className="bg-gray-700 w-25 h-4 font-itim"></h3>
                    <span className="bg-gray-700 w-10 h-4"></span>
                </div>
 
                <div className="text-2xl text-secondary">
                    VS
                </div>

                <div className="flex gap-4 items-center">
                    <span className="bg-gray-700 w-10 h-4"></span>
                    <h3 className="bg-gray-700 w-25 h-4 font-itim"></h3>
                </div>
            </div>
        </div>
    )
}