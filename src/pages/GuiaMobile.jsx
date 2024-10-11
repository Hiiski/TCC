import { Link } from 'react-router-dom'

import Header2 from './Header2'
import red from '/solvermei.svg'
import yout from '/youtube.svg'
import jogo from '/volei.png'
import MenuRed from '/menu_red.svg'

export function GuiaMobile() {
  return (
    <main className='bg-sand text-dark-blue font-alata h-screen max-lg:md:h-full '>
      <section>
        <header className='lg:hidden flex font-medium text-4xl px-8 list-none flex flex-col'>
          <Header2></Header2>

          <img className=' mt-4 size-12 justify-self-center place-self-center mt-16' src={red} alt="" />
          <h2 className='font-super-ocean text-3xl place-self-center mb-16 mt-4'>Guia de Utilização</h2>
        </header>

        <header className='flex justify-between items-center h-40 mx-12 max-lg:hidden'>
          <div className='flex mt-10'>
            <img className='size-16' src={red} alt="" />
            <h2 className='max-lg:text-xl font-super-ocean text-43 ml-4 gap-4 flex self-center'>Guia de Utilização</h2>
          </div>

          <div className='flex justify-end space-x-10 max-xl:text-xl list-none w-4/6 xl:text-2xl '>
            <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/'>O projeto</Link></li>
            <li className='decoration-2 underline underline-offset-8 uppercase underline decoration-dark-red'><Link to='/Guia'>Guia</Link></li>
            <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Peças'>Peças</Link></li>
            <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Referencias'>Referências</Link></li>
            <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Equipe'>Equipe</Link></li>
          </div>
        </header>

        <section className='lg:flex lg:mx-10 items-center'>
          <div className='leading-normal text-dark-blue text-pretty text-justify max-xl:mx-16 text-sm mx- flex flex-col space-y-2 lg:text-26 lg:w-2/4 xl:mx-16'>
            <p>1. Cadastre-se no aplicativo, colocando suas informações e selecionando suas preferências.</p>
            <p>2. Ligue o Bluetooth do seu celular.</p>
            <p>3. Após isso é só aguardar o aviso do SunTech para a reaplicação e recomendação do seu protetor solar.</p>
            <p>4. Para acionar o dispenser coloque suas mãos embaixo da torneira, e o protetor sairá automaticamente na quantidade correta para aplicação.</p>
            <p>5. Agora você pode guardar seus itens e aproveitar a praia!</p>
          </div>

          <div className='flex flex-col items-center lg:flex items-center'>
            <img className='sm:size-48 md:mr-8 max-sm:size-20 self-end max-sm:mr-16' src={jogo} alt="" />
            <img className='lg:w-740 lg:h-470 max-sm:w-375 max-sm:h-225' src={yout} alt="" />
          </div>
        </section>


        <div className='flex justify-center bg-dark-red max-sm:absolute inset-x-0 bottom-0 max-xl:sm:absolute inset-x-0 bottom-0 2xl:absolute inset-x-0 bottom-0'>
          <p className='text-lg font-super-ocean text-white'>SunTech</p>
          <p className='ml-2 text-base font-alata text-white'>© 2024</p>
        </div>
      </section>
    </main>
  )
}
