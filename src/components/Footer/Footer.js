import React from 'react';
import './Footer.css'
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FooterLinks } from '../../data/footer.data';

function Footer() {
    return (

      
        <footer >
          <div className='footer-container'>
              <div>
              <h5 className="text-uppercase underline">Account</h5>
              <ul className='links'>
                {
                    FooterLinks.categoryLinks.map((item) => (
                        <li key={item.id}>
                        <Link className="link" to={'/'}>
                          {item.linkName}
                        </Link>
                      </li>
                    ))
                }
                </ul>
              </div>
           
              <div>
              <h5 className="text-uppercase underline">Account</h5>
                <ul className='links'>
                    {
                        FooterLinks.categoryLinks.map((item) => (
                            <li key={item.id}>
                            <Link className="link" to={'/'}>
                              {item.linkName}
                            </Link>
                          </li>
                        ))
                    }
                  </ul>
              </div>

              <div>
              <h5 className="text-uppercase underline">Account</h5>
                <ul className='links'>
                    {
                        FooterLinks.categoryLinks.map((item) => (
                            <li key={item.id}>
                            <Link className="link" to={'/'}>
                              {item.linkName}
                            </Link>
                          </li>
                        ))
                    }
                  </ul>
              </div>

         
          </div>

          <div className='footer-last-row'> 
                © 2022, All rights reserved
            Made with  by Md Talha
          </div>
                  

           

            
        </footer>
    )
}

export default Footer
