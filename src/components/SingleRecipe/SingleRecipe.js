import classes from './SingleRecipe.module.css'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux';
const SingleRecipe = ()=>{

  const params = useParams();
  const {recipes} = useSelector(state => state.recipe)
  const viewRecipe = recipes.filter(rec => rec.name === params.recipe)
  const nutritionArray =[];
  const nutrient = viewRecipe[0].totalNutrients;
  const ingredient = viewRecipe[0].ingredients;
  let IngredientID = 1;


  for(let nutri in nutrient){
    nutritionArray.push(nutrient[nutri]);
  }
  const nutrients = nutritionArray.map(nutri =>{
    IngredientID +=1;
    return(
      <ul className={classes.lists} key={IngredientID}>
        <div className={classes.nutrient}><li>{nutri.label}</li></div>
        <div className={classes.nutrient}><li>{`${nutri.quantity}${nutri.unit.toLowerCase()}`}</li></div>
      </ul>
    )
  })
  const ingredients = ingredient.map(ing =>{
    return(
      <ul className={classes.lists} key={ing.foodId}>
        <div className={classes.ingredient}><li>{`${ing.foodCategory} : ${ing.text}`}</li></div>
        <div className={classes.ingredient}><li>{`Weight: ${ing.weight}`}</li></div>
      </ul>
    )
  })

return(
    <div>
      <div className={classes.recipe}>
        <div className={classes.recipeInfo}>
          <h1 className={classes.Label}>{params.recipe}</h1>
          <img src={viewRecipe[0].img} alt='dish'/>
          <p className={classes.calories}>{`CALORIES: ${Math.floor(viewRecipe[0].calories)}`}</p>
        </div>
        <div className={classes.detailsWrapper}>
          <div className={classes.ingredientsDiv}>
            <h2 className={classes.Label}>Ingredient</h2>
            {ingredients}
          </div>

          <div className={classes.nutritionDiv}>
            <h2 className={classes.Label}>Nutrients</h2>
            {nutrients}
          </div>
        </div>
        </div>
    </div>)

}
export default SingleRecipe;
