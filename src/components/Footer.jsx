import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>AI投資大會</h2>
            <p>探索AI革命下的投資新機遇</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>活動資訊</h3>
              <ul>
                <li><a href="#overview">活動概覽</a></li>
                <li><a href="#keynotes">主題演講</a></li>
                <li><a href="#forums">論壇討論</a></li>
                <li><a href="#schedule">活動日程</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>關於我們</h3>
              <ul>
                <li><a href="#about">主辦單位</a></li>
                <li><a href="#partners">合作夥伴</a></li>
                <li><a href="#contact">聯絡我們</a></li>
                <li><a href="#privacy">隱私政策</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>關注我們</h3>
              <div className="social-links">
                <a href="#!" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#!" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#!" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                <a href="#!" className="social-link"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          
          <div className="footer-subscribe">
            <h3>訂閱最新活動資訊</h3>
            <div className="subscribe-form">
              <input type="email" placeholder="您的電子郵件" />
              <button type="submit">訂閱</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 AI投資大會. 版權所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 