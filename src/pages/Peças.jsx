import duino from '/ardoino.svg'
import red from '/solvermei.svg'
import boom from '/bomba.svg'
import seen from '/volei.svg'

export function Peças() {
  return (
    <section className='bg-sand'>
      <div className='flex mb-20 font-medium text-4xl px-8 list-none'>
        <img src={red} alt="" />
        <h2 className='ml-4 my-8'>Referências Bibliográficas</h2>

        <li className='ml-40 my-8 uppercase'><a href="/">O projeto</a></li>
        <li className='mx-10 my-8 uppercase'><a href="/Guia">Guia</a></li>
        <li className='mx-10 my-8 uppercase'><a href="/Peças">Peças</a></li>
        <li className='mx-10 my-8 uppercase'><a href="/Referencias">Referencias</a></li>
        <li className='mx-10 my-8 uppercase'><a href="/Equipe">Equipe</a></li>
      </div>

      <div>
        <img src={duino} alt="" />
        <h2>Placa Arduino</h2>
        <p>R$49,90</p>
      </div>

      <div>
        <img src={boom} alt="" />
        <h2>Bomba Peristáltica</h2>
        <p>R$69,90</p>
      </div>

      <div>
        <img src={seen} alt="" />
        <h2>Sensor Ultrassônico</h2>
        <p>R$12,90</p>
      </div>

      <div className='flex justify-center bg-red-800 font-bold text-white'>
        <p className=''>SunTech @2024</p>
      </div>

    </section>
  )
}
