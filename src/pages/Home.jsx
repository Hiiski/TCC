import React from 'react'
import Sol from '/white-sun.svg'
import IconPerson from '/person-icon.svg'
import Lampada from '/idea-icon.svg'
import Alvo from '/alvo-icon.svg'
import SetaBaixo from '/seta-baixo.svg'

export function Home() {
  return (

    <main className='font-alata bg-sand'>

      <header>
      <div className='bg-beach bg-cover h-svh w-svw'>

        <div className='flex mb-20 uppercase font-medium text-4xl px-8 list-none text-white'>
          <img className='ml-10 mr-20 mt-20 h-24'src={Sol} alt=""/>

          <li className='mx-16 my-28 ' text-color-><a href="/">O projeto</a></li>
          <li className='mx-16 my-28 '><a href="/Guia">Guia</a></li>
          <li className='mx-16 my-28 '><a href="/Peças">Peças</a></li>
          <li className='mx-16 my-28 '><a href="/Referencias">Referências</a></li>
          <li className='mx-16 my-28 '><a href="/Equipe">Equipe</a></li>
        </div>

        <div className='flex flex-col mb-20 items-center text-white'>
          <h1 className='font-super-ocean text-plus'>SunTech</h1>
          <p className='text-4xl'>Cuidar da pele e aproveitar o sol nunca foi tão fácil.</p>
        </div>

      </div>
      </header>

      <div className='flex flex-col mb-20 items-center text-dark-blue'>
        <img className='h-16' src={SetaBaixo} alt="seta para baixo" />
        <h2 className='font-super-ocean text-5xl my-8'>O Projeto</h2>
        <p className='text-justify text-3xl mx-40'>
          Apresentamos o SunTech, um projeto inovador que combina proteção solar inteligente com praticidade. Monitorando os raios UV e alertando quando é hora de reaplicar o protetor solar recomendando o FPS adequado, ele faz com que o usuário tenha uma experiência personalizada de utilização. Além disso, possui um sistema de dispensação precisa de protetor solar e funciona como uma necessaire para seus itens de praia.
        </p>
      </div>
      
      <section className='text-2xl text-white'>

      <section className='flex mb-20 ml-96 items-center bg-dark-blue justify-end rounded-l-full bg-opacity-57 text-right'>
        <img src={Alvo} alt="" className='h-16 ml-20'/>
        <p className='p-8 ml-20'>Nosso objetivo é assegurar que todos possam desfrutar do sol com segurança e conforto, promovendo o aproveitamento responsável do sol. Ao unir praticidade e tecnologia, buscamos satisfazer as necessidades da população e turistas do litoral. </p>
      </section>

      <section className='flex mb-20 mr-96 items-center bg-dark-blue justify-start rounded-r-full bg-opacity-57 text-left'>
        <p className='p-8 mr-20'>Destinado a todos os amantes da praia que buscam praticidade e tecnologia integrada em seu dia a dia. Nosso público-alvo é diverso e abrange desde jovens que praticam atividades ao ar livre até famílias que desfrutam de momentos de lazer à beira-mar.</p>
        <img src={IconPerson} alt="" className='h-16 mr-20'/>
      </section>

      <section className='flex mb-20 ml-96 items-center bg-dark-blue justify-end rounded-l-full bg-opacity-57 text-right'>
        <img src={Lampada} alt="" className='h-16 ml-20'/>
        <p className='p-8 ml-20'>O diferencial do SunTech é a combinação de praticidade, tecnologia e proteção solar, oferecendo uma solução completa em comparação a outros produtos que podem oferecer apenas uma parte desses elementos.</p>
      </section>

      </section>

      <div className='flex justify-center bg-dark-red'>
        <p className='text-lg font-super-ocean text-white'>SunTech</p>
        <p className='ml-2 text-base font-alata text-white'>©2024</p>
      </div>

    </main>
  )
}
