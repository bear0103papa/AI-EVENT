import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="overview">
      <div className="overlay"></div>
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
            <span className="count">15</span>
            <span className="unit">天</span>
          </div>
          <div className="countdown-item">
            <span className="count">06</span>
            <span className="unit">時</span>
          </div>
          <div className="countdown-item">
            <span className="count">23</span>
            <span className="unit">分</span>
          </div>
          <div className="countdown-item">
            <span className="count">45</span>
            <span className="unit">秒</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 