
import {useState} from 'react';
import {MdFavorite} from 'react-icons/md'
import classes from './DisplayRecipe.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {addFavoriteRecipe} from '../../store/recipe'
import {Link} from 'react-router-dom'


const DisplayRecipe = (props)=>{

  const {recipes} = useSelector(state => state.recipe)
  const dispatch = useDispatch();

  const addToFavoriteHandler = (recipe, index)=>{
      dispatch(addFavoriteRecipe({recipe , index}));
    }

  const RECIPE = recipes.map((recipe, index )=>(
      <li className={classes.Recipe} key={recipe.id}>
        <Link className={classes.RecipeImgDiv} to={`/recipe-details/${recipe.name}`}>
            <img src={recipe.img}/>
          </Link>
          <div className={classes.RecipeInfo}>
            <h2 className={classes.RecipeName}> {recipe.name}</h2>
            <p className={classes.RecipeDescription}>{recipe.desc}</p>
          </div>
          <MdFavorite className={`${classes.FavoriteBtn} ${recipes[index].fav && classes.favorited}`} onClick={()=>addToFavoriteHandler(recipe,index)}/>
        </li>

    ))

  return(
    <div className= {`${'wrapper'} ${classes.RecipeWrapper}`}>
      <ul className={classes.RecipeList}>
        {recipes.length < 1 ? <p className={classes.noResult}>No Result...</p> : RECIPE}
      </ul>
    </div>
  )
}


export default DisplayRecipe;
