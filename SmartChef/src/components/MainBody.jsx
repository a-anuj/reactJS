import React from "react"

export default function MainBody(){
    let [ingredients,setIngredients] = React.useState(["Onion","Tomato","Paneer"])

    const ingredientList = ingredients.map(ingredient => (
        <li>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        setIngredients(
            prevIngredients => [...prevIngredients,newIngredient]
        )
        console.log(ingredients)
    }
    
    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text" aria-label="Add ingredient" placeholder="e.g. tomato" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}