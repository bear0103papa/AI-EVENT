import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    interests: []
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => {
      if (checked) {
        return {
          ...prevState,
          interests: [...prevState.interests, value]
        };
      } else {
        return {
          ...prevState,
          interests: prevState.interests.filter(interest => interest !== value)
        };
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('表單提交數據：', formData);
    // 這裡可以添加表單提交到後端的邏輯
    setFormSubmitted(true);
  };

  return (
    <section className="registration-section" id="registration">
      <div className="container">
        <h2 className="section-title">立即報名</h2>
        <div className="registration-container">
          <div className="registration-info">
            <h3>為什麼要參加？</h3>
            <ul>
              <li>深入了解AI投資最新趨勢</li>
              <li>聆聽業界專家分享前沿洞察</li>
              <li>把握AI硬體與軟體的投資機會</li>
              <li>與行業領袖建立寶貴人脈</li>
              <li>獲取獨家行業報告與資源</li>
            </ul>
            <div className="event-details">
              <div className="detail-item">
                <i className="icon-calendar"></i>
                <span>2024年7月15日 下午1:00-4:00</span>
              </div>
              <div className="detail-item">
                <i className="icon-location"></i>
                <span>台北國際會議中心</span>
              </div>
              <div className="detail-item">
                <i className="icon-ticket"></i>
                <span>免費參加，名額有限</span>
              </div>
            </div>
          </div>
          
          <div className="registration-form-container">
            {formSubmitted ? (
              <div className="form-success">
                <h3>報名成功！</h3>
                <p>感謝您報名參加AI投資大會。我們已經收到您的報名資訊，確認信將發送至您的電子郵件。</p>
                <button className="primary-btn" onClick={() => setFormSubmitted(false)}>返回報名表</button>
              </div>
            ) : (
              <form className="registration-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">姓名 *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">電子郵件 *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">公司/組織</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="title">職稱</label>
                    <input 
                      type="text" 
                      id="title" 
                      name="title" 
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">聯絡電話</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label>您感興趣的主題 (可複選)</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="interests" 
                        value="硬體投資"
                        checked={formData.interests.includes('硬體投資')}
                        onChange={handleCheckboxChange}
                      />
                      AI硬體投資機會
                    </label>
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="interests" 
                        value="軟體應用"
                        checked={formData.interests.includes('軟體應用')}
                        onChange={handleCheckboxChange}
                      />
                      AI軟體應用趨勢
                    </label>
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="interests" 
                        value="媒體應用"
                        checked={formData.interests.includes('媒體應用')}
                        onChange={handleCheckboxChange}
                      />
                      AI在媒體領域的應用
                    </label>
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="interests" 
                        value="金融應用"
                        checked={formData.interests.includes('金融應用')}
                        onChange={handleCheckboxChange}
                      />
                      AI在金融領域的應用
                    </label>
                  </div>
                </div>
                
                <button type="submit" className="submit-btn">確認報名</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration; 