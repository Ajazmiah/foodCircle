
import './App.css';
import React,{useState,useEffect} from 'react';
import {Route,useParams, Redirect} from 'react-router-dom'
import HeroSection from './components/HeroSection/HeroSection'
import LikedRecipe from './components/LikedRecipe/LikedRecipe'
import DisplayRecipe from './components/DisplayRecipe/DisplayRecipe'
import SingleRecipe from './components/SingleRecipe/SingleRecipe'
import Header from './components/Header/header'
import About from './components/about'
function App() {

  const [showLikedRecipe, setShowLikedRecipe] = useState(false)
  const [showSingleRecipe, setShowSingleRecipe] = useState(false);
  const params = useParams();

  const setShowLikedRecipeHandler = ()=>{
    setShowLikedRecipe((prevShowLikedRecipe)=> !prevShowLikedRecipe);
  }
  useEffect(()=>{
    setShowSingleRecipe(prevState => !prevState)
  },[params.recipe])



  return (
    <div className="App">
        {showLikedRecipe && <LikedRecipe toggleModal={setShowLikedRecipeHandler}/>}
        <Header toggleModal={setShowLikedRecipeHandler}/>
        <Route path='/' exact>
          <HeroSection setLikedRecipeHandler={setShowLikedRecipeHandler}/>
          <DisplayRecipe/>
        </Route>
        <Route path='/recipe-details/:recipe'>
          {showSingleRecipe ? <SingleRecipe/> : <Redirect to='/'/>}
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
    </div>
  );
}

export default App;
