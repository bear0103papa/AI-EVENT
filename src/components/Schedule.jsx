import React, { useState } from 'react';
import './Schedule.css';
const Schedule = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const scheduleData = [
    {
      id: 1,
      title: '報到與交流',
      type: 'registration',
      time: '12:30 - 13:00',
      description: '與會者報到並領取會議資料，提供交流機會'
    },
    {
      id: 2,
      title: 'AI大歷史：從圖靈到2050年的AI演進',
      type: 'keynote',
      time: '13:00 - 13:40',
      speaker: '李教授',
      session: '上半場',
      description: '回顧AI發展史，展望未來AI技術演進方向'
    },
    {
      id: 3,
      title: '茶歇時間',
      type: 'break',
      time: '13:40 - 13:50',
      description: '短暫休息與交流'
    },
    {
      id: 4,
      title: 'ASIC與GPU誰會成為贏家，未來的AI終端硬體會有哪些機會',
      type: 'forum',
      time: '13:50 - 14:20',
      speaker: 'Richard (浪潮工程師)',
      moderator: '陳博士',
      session: '上半場',
      description: '探討AI硬體技術路線與投資機會'
    },
    {
      id: 5,
      title: '中場休息',
      type: 'break',
      time: '14:20 - 14:30',
      description: '茶點提供，交流討論時間'
    },
    {
      id: 6,
      title: 'AI在各行各業應用的情形',
      type: 'keynote',
      time: '14:30 - 15:10',
      speaker: '王總監',
      session: '下半場',
      description: '分析AI在不同產業的應用案例與發展趨勢'
    },
    {
      id: 7,
      title: '茶歇時間',
      type: 'break',
      time: '15:10 - 15:20',
      description: '短暫休息與交流'
    },
    {
      id: 8,
      title: 'AI在媒體、生產力與金融上的可能性',
      type: 'forum',
      time: '15:20 - 15:50',
      speakers: ['Richard (TNL整合長)', 'Edward (TNL技術總監)'],
      moderator: '張總編',
      session: '下半場',
      description: '探討AI在媒體、生產力工具與金融領域的創新應用'
    },
    {
      id: 9,
      title: '閉幕與交流時間',
      type: 'networking',
      time: '15:50 - 16:00',
      description: '活動總結與自由交流'
    }
  ];

  const filteredSchedule = activeTab === 'all' 
    ? scheduleData 
    : scheduleData.filter(item => item.session === activeTab || !item.session);

  const getItemClass = (type) => {
    switch(type) {
      case 'keynote': return 'schedule-item keynote';
      case 'forum': return 'schedule-item forum';
      case 'break': return 'schedule-item break';
      case 'registration': return 'schedule-item registration';
      case 'networking': return 'schedule-item networking';
      default: return 'schedule-item';
    }
  };

  return (
    <section className="schedule-section" id="schedule">
      <div className="container">
        <h2 className="section-title">活動日程</h2>
        <div className="schedule-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            完整日程
          </button>
          <button 
            className={`tab-btn ${activeTab === '上半場' ? 'active' : ''}`}
            onClick={() => setActiveTab('上半場')}
          >
            上半場：AI硬體
          </button>
          <button 
            className={`tab-btn ${activeTab === '下半場' ? 'active' : ''}`}
            onClick={() => setActiveTab('下半場')}
          >
            下半場：AI軟體
          </button>
        </div>
        <div className="schedule-timeline">
          {filteredSchedule.map(item => (
            <div className={getItemClass(item.type)} key={item.id}>
              <div className="time-column">
                <span className="time">{item.time}</span>
                {item.session && <span className="session-badge small">{item.session}</span>}
              </div>
              <div className="content-column">
                <h3 className="item-title">{item.title}</h3>
                {item.speaker && <p className="item-speaker">講者：{item.speaker}</p>}
                {item.speakers && <p className="item-speaker">講者：{item.speakers.join('、')}</p>}
                {item.moderator && <p className="item-moderator">主持人：{item.moderator}</p>}
                <p className="item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule; 