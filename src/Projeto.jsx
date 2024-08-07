import React from 'react'
import Sol from '/sol white.svg'
import Bg from '/foto bg.svg'

export default function App() {
  return (

    <section>
      <div>
        <img src={Sol} alt="" />
       
        <li><a href="">O projeto</a></li>
        <li><a href="">Guia</a></li>
        <li><a href="">Peças</a></li>
        <li><a href="">Referencias</a></li>
        <li><a href="">Equipe</a></li>
      </div>

      <div>
        <h1>SunTech</h1>
        <p>Cuidar da pele e aproveitar o sol nunca foi tão fácil.</p>
      </div>

      <div>
        <h2>O Projeto</h2>

        <p>
          Apresentamos o SunTech, um projeto inovador que combina proteção solar inteligente com praticidade. Monitorando os raios UV e alertando quando é hora de reaplicar o protetor solar recomendando o FPS adequado, ele faz com que o usuário tenha uma experiência personalizada de utilização. Além disso, possui um sistema de dispensação precisa de protetor solar e funciona como uma necessaire para seus itens de praia.
        </p>
      </div>


    </section>

    
  )
}
