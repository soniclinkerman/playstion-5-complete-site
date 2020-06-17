import React from "react";

const Simple = ({title, info, video}) => {
    return(
        <div className="simple">
            <h2 className="simple-title">{title}<span class="trademark">™</span></h2>
            <p className="simple-info">{info}</p>
            <iframe className="simple-video" width="560" height="615" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Simple