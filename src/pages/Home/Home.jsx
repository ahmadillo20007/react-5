import { Link } from "react-router-dom";
import './Home.css'


function Home() {
  return (
<div className="nav">
<div className="container">
   <ul className="nav__list">

    <li className="nav__list__item">
        <Link to='/'>
Home
        </Link>
    </li>
    <li>
        <Link to='/about'>
About
        </Link>
    </li>
    <li>
        <Link to='/blog'>
Blog
        </Link>
    </li>
   </ul>
   <h1 className="nav__text">
   Хит продаж
   </h1>
   <p className="nav__item">
    Дистиллятор для <br /> эфирных масел </p>
<div className="cost">
<p className="nav__text__item">Цена</p>
    <p className="nav__text__cost">4 906 грн</p>
</div>
<button className="nav__btn">
Купить
</button>
    </div>
</div>
  );
}

export default Home;
