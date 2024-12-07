import './header.css'
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import Basket from '../basket/Basket';

function Header() {
  const [openBasket, setOpenBasket] = useState(false)
  return (
    <>
      {openBasket && (
        <Basket setOpenBasket={setOpenBasket} />
      )}
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <img src="/assets/images/logo.png" alt="" />
              <div className="logo_info">
                <h1>REACT SNEAKERS</h1>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>
            <ul>
              <li onClick={() => setOpenBasket(true)}>
                <FiShoppingCart className='header_icon' />
                1205 руб.
              </li>
              <li>
                <MdOutlineFavoriteBorder className='header_icon' />
                Закладки
              </li>
              <li>
                <CgProfile className='header_icon' />
                Профиль</li>
            </ul>
          </div>
        </div>
      </header></>
  );
}
export default Header;