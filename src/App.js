import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Course from './components/Courses/Course';


function App() {
  return (
    <div className="container">

       <Header></Header>
       <faKeData></faKeData>
       <Course></Course>
       
    </div>
  );
}

export default App;
