import react, { useState } from "react"
import Hogs from "./HogsCards"

const HogsContainer = ({hogsData, removeHog}) => {
    const renderHogs = hogsData.map (hogObj => {
        return (
        <Hogs key={hogObj.id} hogObj={hogObj} removeHog={removeHog}/>
        )
    })
    const [pig, setPig] = useState(false)
    const handleClick = () => {
        setPig(!pig)
                window.alert("i was clicked")
            }
    return (
        <div className="hog-container">
            
            <fieldset>
                <h1 className="hog-list-title"> Hog List </h1>
                <legend className="pig" onClick={handleClick}>🐖</legend>
            {renderHogs}
            </fieldset>
        </div>
    )
}

export default HogsContainer