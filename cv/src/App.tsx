import React, { ReactElement } from 'react'
import './App.pcss'

const App: React.FC = (): ReactElement => {
    return (
        <>
            <section className="hero">
                <header className="navbar">
                    <nav className="links">
                        <a href="#">Blog</a>
                        <a href="#">Speaking Events</a>
                    </nav>
                    <h1>Hazel</h1>
                    <a href="#" className="contact">
                        Contact Me
                    </a>
                </header>
                <div className="hero__content">
                    <h2 className="hero__content__tagline">
                        I'm a <em>Scientist</em> and <em>Speaker</em> who is
                        interested in the psychology of greed.
                    </h2>
                    <div className="hero__content__column">
                        <p>My Mission</p>
                        <p>
                            This is my mission. Evertitur veri praesent qui per
                            scelerisque dolorum odio. Adipiscing ea postea felis
                            duo dapibus. Ad consectetur tempus deserunt no
                            tellus sententiae parturient dolores legere.
                            Praesent parturient suscipit gloriatur natoque
                            aliquip quam labores dicit utinam.
                        </p>
                    </div>
                    <div className="hero__content__column">
                        <p>Specialties</p>
                        <ul className="hero__content__column__skills">
                            <li>Public Speaking</li>
                            <li>Data Analysis</li>
                            <li>Strategic Planning</li>
                            <li>User Interviews</li>
                            <li>Writing & Editing</li>
                            <li>Analytics & Data</li>
                            <li>Front-End Dev</li>
                            <li>Programming</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="blog">
                <div className="blog__content">
                    <div className="blog__content__column">
                        <h4>Tech Blog</h4>
                        <div className="blog__content__articles">
                            <article className="blog__content__post">
                                <h5 className="blog__content__post__title">
                                    This Is Your Brain On Helium
                                </h5>
                                <p className="blog__content__post__text">
                                    Qualisque perpetua autem vocent splendide.
                                    Nullam ultrices oporteat lectus diam
                                    gubergren etiam finibus. Dolore ponderum
                                    atqui signiferumque fames. Maiorum quam
                                    finibus tractatos pri.
                                </p>
                                <p className="blog__content__post__date">
                                    May 19, 2025
                                </p>
                            </article>
                            <article className="blog__content__post">
                                <h5 className="blog__content__post__title">
                                    In Search Of Intelligence
                                </h5>
                                <p className="blog__content__post__text">
                                    Qualisque perpetua autem vocent splendide.
                                    Nullam ultrices oporteat lectus diam
                                    gubergren etiam finibus. Dolore ponderum
                                    atqui signiferumque fames. Maiorum quam
                                    finibus tractatos pri.
                                </p>
                                <p className="blog__content__post__date">
                                    June 11, 2025
                                </p>
                            </article>
                            <article className="blog__content__post">
                                <h5 className="blog__content__post__title">
                                    Should Public Transit Be Free?
                                </h5>
                                <p className="blog__content__post__text">
                                    Qualisque perpetua autem vocent splendide.
                                    Nullam ultrices oporteat lectus diam
                                    gubergren etiam finibus. Dolore ponderum
                                    atqui signiferumque fames. Maiorum quam
                                    finibus tractatos pri.
                                </p>
                                <p className="blog__content__post__date">
                                    March 17, 2025
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className="events">
                <div className="events__content">
                    <div className="events__content__column">
                        <h4>Speaking Events</h4>
                        <div className="events__content__column__events-list">
                            <div className="events__content__column__events-list__event">
                                <h5 className="events__content__column__events-list__event__title">
                                    NY Economics Forum
                                </h5>
                                <p className="events__content__column__events-list__event__location">
                                    New York, NY
                                </p>
                                <p className="events__content__column__events-list__event__date">
                                    August 25th, 7:00pm
                                </p>
                            </div>
                            <div className="events__content__column__events-list__event">
                                <h5 className="events__content__column__events-list__event__title">
                                    Emerging Tech Meet-Up
                                </h5>
                                <p className="events__content__column__events-list__event__location">
                                    San Francisco, CA
                                </p>
                                <p className="events__content__column__events-list__event__date">
                                    July 19th, 2025 2:00pm
                                </p>
                            </div>
                            <div className="events__content__column__events-list__event">
                                <h5 className="events__content__column__events-list__event__title">
                                    Creative Code Meetup
                                </h5>
                                <p className="events__content__column__events-list__event__location">
                                    Denver, CO
                                </p>
                                <p className="events__content__column__events-list__event__date">
                                    September 29th 2025, 6:00pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer-content">
                    <img src="images/instagram.png" alt="Instagram" />
                    <img src="images/twitter.png" alt="Twitter" />
                    <p>Made With ❤️</p>
                </div>
            </footer>
        </>
    )
}

export default App
