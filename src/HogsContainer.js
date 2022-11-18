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
        return window.alert("HOG OR PIG ??")
        setPig(!pig)
               
            }
    
    return (
        <div className="hog-container">
            
            <fieldset className="fieldset">
                <h1 className="hog-list-title"> Hog List </h1>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><legend className="pig" onClick={handleClick}>🐖</legend></a>
            {  renderHogs }
            </fieldset>
        </div>
    )
}

export default HogsContainer