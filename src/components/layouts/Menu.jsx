import React from 'react'
import '../layouts/Menu.css'
// Importa o router mas com o componente Link não precisa mexer no css da tag a,pois o link gera o próprio
import { Link } from 'react-router-dom'
const Menu = props => (
    <aside className="menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/Parâmetro 1">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/Parâmetro 2">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/nãoExiste">Não existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu