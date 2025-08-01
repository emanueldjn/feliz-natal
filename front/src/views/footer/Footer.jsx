import React from 'react'
import './styles.css'

const Footer = () => {
  return (
    <div className='hero'>
        <div className='footer-main'>
            <div className='footer-logo'>
                <img src="./src/assets/imgs/logo.svg" alt="logo Feliz Natal" />
            </div>

            <div className='footer-icons'>
                <img src="./src/assets/imgs/logo-twitter.svg" alt="" />
                <img src="./src/assets/imgs/logo-whatsapp.svg" alt="" />
                <img src="./src/assets/imgs/logo-instagram.svg" alt="" />
                <img src="./src/assets/imgs/logo-facebook.svg" alt="" />
                <img src="./src/assets/imgs/logo-google.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer