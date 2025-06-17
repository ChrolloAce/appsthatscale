'use client'

import React from 'react'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="footer-content">
          <div className="footer-brand">
            <Image 
              src="/bluelogo.png" 
              alt="Apps That Scale Logo" 
              width={32} 
              height={32}
              className="brand-logo"
            />
            <span>Apps That Scale</span>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Course</h4>
              <ul>
                <li><a href="#course">Overview</a></li>
                <li><a href="#what-you-get">What You Get</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Apps That Scale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 