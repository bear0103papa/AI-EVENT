import React from 'react';
import './Speakers.css';

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: '李教授',
      title: 'AI研究所所長',
      initial: '李',
      bio: '李教授在AI領域擁有超過20年研究經驗，曾參與多項重大AI研究計劃，現任AI研究所所長，專注於AI技術發展趨勢研究。'
    },
    {
      id: 2,
      name: 'Richard',
      title: '浪潮工程師',
      initial: 'R',
      bio: 'Richard是浪潮公司資深工程師，專注於AI硬體架構設計，擁有豐富的ASIC和GPU開發經驗，參與過多項前沿AI硬體研發項目。'
    },
    {
      id: 3,
      name: '王總監',
      title: '科技產業策略顧問',
      initial: '王',
      bio: '王總監擁有超過15年科技產業經驗，曾任職於多家頂尖科技公司，現為獨立科技策略顧問，專注於AI技術商業化應用研究。'
    },
    {
      id: 4,
      name: 'Richard (TNL)',
      title: 'TNL整合長',
      initial: 'R',
      bio: 'TNL資深整合長，負責媒體技術創新與內容策略，在數位媒體轉型與AI應用方面擁有豐富的實戰經驗。'
    },
    {
      id: 5,
      name: 'Edward',
      title: 'TNL技術總監',
      initial: 'E',
      bio: 'Edward在金融科技與媒體技術領域有深厚的背景，現任TNL技術總監，領導團隊探索AI在內容生產與金融分析的創新應用。'
    }
  ];

  return (
    <section className="speakers-section" id="speakers">
      <div className="container">
        <h2 className="section-title">講者陣容</h2>
        <div className="speakers-grid">
          {speakers.map(speaker => (
            <div className="speaker-card" key={speaker.id}>
              <div className="speaker-image">
                <div className="speaker-avatar">
                  <span className="speaker-initial">{speaker.initial}</span>
                </div>
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                <p className="speaker-bio">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers; 