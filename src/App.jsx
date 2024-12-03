import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHoverClass = () => {
      cursor.classList.add('hover');
    };

    const removeHoverClass = () => {
      cursor.classList.remove('hover');
    };

    window.addEventListener('mousemove', moveCursor);
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseenter', addHoverClass);
      link.addEventListener('mouseleave', removeHoverClass);
    });

    // Progress bar
    function updateProgressBar() {
      const progressBar = document.querySelector('.progress-bar');
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      progressBar.style.width = progress + '%';
    }

    updateProgressBar();
    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);

    // Progress circle
    function updateProgressCircle() {
      const progressElement = document.querySelector('.progress-circle-bar');
      const scrollToTopElement = document.querySelector('.scroll-to-top');
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      let progress = (window.pageYOffset / totalHeight) * 283;
      progress = Math.min(progress, 283);
      progressElement.style.strokeDashoffset = 283 - progress;

      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        scrollToTopElement.style.opacity = '1';
      } else {
        scrollToTopElement.style.opacity = '0';
      }
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const scrollToTopElement = document.querySelector('.scroll-to-top');
    scrollToTopElement.addEventListener('click', scrollToTop);

    updateProgressCircle();
    window.addEventListener('scroll', updateProgressCircle);
    window.addEventListener('resize', updateProgressCircle);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', updateProgressBar);
      window.removeEventListener('resize', updateProgressBar);
      window.removeEventListener('scroll', updateProgressCircle);
      window.removeEventListener('resize', updateProgressCircle);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>

      <header>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li><span>/</span>
            <li><a href='#'>Sobre</a></li><span>/</span>
            <li><a href='#'>Projetos</a></li><span>/</span>
            <li><a href='#'>Contato</a></li>
          </ul>
        </nav>
      </header>
      <section className='hero'>
      <div className='container'>
        <div className="keyboard">
          <span className="key">N</span>
          <span className="key">I</span>
          <span className="key">C</span>
          <span className="key">O</span>
          <span className="key">L</span>
          <span className="key">A</span>
          <span className="key">S</span>
        </div>
      </div>
      <div className='container'>
        <div className='me-text'>
          <h1>Olá<span className="wave">👋</span>,<br /> Bem-vindo ao meu portfólio.</h1>
          <h2>Desenvolvedor e Estudante</h2>
          <p>Meu nome é Nicolas Gabriel Bustamante Lopes, sou um jovem de 18 anos estudante de tecnologia e desenvolvimento de software.</p>
        </div>
        <div className='image-container'>
          <div className='circle-container'>
            <div className='circle'></div>
            <img src='./src/assets/Nicolas.png' alt='Nicolas'></img>
          </div>
        </div>
        <div className='texto'>
          <p>Sou entusiasta e proativo, com interesse em desenvolver habilidades técnicas e práticas na área de TI e com vontade de aprender e obter crescimento profissional, buscando oportunidades de aprendiz e estágio na área para começar minha carreira profissional.</p>
          <div className='social-links'>
            <div className='social-icons'>
              <h1>Minhas Redes</h1> <br />
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} />
              </a> <br />
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="progress-circle-container">
        <svg className="progress-circle" viewBox="0 0 100 100">
          <circle className="progress-background" cx="50" cy="50" r="45"></circle>
          <circle className="progress-circle-bar" cx="50" cy="50" r="45"></circle>
        </svg>
        <div className="scroll-to-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>
      </section>

      <section className='projetos'>

    </section>
    </>
  );
}

export default App;