import { useState } from 'react';
import { List } from '@phosphor-icons/react';
import Logo  from '/white-sun.svg'

export default function Header2() {
    const [abrirMenu, setAbrirMenu] = useState(false);

    const handleMenu = () => {
        setAbrirMenu(!abrirMenu);
    };

    return (
        <header className="relative w-full flex flex-col  md:flex-row items-center justify-between px-4 py-2 xl:mt-6 z-10 mt-10 mb-6">
            <button
                onClick={handleMenu}
                className="block md:hidden text-white absolute right-1 h-12 top-2"
            >
                <List size={32} className='text-dark-red'/>
            </button>
            <div className="relative">
                <nav className={`w-full md:w-auto ${abrirMenu ? "block" : "hidden"}  md:flex md:space-x-2.5 absolute`}>
                    <ul className="flex flex-col md:flex-row p-6 w-44 mt-10 rounded-lg bg-dark-blue text-sm lg:text-xl xl:text-2xl  md:items-center lg:mt-0 xl:ml-28">
                        <li>
                            <a href="/" className="block text-white py-2 px-4 xl:ml-0 text-right">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="/Guia" className="block text-white py-2 px-4 xl:ml-0 text-right">
                                GUIA
                            </a>
                        </li>
                        <li>
                            <a href="/Peças" className="block text-white py-2 px-4 xl:ml-0 text-right">
                                PEÇAS
                            </a>
                        </li>
                        <li>
                            <a href="/Equipe" className="block text-white py-2 px-4  xl:ml-0 text-right">
                                EQUIPE
                            </a>
                        </li>
                        <li>
                            <a href="/Referencias" className="block text-white py-2 px-4 xl:ml-0 text-right">
                                REFERÊNCIAS
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>




        </header>
    );
}
