import React from "react"

export default function MainBody(){
    const [ingredients,setIngredients] = React.useState(["Onion","Tomato","Paneer"])

    const ingredientList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")

        setIngredients(
            prevIngredients => [...prevIngredients,newIngredient]
        )
        console.log(ingredients)
    }
    
    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input type="text" aria-label="Add ingredient" placeholder="e.g. tomato" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}