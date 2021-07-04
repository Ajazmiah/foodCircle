import {configureStore} from '@reduxjs/toolkit'
import recipeSlice from './recipe'

const store = configureStore({
reducer:{
      recipe: recipeSlice.reducer
    }
})

export default store;
