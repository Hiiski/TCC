import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import MenuRed from '/menu_red.svg';
import Header2 from './Header2';
import red from '/solvermei.svg';
import duino from '/arduino.png';
import esquerda from '/seta-esq.svg';
import direita from '/seta-dir.svg';
import blue from '/bluetooth.png';
import bomb from '/bomba.png';
import dis from '/display.png';
import rel from '/rele.png';
import sensum from '/sensori.png';
import sensois from '/sensorUV.png';

// Lista de imagens para o carrossel
const images = [
    duino,
    blue,
    bomb,
    dis,
    rel,
    sensum,
    sensois
];

const Carousel = ({ atual }) => {
    return (
        <div className='flex items-center h-3/4 w-full max-w-sm rounded-3xl px-4 md:px-8'>
            <div className="relative w-full max-w-5xl mx-auto">
                <div className="relative overflow-hidden h-full">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${atual * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="flex-shrink-0 w-full h-full flex justify-center items-center">
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="w-72 max-w-full rounded-2xl bg-transparent"
                                    style={{ backgroundColor: 'transparent' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Componente Principal
export function PeçasMobile() {
    const [atual, setAtual] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAtual((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const slideAnterior = () => {
        setAtual((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const proximoSlide = () => {
        setAtual((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <main className='font-alata text-dark-blue bg-sand h-screen'>
            <header className='flex font-medium text-4xl px-8 list-none flex flex-col lg:hidden'>
            <Header2></Header2>

                <img className=' mt-4 size-12 justify-self-center place-self-center mt-16' src={red} alt="" />
                <h2 className='font-super-ocean text-3xl text-nowrap place-self-center mb-16 mt-4'>Peças Utilizadas</h2>
            </header>

            <header className='flex justify-between items-center h-40 mx-12 max-lg:hidden'>
                <div className='flex mt-10'>
                    <img className='size-16' src={red} alt="" />
                    <div className='max-lg:text-xl font-super-ocean text-43 ml-4 gap-4 flex self-center'>
                        <h2 className=''>Peças Utilizadas</h2>
                        
                    </div>
                </div>

                <div className='flex justify-end space-x-10 max-xl:text-xl list-none w-4/6 xl:text-2xl '>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/'>O projeto</Link></li>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Guia'>Guia</Link></li>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Peças'>Peças</Link></li>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline hover:decoration-dark-red'><Link to='/Referencias'>Referências</Link></li>
                    <li className='decoration-2 underline underline-offset-8 uppercase underline decoration-dark-red'><Link to='/Equipe'>Equipe</Link></li>
                </div>
            </header>

            <section className='flex items-center justify-around max-lg:h-2/4 lg:h-4/6 h-screen'>
                <img className='w-10 ml-3 cursor-pointer' src={esquerda} alt="Seta esquerda" onClick={slideAnterior} />
                <Carousel atual={atual} />
                <img className='w-10 mr-3 cursor-pointer' src={direita} alt="Seta direita" onClick={proximoSlide} />
            </section>

            <div className='flex justify-center bg-dark-red max-sm:absolute inset-x-0 bottom-0 xl:absolute inset-x-0 bottom-0'>
                <p className='text-lg font-super-ocean text-white'>SunTech</p>
                <p className='ml-2 text-base font-alata text-white'>©2024</p>
            </div>
        </main>
    );
}
