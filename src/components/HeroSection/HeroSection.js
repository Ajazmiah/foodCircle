import React,{useRef , useState} from 'react';
import Button from '../../UI/Button'
import style from './Herosection.module.css'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../../UI/loader/loader'
import Modal from '../../UI/Modal'
import {getRecipe,initiateSearch, loadingFalse,setError} from '../../store/recipe'


const id = '3b511dba';
const key = '152a9f0fe331d6bdd9b8e36f51152eb4'

const HeroSection = (props)=>{

  const [emptySearch , setEmptySearch] = useState()
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.recipe);
  const {error} = useSelector(state => state.recipe);

  let emptySearchClass;
  emptySearch ? emptySearchClass = style.emptySearch
  : emptySearchClass = ''

  const searchHandler = (e)=>{
    e.preventDefault();
    const query = searchInputRef.current.value;

    if(query.trim() === ''){
        setEmptySearch(true);
        return
      }

    setEmptySearch(false);
    fetchRecipe(query)

    searchInputRef.current.value = '';

  }
  const fetchRecipe = async(query)=>{
    dispatch(initiateSearch())

    try{
        const results = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`);
        const data =  await results.json()
        const recipe = data.hits;

        recipe.forEach((item, i) => {
          let Recipe = {
            id: item.recipe.url,
            img: item.recipe.image,
            name:item.recipe.label,
            ingredients:item.recipe.ingredients,
            totalNutrients:item.recipe.totalNutrients,
            desc: 'click to view details of the recipe',
            calories: item.recipe.calories,
            fav: false
          }
          dispatch(getRecipe(Recipe));
      });
          dispatch(loadingFalse());
          setError(false)
    }
    catch(error){
      dispatch(loadingFalse());
      dispatch(setError());
    }
  }

let Error;
if(error){
   Error = (
     <Modal toggleModal={()=> dispatch(setError())}>
       <p>An error has occured, please check your internet connection</p>
     </Modal>)}

  return(
    <div>
      {Error}
      <div className={style.Hero}>
          <div className= 'wrapper'>
            <h3 className={style.HeroText}>Find a recipe</h3>
            <div>
              <form onSubmit={searchHandler}>
                <input
                  type='text'
                  className={`${style.InputText} ${emptySearchClass}`}
                  placeholder=' search recipe'
                  ref={searchInputRef}/>
                <Button type='submit' cusClass='searchButton'>Search</Button>
              </form>
            </div>
          </div>
          {loading && <Loader/>}
        </div>
      </div>
  )
}

export default HeroSection
