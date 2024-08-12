import arduino from '/arduino.svg'
import red from '/solvermei.svg'
import bomb from '/bomba.svg'
import sensor from '/sensor.svg'
import esquerda from '/seta-esq.svg'
import direita from '/seta-dir.svg'

export function Peças() {
  return (
    <main className='font-alata bg-sand'>

      <header className='text-dark-blue'>
      <div className='flex mb-20 font-medium text-4xl px-8 list-none'>
        <img src={red} alt="" />
        <h2 className='text-5xl font-super-ocean ml-4 my-8 text-dark-blue' >Peças Utilizadas</h2>

        <li className='underline underline-offset-8 text-3xl ml-20 uppercase underline hover:underline-offset-dark-red'><a href="/">O projeto</a></li>
        <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Guia">Guia</a></li>
        <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Peças">Peças</a></li>
        <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Referencias">Referências</a></li>
        <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Equipe">Equipe</a></li>
      </div>
      </header>

      <section className='text-white uppercase text-3xl'>
      <img src={esquerda} alt="" />
      <img src={direita} alt="" />
      
      <div className='bg-dark-blue mb-10'>
        <h2>Placa Arduino</h2>
        <img src={arduino} alt="" />
        <p>R$49,90</p>
      </div>

      <div className='bg-dark-blue mb-10'>
        <h2>Bomba Peristáltica</h2>
        <img src={bomb} alt="" />
        <p>R$69,90</p>
      </div>

      <div className='bg-dark-blue mb-10'>
        <h2>Sensor Ultrassônico</h2>
        <img src={sensor} alt="" />
        <p>R$12,90</p>
      </div>
      </section>

      <div className='flex justify-center bg-dark-red'>
        <p className='text-lg font-super-ocean text-white'>SunTech</p>
        <p className='ml-2 text-base font-alata text-white'>©2024</p>
      </div>

    </main>
  )
}
