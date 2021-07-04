
import Modal from '../../UI/Modal'
import classes from './LikedRecipe.module.css'
import {MdFavorite} from 'react-icons/md'
import Button from '../../UI/Button'
import {Fragment} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addFavoriteRecipe} from '../../store/recipe'

const LikedRecipe = props=>{

  const {FavoriteRecipes} = useSelector(state => state.recipe)
  const dispatch = useDispatch();

  const addToFavoriteHandler = (recipe, index)=>{
      dispatch(addFavoriteRecipe({recipe , index}));
    }

  const favorite = FavoriteRecipes.map((recipe, index) =>(
        <li className={classes.favorite}  key={recipe.id}>
          <a href={recipe.id} className={classes.Link}>
            <img src={recipe.img} alt='dish'/>
            <h3 className={classes.favoriteName}>{recipe.name}</h3>
          </a>
        <MdFavorite className={classes.fav} onClick={()=> addToFavoriteHandler(recipe,index)}/>
        </li>
    ))

  return(
    <Modal toggleModal={props.toggleModal}>
      <Fragment>
        <ul className={classes.favoriteList}>
          {favorite}
        </ul>
        <div>
          <Button cusClass='close' clicked={props.toggleModal}> close</Button>
        </div>
      </Fragment>
    </Modal>
  )
}

export default LikedRecipe;
