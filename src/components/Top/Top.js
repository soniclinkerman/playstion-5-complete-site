import React from "react"
import ps5 from "./images/ps5-digital-and-physical.jpeg"
import "../styles.css"
const Top = () => {
    return(
        <div className="top">
            <img className="ps5-console-img" alt="console" src={ps5}/>
            <h1 className="top-title">Launches this holiday 2020</h1>
            <a className="btn btn-other" href="https://www.youtube.com/watch?v=RuLci-lSeCo" target="_blank" rel="noopener noreferrer">Watch Now</a>

        </div>
    )

}

export default Top