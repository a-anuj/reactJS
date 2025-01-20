export default function MainBody(){
    return(
        <main>
            <form className="add-ingredient-form">
                <input type="text" aria-label="Add ingredient" placeholder="e.g. tomato"/>
                <button>Add ingredient</button>
            </form>
        </main>
    )
}