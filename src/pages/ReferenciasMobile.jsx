import { Link } from 'react-router-dom'

import boy from '/menino.svg'
import red from '/solvermei.svg'
import MenuRed from '/menu_red.svg'

export function ReferenciasMobile() {
    return (
        <main className='text-dark-blue font-alata bg-sand max-lg:h-screen lg:h-full xl:h-screen  w-screen'>
            <header className='lg:hidden flex font-medium text-4xl px-8 list-none flex flex-col'>
                <img className='mt-6 place-self-end size-8' src={MenuRed} alt="" />

                <img className=' mt-4 size-12 justify-self-center place-self-center mt-16' src={red} alt="" />
                <h2 className='font-super-ocean text-2xl text-nowrap place-self-center mb-16 mt-4'>Referências Bibliográficas</h2>
            </header>

            <header className='flex justify-between items-center h-40 mx-12 max-lg:hidden'>
                <div className='flex'>
                    <img className='size-20' src={red} alt="" />
                    <h2 className='font-super-ocean text-4xl ml-4 gap-4 flex self-center'>Referências Bibliográficas</h2>
                </div>

                <div className='flex justify-around max-xl:text-xl list-none w-4/6 xl:text-3xl'>
                    <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/'>O projeto</Link></li>
                    <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Guia'>Guia</Link></li>
                    <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Peças'>Peças</Link></li>
                    <li className='underline underline-offset-8 uppercase underline hover:underline decoration-dark-red'><Link to='/Referencias'>Referências</Link></li>
                    <li className='underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Equipe'>Equipe</Link></li>
                </div>
            </header>

            <section className='mx-6 lg:text-2xl lg:mx-10 xl:text-4xl'>
                <div>
                    <p className='max-lg:text-sm text-justify indent-8 max-xl:lg:my-32 xl:my-20'>O câncer de pele, no Brasil, corresponde a 33% de todos os diagnósticos da doença, sendo a principal causa a exposição excessiva ao sol. Estudos exploram diferentes aspectos da exposição ao sol e do uso do protetor solar, tendo como resultado uma quantidade significativa de pessoas que fazem o uso incorreto do protetor solar; Não o utilizando pelo simples fato de esquecerem ou não saberem como funciona o uso e a ação da proteção solar.</p>
                </div>

                <div className='flex max-lg:flex-col text-balance '>
                    <img src={boy} alt="" className='lg:hidden size-40 place-self-center' />
                    <div className=''>
                        <h3 className='max-xl:text-2xl font-bold'>Artigos referenciais:</h3>
                        <p className='mt-2 break-all'>https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/21841</p>
                        <p className='my-4 break-all'>https://periodicos.puc-campinas.edu.br/cienciasmedicas/article/view/1050</p>
                        <p className='break-all'>https://sea.ufr.edu.br/index.php/SEA/article/view/1786</p>
                    </div>
                    <img src={boy} alt="" className='max-lg:hidden size-96 place-self-end' />
                </div>
            </section>

            <div className='flex justify-center bg-dark-red max-lg:absolute inset-x-0 bottom-0 xl:absolute inset-x-0 bottom-0'>
                <p className='text-lg font-super-ocean text-white'>SunTech</p>
                <p className='ml-1 text-base font-alata text-white'>© 2024</p>
            </div>
        </main>
    )
}
