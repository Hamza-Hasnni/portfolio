import React, { useState } from 'react';
import axios from 'axios';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';


import './footer.scss';

const apiUrl = process.env.REACT_APP_API_URL;

interface FormData {
  username: string;
  useremail: string;
  message: string;
}

const Footer: React.FC = () => {

  
  const [formData, setFormData] = useState<FormData>({
    username: '',
    useremail: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, useremail, message } = formData;

  const handleChangeInput = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios.post(`${apiUrl}/api/email`, formData);
      alert('Email sent successfully');
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }

    setFormData({
      username: '',
      useremail: '',
      message: ''
    });
    setLoading(false);
  };


  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hamza.hasnni@gmail.com" className="p-text">hamza.hasnni@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+216 (99) 716-956" className="p-text">+216 (99) 716-956</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="useremail" value={useremail} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
