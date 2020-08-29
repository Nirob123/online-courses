import React from 'react';
import './CourseData.css';
const CourseData = (props) => {
  const name=props.name;
  const instructor=props.instructor;
  const price=props.price;
  const img=props.img;
  const handleAddCourse=props.handleAddCourse;
    return (
        <div className="course-data container">
          <div className="course-img">
               <img style={{width:"250px", height:"200px"}} src={img} alt=""/>
              </div> 
              <div className="course-name">
    <h3>Course:{name}</h3>
            <br/>
    <h3>Instructor:{instructor}</h3>
            <br/>
    <h4>Price:{price}</h4>
           <br/>
           <button onClick={()=>handleAddCourse(props.name)} className="btn btn-outline-success">Enroll Now</button> 
              </div>
              
        </div>
    );
};

export default CourseData;