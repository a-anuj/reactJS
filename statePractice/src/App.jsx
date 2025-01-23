import React from "react"

export default function App() {
    

    let [value,setValue] = React.useState(3)

    function add(){
      setValue(value+1)
    }
    function subtract(){
      setValue(value-1)
    }

    return (
        <main className="container">
            <h1>How many hours did you study React today?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{value}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}