import React from 'react';
import './Resume.css';
import myPDF from '../../assets/Resume/Connor_Clu_Resume.pdf';

function Resume() {
    return(
       <section>
           <div className='resume-background'>
               <h1 className='resume-titles'>Resume &amp; Tech Stack</h1>
               <p className='skill-list'>MongoDB, Express, React, Node.js, Mongoose, Jest, Inquirer.js, Handlebars.js, mySQL, Sequelize, Sequelite, Bootstrap, AJAX, Materialize</p>
               <h2 className='language-titles'>Languages</h2>
               <p className='languages'>HTML, CSS, Javascript/jQuery, SQL</p>
               <button><a href={myPDF} download='Connor_Clu_Resume.pdf' className='btn-link'>Resume&nbsp;<span className="iconify" data-icon="fe:download" data-inline="false"></span></a></button>
           </div>
       </section>
    )
}

export default Resume;