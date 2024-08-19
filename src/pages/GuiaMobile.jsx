import { Link } from 'react-router-dom'

import red from '/solvermei.svg'
import you from '/youtube.svg'
import jogo from '/volei.svg'
import MenuRed from '/menu_red.svg'

export function GuiaMobile() {
  return (
    <main className='bg-sand text-dark-blue font-alata h-screen'>
      <section>
        <header className='lg:hidden flex font-medium text-4xl px-8 list-none flex flex-col'>
          <img className='mt-6 place-self-end size-8' src={MenuRed} alt="" />

          <img className=' mt-4 size-12 justify-self-center place-self-center mt-16' src={red} alt="" />
          <h2 className='font-super-ocean text-5xl place-self-center mb-16 mt-4'>Guia de Utilização</h2>
        </header>

        <header className='flex justify-between items-center h-40 mx-12 max-lg:hidden'>
          <div className='flex'>
            <img className='size-20' src={red} alt="" />
            <h2 className='font-super-ocean text-4xl ml-4 gap-4 flex self-center'>Guia de Utilização</h2>
          </div>

          <div className='flex justify-around max-xl:text-xl list-none w-4/6 xl:text-3xl'>
            <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/'>O projeto</Link></li>
            <li className='underline underline-offset-8 uppercase underline hover:underline decoration-dark-red'><Link to='/Guia'>Guia</Link></li>
            <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Peças'>Peças</Link></li>
            <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Referencias'>Referências</Link></li>
            <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Equipe'>Equipe</Link></li>
          </div>
        </header>

        <section className='lg:flex'>
          <div className='leading-normal text-dark-blue text-pretty text-sm mx-12 flex flex-col space-y-2 lg:text-xl lg:w-2/4 lg:space-y-20'>
            <p>1. Cadastre-se no aplicativo, colocando suas informações e selecionando suas preferências.</p>
            <p>2. Ligue o Bluetooth do seu celular.</p>
            <p>3. Após isso é só aguardar o aviso do SunTech para a reaplicação e recomendação do seu protetor solar.</p>
            <p>4. Para acionar o dispenser coloque suas mãos embaixo da torneira, e o protetor sairá automaticamente na quantidade correta para aplicação.</p>
            <p>5. Agora você pode guardar seus itens e aproveitar a praia!</p>
          </div>

          <div className='flex flex-col items-center lg:place-content-center'>
            {/* <img className='size-40 self-end mx-12' src={jogo} alt="" /> */}
            <img className='max-lg:size-80 lg:size-max lg:size-96' src={you} alt="" />
          </div>
        </section>


        <div className='flex justify-center bg-dark-red absolute inset-x-0 bottom-0'>
          <p className='text-lg font-super-ocean text-white'>SunTech</p>
          <p className='ml-2 text-base font-alata text-white'>© 2024</p>
        </div>
      </section>
    </main>
  )
}
