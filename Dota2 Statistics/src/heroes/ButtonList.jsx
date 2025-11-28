export default function ButtonList({type, setType})
{
    function handleClick(attribute)
    {
        if (attribute === type)
        {
            setType(null)
        }

        else 
        {
            setType(attribute)
        }
    }
    return(
        <div className="flex gap-5 flex-wrap my-4">
            <button className={`${type === "agi"? "bg-primaryBtn" : "bg-secondaryBtn"} secondary-btn`} onClick={() => handleClick("agi")}>Agility</button>
            <button className={`${type === "str"? "bg-primaryBtn" : "bg-secondaryBtn"} secondary-btn`} onClick={() => handleClick("str")}>Strength</button>
            <button className={`${type === "int"? "bg-primaryBtn" : "bg-secondaryBtn"} secondary-btn`} onClick={() => handleClick("int")}>Intelligence</button>
            <button className={`${type === "all"? "bg-primaryBtn" : "bg-secondaryBtn"} secondary-btn`} onClick={() => handleClick("all")}>Universal</button>
        </div>
    )
}