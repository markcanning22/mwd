import React, { ReactElement } from 'react'
import './styles/Header.pcss'

const Header: React.FC = (): ReactElement => {
    return (
        <header className="navbar">
            <h1>Joseph Shmoe | Ceramics</h1>
            <nav className="links">
                <ul>
                    <li>
                        <a href="#work" className="active">
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
