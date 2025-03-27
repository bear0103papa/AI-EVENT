import React from 'react';
import './Forums.css';

const Forums = () => {
  const forums = [
    {
      id: 1,
      title: 'ASIC與GPU誰會成為贏家，未來的AI終端硬體會有哪些機會',
      moderator: '陳博士',
      panelists: [
        {
          name: 'Richard',
          title: '浪潮工程師',
          initial: 'R'
        }
      ],
      description: '隨著AI應用的普及，計算硬體的競爭也日益激烈。本論壇將深入探討ASIC與GPU在AI領域的優勢與挑戰，分析未來AI終端硬體的發展趨勢與投資機會。',
      time: '13:50 - 14:20',
      session: '上半場'
    },
    {
      id: 2,
      title: 'AI在媒體、生產力與金融上的可能性',
      moderator: '張總編',
      panelists: [
        {
          name: 'Richard',
          title: 'TNL整合長',
          initial: 'R'
        },
        {
          name: 'Edward',
          title: 'TNL技術總監',
          initial: 'E'
        }
      ],
      description: '本論壇將討論AI如何重塑媒體內容生產、提升工作效率，以及在金融領域創造新的服務模式與投資策略。',
      time: '15:20 - 15:50',
      session: '下半場'
    }
  ];

  return (
    <section className="forums-section" id="forums">
      <div className="container">
        <h2 className="section-title">論壇討論</h2>
        <div className="forums-container">
          {forums.map(forum => (
            <div className="forum-card" key={forum.id}>
              <div className="forum-header">
                <h3 className="forum-title">{forum.title}</h3>
                <div className="session-badge">{forum.session}</div>
                <p className="forum-time">{forum.time}</p>
              </div>
              <div className="forum-content">
                <p className="forum-moderator">主持人：{forum.moderator}</p>
                <div className="forum-panelists">
                  {forum.panelists.map((panelist, index) => (
                    <div className="panelist" key={index}>
                      <div className="panelist-image">
                        <span>{panelist.initial}</span>
                      </div>
                      <div className="panelist-info">
                        <span className="panelist-name">{panelist.name}</span>
                        <span className="panelist-title">{panelist.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="forum-description">{forum.description}</p>
                <a href="#registration" className="forum-register">參與討論</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forums; 