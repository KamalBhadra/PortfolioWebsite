import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle
} from '@coreui/react';
import React from 'react';
import { BiMedal } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { LiaUserCogSolid } from "react-icons/lia";
import { TfiEye } from "react-icons/tfi";
import Hero from '../Components/Hero';

export default function About() {
  return (
    <section className="about">
      <div className="hero-about">
        <Hero />
      </div>

      <CCard className='card'>
        <CCardHeader className='card-header'> <IoPerson className='icons'/>Kamal Bhadra</CCardHeader>
        <CCardBody className='card-body'>
          <CCardText className='card-text'>Hello! I'm a passionate and results-driven professional with a background in Computer Science and extensive experience in both Export Documentation and Web Development. Currently, I am pursuing a Master Certification in Full-Stack Development at I.T.Vedant, Navi Mumbai. Additionally, I am gaining practical experience as an intern in Front-End Development with a focus on React.js.</CCardText>
          {/*<CButton href="#">Go somewhere</CButton> */}
        </CCardBody>
      </CCard>

      <CCard className='card'>
        <CCardHeader className='card-header'> <LiaUserCogSolid className='icons'/> Skills</CCardHeader>
        <CCardBody className='card-body'>
          <CCardText className='card-text'>Skilled in HTML5, CSS/SCSS, JavaScript, React.js , Java, Python, Node.js, MongoDB, MySQL, Angular, and Spring Boot technologies. Values technical collaboration, contributing to project success by translating design mockups into precise web code and enhancing coding standards.</CCardText>
         
          <div className="buttons">
            <CButton href="https://www.linkedin.com/in/kamal-bhadra/" target="_blank" className=' card-btn' id='linkedin-btn'>Visit LinkedIn <TfiEye className='icons' /></CButton>
            <CButton href="https://github.com/KamalBhadra/" target="_blank" className=' card-btn' id='github-btn'>Visit GitHub <TfiEye className='icons' /></CButton>
          </div>
        </CCardBody>

      </CCard>

     

      <CCard className='card'>
        <CCardHeader className='card-header'><FaArrowTrendUp className='icons'/>Work Experience</CCardHeader>
        <CCardBody className='card-body'>
          <CCardTitle className='card-title'>Web Development Intern (Front End)</CCardTitle>
          <CCardText className='card-text'>In my current role as a Front-End Web Developer Intern at kookies.io, I extensively utilize React.js and SCSS as my primary tech stacks for front-end development. I also incorporate libraries such as Material-UI, Core UI, Semantic UI, React Bootstrap, and React Icons from GitHub repositories. </CCardText>
          <CCardText className='card-text'>Additionally, I employ Figma for the design phase of front-end projects. My responsibilities include actively contributing to the development of responsive web designs, implementing SCSS for streamlined styling, and integrating React.js to create interactive features.</CCardText>

          <CCardTitle className='card-title'>Export Documentation</CCardTitle>
          <CCardText>Previously, as an Export Documentation Executive at Aarti Trading, I managed the documentation for import and export activities, dealt with letter of credit processing, and coordinated with various stakeholders for smooth shipments.</CCardText>
          {/*<CButton href="#">Go somewhere</CButton> */}
        </CCardBody>
      </CCard>

      <CCard className='card'>
        <CCardHeader className='card-header'><BiMedal className='icons'/>Certifications</CCardHeader>
        <CCardBody className='card-body'>

          <CCardText className='card-text'>Certified in SQL Fundamentals, Web Design Basics, Professional Web Design, Essential Java, Professional Java, Angular 14, Python Programming, and MERN Essentials.</CCardText>
          <CButton href="https://www.linkedin.com/in/kamal-bhadra/" className=' card-btn'>View On LinkedIn <TfiEye className='icons' /></CButton>
        </CCardBody>
      </CCard>

      <CCard className='card'>
        <CCardHeader className='card-header'><HiAcademicCap className='icons' />Education</CCardHeader>
        <CCardBody className='card-body'>

          <CCardText className='card-text'>I earned my B.C.A in Computer Science from Sanskar Institute of Management & Information Technology, Bhuj, in 2011. Currently, I am pursuing Full-Stack Development from I.T.Vedant, Navi Mumbai, as part of my ongoing efforts to enhance my skills in the field.</CCardText>
          {/*<CButton href="#">Go somewhere</CButton> */}
        </CCardBody>
      </CCard>
      

     



    </section>
  )
}
