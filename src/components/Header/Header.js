import React from 'react';
import css from './Header.css';
const Header = () => {
  return (
    <div className="header container container">
      <img className="logo" src="https://w7.pngwing.com/pngs/382/328/png-transparent-online-degree-course-lecturer-learning-student-massive-open-online-course-text-logo-teacher.png" alt=""/>
      <nav>
        <a href="/home">Home</a>
        <a href="courses">Courses</a>
        <a href="contact-us">Contact-Us</a>
      </nav>
    </div>
  );
};

export default Header;