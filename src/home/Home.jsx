import './home.css';
import { useState, useEffect } from 'react';

function Home() {
    const [isVisible, setIsVisible] = useState(false); // Starts invisible

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true); // Fades in smoothly
    }, 100);
  }, []);

return (
  <>
    <section className="home">
      <div className="TitleButton-Block">
        <div className="info">
          <p className="" id="title">Full-Stack Software Developer</p>
          <h1 className="" id="name">I'm Francyelle Souza</h1>
          <p className="" id="description">I design and develop systems and Websites</p>
        </div>

        <div className="buttons">
          <a href="https://drive.google.com/file/d/1Id63OZ5VuLrzrBZxyYS6fETnnA1pmreE/view"className='hire-block'>
            <p className="glass-button">Hire me | +</p>
          </a>

          <button
            className="copy-btn"
            onClick={() => {
              navigator.clipboard.writeText('francyelle5849@gmail.com');
            }}
          >
            <p className="text-copy">Copy Email</p>
            <svg className="copy-icon" viewBox="0 0 24 24" width="16" height="16">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="status-indicator">
        <div className="status-dot"></div>
        <span className="status-text">Available for Job</span>
      </div>
    </section>
  </>
);

}


export default Home