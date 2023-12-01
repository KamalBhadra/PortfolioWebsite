import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText
} from '@coreui/react';
import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FcPhone } from "react-icons/fc";
import { TfiEye } from "react-icons/tfi";

export default function Contact() {
  return (
    <section className="contact">
      <CCard className='card'>
        <CCardHeader className='card-header'>Connect with me </CCardHeader>
        <CCardBody className='card-body'>

          <CCardText className='card-text'>Thank you for your interest! Feel free to reach out through any of the following channels.</CCardText>
          <CCardText style={{fontSize:'1.7rem'}}> <AiOutlineMail className='icons-text'/>kamalbhanushaliat@gmail.com</CCardText>
          <CCardText><FcPhone className='icons-text'/>   +91-6357101234</CCardText>
          <div className="buttons">
            <CButton href="https://www.linkedin.com/in/kamal-bhadra/" target="_blank" className=' card-btn' id="linkedin-btn">View LinkedIn <TfiEye className='icons' /></CButton>
            <CButton href="https://github.com/KamalBhadra/" target="_blank" className=' card-btn' id='github-btn'>View GitHub <TfiEye className='icons' /></CButton>
          </div>
        </CCardBody>
      </CCard>
    </section>
  )
}
