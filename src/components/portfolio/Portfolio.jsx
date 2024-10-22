import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Formative.png'
import IMG2 from '../../assets/API.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/CoffeShop.png'
import IMG5 from '../../assets/Food.png'
import IMG6 from '../../assets/Page.png'

export const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My reent work</h5>
            <h2>Portfolio</h2>
            <h2>Back-End</h2>

            <div className="container portfolio-container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="IMG1" className='formative'/>
                    </div>
                    <h3>My formative project</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Dilanss/Project" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="IMG2" className='API'/>
                    </div>
                    <h3>API With .NET CORE</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Dilanss/SocialMedia" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="IMG3" />
                    </div>
                    <h3>CRUD with python</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Dilanss/CRUD-with-python" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </article>
            </div>

            <h5 className='Titulo'>Front-End</h5>
            
            <div className="container portfolio-container">
            <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="IMG4" className='Cafe'/>
                    </div>
                    <h3>coffee shop website </h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Dilanss/Coffe" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://dilanss.github.io/Coffe/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="IMG5" className='Food'/>
                    </div>
                    <h3>Food Website</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Dilanss/Food-website" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://dilanss.github.io/Food-website/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="IMG6" className='Projects'/>
                    </div>
                    <h3>Projects with Front-end</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Dilanss/Web-Site" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://dilanss.github.io/Web-Site/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;