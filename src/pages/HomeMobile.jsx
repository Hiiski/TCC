import { Link } from 'react-router-dom'
import React from 'react'
import Sol from '/white-sun.svg'
import IconPerson from '/person-icon.svg'
import Lampada from '/idea-icon.svg'
import Alvo from '/alvo-icon.svg'
import SetaBaixo from '/seta-baixo.svg'
import Menu from '/menu.png'
import Menino2 from '/menino2.svg'
import Sombrinha from '/guarda-sol.png'
import Sombra from '/guarda-sol2.png'
import MeninoSand from '/menino-sand.png'
import Header from './Header'

export function HomeMobile() {
    
    // Função para scroll suave até a próxima seção
    const scrollToSection = () => {
        const targetSection = document.getElementById('scrollTarget'); // Elemento de destino
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className='font-alata bg-sand'>
            <header className='md:hidden bg-beach bg-cover bg-center bg-no-repeat'>
                <div>
                    <div className='flex flex-col items-center'>
                        <Header />
                        <div className='flex flex-col items-center text-white'>
                            <h1 className='font-super-ocean text-6xl mt-9'>SunTech</h1>
                            <p className='drop-shadow-4xl text-xs mb-40'>Cuidar da pele e aproveitar o sol nunca foi tão fácil.</p>
                            
                           
                        </div>                        
                    </div>
                </div>
            </header>

            <header className='max-md:hidden bg-beach bg-fixed bg-cover bg-center'>
                <div className='h-screen flex flex-col'>
                    <div className='flex-grow mt-10 flex uppercase list-none text-white justify-around justify-center items-center text-xl font-bold mx-5'>
                        <img className='size-20 my-5' src={Sol} alt="" />
                        <Link to='/'>O projeto</Link>
                        <Link to='/Guia'>Guia</Link>
                        <Link to='/Pecas'>Peças</Link>
                        <Link to='/Referencias'>Referências</Link>
                        <Link to='/Equipe'>Equipe</Link>
                    </div>

                    <div className='flex justify-center h-full flex-col items-center text-white mt-40'>
                        <h1 className='font-super-ocean text-9xl'>SunTech</h1>
                        <p className='drop-shadow-4xl text-3xl'>Cuidar da pele e aproveitar o sol nunca foi tão fácil.</p>
                        
                        {/* Botão da seta que desce o scroll */}
                        
                    </div>
                </div>
            </header>

            {/* Seção de destino para o scroll */}
            <div id="scrollTarget" className='flex items-center flex-col justify-center lg:mx-20 xl:mx-96 '>
                <h2 className='font-super-ocean text-quarenta my-8 text-dark-blue md:my-20 text-5xl'>O Projeto</h2>
                <p className='text-dark-blue text-justify text-base justify-left indent-10 text-pretty max-md:px-10 md:text-3xl px-3'>
                    Apresentamos o SunTech, um projeto inovador que combina proteção solar inteligente com praticidade.
                </p> 
                <p className='text-dark-blue text-justify text-base justify-left indent-10 text-pretty mb-12 max-md:px-10 md:text-3xl px-3'>
                    Monitorando os raios UV e alertando quando é hora de reaplicar o protetor solar recomendando o FPS adequado, ele faz com que o usuário tenha uma experiência personalizada de utilização. Além disso, possui um sistema de dispensação precisa de protetor solar e funciona como uma necessaire para seus itens de praia.
                </p>
            </div>

            <section className='text-white'>
                <div className='flex justify-center h-28 md:hidden'>
                    <img className='md:hidden' src={Menino2} alt="" />
                </div>
                
                <div className='md:mb-20 flex justify-start'>
                    <img className='h-80 max-md:hidden' src={Sombra} alt="" />
                    <section className='flex mb-10 items-center bg-dark-blue justify-end rounded-l-full bg-opacity-57 text-right text-pretty ml-5 max-md:mt-12 md:ml-auto max-w-4xl mt-52 py-5'>
                        <img src={Alvo} alt="" className='h-14 ml-8' />
                        <p className='mx-5 my-3 text-sm indent-10 md:text-2xl'>
                            Nosso objetivo é assegurar que todos possam desfrutar do sol com segurança e conforto, promovendo o aproveitamento responsável do sol. Ao unir praticidade e tecnologia, buscamos satisfazer as necessidades da população e turistas do litoral.
                        </p>
                    </section>
                </div>

                <div className='md:mb-10 flex justify-end'>
                    <section className='mr-6 flex items-center bg-dark-blue justify-start rounded-r-full bg-opacity-57 text-left text-pretty mr-2 md:mr-auto max-w-4xl mb-10 py-5'>
                        <p className='mx-5 my-3 text-sm indent-10 md:text-2xl'>
                            Destinado a todos os amantes da praia que buscam praticidade e tecnologia integrada em seu dia a dia. Nosso público-alvo é diverso e abrange desde jovens que praticam atividades ao ar livre até famílias que desfrutam de momentos de lazer à beira-mar.
                        </p>
                        <img src={IconPerson} alt="" className='h-16 mr-10 ' />
                    </section>
                    <img className='h-48 max-md:hidden md:mr-20 mb-5' src={MeninoSand} alt="" />
                </div>

                <div className='flex mb-5 justify-end h-40 md:hidden'>
                    <img className='md:hidden' src={Sombrinha} alt="" />
                </div>

                <section className='flex items-center bg-dark-blue justify-start bg-opacity-57 text-left text-pretty max-md:rounded-r-full max-md:mr-6 md:ml-auto md:text-right max-w-5xl md:rounded-l-full md:mb-16 md:py-5'>
                    <img src={Lampada} alt="" className='h-16 ml-20 max-md:hidden' />
                    <p className='mx-5 my-3 text-sm indent-10 md:text-2xl'>
                        O diferencial do SunTech é a combinação de praticidade, tecnologia e proteção solar, oferecendo uma solução completa em comparação a outros produtos que podem oferecer apenas uma parte desses elementos.
                    </p>
                    <img src={Lampada} alt="" className='h-12 mr-8 md:hidden' />
                </section>
            </section>

            
        </main>
    )
}


























































































































































// import { Link } from 'react-router-dom'

// import React from 'react'
// import Sol from '/white-sun.svg'
// import IconPerson from '/person-icon.svg'
// import Lampada from '/idea-icon.svg'
// import Alvo from '/alvo-icon.svg'
// import SetaBaixo from '/seta-baixo.svg'
// import Menu from '/menu.png'
// import Menino2 from '/menino2.svg'
// import Sombrinha from '/guarda-sol.png'
// import Sombra from '/guarda-sol2.png'
// import MeninoSand from '/menino-sand.png'
// import Header from './Header'

// export function HomeMobile() {
//     return (
//         <main className='font-alata bg-sand'>
//             <header className='md:hidden bg-beach bg-cover bg-center bg-no-repeat'>
//                 <div>
//                     <div className='flex flex-col items-center'>
//                         <Header></Header>
//                         <div className='flex flex-col items-center text-white'>
//                             <h1 className='font-super-ocean text-6xl mt-9'>SunTech</h1>
//                             <p className='drop-shadow-4xl text-xs mb-40'>Cuidar da pele e aproveitar o sol nunca foi tão fácil.</p>
//                             <img className='md:hidden size-12 mb-5  ' src={SetaBaixo} alt="seta para baixo" />
//                         </div>                        
//                     </div>
//                 </div>
//             </header>

//             <header className='max-md:hidden bg-beach bg-fixed bg-cover bg-center'>
//                 <div className='h-screen flex flex-col'>
//                     <div className='flex-grow mt-10 flex uppercase list-none text-white justify-around justify-center items-center text-xl font-bold mx-5'>
//                         <img className='size-20 my-5' src={Sol} alt="" />
//                         <Link to='/'>O projeto</Link>
//                         <Link to='/Guia'>Guia</Link>
//                         <Link to='/Pecas'>Peças</Link>
//                         <Link to='/Referencias'>Referências</Link>
//                         <Link to='/Equipe'>Equipe</Link>
//                     </div>

//                     <div className='flex justify-center h-full flex-col items-center text-white mt-40'>
//                         <h1 className='font-super-ocean text-9xl'>SunTech</h1>
//                         <p className='drop-shadow-4xl text-3xl'>Cuidar da pele e aproveitar o sol nunca foi tão fácil.</p>
//                         <img className='size-16 mt-80' src={SetaBaixo} alt="seta para baixo" />
//                     </div>
//                 </div>
//             </header>

//             <div className='flex items-center flex-col justify-center lg:mx-20 xl:mx-96'>
//                 <h2 className='font-super-ocean text-quarenta my-8 text-dark-blue md:my-20 text-5xl'>O Projeto</h2>
//                 <p className='text-dark-blue text-justify text-base justify-left indent-10 text-pretty max-md:px-10 md:text-3xl px-3'>Apresentamos o SunTech, um projeto inovador que combina proteção solar inteligente com praticidade. </p> 
//                 <p className='text-dark-blue text-justify text-base justify-left indent-10 text-pretty mb-12 max-md:px-10 md:text-3xl px-3'>Monitorando os raios UV e alertando quando é hora de reaplicar o protetor solar recomendando o FPS adequado, ele faz com que o usuário tenha uma experiência personalizada de utilização. Além disso, possui um sistema de dispensação precisa de protetor solar e funciona como uma necessaire para seus itens de praia.</p>
//             </div>

//             <section className='text-white'>
//                 <div className='flex justify-center h-28 md:hidden'>
//                     <img className='md:hidden' src={Menino2} alt="" />
//                 </div>
                
//                 <div className='md:mb-20 flex justify-start'>
//                     <img className='h-80 max-md:hidden' src={Sombra} alt="" />
//                     <section className='flex mb-10 items-center bg-dark-blue justify-end rounded-l-full bg-opacity-57 text-right text-pretty ml-5 max-md:mt-12 md:ml-auto  max-w-4xl mt-52 py-5'>
//                         <img src={Alvo} alt="" className='h-14 ml-8' />
//                         <p className='mx-5 my-3 text-sm indent-10 md:text-2xl'>Nosso objetivo é assegurar que todos possam desfrutar do sol com segurança e conforto, promovendo o aproveitamento responsável do sol. Ao unir praticidade e tecnologia, buscamos satisfazer as necessidades da população e turistas do litoral.</p>
//                     </section>
//                 </div>

//                 <div className='md:mb-10 flex justify-end'>
//                     <section className='mr-6 flex items-center bg-dark-blue justify-start rounded-r-full bg-opacity-57 text-left text-pretty mr-2 md:mr-auto max-w-4xl mb-10 py-5'>
//                         <p className='mx-5 my-3 text-sm indent-10 md:text-2xl'>Destinado a todos os amantes da praia que buscam praticidade e tecnologia integrada em seu dia a dia. Nosso público-alvo é diverso e abrange desde jovens que praticam atividades ao ar livre até famílias que desfrutam de momentos de lazer à beira-mar.</p>
//                         <img src={IconPerson} alt="" className='h-16 mr-10 ' />
//                     </section>
//                     <img className='h-48 max-md:hidden md:mr-20 mb-5' src={MeninoSand} alt="" />
//                 </div>

//                 <div className='flex mb-5 justify-end h-40 md:hidden'>
//                     <img className='md:hidden' src={Sombrinha} alt="" />
//                 </div>

//                 <section className='flex items-center bg-dark-blue justify-start bg-opacity-57 text-left text-pretty max-md:rounded-r-full max-md:mr-6 md:ml-auto md:text-right max-w-5xl md:rounded-l-full md:mb-16 md:py-5'>
//                     <img src={Lampada} alt="" className='h-16 ml-20 max-md:hidden' />
//                     <p className='mx-5 my-3 text-sm indent-10 md:text-2xl'>O diferencial do SunTech é a combinação de praticidade, tecnologia e proteção solar, oferecendo uma solução completa em comparação a outros produtos que podem oferecer apenas uma parte desses elementos.</p>
//                     <img src={Lampada} alt="" className='h-12 mr-8 md:hidden' />
//                 </section>
//             </section>

//             <div className='flex justify-center bg-dark-red mt-8'>
//                 <p className='text-lg font-super-ocean text-white'>SunTech</p>
//                 <p className='ml-1 text-base font-alata text-white'>© 2024</p>
//             </div>
//         </main>
//     )
// }
