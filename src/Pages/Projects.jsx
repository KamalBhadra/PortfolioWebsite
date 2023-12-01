import '@coreui/coreui/dist/css/coreui.min.css';
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { TfiEye } from "react-icons/tfi";


export default function Projects() {




  return (
    <section className="projects">
      <div className="box">
        <div className="title">
          Instagram Web Clone
        </div>
        <div className="row">
          <div className="project-year">2023</div>
          <div className="project-name">React.js Application</div>
        </div>

        <div className="cards">
          <CCard className='card'>
            <div className="card-image">
              <CCardImage orientation="top" src="/Images/instagram-two.png" />

            </div>
            <CCardBody className='card-body'>
              <CCardTitle className='title'>Instagram Web Clone</CCardTitle>
              <CCardText className='text'>
              Crafted an Instagram clone using React.js, with profiles, modals, and dynamic galleries. Achieved seamless navigation through React Router and implemented custom styles for an authentic aesthetic. Loaded with interactive features like likes and comments.
              </CCardText>
              <CButton href="https://web-clone-instagram.netlify.app" target='_blank' className='card-btn'>View Project <TfiEye className='icons' /> </CButton>
            </CCardBody>
          </CCard>
        </div>

      </div>

      <div className="box">
        <div className="title">
          Music Player
        </div>
        <div className="row">
          <div className="project-year">2023</div>
          <div className="project-name">React.js Application</div>
        </div>

        <div className="cards">
          <CCard className='card'>
            <div className="card-image">
              <CCardImage orientation="top" src="/Images/musicplayer-two.png" />

            </div>
            <CCardBody className='card-body'>
              <CCardTitle className='title'>Music Player</CCardTitle>
              <CCardText className='text'>
                Dive into a visual and auditory feast with React.js-powered music player. Immerse yourself in a sleek UI that effortlessly combines style with seamless play, pause, and song selection. Elevate your music experience – where aesthetics meet functionality.
              </CCardText>
              <CButton href='https://music-player-reactjs-web.netlify.app/' target='_blank' className='card-btn'>View Project <TfiEye className='icons' /> </CButton>
            </CCardBody>
          </CCard>
        </div>

      </div>

      <div className="box">
        <div className="title">
          Weather Application
        </div>
        <div className="row">
          <div className="project-year">2023</div>
          <div className="project-name">React.js Application</div>
        </div>

        <div className="cards">
          <CCard className='card'>
            <div className="card-image">
              <CCardImage orientation="top" src="/Images/weather-four.png" />

            </div>
            <CCardBody className='card-body'>
              <CCardTitle className='title'>Weather Application</CCardTitle>
              <CCardText className='text'>
                Crafted a sleek weather app using Axios, seamlessly fetching data from a weather API. Elevate your experience with dynamic icons and location-based search. Integrated Unsplash API for captivating visuals, showcasing a commitment to engaging UI design.
              </CCardText>
              <CButton href='https://weather-app-reactjs-web.netlify.app' target='_blank' className='card-btn'>View Project <TfiEye className='icons' /> </CButton>
            </CCardBody>
          </CCard>
        </div>

      </div>

      <div className="box">
        <div className="title">
          Todos Application
        </div>
        <div className="row">
          <div className="project-year">2023</div>
          <div className="project-name">React.js Application</div>
        </div>

        <div className="cards">
          <CCard className='card'>
            <div className="card-image">
              <CCardImage orientation="top" src="/Images/todos.png" />

            </div>
            <CCardBody className='card-body'>
              <CCardTitle className='title'>Todos Application</CCardTitle>
              <CCardText className='text'>
                Created a dynamic todo list application with built-in drag-and-drop functionality. This application utilizes React DnD or similar libraries to enable users to seamlessly organize their tasks into draggable sections, streamlining task management and enhancing user productivity.
              </CCardText>
              <CButton href='https://todos-drag-and-drop.netlify.app' target='_blank' className='card-btn'>View Project <TfiEye className='icons' /> </CButton>
            </CCardBody>
          </CCard>
        </div>

      </div>


    </section>
  )
}
