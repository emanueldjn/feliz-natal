import React, { useState } from 'react'
import './styles.css'

const Header = () => {
  const [mostrarPopup, setMostrarPopup] = useState(false)

  const handleDoacaoClick = () => {
    setMostrarPopup(true)
    setTimeout(() => setMostrarPopup(false), 10000)
  }


  return (
    <div className='hero'>
        <div className='container-content'>
            <div className='container-descricao'>
                <img src="public/imgs/logo.svg" alt="logo Feliz Natal" />
                <h1>Uma <span style={{ color: '#CD3C32' }}> plataforma de doação </span>para espalhar alegria</h1>
                <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
                <button onClick={handleDoacaoClick} className='button-container-content'>Fazer uma doação</button>
            </div>
            <div className='container-content-2'>
                <img src="public/imgs/imagem.svg" alt="" />
            </div>
        </div>

        {mostrarPopup && (
          <div className='popup-overlay'>
            <div className='popup-box'>
              <p>🎁 Obrigado pela sua doação!</p>
              <button onClick={() => setMostrarPopup(false)} className='close-button' >fechar</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default Header