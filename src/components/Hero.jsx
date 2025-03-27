import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(6);
  const [minutes, setMinutes] = useState(23);
  const [seconds, setSeconds] = useState(45);

  useEffect(() => {
    // 設定倒數計時
    const targetDate = new Date('2024-07-15T13:00:00');
    
    const updateCountdown = () => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;
      
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / (1000 * 60)) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="overview">
      <div className="overlay"></div>
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="hero-content">
        <h1 className="main-title">AI投資趨勢大會 2024</h1>
        <h2 className="sub-title">探索AI革命下的投資新機遇</h2>
        <p className="event-date">2024年7月15日 下午1:00-4:00</p>
        <p className="event-location">台北國際會議中心</p>
        <div className="hero-buttons">
          <a href="#registration" className="primary-btn">立即報名</a>
          <a href="#schedule" className="secondary-btn">查看議程</a>
        </div>
        <div className="countdown">
          <div className="countdown-item">
            <span className="count">{days}</span>
            <span className="unit">天</span>
          </div>
          <div className="countdown-item">
            <span className="count">{hours}</span>
            <span className="unit">時</span>
          </div>
          <div className="countdown-item">
            <span className="count">{minutes}</span>
            <span className="unit">分</span>
          </div>
          <div className="countdown-item">
            <span className="count">{seconds}</span>
            <span className="unit">秒</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 