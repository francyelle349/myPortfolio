import React, { useState, useEffect, useRef } from 'react';
import './Abillities.css';

function Abillities() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;
     
    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const autoPlayIntervalRef = useRef(null);

    const updateCarousel = (slideIndex) => {
    if (trackRef.current) {
        const slideWidth = 100 / totalSlides; // Calculate percentage per slide
        const translateX = -slideIndex * slideWidth;
        trackRef.current.style.transform = `translateX(${translateX}%)`;
    }
};

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
    };

    const previousSlide = () => {
        setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const startAutoPlay = () => {
        autoPlayIntervalRef.current = setInterval(nextSlide, 4000);
    };

    const stopAutoPlay = () => {
        if (autoPlayIntervalRef.current) {
            clearInterval(autoPlayIntervalRef.current);
            autoPlayIntervalRef.current = null;
        }
    };

    const handleMouseEnter = () => {
        stopAutoPlay();
    };

    const handleMouseLeave = () => {
        startAutoPlay();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            previousSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    };

    // Update carousel when currentSlide changes
    useEffect(() => {
       updateCarousel(currentSlide);
    }, [currentSlide]);

    // Set up auto-play and keyboard navigation
    useEffect(() => {
        startAutoPlay();
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            stopAutoPlay();
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="abillities" >
            <div 
                className="carousel-container"
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="carousel-wrapper">
                    <div className="carousel-track" ref={trackRef}>
                        <div className="carousel-slide">
                            <div className="slide-content">

                              <h3>Languages</h3>  

                              <div className='items'>

                                <div className='itemFirst'>
                                     <p className="tech">Java</p>
                                </div>

                                <div className="subItems">
                                
                               <p className="tech">C#</p>
                              <p className="tech">JavaScript</p>
                              <p className="tech">Python</p>
                                </div>
                              
                             <div className='subItems'>
                               
                              <p className="tech">HTML</p>
                              <p className="tech">CSS</p>
                              <p className="tech">TypeScript</p>
                             </div>

                              

                              </div>
                              

                            </div>
                        </div>
                        <div className="carousel-slide">
                            <div className="slide-content">
                             <h3>Technologies & Frameworks</h3>

                              <div className="subItems">
                             <p className="tech">Spring Boot</p>
                             <p className="tech">React.js</p>
                             <p className="tech">Node.js</p>
                             </div>

                              <div className="subItems">
                             <p className="tech">.Net</p>
                            
                             </div>
                             <p></p>
                            </div>
                        </div>
                        <div className="carousel-slide">
                             <div className="slide-content">
                              <h3>Databases</h3>
                              <div className="subItems">
                                <p className="tech">MySQL</p>
                                <p className="tech">MongoDB</p>
                                </div>
                                <div className="subItems">
                                <p className="tech">Firebase</p>
                                 <p className="tech">H2</p>

                                 </div>

                            </div>
                             

                          
                            
                        </div>
                        <div className="carousel-slide">
                            <div className="slide-content">
                              <h3>DevOps & Cloud</h3>

                              <div className="subItems">
                                <p className="tech">Docker</p>
                                <p className="tech">GitHub Actions</p>

                                </div>
                                <div className="subItems">
                               
                                <p className="tech">Google Cloud</p>
                                 <p className="tech">GitHub</p>

                                 </div>

                                 <div className="subItems">
                                <p className="tech">Git</p>
                                  <p className="tech">Linux</p>
                                   <p className="tech">Gradle</p>
                                 <p className="tech">Maven</p>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>

                <button className="carousel-nav prev" onClick={previousSlide}>‹</button>
                <button className="carousel-nav next" onClick={nextSlide}>›</button>

                <div className="carousel-dots">
                    {[...Array(totalSlides)].map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Abillities;