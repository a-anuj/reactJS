export default function Joke(props){
    return(
        <>
            <b><p className="setup">{props.setup}</p></b>
            <p className="punchline">{props.punchline}</p>
            <hr />
        </>
    )
}