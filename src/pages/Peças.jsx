import duino from '/solvermei.svg'
import red from '/solvermei.svg'
import boom from '/youtube.svg'
import seen from '/volei.svg'

export function Peças() {
  return (
   <section>
        <div className = 'bg-gray-500 flex mb-80 uppercase font-medium text-4xl px-8 list-none'>
            <img src= {red} alt="" />
            <li className='p-2'><a href="">O projeto</a></li>
            <li className='p-2'><a href="">Guia</a></li>
            <li className='p-2'><a href="">Peças</a></li>
            <li className='p-2'><a href="">Referencias</a></li>
            <li className='p-2'><a href="">Equipe</a></li>
        </div>

        <div>
            <h2>Peças utilizadas</h2>
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

        <div>
            <p>SunTech @2024</p>
        </div>

   </section>
  )
}
