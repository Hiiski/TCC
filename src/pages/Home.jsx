import React from 'react'
import Sol from '/whiteSun.svg'
import IconPerson from '/personIcon.svg'
import Lampada from '/ideiaIcon.svg'
import Alvo from '/alvo.svg'

export function Home() {
  return (

    <section className='bg-sand'>
      <div className='bg-Background bg-cover h-svh w-svw'>
        <div className='flex mb-20 uppercase font-medium text-4xl px-8 list-none text-white'>
          <img src={Sol} alt="" className='size-24'/>
       
          <li className='ml-80 my-8'><a href="/">O projeto</a></li>
          <li className='mx-20 my-8'><a href="/Guia">Guia</a></li>
          <li className='mx-20 my-8'><a href="/Peças">Peças</a></li>
          <li className='mx-20 my-8'><a href="/Referencias">Referencias</a></li>
          <li className='mx-20 my-8'><a href="/Equipe">Equipe</a></li>
        </div>

        <div className='flex flex-col mb-20 items-center text-white'>
          <h1 className='pb-8 text-9xl font-bold'>SunTech</h1>
          <p>Cuidar da pele e aproveitar o sol nunca foi tão fácil.</p>
        </div>
      </div>


      <div className='flex flex-col mb-20 items-center text-blue-900'>
        <h2 className='text-4xl my-8 font-bold'>O Projeto</h2>

        <p className='mx-40'>
          Apresentamos o SunTech, um projeto inovador que combina proteção solar inteligente com praticidade. Monitorando os raios UV e alertando quando é hora de reaplicar o protetor solar recomendando o FPS adequado, ele faz com que o usuário tenha uma experiência personalizada de utilização. Além disso, possui um sistema de dispensação precisa de protetor solar e funciona como uma necessaire para seus itens de praia.
        </p>
      </div>
      
      <div className='flex mb-20 ml-80 items-center bg-blue-500 justify-end rounded-l-full'>
        <img src={IconPerson} alt="" className='m-4'/>
        <p>Nosso objetivo é assegurar que todos possam desfrutar do sol com segurança e conforto, promovendo o aproveitamento responsável do sol. Ao unir praticidade e tecnologia, buscamos satisfazer as necessidades da população e turistas do litoral. </p>
      </div>

      <div className='flex mb-20 mr-80 items-center bg-blue-500 justify-start rounded-r-full'>
        <p>Destinado a todos os amantes da praia que buscam praticidade e tecnologia integrada em seu dia a dia. Nosso público-alvo é diverso e abrange desde jovens que praticam atividades ao ar livre até famílias que desfrutam de momentos de lazer à beira-mar.</p>
        <img src={Lampada} alt="" className='m-4'/>
      </div>

      <div className='flex mb-20 ml-80 items-center bg-blue-500 justify-end rounded-l-full'>
        <img src={Alvo} alt="" className='m-4'/>
        <p>O diferencial do SunTech é a combinação de praticidade, tecnologia e proteção solar, oferecendo uma solução completa em comparação a outros produtos que podem oferecer apenas uma parte desses elementos.</p>
      </div>

      <div className='flex justify-center bg-red-800 font-bold text-white'>
                <p className=''>SunTech @2024</p>
      </div>

    </section>

    
  )
}
