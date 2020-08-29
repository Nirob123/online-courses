import React, { useState } from 'react';
import './Course.css';
import CourseData from '../Course-data/CourseData';


const Course = () => {
const [count,setCount]=useState([]);
const handleAddCourse=(course)=>{
    setCount(count+1)
}

let total=0;
for (let i = 0; i < count.length; i++) {
    const course = count[i];
    total=total+course.price;}

    return (
        <div className="course-container container">
           <div className="courses">
            
           <CourseData handleAddCourse={handleAddCourse}  name="Full Stack Web Developer" instructor="Jhankar Mahbub" price="$200" img="https://www.codingdojo.com/blog/wp-content/uploads/FULL-STACK-DEV-GRAPH-2.jpg" ></CourseData>
          <CourseData  handleAddCourse={handleAddCourse}  name="Compleate Web Developer" instructor="Programming Hero Team" price="$100" img="https://bangla2.programming-hero.com/wp-content/uploads/2020/06/slider-img1.png" ></CourseData>
          <CourseData handleAddCourse={handleAddCourse}  name="SEO" instructor="Abdul Kader" price="$67" img="https://www.okike.in/front/images/services/seo.jpg" ></CourseData>
          <CourseData handleAddCourse={handleAddCourse}  name="Wordpress Development" instructor="Mosiur Rahman" price="$65" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlzEdK-R6qbyW4nXhP1SKE-l2JcDC-J_w6hg&usqp=CAU" ></CourseData>
          <CourseData  handleAddCourse={handleAddCourse} name="Adobe Photoshop" instructor="Jhankar Mahbub" price="$40" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSquYlx_3_miHu4dygp1GI51a9UnwNvkH7U9A&usqp=CAU" ></CourseData>
          <CourseData handleAddCourse={handleAddCourse} name="Adobe Illustrator" instructor="Tanvir Rasel" price="$20" img="https://img-a.udemycdn.com/course/750x422/3207717_3497_2.jpg" ></CourseData>
          <CourseData handleAddCourse={handleAddCourse} name="HTML & CSS" instructor="Solaiman Sukhon" price="$20" img="https://img-a.udemycdn.com/course/750x422/1478856_fbef_3.jpg" ></CourseData>
          <CourseData handleAddCourse={handleAddCourse} name="JavaScript" instructor="Pro Rasel" price="$15" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLhZvMrLuKOctIzMBHy_klP_niKnPrMAVdiA&usqp=CAU" ></CourseData>
          <CourseData handleAddCourse={handleAddCourse}  name="React & Nodejs" instructor="Rezaul Karim" img="https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/https://scotch.io/wp-content/uploads/2014/10/learning-react-real-time-node.png" price="$25" ></CourseData>
          <CourseData  handleAddCourse={handleAddCourse} name="Phython" instructor="Jhankar Mahbub" price="$70" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiWdcb31qcJ9_ZCqQcnFVhpF4ea-1lRnn1bw&usqp=CAU" > </CourseData>
         
           </div>
           <div className="cart">
              <h1> Order Summary</h1>
    <h3>Your courses:{count.length}</h3>
    <h5>Course Price:{total}</h5>
    <h3>Total Price:{total}</h3>
     <button className="btn btn-primary btn-lg">Order Now</button>
           </div>
        </div>
    
    );
};

export default Course;