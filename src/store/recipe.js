import {createSlice} from  '@reduxjs/toolkit'

const State ={
  recipes:[],
  FavoriteRecipes: [],
  loading: false,
  error: false
}

const recipeSlice = createSlice({
  name:'recipe',
  initialState: State,
  reducers:{
    getRecipe(state,action){
        state.recipes = state.recipes.concat(action.payload);
        state.loading = false;
    },
    addFavoriteRecipe(state, action){
      let DisplayRecipeIndex;
      let FavoriteExists = state.FavoriteRecipes
          .findIndex(fav => fav.id === action.payload.recipe.id);

        if(FavoriteExists === -1){
            state.FavoriteRecipes = state.FavoriteRecipes
            .concat(action.payload.recipe)
            state.recipes[action.payload.index].fav = true;

          }


        else{
            DisplayRecipeIndex = state.recipes
            .findIndex(rec => state.FavoriteRecipes[FavoriteExists].id === rec.id)
            state.recipes[DisplayRecipeIndex].fav= false
            state.FavoriteRecipes.splice(FavoriteExists, 1);

          }
    },
    initiateSearch(state){
      state.recipes = [];
      state.loading= true;
    },
    loadingFalse(state){
      state.loading = false;
    },
    setError(state){
      state.error = !state.error
    }
  }
})

export const {
  getRecipe,
  addFavoriteRecipe,
  removeFavoriteRecipe,
  initiateSearch,
  loadingFalse,
  loadFavoriteRecipe,
  setError}= recipeSlice.actions
export default recipeSlice
