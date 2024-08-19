import { Link } from 'react-router-dom'

import red from '/solvermei.svg'
import insta from '/instagram-icon.svg'
import Fernanda from '/fernanda.png'
import Thyago from '/thyago.png'
import Henrique from '/henrique.png'
import MenuRed from '/menu_red.svg'

export function EquipeMobile() {
    return (
        <main className='font-alata text-dark-blue bg-sand max-lg:h-full lg:h-screen'>
            <header className='flex font-medium text-4xl px-8 list-none flex flex-col lg:hidden'>
                <img className='mt-6 place-self-end size-8' src={MenuRed} alt="" />

                <img className=' mt-4 size-12 justify-self-center place-self-center mt-16' src={red} alt="" />
                <h2 className='font-super-ocean text-3xl text-nowrap place-self-center mb-16 mt-4'>Equipe SunTech</h2>
            </header>

            <header className='flex justify-between items-center h-40 mx-12 max-lg:hidden'>
                <div className='flex'>
                    <img className='size-20' src={red} alt="" />
                    <div className='font-super-ocean text-5xl ml-4 gap-4 flex self-center'>
                        <h2>Equipe</h2>
                        <h2 className='text-dark-red'>Suntech</h2>
                    </div>
                </div>

                <div className='flex justify-around max-xl:text-xl w-3/6 list-none xl:w-4/6 xl:text-3xl'>
                    <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/'>O projeto</Link></li>
                    <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Guia'>Guia</Link></li>
                    <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Peças'>Peças</Link></li>
                    <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Referencias'>Referências</Link></li>
                    <li className='underline underline-offset-8 uppercase underline hover:underline decoration-dark-red'><Link to='/Equipe'>Equipe</Link></li>
                </div>
            </header>

            <section>
                <div className='flex max-lg:flex-col max-lg:items-center max-lg:space-y-10 lg:justify-around h-full'>
                    <div className='text-3xl text-center lg:my-20'>
                        <img className='lg:h-80' src={Fernanda} alt="" />
                        <h3 className='font-bold mb-2'>Fernanda Leite</h3>
                        <h3 className='mb-2'>31A T.I.</h3>
                        <div className="flex justify-center">
                            <img className='h-10' src={insta} alt="" />
                            <p className='ml-1'>@fefeleit_</p>
                        </div>
                    </div>

                    <div className='text-3xl text-center my-20'>
                        <img className='lg:h-80 mb-2' src={Thyago} alt="" />
                        <h3 className='font-bold mb-2'>Thyago Albino</h3>
                        <h3>31A T.I.</h3>
                        <div className="flex justify-center">
                            <img className='h-10' src={insta} alt="" />
                            <p className='ml-1'>@othyaguinh</p>
                        </div>
                    </div>

                    <div className='text-3xl text-center my-20'>
                        <img className='lg:h-80 mb-2' src={Henrique} alt="" />
                        <h3 className='font-bold mb-2'>Henrique Soares</h3>
                        <h3>31A T.I.</h3>
                        <div className="flex justify-center">
                            <img className='h-10' src={insta} alt="" />
                            <p className='ml-1'>@hiiskikkj</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex justify-center bg-dark-red mt-10 lg:absolute inset-x-0 bottom-0'>
                <p className='text-lg font-super-ocean text-white'>SunTech</p>
                <p className='ml-2 text-base font-alata text-white'>©2024</p>
            </div>
        </main>
    )
}
