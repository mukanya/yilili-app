import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Lesson from '../../language-app-user-2.0-main/views';
import "./contact-card.css";


function ContactCard({ item }) {
  return (
    <div className="contact-card">
      <div className="contact-top">
        <img src={item.avatar} className="contact-avatar" />
        <div className="contact-info">
          {/* <div className={item.name} > */}
        {/* <div className="contact-info" onclick={('')}> */}
          {/* <label className="contact-title"> */}
            {/* <div>
                  <nav><Link to="lesson">Lesson</Link></nav>
            </div> */}
          
            
            {/* </label> */}
          {/* <label className="contact-subtitle">{item.type}</label> */}
          {/* <label classname="contact-uuid">{item.uuid}</label> */}
        {/* </div>
        </div> */}



        <div className="contact-info" onclick="startLesson()">
        <div className="contact-info" onclick={('')}>
          <label className="contact-title"><a href={<Lesson />} className='link'>{item.name}</a></label>
          <label className="contact-subtitle">{item.type}</label>
          <label classname="contact-uuid">{item.uuid}</label>
          </div>
          </div>
        </div>
      </div>
      <div className="contact-icons">
        <div className="contact-icon">
          <i class="fi-rr-microphone"></i>
        </div>
        <div className="contact-icon">
          <i class="fi-rr-play-alt"></i>
        </div>
        <div className="contact-icon">
          <i class="fi-rr-menu-dots"></i>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
