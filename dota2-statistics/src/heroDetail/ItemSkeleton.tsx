export default function ItemSkeleton({heading} : {heading : string})
{
    return(
        <div className="my-4">
        <h2 className="md:text-center text-xl font-inter text-text pb-2">{heading}</h2>
        <div className="flex gap-1 flex-wrap">
            {
                Array.from({length : 10}).map((_, index) => {
                    return(
                        <div key={index} className="w-10 h-10 bg-gray-700">

                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}