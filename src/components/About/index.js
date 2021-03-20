import React from 'react';
import './About.css';
import CluCodes from '../../assets/Picture/clu-Codes.jpg';

function About() {
    return(
        <section>
            <div className='about-me'>
            <h1 className='about-title'>Who Am I?</h1>
            <img 
            src={CluCodes} 
            alt='photo of developer'
            className='clu-img'
            />
            <p className='about-text'>I'm Connor Cluster, a Florida-based full-stack web developer. I'm here to help you navigate the ever-evolving digital ecosystem to empower your business! I'll also share cute pictures of my beloved dog, Sydney. </p>
            </div>
        </section>
    )
}

export default About;