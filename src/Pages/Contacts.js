import React from 'react';
import linkedin from '../components/img/linkedin.png';
import insta from '../components/img/insta@3x.png';
import fb from '../components/img/facebook@3x.png';
import '../styling/Contacts.css';

function Contact()
{
    return <div className='contact-container'>
         
         <div className='contact-card'>
             <h2>REACH US AT</h2>
             

             <h3>support@kicksup.com</h3>
             <h5>for any technical support</h5>

             <h3>info@kicksup.com</h3>
             <h5>for more information</h5>

             <h3>feedback@kicksup.com</h3>
             <h5>to send your feedback</h5>

             <h3>jobs@kicksup.com</h3>
             <h5>to work with us</h5>

         </div>

         <footer>
             <h4>Stay In Touch</h4>
             <div className='footer-social'>
                 <a href="#"><img className='social-img' src={linkedin} /></a>
                 <a href="#"><img className='social-img' src={insta} /></a>
                 <a href="#"><img className='social-img' src={fb} /></a>
             </div>
         </footer>

    </div>;
}


export default Contact;