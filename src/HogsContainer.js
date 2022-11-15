import react from "react"
import Hogs from "./hogs"

const HogsContainer = ({hogsData}) => {
    const renderHogs = hogsData.map (hogObj => {
        return (
        <Hogs key={hogObj.id} hogObj={hogObj}/>
        )
    })
    return (
        <div>
            {renderHogs}
        </div>
    )
}

export default HogsContainer