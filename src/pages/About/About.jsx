import React from "react";
import { Link } from 'react-router-dom'
import './About.css'


export default function About() {
    return (
        <div className="About">
            <ul className="about__list">

                <li className="about__list__item">
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
            <div className="inf">
                <h1 className="inf__text">
                    Что думают о нас
                </h1>
                <div className="box">
                    <div className="box1"><img className="img__hand" src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
                    <h1 className="box__text">Иван Иванов</h1>
                    <p className="box__item">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                    <p className="box__text__item">20.10.21</p>
                    </div>
                    <div className="box2"><img className="img__hand" src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
                    <h1 className="box__text">Иван Иванов</h1>
                    <p className="box__item">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                    <p className="box__text__item">20.10.21</p>
                    </div>
                    <div className="box3"><img className="img__hand" src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
                   <h1 className="box__text">Иван Иванов</h1>
                   <p className="box__item">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                   <p className="box__text__item">20.10.21</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
