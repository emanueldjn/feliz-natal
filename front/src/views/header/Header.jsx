import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <div className='hero'>
        <div className='container-content'>
            <div className='container-descricao'>
                <img src="./src/assets/imgs/logo.svg" alt="logo Feliz Natal" />
                <h1>Uma <span style={{ color: '#CD3C32' }}> plataforma de doação </span>para espalhar alegria</h1>
                <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
                <button  className='button-container-content'>Fazer uma doação</button>
            </div>
            <div className='container-content-2'>
                <img src="./src/assets/imgs/imagem.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header