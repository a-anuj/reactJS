import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "../data"

export default function App() {
    
    const entryElements = data.map((entry)=> {
        return( 
            <Entry
                img={entry.img}
                title={entry.title}
                country={entry.country}
                gmapslink={entry.googleMapsLink}
                text={entry.text}
            />
        )
    })

    return (
        <>
            <Header />
            <main className="container">
                {entryElements }
            </main>
        </>
    )
}