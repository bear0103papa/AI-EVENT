import React from 'react';
import './Keynotes.css';

const Keynotes = () => {
  const keynotes = [
    {
      id: 1,
      title: 'AI大歷史：從圖靈到2050年的AI演進',
      speaker: '李教授',
      speakerTitle: 'AI研究所所長',
      icon: 'fa-brain',  // Font Awesome 大腦圖標
      description: '本演講將帶您橫跨AI發展的歷史長河，從圖靈測試的概念提出，到當前大模型的快速發展，並大膽預測2050年AI技術將如何改變我們的世界。',
      time: '13:00 - 13:40',
      session: '上半場'
    },
    {
      id: 2,
      title: 'AI在各行各業應用的情形',
      speaker: '王總監',
      speakerTitle: '科技產業策略顧問',
      icon: 'fa-chart-network',  // Font Awesome 網絡圖表圖標
      description: '探討AI技術如何在製造、醫療、金融、零售等不同產業中創造價值，分析成功案例並展望未來發展趨勢。',
      time: '14:30 - 15:10',
      session: '下半場'
    }
  ];

  return (
    <section className="keynotes-section" id="keynotes">
      <div className="container">
        <h2 className="section-title">主題演講</h2>
        <div className="keynotes-container">
          {keynotes.map(keynote => (
            <div className="keynote-card" key={keynote.id}>
              <div className="keynote-image">
                <i className={`fas ${keynote.icon} keynote-icon`}></i>
                <div className="session-badge">{keynote.session}</div>
              </div>
              <div className="keynote-content">
                <h3 className="keynote-title">{keynote.title}</h3>
                <p className="keynote-speaker">
                  <span className="speaker-name">{keynote.speaker}</span>
                  <span className="speaker-title">{keynote.speakerTitle}</span>
                </p>
                <p className="keynote-time">{keynote.time}</p>
                <p className="keynote-description">{keynote.description}</p>
                <a href="#registration" className="keynote-register">加入演講</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keynotes; 