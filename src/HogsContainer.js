import react from "react"
import Hogs from "./HogsCards"

const HogsContainer = ({hogsData, removeHog}) => {
    const renderHogs = hogsData.map (hogObj => {
        return (
        <Hogs key={hogObj.id} hogObj={hogObj} removeHog={removeHog}/>
        )
    })
    return (
        <div className="hog-container">
            {renderHogs}
        </div>
    )
}

export default HogsContainer