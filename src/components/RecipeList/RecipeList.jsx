import { RecipeItem } from '../RecipeItem/RecipeItem';
import recipe from "../../data/recipe.json";

export const RecipeList = () => {
    return (
        <ul class="list">
            {recipe.map((recipe) => {
                return <RecipeItem recipe={recipe} />
            })}
        </ul>
    )
}