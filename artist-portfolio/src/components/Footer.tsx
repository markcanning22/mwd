import React, { ReactElement } from 'react'
import './styles/Footer.pcss'

const Footer: React.FC = (): ReactElement => {
    return (
        <section className="about">
            <h3>
                Designing, making, and selling goods of timeless design and
                uncompromising integrity&mdash;made thoughtfully, honesty, and
                with pride&mdash;to be enjoyed with similar intention.
            </h3>
            <h3 className="about_cta">Let's work together.</h3>
            <div className="about__contact">
                <p>joseph@jsceramics.com</p>
                <p>+44 (0)712 312 312</p>
            </div>
        </section>
    )
}

export default Footer
