import style from './header.module.css'
import {MdFavorite} from 'react-icons/md'
import {BiMenu} from 'react-icons/bi'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
const Header = (props)=>{

const {FavoriteRecipes} = useSelector(state => state.recipe);

  return(

      <div className={`${style.Header} wrapper`}>
        <div className={style.Logo}>
          <NavLink to='/'><h3>Food<span>Circle</span></h3></NavLink>
        </div>
        <BiMenu className={style.BurgerMenu}/>
        <nav>
          <ul className={style.NavList}>
            <NavLink to='/' activeClassName={style.active} exact={true}><li>Home</li></NavLink>
              <NavLink to='/about' activeClassName={style.active} exact={true}><li>About</li></NavLink>
            <li className={style.FavoriteRecipe} onClick={props.toggleModal}>
              <span className={style.numFav}>{FavoriteRecipes.length}</span>
              <MdFavorite className={style.LikedIncon}/>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Header;
