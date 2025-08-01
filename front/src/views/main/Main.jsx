import React from 'react'
import './styles.css'
import Countdown from '../../components/Countdown/Countdown'

const Main = () => {
  return (
    <div className='hero-main '>
        <div className='container-content-main'>
            <div className='container-descricao-main'>
                <h1>Tempo Limitado</h1>
                <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
            </div>
            <div className='container-contador'>
                {/* coloacar o contador aqui */}
                <Countdown targetDate="2025-12-25T23:59:59" />
            </div>
            <div className='container-descricao-img'>
                <img src="./src/assets/imgs/illustration-1.svg" alt="" />
            </div>
        </div>

        <div className='container-content'>
            <div>
                <img src="./src/assets/imgs/illustration.svg" alt="" />
            </div>
            <div className='container-descricao-main-2'>
                <h1>Conectamos generosidade ao redor do mundo.</h1>
                <p>Celebre a magia do Natal de uma maneira especial! Descubra a plataforma que permite a doação de presentes significativos para aqueles que mais precisam. Faça parte do movimento e compartilhe o verdadeiro espírito da generosidade.</p>
                <button className='button-container-content'>Fazer doação</button>
            </div>
        </div>
    </div>
  )
}

export default Main