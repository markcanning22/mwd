import React, { ReactElement } from 'react'
import './App.pcss'

const App: React.FC = (): ReactElement => {
    return (
        <>
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
            <section className="project-container">
                <div className="project">
                    <img
                        src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                        className="project__image"
                    />
                    <h2 className="project__name">Joshua Vase</h2>
                </div>
                <div className="project">
                    <img
                        src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                        className="project__image"
                    />
                    <h2 className="project__name">Larkin Plates</h2>
                </div>
                <div className="project">
                    <img
                        src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        className="project__image"
                    />
                    <h2 className="project__name">Fortessa Cloud No 2</h2>
                </div>
                <div className="project">
                    <img
                        src="https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80"
                        className="project__image"
                    />
                    <h2 className="project__name">Astoria Collection</h2>
                </div>
                <div className="project">
                    <img
                        src="https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
                        className="project__image"
                    />
                    <h2 className="project__name">Lava Beach Stoneware</h2>
                </div>
                <div className="project">
                    <img
                        src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                        className="project__image"
                    />
                    <h2 className="project__name">Sand Canyon Bowls</h2>
                </div>
                <div className="project">
                    <img
                        src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                        className="project__image"
                    />
                    <h2 className="project__name">Lennon Collection</h2>
                </div>
                <div className="project">
                    <img
                        src="https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                        className="project__image"
                    />
                    <h2 className="project__name">Mendocino Dinnerware</h2>
                </div>
            </section>
            <section className="about">
                <h3>
                    Designing, making, and selling goods of timeless design and
                    uncompromising integrity&mdash;made thoughtfully, honesty,
                    and with pride&mdash;to be enjoyed with similar intention.
                </h3>
                <h3 className="about_cta">Let's work together.</h3>
                <div className="about__contact">
                    <p>joseph@jsceramics.com</p>
                    <p>+44 (0)712 312 312</p>
                </div>
            </section>
        </>
    )
}

export default App
