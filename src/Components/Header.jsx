import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}

export const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
      <NavLink to='/' className='logo'> YSTYLE </NavLink>
        <ul className='nav'>
          <NavLink to='/categ'>Categories</NavLink>
          <NavLink to='/cab'>Личный кабинет</NavLink>
          <button className='Btn Btn__auth'>
            <Link to='/auth'>Auth</Link>
          </button>
          <button className='Btn Btn__reg'>
            <Link to='/reg'>Registration</Link>
          </button>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? 
              showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
};