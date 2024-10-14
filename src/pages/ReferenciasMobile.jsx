import { Link } from 'react-router-dom';
import boy from '/menino.svg';
import red from '/solvermei.svg';
import Header2 from './Header2';

export function ReferenciasMobile() {
    return (
        <main className='text-dark-blue font-alata bg-sand min-h-screen flex flex-col'>
            <header className='lg:hidden flex font-medium text-4xl px-8 list-none flex flex-col'>
                <Header2 />
                <img className='mt-4 size-12 justify-self-center place-self-center mt-16' src={red} alt="" />
                <h2 className='font-super-ocean text-2xl text-nowrap place-self-center mb-16 mt-4'>Referências Bibliográficas</h2>
            </header>

            <header className='flex justify-between items-center h-40 mx-12 max-lg:hidden'>
                <div className='flex mt-10'>
                    <img className='size-16' src={red} alt="" />
                    <h2 className='max-lg:text-xl font-super-ocean text-4xl ml-4 gap-4 flex self-center'>Referências Bibliográficas</h2>
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
                    <li className='decoration-2 underline underline-offset-8 uppercase underline decoration-dark-red'>
                        <Link to='/Referencias'>Referências</Link>
                    </li>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'>
                        <Link to='/Equipe'>Equipe</Link>
                    </li>
                </div>
            </header>

            <section className='mx-6 lg:mx-40 xl:text-3xl flex-grow'>
                <div>
                    <p className='max-lg:text-sm text-2xl text-justify indent-8 max-xl:lg:my-32 xl:my-20'>
                        O câncer de pele, no Brasil, corresponde a 33% de todos os diagnósticos da doença, sendo a principal causa a exposição excessiva ao sol. Estudos exploram diferentes aspectos da exposição ao sol e do uso do protetor solar, tendo como resultado uma quantidade significativa de pessoas que fazem o uso incorreto do protetor solar; Não o utilizando pelo simples fato de esquecerem ou não saberem como funciona o uso e a ação da proteção solar.
                    </p>
                </div>

                <div className='block max-lg:block text-balance'>
                    <div className='flex justify-center my-2'>
                        <img src={boy} alt="" className='lg:hidden max-lg:size-42' />
                    </div>
                    <div className='flex justify-around'>
                        <div className='max-xl:text-sm lg:text-2xl'>
                            <h3 className='max-xl:text-xl lg:text-2xl mb-6 font-bold'>Artigos referenciais:</h3>
                            <p className='break-words'>https://periodicos.puc-campinas.edu.br/cienciasmedicas/article/view/1050</p>
                            <p className='my-4 break-all'>https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/21841</p>
                            <p className='mb-5 break-words'>https://sea.ufr.edu.br/index.php/SEA/article/view/1786</p>
                        </div>
                        <img src={boy} alt="" className='max-lg:hidden size-80 object-right ' />
                    </div>
                </div>
            </section>

            {/* Rodapé separado da estrutura principal */}
            <div className='flex justify-center bg-dark-red mt-10 lg:absolute inset-x-0 bottom-0'>
                <p className='text-lg font-super-ocean text-white'>SunTech</p>
                <p className='ml-2 text-base font-alata text-white'>©2024</p>
            </div>
        </main>
    );
}
