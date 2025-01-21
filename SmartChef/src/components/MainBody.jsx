export default function MainBody(){
    const ingredients = ["Onion","Tomato","Paneer"]

    const ingredientList = ingredients.map(ingredient => (
        <li>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        console.log("Submitted!!")
    }
    
    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text" aria-label="Add ingredient" placeholder="e.g. tomato"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}