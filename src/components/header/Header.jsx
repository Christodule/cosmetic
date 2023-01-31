import React from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'
import { useState } from 'react'
import { StateProvider } from '../StateProvider'

const Header = () => {
const {cart} = useState(StateProvider)
 const [ShowMenu, setShowMenu]= useState(true);

 const toogleMenu = () =>{
  setShowMenu((ShowMenu) => !setShowMenu)
 }
  return (
    <div className={css.container}>
        <div className={css.logo}>
          <img src={logo} alt=""/>
          <span>Logipharma</span>
        </div>

        <div className={css.right}>
          <div className={css.bars} onClick={toogleMenu}>
          <GoThreeBars />  
          </div>

           
            <ul className={css.menu} style={{display: ShowMenu ? 'inherit' : 'none'}}>
                <li>Collections</li>
                <li>Brand</li>
                <li>News</li>
                <li>Sales</li>
                <li>ENG</li>
            </ul>


        
           <input type="text" className={css.search} placeholder="search"/>
<div className={css.cart}>
<CgShoppingBag className={`${!cart ? "noCartItem" : "cart_content"}`} />
</div>
        
        </div>
    </div>
  )
}

export default Header