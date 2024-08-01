import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  useEffect(() => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const moveToNextSlide = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      const slider = document.querySelector('.slider');
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const intervalId = setInterval(moveToNextSlide, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Navbar />
      <main className="hero">
        <div className="hero-text">
          <h1>İrem Bu</h1>
          <p>Literatür taramasındayım henüz, bitecek bu sene. Çok az vaktim kaldı.</p>
          <p>Karma yöntem kullanacağım galiba. Bu hafta bulguları bitirmiş olmalıydım.</p>
          <div className="hero-buttons">
            <a href="http://www.amialright.com" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Neyim Var</button>
            </a>
            <a href="https://potatoortomato.com/" target="_blank" rel="noopener noreferrer">
              <button className="btn-secondary">ÖSYM</button>
            </a>
            <a href="https://chrismckenzie.com" target="_blank" rel="noopener noreferrer">
              <button className="btn-secondary">İlgi</button>
            </a>
            <a href="http://doughnutkitten.com" target="_blank" rel="noopener noreferrer">
              <button className="btn-secondary">Kediş</button>
            </a>
            <a href="http://www.donothingfor2minutes.com" target="_blank" rel="noopener noreferrer">
              <button className="btn-secondary">Meditasyon</button>
            </a>
            <a href="https://www.bouncingdvdlogo.com" target="_blank" rel="noopener noreferrer">
              <button className="btn-secondary">DVD</button>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img className="small-image" src="/s.webp" alt="Decorative Image" />
        </div>
      </main>
      <section className="additional-image-container">
        <img src="/f.png" alt="Additional Image" className="additional-image" />
       
      </section>
      <section className="slider-container">
        <div className="slider">
          <div className="slide"><img src="/*slide1.jpg" alt="Slide 1" /></div>
          <div className="slide"><img src="/*slide2.webp" alt="Slide 2" /></div>
          <div className="slide"><img src="/*slide3.webp" alt="Slide 3" /></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
