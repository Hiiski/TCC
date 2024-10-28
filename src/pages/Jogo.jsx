import { Link } from 'react-router-dom';
import Header2 from './Header2';
import red from '/solvermei.svg';

export function Jogo() {
    return (
        <main className='bg-sand text-dark-blue font-alata min-h-screen flex flex-col'>
            <header className='lg:hidden flex font-medium text-4xl px-8 list-none flex flex-col'>
            <Header2 />
                <img className='mt-4 size-12 justify-self-center place-self-center mt-16' src={red} alt="" />
                <h2 className='font-super-ocean text-3xl place-self-center mb-16 mt-4'>Jogo</h2>
            </header>

            <header className='flex justify-between items-center h-40 mx-12 max-lg:hidden'>
            <div className='flex mt-10'>
                <img className='size-16' src={red} alt="" />
                <h2 className='max-lg:text-xl font-super-ocean text-43 ml-4 gap-4 flex self-center'>Jogo</h2>
            </div>

            <div className='flex justify-end space-x-10 max-xl:text-xl list-none w-4/6 xl:text-2xl'>
                <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'>
                <Link to='/'>O projeto</Link>
                </li>
                <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'>
                <Link to='/Guia'>Guia</Link>
                </li>
                <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'>
                <Link to='/Pecas'>Peças</Link>
                </li>
                <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'>
                <Link to='/Referencias'>Referências</Link>
                </li>
                <li className='decoration-2 underline underline-offset-8 uppercase underline decoration-dark-red'>
                <Link to='/Jogo'>Jogo</Link>
                </li>
                <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'>
                <Link to='/Equipe'>Equipe</Link>
                </li>
            </div>
            </header>

            <section className='lg:flex items-center justify-center mt-16'>
                    <iframe className='xl:ml-10 rounded-3xl' width="980" height="600" src="https://www.youtube.com/embed/xdhxtL8wt5o?si=BWSV5fYViNR0ST-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>

            <div className='flex justify-center bg-dark-red mt-10 lg:absolute inset-x-0 bottom-0'>
                <p className='text-lg font-super-ocean text-white'>SunTech</p>
                <p className='ml-2 text-base font-alata text-white'>©2024</p>
            </div>
        </main>
    );
    }