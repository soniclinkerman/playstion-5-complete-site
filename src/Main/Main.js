import React from "react";
import Navigation from "../components/Navigation/navigation";
import Top from "../components/Top/Top";
import Primary from "../components/Primary/primary";
import Limits from "../components/Limits/limits";
import Senses from "../components/Senses/senses";

const Main = () => {
    return(
        <div>
            <Navigation/>
            <Top/>
            <Limits/>
            <Primary/>
            <Senses/>
           

        </div>
    )
}

export default Main