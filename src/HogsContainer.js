import react from "react"
import Hogs from "./Hogs"

const HogsContainer = ({hogsData, removeHog}) => {
    const renderHogs = hogsData.map (hogObj => {
        return (
        <Hogs key={hogObj.id} hogObj={hogObj} removeHog={removeHog}/>
        )
    })
    return (
        <div>
            {renderHogs}
        </div>
    )
}

export default HogsContainer