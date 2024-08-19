import { Link } from 'react-router-dom'

import arduino from '/arduino.svg'
import red from '/solvermei.svg'
import bomb from '/bomba.svg'
import sensor from '/sensor.svg'
import esquerda from '/seta-esq.svg'
import direita from '/seta-dir.svg'
import MenuRed from '/menu_red.svg'

export function PeçasMobile() {
    return (
        <main className='font-alata text-dark-blue bg-sand h-screen'>
            <header className='lg:hidden flex font-medium text-4xl px-8 list-none flex flex-col'>
                <img className='mt-6 place-self-end size-8' src={MenuRed} alt="" />

                <img className=' mt-4 size-12 justify-self-center place-self-center mt-16' src={red} alt="" />
                <h2 className='font-super-ocean text-3xl text-nowrap place-self-center mb-16 mt-4'>Peças Utilizadas</h2>
            </header>

            <header className='flex justify-between items-center h-40 mx-12 max-lg:hidden'>
                <div className='flex mt-10'>
                    <img className='size-16' src={red} alt="" />
                    <h2 className='max-lg:text-xl font-super-ocean text-43 ml-4 gap-4 flex self-center'>Peças Utilizadas</h2>
                </div>

                <div className='flex justify-end space-x-10 max-xl:text-xl list-none w-4/6 xl:text-2xl '>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/'>O projeto</Link></li>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Guia'>Guia</Link></li>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline decoration-dark-red'><Link to='/Peças'>Peças</Link></li>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Referencias'>Referências</Link></li>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Equipe'>Equipe</Link></li>
                </div>
            </header>


            <section className='flex items-center justify-around max-lg:h-2/4 lg:h-4/6'>
                <img className='max-lg: size-11 ml-3' src={esquerda} alt="" />
                <section className='max-lg:hidden mr-10 ml-10 bg-gradient-to-t from-very-dark-blue to-light-blue rounded-2xl flex items-center mt-6'>
                    <div className='my-2 mt-0.5'>
                        <h2 className='uppercase text-white text-xl ml-4 mt-2'>Bomba Peristáltica</h2>
                        <img className='size-64 flex itens-center ml-1 h-40 my-9' src={bomb} alt="" />
                        <p className='uppercase text-white ml-4 mb-2 '>R$69,90</p>
                    </div>
                </section>

                <section className='mx-5 bg-gradient-to-t from-very-dark-blue to-light-blue rounded-2xl flex mt-6'>
                    <div className='my-2 mt-0.5'>
                        <h2 className='uppercase text-white text-xl ml-4 mt-2'>Placa Arduino </h2>
                        <img className='size-64 ml-1 lg:h-40 max-lg:h-36 my-9' src={arduino} alt="" />
                        <p className='uppercase text-white ml-4 mb-2'>R$99,90</p>
                    </div>
                </section>

                <section className='max-lg:hidden mr-10 ml-10 bg-gradient-to-t from-very-dark-blue to-light-blue rounded-2xl flex items-center mt-6'>
                    <div className='my-2 mt-0.5'>
                        <h2 className='uppercase text-white text-xl ml-4 mt-2'>Sensor Ultrasônico</h2>
                        <img className='size-64 flex itens-center ml-1 h-40 my-9' src={sensor} alt="" />
                        <p className='uppercase text-white ml-4 mb-2'>R$9,90</p>
                    </div>
                </section>
                <img className='max-lg: size-11 mr-3' src={direita} alt="" />
            </section>

            <div className='flex justify-center bg-dark-red absolute inset-x-0 bottom-0'>
                <p className='text-lg font-super-ocean text-white'>SunTech</p>
                <p className='ml-2 text-base font-alata text-white'>©2024</p>
            </div>

        </main>
    )
}
