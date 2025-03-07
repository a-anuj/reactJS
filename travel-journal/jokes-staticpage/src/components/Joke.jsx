import React from "react"
export default function Joke(props){

    const [isShown,setIsShown] = React.useState(false)

    function toggleIsShown(){
        setIsShown(prevValue => !prevValue)
        console.log(isShown)
    }

    return(
        <>
            <b><p className="setup">{props.setup}</p></b>
            {isShown && <p className="punchline">{props.punchline}</p>}
            <button onClick={toggleIsShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </> 
    )
}